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
const params=new URLSearchParams(location.search);
const product=products.find(p=>p[5]===params.get("id"))||products[0];
const image=window.NIRVOProductVisual(product);
const safe=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
document.title=product[0]+" — NIRVO";
document.querySelector('meta[name="description"]').content=product[0]+" — "+product[2]+" Explore this NIRVO product concept.";
const root=document.getElementById("product-detail");
root.innerHTML=[
'<div class="detail-breadcrumb"><a href="index.html">Home</a><span>/</span><a href="products.html">Products</a><span>/</span><b>'+safe(product[0])+'</b></div>',
'<section class="standalone-product"><div class="standalone-visual"><img src="'+image+'" alt="'+safe(product[0])+' illustrative concept visual"><span class="visual-label">NIRVO / CONCEPT '+product[5]+'</span><span class="visual-watermark">N.</span><div class="visual-caption">ILLUSTRATIVE VISUAL · NOT FINISHED PRODUCT PHOTOGRAPHY</div></div>',
'<div class="standalone-info"><div class="standalone-kicker"><i></i> '+safe(product[1].toUpperCase())+' / NIRVO '+product[5]+'</div><h1>'+safe(product[0])+'</h1><p class="standalone-lead">'+safe(product[2])+'</p>',
'<div class="standalone-price"><span>INDICATIVE STARTING PRICE</span><b>'+safe(product[3])+'</b><small>Final quotation depends on confirmed configuration and availability.</small></div>',
'<div class="standalone-actions"><button type="button" class="primary" id="addConcept">Add to enquiry ↗</button><a class="secondary" href="https://wa.me/919447682486?text='+encodeURIComponent("Hello NIRVO, I am interested in "+product[0]+". Please share the configuration and quotation.")+'" target="_blank" rel="noopener noreferrer">Ask NIRVO ↗</a></div>',
'<div class="standalone-trust"><div><b>01</b><span>Discuss your use case</span></div><div><b>02</b><span>Confirm specifications</span></div><div><b>03</b><span>Receive a final quote</span></div></div></div></section>',
'<section class="standalone-more"><div><span class="section-label">PRODUCT OVERVIEW</span><h2>Designed around <em>the application.</em></h2><p>'+safe(product[2])+'</p></div><aside><span>IMPORTANT INFORMATION</span><h3>Concept, not confirmed stock.</h3><p>This page describes a proposed NIRVO product concept. The displayed image is illustrative. Exact components, technical specifications, manufacturing feasibility, availability, price and delivery timeline must be reviewed and confirmed with NIRVO before an order is accepted.</p><a href="contact.html">Discuss a configuration ↗</a></aside></section>',
'<section class="standalone-related"><div><div class="section-label">EXPLORE THE COLLECTION</div><h2>More from <em>NIRVO.</em></h2></div><a class="primary" href="products.html">Back to all products ↗</a></section>'
].join("");
document.getElementById("addConcept").addEventListener("click",()=>{
 let cart=[];try{cart=JSON.parse(localStorage.getItem("nirvo-cart")||"[]");if(!Array.isArray(cart))cart=[]}catch(e){cart=[]}
 const item=cart.find(x=>x.id===product[5]);if(item)item.qty++;else cart.push({id:product[5],name:product[0],price:product[4],qty:1});
 try{localStorage.setItem("nirvo-cart",JSON.stringify(cart));location.href="products.html?cart=open"}catch(e){alert("Please enable browser storage to add this concept to your enquiry.")}
});
