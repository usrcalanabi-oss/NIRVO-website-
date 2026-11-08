const Busboy=require("busboy"),crypto=require("node:crypto");
const {json,put,saveRecord}=require("./_lib");
const LIMIT=1200*1024;
const required={
 listing:["product-name","category","asking-price","condition","seller-name","seller-phone","seller-email","seller-location","product-description"],
 project:["project-name","project-category","project-owner","project-phone","project-email","project-location","project-description"],
 order:["customer-name","customer-email","customer-phone","delivery-location","order-items","order-total"],
 enquiry:["name","email","interest","message"]
};
const emailOk=s=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s||"");
const emailFor=(type,data)=>type==="listing"?data["seller-email"]:type==="project"?data["project-email"]:type==="order"?data["customer-email"]:data.email;
const personFor=(type,data)=>type==="listing"?data["seller-name"]:type==="project"?data["project-owner"]:type==="order"?data["customer-name"]:data.name;
async function sendMail(to,subject,text){
 if(!process.env.RESEND_API_KEY||!process.env.RESEND_FROM_EMAIL||!to)return false;
 try{
  const r=await fetch("https://api.resend.com/emails",{method:"POST",headers:{"Authorization":"Bearer "+process.env.RESEND_API_KEY,"Content-Type":"application/json"},body:JSON.stringify({from:process.env.RESEND_FROM_EMAIL,to:[to],subject,text})});
  return r.ok;
 }catch{return false}
}
module.exports=async function(req,res){
 if(req.method!=="POST")return json(res,405,{error:"Method not allowed"});
 if(!process.env.BLOB_READ_WRITE_TOKEN)return json(res,503,{error:"NIRVO submissions are not connected yet. Please contact us on WhatsApp."});
 const ip=(req.headers["x-forwarded-for"]||"").split(",")[0].trim()||"unknown",now=Date.now();
 global.__nirvoRate=global.__nirvoRate||new Map();const prev=global.__nirvoRate.get(ip)||0;
 if(now-prev<10000)return json(res,429,{error:"Please wait before sending another submission."});global.__nirvoRate.set(ip,now);
 let fields={},files=[],fileError=null,bb;
 try{bb=Busboy({headers:req.headers,limits:{files:3,fileSize:LIMIT,fields:40,fieldSize:12000}})}catch{return json(res,400,{error:"Invalid form submission."})}
 bb.on("field",(n,v)=>{fields[n]=String(v).slice(0,12000)});
 bb.on("file",(name,stream,info)=>{const chunks=[];let size=0,tooLarge=false;stream.on("data",c=>{size+=c.length;if(size>LIMIT)tooLarge=true;else chunks.push(c)});stream.on("limit",()=>{tooLarge=true;fileError="Each photo must be 1.2 MB or smaller."});stream.on("end",()=>{if(tooLarge){fileError="Each photo must be 1.2 MB or smaller.";return}files.push({field:name,name:info.filename,type:info.mimeType,size,buffer:Buffer.concat(chunks)})})});
 bb.on("filesLimit",()=>fileError="A maximum of three photos is allowed.");
 bb.on("error",()=>fileError="Could not read the form.");
 bb.on("finish",async()=>{
  try{
   if(fileError)return json(res,400,{error:fileError});
   const type=String(fields.type||"");if(!required[type])return json(res,400,{error:"Unknown submission type."});
   if(String(fields.website||"").trim())return json(res,200,{ok:true});
   for(const k of required[type])if(!String(fields[k]||"").trim())return json(res,400,{error:"Please complete all required fields."});
   const email=emailFor(type,fields);if(!emailOk(email))return json(res,400,{error:"Please enter a valid email address."});
   if((type==="listing"||type==="project")&&files.length!==3)return json(res,400,{error:"Please upload all three required photos."});
   if(type!=="listing"&&type!=="project"&&files.length)return json(res,400,{error:"Unexpected file upload."});
   if(files.some(f=>!["image/jpeg","image/png","image/webp"].includes(f.type)))return json(res,400,{error:"Only JPG, PNG and WEBP images are accepted."});
   if(files.reduce((n,f)=>n+f.size,0)>3600*1024)return json(res,400,{error:"Please keep the combined photo size under 3.6 MB."});
   const id=crypto.randomUUID(),createdAt=new Date().toISOString(),attachments=[];
   for(let i=0;i<files.length;i++){const f=files[i],ext=f.type==="image/jpeg"?"jpg":f.type==="image/png"?"png":"webp",pathname="uploads/"+id+"/"+(i+1)+"-"+ext;const b=await put(pathname,f.buffer,{access:"private",contentType:f.type,addRandomSuffix:false});attachments.push({name:f.name,type:f.type,size:f.size,pathname:b.pathname})}
   const data={};for(const [k,v] of Object.entries(fields))if(!["type","website"].includes(k))data[k]=String(v).slice(0,12000);
   const record={id,type,createdAt,status:"new",data,attachments};await saveRecord(record);
   const summary=Object.entries(data).map(([k,v])=>k+": "+v).join("\n");
   const ref=id.slice(0,8).toUpperCase();
   const adminSent=await sendMail("usrcalanabi@gmail.com","NIRVO "+type.toUpperCase()+" · "+ref,"A new NIRVO website submission was received.\n\nReference: "+id+"\nType: "+type+"\n\n"+summary+"\n\nReview it in the private NIRVO Control Room.");
   const customerSent=await sendMail(email,"We received your message · NIRVO","Hello "+personFor(type,data)+",\n\nThank you for contacting NIRVO. Your "+type+" submission has been received and is waiting for review.\n\nReference: "+ref+"\n\nOur team will contact you after reviewing the details. This is not an order confirmation or payment receipt.\n\nNIRVO · Create. Build. Solve.");
   return json(res,201,{ok:true,id,stored:true,adminEmailSent:adminSent,customerEmailSent:customerSent,message:"Your submission has been securely saved. Reference: "+ref,notificationNote:adminSent&&customerSent?"Email confirmation sent and NIRVO notified.":adminSent?"NIRVO has been notified by email. A customer confirmation email could not be sent.":customerSent?"A confirmation email was sent. NIRVO will review the submission in Control Room.":"Saved in NIRVO Control Room. Email alerts are not configured yet."});
  }catch(e){return json(res,500,{error:"We could not save your submission. Please retry or contact NIRVO."})}
 });
 req.pipe(bb);
};
module.exports.config={api:{bodyParser:false}};
