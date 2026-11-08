const {json,safeEqual,sessionToken}=require("./_lib");
module.exports=async function(req,res){
 if(req.method!=="POST")return json(res,405,{error:"Method not allowed"});
 if(!process.env.NIRVO_ADMIN_PASSWORD||!process.env.NIRVO_SESSION_SECRET)return json(res,503,{error:"Admin login is not configured. Add NIRVO_ADMIN_PASSWORD and NIRVO_SESSION_SECRET in Vercel settings."});
 const ip=(req.headers["x-forwarded-for"]||"").split(",")[0].trim()||"unknown",now=Date.now();
 global.__nirvoLoginAttempts=global.__nirvoLoginAttempts||new Map();
 const attempt=global.__nirvoLoginAttempts.get(ip)||{count:0,until:0};
 if(attempt.until>now&&attempt.count>=6)return json(res,429,{error:"Too many login attempts. Please wait 10 minutes."});
 const password=String(req.body?.password||"");
 if(!safeEqual(password,process.env.NIRVO_ADMIN_PASSWORD)){
  attempt.count++;attempt.until=now+600000;global.__nirvoLoginAttempts.set(ip,attempt);
  return json(res,401,{error:"Incorrect password."});
 }
 global.__nirvoLoginAttempts.delete(ip);
 res.setHeader("Set-Cookie","nirvo_admin="+sessionToken()+"; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=43200");
 return json(res,200,{ok:true});
};