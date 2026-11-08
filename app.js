const products=[
["Nirvo AI Station","AI & Computing","Local AI workstation for private inference and development. 8-core CPU, 32GB RAM, 1TB NVMe, optional accelerator.","₹85,000 onwards","₹85,000", "01","photo-1593640408182-31c70c8268f5"],
["Nirvo PrivateVault","AI & Computing","Private 4-bay NAS with RAID options, encrypted storage, 2.5GbE and automated backups.","₹35,000 onwards","₹35,000","02","photo-1558494949-ef010cbdcc31"],
["Nirvo EdgeCore X","AI & Computing","Fanless edge computer with industrial I/O, dual Ethernet, RS485, CAN and DIN-rail mounting.","₹30,000 onwards","₹30,000","03","photo-1518770660439-4636190af475"],
["Nirvo ServerCube","AI & Computing","Compact business server with 6–8 core CPU, 32–64GB RAM and flexible storage.","₹95,000 onwards","₹95,000","04","photo-1558494949-ef010cbdcc31"],
["Nirvo Rover X1","Robotics","Modular inspection rover concept with four-wheel drive, camera, LiDAR-ready platform and sensor suite.","₹75,000 onwards","₹75,000","05","photo-1485827404703-89b55fcc595e"],
["Nirvo RoboArm 6","Robotics","Six-axis desktop robotic arm concept with encoder feedback, gripper and emergency stop.","₹45,000 onwards","₹45,000","06","photo-1581092160562-40aa08e78837"],
["Nirvo StockBot","Robotics","Indoor autonomous material transport platform with obstacle sensing and docking concept.","₹1,40,000 onwards","₹1,40,000","07","photo-1581092580497-e0d23cbdf1dc"],
["Nirvo FarmPilot","Robotics","Agricultural rover concept with crop camera, soil sensing, GPS and modular field attachments.","₹60,000 onwards","₹60,000","08","photo-1500382017468-9049fed747ef"],
["Nirvo IndustrialLink","Industrial IoT","Industrial gateway with Ethernet, optional Wi-Fi/4G, RS485, CAN, Modbus and MQTT.","₹16,000 onwards","₹16,000","09","photo-1518770660439-4636190af475"],
["Nirvo MachineGuard","Industrial IoT","Vibration and temperature monitoring node with edge alerts and machine-health dashboard.","₹9,000 onwards","₹9,000","10","photo-1581092921461-eab62e97a780"],
["Nirvo AquaGuard","Industrial IoT","Water monitoring platform with pH, turbidity, conductivity and temperature sensor options.","₹22,000 onwards","₹22,000","11","photo-1530053969600-caed2596d242"],
["Nirvo EnergyIQ","Industrial IoT","Three-phase energy monitoring with voltage, current, power factor and reporting.","₹12,000 onwards","₹12,000","12","photo-1473341304170-971dccb5ac1e"],
["Nirvo SecureBox","Networking","Business firewall appliance concept with multi-port Ethernet, secure boot, VPN and threat monitoring.","₹25,000 onwards","₹25,000","13","photo-1558494949-ef010cbdcc31"],
["Nirvo NetCore 24","Networking","Managed 24-port Gigabit switch concept with VLAN, QoS and optional PoE+ configuration.","₹22,000 onwards","₹22,000","14","photo-1544197150-b99a580bb7a8"],
["Nirvo WiFiMesh Pro","Networking","Business Wi-Fi 6-class access point concept with PoE and central management.","₹10,000 onwards","₹10,000","15","photo-2020310498247-7c2e1f2b8a6b"],
["Nirvo PowerShield","Smart Systems","UPS and battery monitoring controller with temperature, load and runtime insights.","₹20,000 onwards","₹20,000","16","photo-1473341304170-971dccb5ac1e"],
["Nirvo VisionAI","Smart Systems","Edge AI camera concept with local analytics, night vision and privacy-first storage.","₹15,000 onwards","₹15,000","17","photo-1526738549149-8e07eca6c147"],
["Nirvo SmartPanel","Smart Systems","15–21 inch interactive information display with embedded computer and signage software.","₹30,000 onwards","₹30,000","18","photo-1558008258-3256797b43f3"],
["Nirvo RoomSense","Smart Systems","Indoor air-quality monitor for CO₂, PM2.5, temperature, humidity and occupancy insights.","₹8,000 onwards","₹8,000","19","photo-1497366754035-f200968a6e72"],
["Nirvo SolarPilot","Smart Systems","Solar generation monitoring interface with energy logging, inverter integration and alerts.","₹15,000 onwards","₹15,000","20","photo-1509391366360-2e959784a276"],
["Nirvo NeuralBox Mini","AI & Computing","Compact local AI development system for small teams, with configurable memory, NVMe storage and accelerator options.","₹42,000 onwards","₹42,000","21","photo-1593640408182-31c70c8268f5"],
["Nirvo VisionEdge","AI & Computing","Edge inference module for camera analytics, object detection and local automation workflows.","₹28,000 onwards","₹28,000","22","photo-1526738549149-8e07eca6c147"],
["Nirvo LabNode","AI & Computing","Developer mini server for coding labs, container workloads and private test environments.","₹24,000 onwards","₹24,000","23","photo-1558494949-ef010cbdcc31"],
["Nirvo Scout Mini","Robotics","Small indoor rover platform for education, mapping experiments and sensor integration.","₹18,000 onwards","₹18,000","24","photo-1485827404703-89b55fcc595e"],
["Nirvo DockMate","Robotics","Smart docking and battery management station concept for compatible mobile robots.","₹16,000 onwards","₹16,000","25","photo-1581092160562-40aa08e78837"],
["Nirvo ServoCore","Robotics","Modular motion controller with encoder inputs, protected motor outputs and programmable profiles.","₹12,000 onwards","₹12,000","26","photo-1581092580497-e0d23cbdf1dc"],
["Nirvo SensorBridge","Industrial IoT","Multi-protocol sensor interface for Modbus, 4–20 mA, digital inputs and remote telemetry.","₹11,000 onwards","₹11,000","27","photo-1518770660439-4636190af475"],
["Nirvo ColdWatch","Industrial IoT","Temperature and humidity monitoring for cold rooms, storage spaces and equipment enclosures.","₹7,500 onwards","₹7,500","28","photo-1530053969600-caed2596d242"],
["Nirvo GridPulse","Industrial IoT","Power-quality monitor concept for voltage events, frequency, load trends and alerts.","₹19,000 onwards","₹19,000","29","photo-1473341304170-971dccb5ac1e"],
["Nirvo GateSecure","Networking","Compact access-control gateway concept with network segmentation and secure remote administration.","₹18,000 onwards","₹18,000","30","photo-1558494949-ef010cbdcc31"],
["Nirvo AirSense Pro","Smart Systems","Indoor environmental station with CO₂, particulate, VOC, noise and dashboard options.","₹13,000 onwards","₹13,000","31","photo-1497366754035-f200968a6e72"],
["Nirvo WaterFlow","Smart Systems","Water usage monitor concept with flow sensing, leak alerts and consumption history.","₹6,500 onwards","₹6,500","32","photo-1530053969600-caed2596d242"]
];
const photo=(id)=>id.startsWith("photo-")&&!["photo- rack","photo- routers"].includes(id)?'https://images.unsplash.com/'+id+'?auto=format&fit=crop&w=800&q=80':'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80';
let cart=[]; try { cart=JSON.parse(localStorage.getItem("nirvo-cart")||"[]"); if(!Array.isArray(cart)) cart=[]; } catch(e){ cart=[]; } let activeFilter="All";
const grid=document.getElementById("productGrid");
function renderProducts(){const q=(document.getElementById("productSearch")?.value||"").toLowerCase();const list=products.filter(p=>(activeFilter==="All"||p[1]===activeFilter)&&(p[0]+" "+p[2]+" "+p[1]).toLowerCase().includes(q));grid.innerHTML=list.length?list.map(p=>`<article class="product-card"><div class="product-image"><img loading="lazy" src="${photo(p[6])}" alt="${p[0]}"><span class="number">NIRVO / ${p[5]}</span></div><div class="product-info"><div class="product-meta">${p[1].toUpperCase()}</div><h3>${p[0]}</h3><p>${p[2]}</p><div class="product-bottom"><span class="price">${p[3]}</span><button class="add-btn" data-add="${p[5]}">＋ Add to cart</button></div><button class="details-btn" data-details="${p[5]}">View specifications ↗</button></div></article>`).join(""):'<p class="no-results">No matching products. Try another search.</p>';grid.querySelectorAll("[data-add]").forEach(b=>b.onclick=()=>addCart(b.dataset.add));grid.querySelectorAll("[data-details]").forEach(b=>b.onclick=()=>showDetails(b.dataset.details))}
function addCart(id){const p=products.find(x=>x[5]===id);const item=cart.find(x=>x.id===id);if(item)item.qty++;else cart.push({id,name:p[0],price:p[4],qty:1});saveCart();openCart()}
function saveCart(){try{localStorage.setItem("nirvo-cart",JSON.stringify(cart));}catch(e){}document.getElementById("cartCount").textContent=cart.reduce((n,x)=>n+x.qty,0);document.getElementById("drawerCount").textContent="("+cart.reduce((n,x)=>n+x.qty,0)+")";document.getElementById("cartItems").innerHTML=cart.length?cart.map(x=>`<div class="cart-line"><div><b>${x.name}</b><small>${x.price} · indicative starting price</small></div><div class="qty"><button data-dec="${x.id}">−</button>${x.qty}<button data-inc="${x.id}">+</button></div></div>`).join(""):'<p class="empty-cart">Your next build starts here.<br>Your cart is empty.</p>';document.querySelectorAll("[data-dec]").forEach(b=>b.onclick=()=>changeQty(b.dataset.dec,-1));document.querySelectorAll("[data-inc]").forEach(b=>b.onclick=()=>changeQty(b.dataset.inc,1));const total=cart.reduce((n,x)=>n+Number(x.price.replace(/[^0-9]/g,""))*x.qty,0);document.getElementById("subtotal").textContent="₹"+total.toLocaleString("en-IN")}
function changeQty(id,n){const x=cart.find(x=>x.id===id);if(x)x.qty+=n;cart=cart.filter(x=>x.qty>0);saveCart()}
const drawer=document.getElementById("cartDrawer"),overlay=document.getElementById("overlay");function openCart(){drawer.classList.add("open");overlay.classList.add("show")}function closeCart(){drawer.classList.remove("open");overlay.classList.remove("show")}
document.getElementById("cartOpen").onclick=openCart;document.getElementById("cartClose").onclick=closeCart;overlay.onclick=closeCart;
document.getElementById("checkoutBtn").onclick=()=>{if(!cart.length)return;const lines=cart.map(x=>x.name+" x "+x.qty+" — "+x.price).join("%0D%0A");location.href="mailto:usrcalanabi@gmail.com?subject=NIRVO%20Product%20Order%20Enquiry&body=Hello%20NIRVO,%0D%0AI%20would%20like%20to%20request%20a%20confirmed%20quotation%20for:%0D%0A"+lines+"%0D%0A%0D%0APlease%20contact%20me%20to%20confirm%20availability,%20delivery%20and%20payment."};
function showDetails(id){const p=products.find(x=>x[5]===id);const m=document.getElementById("productModal");document.getElementById("modalContent").innerHTML=`<div class="product-meta">${p[1].toUpperCase()} / NIRVO ${p[5]}</div><h2>${p[0]}</h2><p>${p[2]}</p><div class="modal-specs"><span>Custom configuration</span><span>Quotation required</span><span>Designed by NIRVO</span></div><h3>${p[3]}</h3><p>Specifications and pricing are indicative product concepts, not confirmation that this model is currently in production. Contact NIRVO for feasibility, configuration, lead time and a final quotation.</p><button class="primary" id="modalAdd">Add to cart ↗</button>`;m.classList.add("open");document.getElementById("modalAdd").onclick=()=>{addCart(id);m.classList.remove("open")}}
document.getElementById("modalClose").onclick=()=>document.getElementById("productModal").classList.remove("open");
document.getElementById("filters").addEventListener("click",e=>{const b=e.target.closest("[data-filter]");if(!b)return;activeFilter=b.dataset.filter;document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x===b));renderProducts()});
document.getElementById("productSearch").addEventListener("input",renderProducts);
document.getElementById("menuBtn").onclick=()=>document.querySelector(".header").classList.toggle("menu-open");
document.querySelectorAll("#nav a").forEach(a=>a.onclick=()=>document.querySelector(".header").classList.remove("menu-open"));
document.getElementById("enquiryForm").addEventListener("submit",e=>{e.preventDefault();const d=new FormData(e.target);const body=[...d.entries()].map(([k,v])=>k+": "+v).join("%0D%0A");location.href="mailto:usrcalanabi@gmail.com?subject=NIRVO%20Website%20Enquiry&body="+encodeURIComponent(body);});
document.getElementById("year").textContent=new Date().getFullYear();renderProducts();saveCart();

// NIRVO storefront reliability + motion layer
document.getElementById("cartOpen").addEventListener("click",e=>{e.preventDefault();openCart()});
document.getElementById("cartClose").addEventListener("click",e=>{e.preventDefault();closeCart()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeCart();document.getElementById("productModal").classList.remove("open")}});
const checkout=document.getElementById("checkoutBtn");
checkout.onclick=()=>{
 if(!cart.length)return;
 const m=document.getElementById("productModal");
 document.getElementById("modalContent").innerHTML=`<div class="product-meta">ORDER ENQUIRY · NIRVO</div><h2>Complete your enquiry</h2><p>This submits an order request. It does not collect payment or confirm stock.</p><form id="orderForm" class="order-form"><label>Full name<input name="customer-name" required autocomplete="name"></label><label>Email<input name="customer-email" type="email" required autocomplete="email"></label><label>Phone / WhatsApp<input name="customer-phone" required autocomplete="tel"></label><label>Delivery location<textarea name="delivery-location" required rows="2"></textarea></label><label>Note (optional)<textarea name="customer-note" rows="2"></textarea></label><input type="hidden" name="order-items"><input type="hidden" name="order-total"><button class="primary submit" type="submit">Submit order enquiry ↗</button></form>`;
 m.classList.add("open");
 const form=document.getElementById("orderForm");
 form.elements["order-items"].value=cart.map(x=>x.name+" × "+x.qty+" — "+x.price).join("\n");
 form.elements["order-total"].value=document.getElementById("subtotal").textContent;
 form.onsubmit=async ev=>{
  ev.preventDefault();const data=new URLSearchParams(new FormData(form));data.set("form-name","nirvo-orders");
  const btn=form.querySelector("button");btn.disabled=true;btn.textContent="Sending…";
  try{const res=await fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:data.toString()});if(!res.ok)throw new Error("Failed");
   document.getElementById("modalContent").innerHTML="<h2>Enquiry submitted</h2><p>Your request has been recorded. NIRVO will contact you to confirm availability, final pricing and payment.</p>";cart=[];saveCart();
  }catch(err){btn.disabled=false;btn.textContent="Try again";alert("Could not submit. Please check your connection and retry.");}
 };
};
document.getElementById("enquiryForm").addEventListener("submit",e=>{
 e.preventDefault();const d=new FormData(e.target);
 const msg=[...d.entries()].map(([k,v])=>k+": "+v).join("\n");
 window.open("https://wa.me/919447682486?text="+encodeURIComponent("NIRVO website enquiry\n"+msg),"_blank");
});
// Reveal elements gently as visitors scroll; respect reduced-motion settings.
if("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches){
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("in-view");observer.unobserve(entry.target)}}),{threshold:.12});
 document.querySelectorAll(".domain,.product-card,.feature-copy,.about-grid,.contact-grid").forEach(el=>observer.observe(el));
}
// Faster NIRVO product runway: smooth continuous movement, with manual controls.
const shelf=document.querySelector(".product-grid");
if(shelf){
 shelf.classList.add("auto-shelf");
 const tools=document.createElement("div");
 tools.className="product-runway";
 tools.innerHTML='<span class="runway-label">DISCOVER THE COLLECTION · AUTO-GLIDE</span><div class="runway-controls"><button type="button" aria-label="Scroll products left" data-runway-left>‹</button><button type="button" aria-label="Scroll products right" data-runway-right>›</button></div>';
 shelf.parentNode.insertBefore(tools,shelf);
 let paused=false,last=0,raf=0;
 const speed=2.65; // pixels per frame at 60fps (~159px/second)
 const tick=(now)=>{
   if(!last)last=now;
   const delta=Math.min(now-last,40);last=now;
   if(!paused&&!document.hidden&&!matchMedia("(prefers-reduced-motion: reduce)").matches&&shelf.scrollWidth>shelf.clientWidth+4){
     shelf.scrollLeft+=speed*(delta/16.67);
     if(shelf.scrollLeft+shelf.clientWidth>=shelf.scrollWidth-2)shelf.scrollTo({left:0,behavior:"instant"});
   }
   raf=requestAnimationFrame(tick);
 };
 raf=requestAnimationFrame(tick);
 const pause=()=>{paused=true};
 const resume=()=>{paused=false;last=0};
 shelf.addEventListener("mouseenter",pause);shelf.addEventListener("mouseleave",resume);
 shelf.addEventListener("touchstart",pause,{passive:true});
 shelf.addEventListener("touchend",()=>setTimeout(resume,1400),{passive:true});
 shelf.addEventListener("focusin",pause);shelf.addEventListener("focusout",resume);
 shelf.addEventListener("wheel",pause,{passive:true});
 tools.querySelector("[data-runway-left]").onclick=()=>{pause();shelf.scrollBy({left:-Math.max(280,shelf.clientWidth*.72),behavior:"smooth"});setTimeout(resume,900)};
 tools.querySelector("[data-runway-right]").onclick=()=>{pause();shelf.scrollBy({left:Math.max(280,shelf.clientWidth*.72),behavior:"smooth"});setTimeout(resume,900)};
 window.addEventListener("beforeunload",()=>cancelAnimationFrame(raf));
}


// NIRVO storefront patch: search action, live sorting and catalogue accuracy.
(function(){
 const searchBtn=document.getElementById("searchBtn");
 const searchInput=document.getElementById("productSearch");
 const sort=document.getElementById("productSort");
 if(searchBtn&&searchInput){
   searchBtn.setAttribute("aria-label","Find a NIRVO product");
   searchBtn.title="Search products";
   searchBtn.addEventListener("click",()=>{
     document.getElementById("products")?.scrollIntoView({behavior:"smooth",block:"start"});
     window.setTimeout(()=>{searchInput.focus();searchInput.select()},420);
   });
 }
 const originalOrder=products.slice();
 const priceOf=p=>Number(String(p[4]).replace(/[^0-9]/g,""));
 if(sort){
   sort.addEventListener("change",()=>{
     const mode=sort.value;
     products.splice(0,products.length,...originalOrder.slice().sort((a,b)=>{
       if(mode==="price-low")return priceOf(a)-priceOf(b);
       if(mode==="price-high")return priceOf(b)-priceOf(a);
       if(mode==="name")return a[0].localeCompare(b[0]);
       return Number(a[5])-Number(b[5]);
     }));
     renderProducts();
   });
 }
 const cartButton=document.getElementById("cartOpen");
 if(cartButton)cartButton.setAttribute("aria-label","Open shopping cart");
 const grid=document.getElementById("productGrid");
 if(grid)grid.setAttribute("aria-live","polite");
})();

// NIRVO Intelligence Studio — secure server-side AI endpoint.
(function(){
 const prompt=document.getElementById("ideaPrompt"),button=document.getElementById("generateIdea"),out=document.getElementById("ideaOutput");
 if(!prompt||!button||!out)return;
 document.querySelectorAll("[data-prompt]").forEach(chip=>chip.addEventListener("click",()=>{prompt.value=chip.dataset.prompt;prompt.focus()}));
 const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
 const blocks=(label,arr)=>'<h4>'+label+'</h4><ul>'+((arr||[]).map(x=>'<li>'+esc(x)+'</li>').join(""))+'</ul>';
 button.addEventListener("click",async()=>{
  const idea=prompt.value.trim();if(idea.length<12){prompt.focus();prompt.setCustomValidity("Describe your idea in at least 12 characters.");prompt.reportValidity();prompt.setCustomValidity("");return}
  button.disabled=true;button.innerHTML="<span>✳</span> Designing your concept… <b>◌</b>";
  out.innerHTML='<div class="output-empty"><div class="empty-symbol">✳</div><span>PROCESSING CONCEPT</span><h3>Exploring possibilities.</h3><p>Breaking the problem into product architecture, components and build stages…</p></div>';
  try{
   const response=await fetch("/.netlify/functions/idea-studio",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idea,domain:document.getElementById("ideaDomain").value,level:document.getElementById("ideaLevel").value})});
   const data=await response.json();if(!response.ok)throw new Error(data.error||"AI service is not configured yet.");
   const x=data.idea||{};
   out.innerHTML='<div class="idea-result"><span class="result-tag">NIRVO AI / ORIGINAL CONCEPT</span><h3>'+esc(x.name||"New product concept")+'</h3><p>'+esc(x.summary||"")+'</p>'+blocks("The problem",x.problem?[x.problem]:[])+blocks("Core features",x.features)+blocks("Suggested architecture",x.architecture)+blocks("Key components",x.components)+blocks("Prototype roadmap",x.roadmap)+blocks("Validation & risks",x.validation)+ '<h4>Next engineering move</h4><p>'+esc(x.next_step||"Review feasibility and build a proof of concept.")+'</p><div class="result-actions"><button id="copyIdea">Copy concept</button><button id="enquireIdea">Discuss with NIRVO ↗</button></div></div>';
   document.getElementById("copyIdea").onclick=()=>navigator.clipboard?.writeText([x.name,x.summary,x.problem,(x.features||[]).join("\n"),(x.components||[]).join("\n"),(x.roadmap||[]).join("\n")].join("\n\n"));
   document.getElementById("enquireIdea").onclick=()=>{const msg="I would like to discuss this AI-generated NIRVO concept:\n"+JSON.stringify(x,null,2);window.open("https://wa.me/919447682486?text="+encodeURIComponent(msg),"_blank")};
  }catch(err){out.innerHTML='<div class="output-empty"><div class="empty-symbol">!</div><span>AI CONNECTION REQUIRED</span><h3>Almost ready.</h3><p>'+esc(err.message)+'</p><p>Connect an OpenAI API key to the Netlify site as the secret environment variable OPENAI_API_KEY, scoped to Functions, then redeploy.</p></div>'}
  finally{button.disabled=false;button.innerHTML="<span>✳</span> Generate original concept <b>↗</b>"}
 });
})();
