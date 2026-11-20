/* ===== EDIT THESE ===== */
var WA_NUMBER = "919593594429";           // WhatsApp number: country code + number, no + or spaces
var PRODUCTS = [                          // sample prices in ₹ — change to your real prices
  { id:"liquid", name:"Liquid Nolen Gur (Jhola)", img:"images/product-liquid.jpg", desc:"Fresh, pourable and smoky. Ideal for payesh, pitha and rice.", sizes:[{l:"500 g",p:350},{l:"1 kg",p:680}] },
  { id:"patali", name:"Patali Gur", img:"images/product-patali.jpg", desc:"Soft, fudgy solid gur with a deep caramel taste.", sizes:[{l:"500 g",p:380},{l:"1 kg",p:740}] },
  { id:"block",  name:"Nolen Gur Blocks", img:"images/product-blocks.jpg", desc:"Firm amber blocks and cubes. Lasts longer, easy to gift.", sizes:[{l:"500 g",p:360},{l:"1 kg",p:700}] },
  { id:"gift",   name:"Winter Gift Box", img:"images/product-gift.jpg", desc:"A mix of liquid and patali gur in a neat gift pack.", sizes:[{l:"2 × 500 g",p:780}] }
];

var AD_FORMATS = {
  "wa-status": {
    cls: "format-wa-status",
    bg: "images/hero.jpg",
    logo: "images/logo-emblem-gold.png",
    pill: "WINTER HARVEST LIVE",
    kicker: "শীতের সেরা উপহার · PURE KHEJUR GUR",
    title: "Taste the First Pour of Winter",
    desc: "100% pure, wood-fired Jhola & Patali Nolen Gur straight from West Bengal’s date palm groves.",
    label: "Format 01 · WhatsApp Status & Instagram Story (9:16)",
    panelTitle: "High-Converting Status & Story Creative",
    panelNote: "Designed for vertical mobile screens with the transparent gold SNG emblem floating cleanly over warm harvest photography.",
    caption: "🍯 *SHIV Nolen Gur (SNG) — Fresh Winter Batch is Here!* 🌴\n\nPure, dawn-tapped Khejur Gur slow-boiled over wood fire:\n✅ Liquid Jhola Gur (500g / 1kg)\n✅ Soft Fudgy Patali Gur\n✅ Winter Gift Hampers\n\nZero added sugar. Direct delivery from West Bengal.\n📲 Order on WhatsApp: https://wa.me/919593594429"
  },
  "insta-post": {
    cls: "format-insta-post",
    bg: "images/product-patali.jpg",
    logo: "images/logo-emblem-gold.png",
    pill: "SMALL BATCH · NO SUGAR",
    kicker: "AUTHENTIC BENGALI PATALI & JHOLA GUR",
    title: "Slow-Boiled Caramel Perfection",
    desc: "Rich, smoky, and melt-in-mouth Patali Gur crafted from single-origin winter date palm sap.",
    label: "Format 02 · Square Social Feed Ad (1:1)",
    panelTitle: "Instagram & Facebook Feed Showcase",
    panelNote: "Highlights texture and craftsmanship with the transparent SNG emblem badge for instant brand recall.",
    caption: "✨ Nothing says winter in Bengal like the aroma of fresh *Nolen Gur*!\n\nAt *SHIV Nolen Gur (SNG)*, every batch is tapped at dawn and slow-boiled in small batches for that authentic smoky caramel richness.\n\nDM or WhatsApp +91 95935 94429 to book your fresh winter pack today! 🌴🍯\n#NolenGur #KhejurGur #PataliGur #WinterInBengal #ShivNolenGur"
  },
  "jar-label": {
    cls: "format-jar-label",
    bg: "images/product-liquid.jpg",
    logo: "images/logo-emblem.png",
    pill: "BATCH NO. W26 · 100% PURE",
    kicker: "SHIV NOLEN GUR (SNG) · WEST BENGAL",
    title: "Pure Khejur Jhola Gur",
    desc: "Ingredients: 100% Pure Winter Date Palm Sap. Store in a cool, dry place or refrigerate after opening.",
    label: "Format 03 · Artisan Jar & Box Packaging Label",
    panelTitle: "Print-Ready Packaging & Jar Sticker Preview",
    panelNote: "Uses the original brown-and-gold transparent emblem on warm kraft/ivory stock—ready for bottles, patali boxes, and courier seals.",
    caption: "🏷️ *SHIV Nolen Gur (SNG)* — Artisan Glass Jar & Gift Box Packaging\n• 100% Pure Date Palm Jaggery\n• Harvested & Packed in West Bengal\n• Customer Care & Direct Orders: +91 95935 94429"
  },
  "corporate-gift": {
    cls: "format-corporate-gift",
    bg: "images/product-gift.jpg",
    logo: "images/logo-emblem-gold.png",
    pill: "FESTIVE & CORPORATE GIFTING",
    kicker: "CURATED WINTER WARMTH HAMPERS",
    title: "Gift Bengal’s Finest Winter Tradition",
    desc: "Custom-packed glass jar of Jhola Gur + artisanal Patali discs with personalized festive tags.",
    label: "Format 04 · Corporate & Family Gifting Campaign",
    panelTitle: "Bulk & Festive Gift Box Advertisement",
    panelNote: "Tailored for Poush Sankranti, weddings, and corporate hampers with custom bulk pricing via WhatsApp.",
    caption: "🎁 *Looking for a memorable winter gift?*\n\nGift the authentic taste of Bengal with *SHIV Nolen Gur (SNG) Winter Warmth Hampers* — featuring pure Jhola Nolen Gur in a glass jar paired with artisanal Patali Gur.\n\n📦 Custom bulk & corporate orders open now!\n📲 Enquire on WhatsApp: +91 95935 94429"
  }
};
/* ======================= */
var cart = [];
function $(s){return document.querySelector(s)}
function rs(n){return "₹"+n.toLocaleString("en-IN")}
function waLink(text){return "https://wa.me/"+WA_NUMBER+(text?"?text="+encodeURIComponent(text):"")}

document.querySelectorAll("[data-wa]").forEach(function(a){
  a.href=waLink("Hello, I would like to order SHIV Nolen Gur."); a.target="_blank"; a.rel="noopener";
});
var num=$("[data-wa-num]"); if(num){num.href=waLink(); num.textContent="+"+WA_NUMBER.replace(/^(\d{2})(\d{5})(\d+)$/,"$1 $2 $3")}
$("#yr").textContent=new Date().getFullYear();

/* products */
var grid=$("#productGrid");
PRODUCTS.forEach(function(p){
  var q=1, el=document.createElement("article"); el.className="card pcard fade";
  el.innerHTML='<figure class="ph"><img src="'+p.img+'" alt="'+p.name+'" loading="lazy" onerror="this.remove()"></figure>'+
  '<div class="pbody"><h3>'+p.name+'</h3><p>'+p.desc+'</p>'+
  '<select aria-label="Pack size for '+p.name+'">'+p.sizes.map(function(s,i){return '<option value="'+i+'">'+s.l+' – '+rs(s.p)+'</option>'}).join("")+'</select>'+
  '<div class="row"><div class="qty"><button type="button" aria-label="Less">−</button><span>1</span><button type="button" aria-label="More">+</button></div><button class="add" type="button">Add to order</button></div></div>';
  var sel=el.querySelector("select"), span=el.querySelector(".qty span"), b=el.querySelectorAll(".qty button");
  b[0].onclick=function(){q=Math.max(1,q-1);span.textContent=q};
  b[1].onclick=function(){q=Math.min(20,q+1);span.textContent=q};
  el.querySelector(".add").onclick=function(){
    var s=p.sizes[sel.value], key=p.id+"|"+s.l, hit=cart.filter(function(c){return c.key===key})[0];
    if(hit) hit.q+=q; else cart.push({key:key,name:p.name,size:s.l,price:s.p,q:q});
    render(); $("#order").scrollIntoView({behavior:"smooth"});
  };
  grid.appendChild(el);
});

function render(){
  var list=$("#cartList"), total=0;
  if(!cart.length){list.innerHTML='<p class="empty">Your order is empty. Add items from the products above.</p>'}
  else list.innerHTML=cart.map(function(c,i){total+=c.price*c.q;
    return '<div class="item"><div><b>'+c.name+'</b><small>'+c.size+' × '+c.q+' = '+rs(c.price*c.q)+'</small></div><button class="rm" data-i="'+i+'" aria-label="Remove">✕</button></div>'}).join("");
  list.querySelectorAll(".rm").forEach(function(b){b.onclick=function(){cart.splice(+b.dataset.i,1);render()}});
  $("#cartTotal").textContent=rs(total);
  $("#sendBtn").disabled=!cart.length; $("#sendHint").textContent=cart.length?"Opens WhatsApp with your order ready to send.":"Add at least one item to order.";
}
$("#sendBtn").onclick=function(){
  if(!cart.length) return;
  var total=0, lines=cart.map(function(c){total+=c.price*c.q;return "• "+c.name+" ("+c.size+") × "+c.q+" = "+rs(c.price*c.q)});
  var msg="Hello, I would like to order SHIV Nolen Gur:\n"+lines.join("\n")+"\nEstimated total: "+rs(total);
  if($("#cName").value.trim()) msg+="\nName: "+$("#cName").value.trim();
  if($("#cAddr").value.trim()) msg+="\nAddress: "+$("#cAddr").value.trim();
  if($("#cNote").value.trim()) msg+="\nNote: "+$("#cNote").value.trim();
  window.open(waLink(msg),"_blank","noopener");
};
render();

/* Brand Advertising Format Switcher */
function setAdFormat(key){
  var d = AD_FORMATS[key]; if(!d) return;
  var card = $("#adCanvas");
  card.className = "ad-card " + d.cls;
  $("#adBgImg").src = d.bg;
  $("#adLogoImg").src = d.logo;
  $("#adPill").textContent = d.pill;
  $("#adKicker").textContent = d.kicker;
  $("#adTitle").textContent = d.title;
  $("#adDesc").textContent = d.desc;
  $("#adFormatLabel").textContent = d.label;
  $("#adPanelTitle").textContent = d.panelTitle;
  $("#adPanelNote").textContent = d.panelNote;
  $("#adCaptionText").value = d.caption;
  $("#shareWaAdBtn").href = "https://wa.me/?text=" + encodeURIComponent(d.caption);
  document.querySelectorAll(".ad-tab").forEach(function(t){
    t.classList.toggle("active", t.dataset.ad === key);
  });
}
document.querySelectorAll(".ad-tab").forEach(function(btn){
  btn.onclick = function(){ setAdFormat(btn.dataset.ad); };
});
$("#copyAdBtn").onclick = function(){
  var txt = $("#adCaptionText").value;
  navigator.clipboard.writeText(txt).then(function(){
    $("#copyAdBtn").textContent = "Copied!";
    setTimeout(function(){ $("#copyAdBtn").textContent = "Copy Text"; }, 1800);
  });
};
setAdFormat("wa-status");

/* scroll fade-in */
var fades=document.querySelectorAll(".fade,.sec .card,.why li");
fades.forEach(function(e){e.classList.add("fade")});
if("IntersectionObserver" in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12});fades.forEach(function(e){io.observe(e)})}
else fades.forEach(function(e){e.classList.add("in")});
