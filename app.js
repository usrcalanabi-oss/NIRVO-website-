// Fast, honest branded loading: reveal once the document is ready, never fake a five-second progress bar.
(function(){
 const loader=document.getElementById("nirvoLoader");
 if(!loader)return;
 const reveal=()=>{
  if(loader.classList.contains("is-leaving"))return;
  loader.classList.add("is-leaving");
  document.body.classList.add("site-ready");
  window.setTimeout(()=>loader.remove(),380);
 };
 if(document.readyState==="complete"||document.readyState==="interactive"){
  window.setTimeout(reveal,260);
 }else{
  document.addEventListener("DOMContentLoaded",()=>window.setTimeout(reveal,260),{once:true});
 }
 window.setTimeout(reveal,1400);
})();
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
["Nirvo WiFiMesh Pro","Networking","Business Wi-Fi 6-class access point concept with PoE and central management.","₹10,000 onwards","₹10,000","15","photo-1544197150-b99a580bb7a8"],
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
// Curated reference photography from public product-image searches.
const referencePhotos = {
 "photo-1558494949-ef010cbdcc31": "https://www.owcasia.com.tw/media/com_hikashop/upload/owc-jupiter-mini-mid-left-hero.jpg",
 "photo-1485827404703-89b55fcc595e": "https://uplinkroboticsstore.com/cdn/shop/files/DI0A9929.jpg?v=1764616278&width=1600",
 "photo-1581092160562-40aa08e78837": "https://arkoudo.com/assets/images/products/pro1.png",
 "photo-1581092580497-e0d23cbdf1dc": "https://uplinkroboticsstore.com/cdn/shop/files/DI0A9929.jpg?v=1764616278&width=1600",
 "photo-1518770660439-4636190af475": "https://precisol-automation.com/wp-content/uploads/2025/01/RS485-serial-to-cloud-gateway-768x639.png",
 "photo-1581092921461-eab62e97a780": "https://res.cloudinary.com/allied-electronics-automation/image/upload/b_rgb%3AFFFFFF%2Cc_pad%2Cdpr_2.0%2Cf_auto%2Ch_800%2Cq_auto%2Cw_800/c_pad%2Ch_800%2Cw_800/75115027.jpg?_i=AB&pgw=1",
 "photo-1473341304170-971dccb5ac1e": "https://www.fronius.com/-/media/international/se/fronius-q-t/fronius-smart-solution-rsb-duo-87-us.webp",
 "photo-1544197150-b99a580bb7a8": "https://www.owcasia.com.tw/media/com_hikashop/upload/owc-jupiter-mini-mid-left-hero.jpg"
};
const photo = (id) => referencePhotos[id] || ("https://images.unsplash.com/" + id + "?auto=format&fit=crop&w=1000&q=85");
let cart=[]; try { cart=JSON.parse(localStorage.getItem("nirvo-cart")||"[]"); if(!Array.isArray(cart)) cart=[]; } catch(e){ cart=[]; } let activeFilter="All";
const grid=document.getElementById("productGrid");
function renderProducts(){
 const q=(document.getElementById("productSearch")?.value||"").trim().toLowerCase();
 const list=products.filter(p=>(activeFilter==="All"||p[1]===activeFilter)&&p.join(" ").toLowerCase().includes(q));
 const count=document.getElementById("productResultCount");if(count)count.textContent="Showing "+list.length+" of "+products.length+" products";
 grid.innerHTML=list.length?list.map(p=>
  '<article class="product-card in-view" data-product-card="'+p[5]+'" tabindex="0" role="button" aria-label="View '+p[0]+' details"><div class="product-image"><img loading="lazy" src="'+photo(p[6])+'" alt="'+p[0]+' product concept"><span class="number">NIRVO / '+p[5]+'</span><img class="product-brand-mark" src="nirvo-logo.svg" alt="" aria-hidden="true"><span class="image-view">VISUAL REFERENCE · VIEW ↗</span></div><div class="product-info"><div class="product-meta">'+p[1].toUpperCase()+'</div><h3>'+p[0]+'</h3><p>'+p[2]+'</p><div class="product-bottom"><span class="price">'+p[3]+'</span><button class="add-btn" data-add="'+p[5]+'" type="button">＋ Add to cart</button></div><button class="details-btn" data-details="'+p[5]+'" type="button">Explore product & specifications ↗</button></div></article>'
 ).join(""):'<div class="no-results"><b>No matching products found.</b><p>Try another keyword or clear your filters.</p><button type="button" class="clear-search" data-clear-search>Clear search and filters</button></div>';
}
grid.addEventListener("click",e=>{const add=e.target.closest("[data-add]");if(add){e.stopPropagation();addCart(add.dataset.add);return}const card=e.target.closest("[data-product-card]");if(card)showDetails(card.dataset.productCard);if(e.target.closest("[data-clear-search]")){document.getElementById("productSearch").value="";activeFilter="All";document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x.dataset.filter==="All"));renderProducts()}});
grid.addEventListener("keydown",e=>{const card=e.target.closest("[data-product-card]");if(card&&(e.key==="Enter"||e.key===" ")){e.preventDefault();showDetails(card.dataset.productCard)}});
function addCart(id){const p=products.find(x=>x[5]===id);const item=cart.find(x=>x.id===id);if(item)item.qty++;else cart.push({id,name:p[0],price:p[4],qty:1});saveCart();openCart()}
function saveCart(){try{localStorage.setItem("nirvo-cart",JSON.stringify(cart));}catch(e){}document.getElementById("cartCount").textContent=cart.reduce((n,x)=>n+x.qty,0);document.getElementById("drawerCount").textContent="("+cart.reduce((n,x)=>n+x.qty,0)+")";document.getElementById("cartItems").innerHTML=cart.length?cart.map(x=>`<div class="cart-line"><div><b>${x.name}</b><small>${x.price} · indicative starting price</small></div><div class="qty"><button data-dec="${x.id}">−</button>${x.qty}<button data-inc="${x.id}">+</button></div></div>`).join(""):'<p class="empty-cart">Your next build starts here.<br>Your cart is empty.</p>';document.querySelectorAll("[data-dec]").forEach(b=>b.onclick=()=>changeQty(b.dataset.dec,-1));document.querySelectorAll("[data-inc]").forEach(b=>b.onclick=()=>changeQty(b.dataset.inc,1));const total=cart.reduce((n,x)=>n+Number(x.price.replace(/[^0-9]/g,""))*x.qty,0);document.getElementById("subtotal").textContent="₹"+total.toLocaleString("en-IN")}
function changeQty(id,n){const x=cart.find(x=>x.id===id);if(x)x.qty+=n;cart=cart.filter(x=>x.qty>0);saveCart()}
const drawer=document.getElementById("cartDrawer"),overlay=document.getElementById("overlay");function openCart(){drawer.classList.add("open");overlay.classList.add("show")}function closeCart(){drawer.classList.remove("open");overlay.classList.remove("show")}
document.getElementById("cartOpen").onclick=openCart;document.getElementById("cartClose").onclick=closeCart;overlay.onclick=closeCart;
document.getElementById("checkoutBtn").onclick=()=>{if(!cart.length)return;const lines=cart.map(x=>x.name+" x "+x.qty+" — "+x.price).join("%0D%0A");location.href="mailto:usrcalanabi@gmail.com?subject=NIRVO%20Product%20Order%20Enquiry&body=Hello%20NIRVO,%0D%0AI%20would%20like%20to%20request%20a%20confirmed%20quotation%20for:%0D%0A"+lines+"%0D%0A%0D%0APlease%20contact%20me%20to%20confirm%20availability,%20delivery%20and%20payment."};
function showDetails(id){
 const p=products.find(x=>x[5]===id);if(!p)return;const m=document.getElementById("productModal");
 document.getElementById("modalContent").innerHTML='<div class="detail-layout"><div class="detail-image"><img src="'+photo(p[6])+'" alt="'+p[0]+' product concept"><img class="detail-brand-mark" src="nirvo-logo.svg" alt="NIRVO"></div><div class="detail-copy"><div class="product-meta">'+p[1].toUpperCase()+' / NIRVO '+p[5]+'</div><h2>'+p[0]+'</h2><p>'+p[2]+'</p><div class="modal-specs"><span>Category: '+p[1]+'</span><span>Custom configuration</span><span>Quotation required</span></div><h3>'+p[3]+'</h3><p>Product concept and indicative starting price. The image is a visual reference, not a confirmed NIRVO-manufactured unit. Final design, specifications, availability and quotation must be confirmed by NIRVO.</p><button class="primary" id="modalAdd">Add to cart ↗</button><a class="detail-contact" href="https://wa.me/919447682486?text='+encodeURIComponent("Hello NIRVO, I am interested in "+p[0]+". Please share details and a quotation.")+'" target="_blank" rel="noopener">Ask about this product on WhatsApp ↗</a></div></div>';
 m.classList.add("open");document.getElementById("modalAdd").onclick=()=>{addCart(id);m.classList.remove("open")}
}
document.getElementById("modalClose").onclick=()=>document.getElementById("productModal").classList.remove("open");
document.getElementById("filters").addEventListener("click",e=>{const b=e.target.closest("[data-filter]");if(!b)return;activeFilter=b.dataset.filter;document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x===b));renderProducts()});
document.getElementById("productSearch").addEventListener("input",renderProducts);
(function(){const tools=document.querySelector(".product-tools"),input=document.getElementById("productSearch");if(!tools||!input)return;const wrap=document.createElement("div");wrap.className="search-wrap";input.parentNode.insertBefore(wrap,input);wrap.append(input);const clear=document.createElement("button");clear.type="button";clear.className="search-clear";clear.textContent="×";clear.setAttribute("aria-label","Clear product search");wrap.append(clear);clear.onclick=()=>{input.value="";renderProducts();input.focus()};const count=document.createElement("div");count.id="productResultCount";count.className="product-result-count";tools.after(count)})();
document.getElementById("menuBtn").onclick=()=>document.querySelector(".header").classList.toggle("menu-open");
document.querySelectorAll("#nav a").forEach(a=>a.onclick=()=>document.querySelector(".header").classList.remove("menu-open"));
// Enquiry form is handled once by the WhatsApp submission handler below.
document.getElementById("year").textContent=new Date().getFullYear();renderProducts();saveCart();

// NIRVO storefront reliability + motion layer
document.getElementById("cartOpen").addEventListener("click",e=>{e.preventDefault();openCart()});
document.getElementById("cartClose").addEventListener("click",e=>{e.preventDefault();closeCart()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeCart();document.getElementById("productModal").classList.remove("open")}});
const checkout=document.getElementById("checkoutBtn");
checkout.onclick=()=>{
 if(!cart.length)return;
 const m=document.getElementById("productModal");
 document.getElementById("modalContent").innerHTML=`<div class="product-meta">ORDER ENQUIRY · NIRVO</div><h2>Complete your enquiry</h2><p>This submits an order request. It does not collect payment or confirm stock.</p><form id="orderForm" class="order-form"><label class="hp-field" aria-hidden="true">Leave this field empty<input name="website" tabindex="-1" autocomplete="off"></label><label>Full name<input name="customer-name" required autocomplete="name"></label><label>Email<input name="customer-email" type="email" required autocomplete="email"></label><label>Phone / WhatsApp<input name="customer-phone" required autocomplete="tel"></label><label>Delivery location<textarea name="delivery-location" required rows="2"></textarea></label><label>Note (optional)<textarea name="customer-note" rows="2"></textarea></label><input type="hidden" name="order-items"><input type="hidden" name="order-total"><button class="primary submit" type="submit">Submit order enquiry ↗</button></form>`;
 m.classList.add("open");
 const form=document.getElementById("orderForm");
 form.elements["order-items"].value=cart.map(x=>x.name+" × "+x.qty+" — "+x.price).join("\n");
 form.elements["order-total"].value=document.getElementById("subtotal").textContent;
 form.onsubmit=async ev=>{
  ev.preventDefault();const data=new FormData(form);data.set("type","order");
  const btn=form.querySelector("button");btn.disabled=true;btn.textContent="Sending…";
  try{const res=await fetch("/api/submit",{method:"POST",body:data});const result=await res.json();if(!res.ok)throw new Error(result.error||"Failed");
   document.getElementById("modalContent").innerHTML="<h2>Order enquiry received</h2><p>"+result.message+"</p><p>Reference: <b>"+result.id.slice(0,8).toUpperCase()+"</b></p><p>"+(result.notificationNote||"")+"</p><p>We will confirm availability, final pricing, delivery and payment before accepting an order.</p>";cart=[];saveCart();
  }catch(err){btn.disabled=false;btn.textContent="Try again";alert(err.message||"Could not submit. Please retry.");}
 };
};
const contactForm=document.getElementById("enquiryForm");
if(contactForm)contactForm.addEventListener("submit",async e=>{
 e.preventDefault();const form=e.currentTarget,data=new FormData(form);data.set("type","enquiry");
 const button=form.querySelector('button[type="submit"]'),original=button.textContent;button.disabled=true;button.textContent="Sending securely…";
 try{const response=await fetch("/api/submit",{method:"POST",body:data});const result=await response.json();if(!response.ok)throw new Error(result.error||"Could not submit");
 form.innerHTML='<div class="submission-success"><span>✓</span><h3>Enquiry received.</h3><p>'+result.message+'</p><p>Reference: <b>'+result.id.slice(0,8).toUpperCase()+'</b></p><p>'+(result.notificationNote||"") +'</p><a href="https://wa.me/919447682486" target="_blank" rel="noopener">Chat with NIRVO on WhatsApp ↗</a></div>';
 }catch(error){button.disabled=false;button.textContent=original;alert(error.message||"Please try again.");}
});
// Reveal elements gently as visitors scroll; respect reduced-motion settings.
if("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches){
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("in-view");observer.unobserve(entry.target)}}),{threshold:.12});
 document.querySelectorAll(".domain,.product-card,.feature-copy,.about-grid,.contact-grid").forEach(el=>observer.observe(el));
}
// Stable product carousel: no automatic movement, no animation loop, no scroll jitter.
const shelf=document.querySelector(".product-grid");
if(shelf){
 shelf.classList.add("auto-shelf");
 const tools=document.createElement("div");tools.className="product-runway";
 tools.innerHTML='<span class="runway-label">DISCOVER THE COLLECTION</span><div class="runway-controls"><button type="button" aria-label="Scroll products left" data-runway-left>‹</button><button type="button" aria-label="Scroll products right" data-runway-right>›</button><button type="button" class="view-all-btn" data-view-all>View all products</button></div>';
 shelf.parentNode.insertBefore(tools,shelf);
 let expanded=false;
 const viewAll=tools.querySelector("[data-view-all]");
 viewAll.addEventListener("click",()=>{expanded=!expanded;shelf.classList.toggle("show-all",expanded);viewAll.textContent=expanded?"Show product carousel":"View all products";});
 tools.querySelector("[data-runway-left]").onclick=()=>shelf.scrollBy({left:-Math.max(280,shelf.clientWidth*.8),behavior:"smooth"});
 tools.querySelector("[data-runway-right]").onclick=()=>shelf.scrollBy({left:Math.max(280,shelf.clientWidth*.8),behavior:"smooth"});
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
     if(document.body.classList.contains("page-products")){
       document.getElementById("products")?.scrollIntoView({behavior:"smooth",block:"start"});
       window.setTimeout(()=>{searchInput.focus();searchInput.select()},420);
     }else{
       window.location.href="products.html?focus=search";
     }
   });
   const params=new URLSearchParams(window.location.search);
   if(params.has("focus")&&params.get("focus")==="search"){
     window.setTimeout(()=>{document.getElementById("products")?.scrollIntoView({block:"start"});searchInput.focus()},350);
   }
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

// NIRVO marketplace submissions: review listings and projects before publication.
(function(){
 const tabs=document.querySelectorAll("[data-market-tab]"),listing=document.getElementById("listingForm"),project=document.getElementById("projectForm");
 if(!listing||!project)return;
 tabs.forEach(tab=>tab.addEventListener("click",()=>{
  const showProduct=tab.dataset.marketTab==="product";
  tabs.forEach(t=>t.classList.toggle("active",t===tab));
  listing.hidden=!showProduct;project.hidden=showProduct;
 }));
 document.querySelectorAll(".photo-slot input[type=file]").forEach(input=>{
  input.addEventListener("change",()=>{
   const file=input.files?.[0],slot=input.closest(".photo-slot");
   slot.classList.toggle("has-file",!!file);
   const label=slot.querySelector("small");
   if(label)label.textContent=file?file.name:"Choose image";
   if(file&&file.size>2*1024*1024){alert("Each photo must be 2 MB or smaller.");input.value="";slot.classList.remove("has-file");if(label)label.textContent="Choose image";}
  });
 });
 async function submitForm(form,buttonText,successTitle,successCopy){
  const files=[...form.querySelectorAll('input[type="file"]')];
  if(files.some(x=>!x.files||!x.files.length)){alert("Please upload all 3 required photos.");return}
  if(files.some(x=>x.files[0].size>1200*1024)){alert("Each photo must be 1.2 MB or smaller for secure upload.");return}
  const button=form.querySelector('button[type="submit"]');const original=button.innerHTML;
  button.disabled=true;button.textContent="Submitting…";
  const data=new FormData(form);data.set("type",form===listing?"listing":"project");
  try{
   const response=await fetch("/api/submit",{method:"POST",body:data});
   const result=await response.json();if(!response.ok)throw new Error(result.error||"Submission failed");
   form.innerHTML='<div class="submission-success"><span>✓</span><h3>'+successTitle+'</h3><p>'+(result.message||successCopy)+'</p><p>Reference: <b>'+result.id.slice(0,8).toUpperCase()+'</b></p><p>'+(result.notificationNote||"") +'</p><p>For urgent questions, contact <a href="https://wa.me/919447682486">NIRVO on WhatsApp</a>.</p></div>';
  }catch(error){button.disabled=false;button.innerHTML=original;alert("Your submission could not be sent. Please try again or contact us on WhatsApp +91 94476 82486.");}
 }
 listing.addEventListener("submit",e=>{e.preventDefault();submitForm(listing,"Submit product for review","Product submitted","Thank you. Your listing and three photos have been sent to NIRVO for review. We will contact you using the details provided.")});
 project.addEventListener("submit",e=>{e.preventDefault();submitForm(project,"Submit project for review","Project received","Thank you for sharing your project. NIRVO will review the description and photos and contact you if a follow-up is needed.")});
})();


// Separate navigation shortcut for project submissions.
document.querySelectorAll("[data-open-project]").forEach(link=>link.addEventListener("click",()=>{
 const projectTab=document.querySelector('[data-market-tab="project"]');
 if(projectTab)projectTab.click();
}));


// NIRVO account interface: interactive UI only until a secure auth provider is connected.
(function(){
 const overlay=document.getElementById("accountOverlay");
 if(!overlay)return;
 const open=document.getElementById("accountOpen"),close=document.getElementById("accountClose");
 const login=document.getElementById("loginTab"),signup=document.getElementById("signupTab");
 const form=document.getElementById("accountForm"),nameWrap=document.getElementById("accountNameWrap");
 const title=document.getElementById("accountTitle"),subtitle=document.getElementById("accountSubtitle");
 const eyebrow=document.getElementById("accountEyebrow"),submit=document.getElementById("accountSubmit");
 const feedback=document.getElementById("accountFeedback"),forgot=document.getElementById("forgotPassword");
 const password=form.elements.password,toggle=document.getElementById("passwordToggle");
 let mode="login";
 function showAccount(){overlay.classList.add("open");overlay.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";setTimeout(()=>form.elements.email.focus(),120)}
 function hideAccount(){overlay.classList.remove("open");overlay.setAttribute("aria-hidden","true");document.body.style.overflow="";open?.focus()}
 function setMode(next){
  mode=next;const creating=mode==="signup";
  login.classList.toggle("active",!creating);signup.classList.toggle("active",creating);
  login.setAttribute("aria-selected",String(!creating));signup.setAttribute("aria-selected",String(creating));
  nameWrap.hidden=!creating;nameWrap.querySelector("input").required=creating;
  form.elements.email.autocomplete=creating?"email":"username";
  password.autocomplete=creating?"new-password":"current-password";
  title.textContent=creating?"Create your NIRVO ID.":"Good to see you.";
  subtitle.textContent=creating?"One account for your NIRVO journey.":"Log in to continue exploring NIRVO.";
  eyebrow.textContent=creating?"JOIN THE NIRVO NETWORK":"WELCOME BACK";
  submit.innerHTML=creating?'Create account <span>↗</span>':'Log in <span>↗</span>';
  forgot.hidden=creating;feedback.textContent="Secure account sign-in will be enabled after authentication is connected.";
  feedback.className="account-feedback";form.reset();password.type="password";toggle.textContent="Show";
 }
 open?.addEventListener("click",showAccount);close?.addEventListener("click",hideAccount);
 overlay.addEventListener("click",e=>{if(e.target===overlay)hideAccount()});
 login.addEventListener("click",()=>setMode("login"));signup.addEventListener("click",()=>setMode("signup"));
 document.addEventListener("keydown",e=>{if(e.key==="Escape"&&overlay.classList.contains("open"))hideAccount()});
 toggle.addEventListener("click",()=>{const visible=password.type==="text";password.type=visible?"password":"text";toggle.textContent=visible?"Show":"Hide";toggle.setAttribute("aria-label",visible?"Show password":"Hide password")});
 forgot.addEventListener("click",()=>{feedback.textContent="Password recovery will be available when secure account authentication is connected.";feedback.className="account-feedback"});
 form.addEventListener("submit",e=>{
  e.preventDefault();
  feedback.textContent=mode==="signup"?"Your sign-up screen is ready. Secure account creation still needs to be connected.":"Your login screen is ready. Secure sign-in still needs to be connected.";
  feedback.className="account-feedback";
 });
})();


// NIRVO Daily Signal: a thoughtful greeting for every date, with verified fixed-date occasions.
(function(){
 const section=document.getElementById("dailySignal");
 if(!section)return;
 const title=document.getElementById("dailyWishTitle"),copy=document.getElementById("dailyWishText"),date=document.getElementById("dailyDate"),share=document.getElementById("shareDailyWish");
 const now=new Date(),month=now.getMonth()+1,day=now.getDate();
 const wishes={
  "1-1":["Happy New Year!","A new chapter begins. Keep learning, building and turning bold ideas into real things."],
  "1-12":["Happy National Youth Day!","Young minds can shape tomorrow. Stay curious, ask bigger questions and build with purpose."],
  "1-26":["Happy Republic Day, India!","Today we celebrate the ideas, courage and unity that help our country move forward."],
  "3-8":["Happy International Women's Day!","Celebrating the women who lead, invent, teach and make the future stronger."],
  "4-14":["Happy Vishu!","May this new beginning bring happiness, fresh opportunities and bright ideas. Wishing you and your family a beautiful Vishu."],
  "4-22":["Happy Earth Day!","Build technology that respects our planet. Better ideas can create a cleaner tomorrow."],
  "5-1":["Happy Labour Day!","Every meaningful achievement begins with effort. Today we celebrate the people who make things happen."],
  "6-5":["Happy World Environment Day!","Innovation matters most when it helps protect the world we share."],
  "8-15":["Happy Independence Day, India!","Freedom gives ideas room to grow. Let's build a future filled with knowledge, courage and possibility."],
  "9-5":["Happy Teachers' Day!","To every teacher who turns curiosity into confidence: thank you for shaping tomorrow."],
  "10-2":["Remembering Gandhi Jayanti","A reminder that real progress begins with purpose, courage and care for others."],
  "10-31":["Happy National Unity Day!","Different ideas, one stronger future. Let's build together."],
  "11-1":["Happy Kerala Piravi!","Celebrating Kerala’s spirit of learning, creativity and community. Let’s keep building a brighter tomorrow together."],
  "11-14":["Happy Children's Day!","Every big invention starts with a curious question. Never stop asking yours."],
  "12-25":["Merry Christmas!","Wishing you peace, kindness and bright new ideas to carry into the days ahead."]
 };
 const dailyLines=[
 ["Make today count.","A small step taken today can become the beginning of something extraordinary."],
 ["Your ideas deserve a chance.","Stay curious, keep learning and give your best idea room to grow."],
 ["Build what you wish existed.","The future is shaped by people who turn questions into experiments."],
 ["Progress over perfection.","You do not need a perfect start. You only need the courage to begin."],
 ["Keep moving forward.","Every skill you practise and every problem you solve adds to your future."],
 ["Think bigger. Start smaller.","Big achievements are built from focused work, one step at a time."],
 ["Today is full of possibility.","Notice an opportunity, learn something new and make something useful."]
];
const dayIndex=Math.floor((Date.UTC(now.getFullYear(),now.getMonth(),now.getDate())-Date.UTC(now.getFullYear(),0,0))/86400000)%dailyLines.length;
const item=wishes[month+"-"+day]||dailyLines[dayIndex];
 title.textContent=item[0];copy.textContent=item[1];
 date.textContent=now.toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"}).toUpperCase();
 if(wishes[month+"-"+day])section.classList.add("is-special");
 share?.addEventListener("click",async()=>{
  const text=item[0]+"\n"+item[1]+"\n— NIRVO | CREATE · BUILD · SOLVE";
  try{
   if(navigator.share)await navigator.share({title:"NIRVO Daily Wish",text});
   else if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(text);share.textContent="Copied to clipboard ✓";}
   else{window.prompt("Copy today's NIRVO wish:",text);}
  }catch(error){if(error?.name!=="AbortError")share.textContent="Share unavailable";}
 });
})();
