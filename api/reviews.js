const {json,list,readRecord}=require("./_lib");
module.exports=async function(req,res){
 if(req.method!=="GET")return json(res,405,{error:"Method not allowed"});
 const productId=String(req.query?.productId||"");
 if(!/^[0-9]{2}$/.test(productId))return json(res,400,{error:"Invalid product reference."});
 try{
  const found=await list({prefix:"submissions/",limit:1000});
  const reviews=[];
  for(const blob of found.blobs||[]){
   try{
    const record=await readRecord(blob.pathname);
    if(!record||record.type!=="review"||record.status!=="approved"||record.data?.["product-id"]!==productId)continue;
    const d=record.data;
    reviews.push({id:record.id,createdAt:record.createdAt,name:d["reviewer-name"],rating:Number(d.rating),title:d["review-title"],text:d["review-text"]});
   }catch(_){}
  }
  reviews.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
  const average=reviews.length?Math.round(reviews.reduce((sum,r)=>sum+r.rating,0)/reviews.length*10)/10:0;
  return json(res,200,{reviews,average,count:reviews.length});
 }catch(_){return json(res,500,{error:"Reviews are temporarily unavailable."})}
};