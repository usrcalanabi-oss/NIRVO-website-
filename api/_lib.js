const crypto=require("node:crypto");const {put,list,get}=require("@vercel/blob");
const json=(res,status,data)=>{res.statusCode=status;res.setHeader("Content-Type","application/json; charset=utf-8");res.setHeader("Cache-Control","no-store");res.end(JSON.stringify(data))};
const safeEqual=(a,b)=>{const x=Buffer.from(String(a||"")),y=Buffer.from(String(b||""));return x.length===y.length&&crypto.timingSafeEqual(x,y)};
const sign=v=>crypto.createHmac("sha256",process.env.NIRVO_SESSION_SECRET).update(v).digest("base64url");
const sessionToken=()=>{const p=Buffer.from(JSON.stringify({exp:Date.now()+43200000,role:"admin"})).toString("base64url");return p+"."+sign(p)};
function isAdmin(req){if(!process.env.NIRVO_SESSION_SECRET||!process.env.NIRVO_ADMIN_PASSWORD)return false;const c=(req.headers.cookie||"").split(";").map(x=>x.trim()).find(x=>x.startsWith("nirvo_admin="));if(!c)return false;const a=c.slice(11).split(".");if(a.length!==2||!safeEqual(a[1],sign(a[0])))return false;try{const p=JSON.parse(Buffer.from(a[0],"base64url").toString());return p.role==="admin"&&p.exp>Date.now()}catch{return false}}
function requireAdmin(req,res){if(!isAdmin(req)){json(res,401,{error:"Please sign in to the NIRVO admin dashboard."});return false}return true}
async function saveRecord(r){const pathname="submissions/"+r.id+".json";await put(pathname,JSON.stringify(r),{access:"private",contentType:"application/json",addRandomSuffix:false,allowOverwrite:true});return pathname}
async function readRecord(pathname){const b=await get(pathname,{access:"private"});if(!b)return null;return JSON.parse(await new Response(b.stream).text())}
module.exports={json,safeEqual,sessionToken,isAdmin,requireAdmin,saveRecord,readRecord,list,get,put};