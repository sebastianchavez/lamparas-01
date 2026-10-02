/* ====================================================================
   Lumio · Funciones comunes a todas las páginas
   Cargado DESPUÉS de data.js
   ==================================================================== */

/* ---- Formato CLP (sin decimales, separador de miles con .) ---- */
const clp = n => "$" + Math.round(n).toLocaleString("es-CL");

/* ---- Carrito en localStorage ---- */
const CART_KEY = "lumio_cart";
function getCart()  { try { return JSON.parse(localStorage.getItem(CART_KEY) || "[]"); } catch { return []; } }
function saveCart(c){ localStorage.setItem(CART_KEY, JSON.stringify(c)); }
function addToCart(productId, qty = 1) {
  const cart = getCart();
  const existing = cart.find(i => i.productId === productId);
  if (existing) existing.qty += qty;
  else cart.push({ productId, qty });
  saveCart(cart);
  refreshCartBadge();
  toast("Producto agregado al carrito");
}
function removeFromCart(productId) {
  const cart = getCart().filter(i => i.productId !== productId);
  saveCart(cart);
  refreshCartBadge();
}
function updateQty(productId, delta) {
  const cart = getCart();
  const item = cart.find(i => i.productId === productId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart(cart);
}
function clearCart() {
  localStorage.removeItem(CART_KEY);
  refreshCartBadge();
}
function cartCount() { return getCart().reduce((s, i) => s + i.qty, 0); }
function cartSubtotal() {
  return getCart().reduce((s, i) => {
    const p = PRODUCTS.find(x => x.id === i.productId);
    return s + (p ? p.price * i.qty : 0);
  }, 0);
}

/* ---- Badge del carrito en el header ---- */
function refreshCartBadge() {
  const el = document.getElementById("cartBadge");
  if (!el) return;
  const count = cartCount();
  if (count > 0) {
    el.textContent = count;
    el.classList.remove("hidden");
    el.classList.add("flex");
  } else {
    el.classList.add("hidden");
    el.classList.remove("flex");
  }
}

/* ---- Toast reutilizable ---- */
function toast(msg, icon = "check_circle") {
  const t = document.createElement("div");
  t.className = "fixed bottom-6 right-6 z-[80] bg-accent text-white px-5 py-3 rounded-lg shadow-2xl text-sm font-bold flex items-center gap-2 transition-opacity";
  t.innerHTML = `<span class="material-symbols-outlined text-primary">${icon}</span>${msg}`;
  document.body.appendChild(t);
  setTimeout(() => { t.style.opacity = "0"; setTimeout(() => t.remove(), 300); }, 2500);
}

/* ---- HTML helpers (header, footer, mobile menu) ---- */
function _navLink(href, label, active = false) {
  return `<a href="${href}" class="text-sm font-bold ${active ? "text-primary border-b-2 border-primary pb-1" : "text-slate-700 hover:text-primary"}">${label}</a>`;
}

function renderHeader(activeKey) {
  const root = document.getElementById("appHeader");
  if (!root) return;
  const links = [
    { href: "index.html",       key: "index",       label: "Inicio" },
    { href: "productos.html",   key: "productos",   label: "Productos" },
    { href: "nosotros.html",    key: "nosotros",    label: "Nosotros" },
    { href: "contacto.html",    key: "contacto",    label: "Contacto" }
  ];
  root.innerHTML = `
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
    <div class="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
      <div class="flex items-center gap-8">
        <a href="index.html" class="flex items-center gap-2 text-slate-900">
          <div class="size-9 bg-primary rounded-lg flex items-center justify-center text-white">
            <span class="material-symbols-outlined fill-1">lightbulb</span>
          </div>
          <h2 class="text-slate-900 text-xl font-black leading-tight tracking-tight">Lumio</h2>
        </a>
      </div>
      <nav class="hidden lg:flex items-center gap-7">
        ${links.map(l => _navLink(l.href, l.label, activeKey === l.key)).join("")}
      </nav>
      <div class="flex items-center gap-2">
        <a href="perfil.html" class="hidden sm:flex items-center justify-center rounded-lg h-10 bg-slate-100 text-slate-700 hover:bg-slate-200 gap-2 text-sm font-bold px-3">
          <span class="material-symbols-outlined !text-2xl">person</span>
          <span class="hidden md:inline">${CURRENT_USER.fullName.split(" ")[0]}</span>
        </a>
        <a href="login.html" class="hidden sm:flex items-center justify-center rounded-lg h-10 bg-slate-100 text-slate-700 hover:bg-slate-200 gap-2 text-sm font-bold px-3">
          <span class="material-symbols-outlined !text-2xl">login</span>
          <span class="hidden md:inline">Ingresar</span>
        </a>
        <a href="carrito.html" class="relative flex items-center justify-center rounded-lg h-10 bg-slate-100 text-slate-700 hover:bg-slate-200 gap-2 text-sm font-bold px-3">
          <span class="material-symbols-outlined !text-2xl">shopping_cart</span>
          <span id="cartBadge" class="absolute -top-1 -right-1 hidden h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">0</span>
        </a>
        <button id="mobileMenuBtn" class="lg:hidden p-2 text-slate-700"><span class="material-symbols-outlined">menu</span></button>
      </div>
    </div>
    <div id="mobileMenu" class="hidden lg:hidden border-t border-slate-200 bg-white">
      <nav class="flex flex-col p-4 gap-3">
        ${links.map(l => `<a href="${l.href}" class="text-sm font-bold ${activeKey === l.key ? "text-primary" : "text-slate-700"}">${l.label}</a>`).join("")}
        <a href="perfil.html" class="text-sm font-bold text-slate-700">Mi perfil</a>
      </nav>
    </div>
  </header>`;
  document.getElementById("mobileMenuBtn")?.addEventListener("click", () => {
    document.getElementById("mobileMenu")?.classList.toggle("hidden");
  });
}

function renderFooter() {
  const root = document.getElementById("appFooter");
  if (!root) return;
  root.innerHTML = `
  <footer class="bg-accent text-slate-300">
    <div class="px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
      <div>
        <div class="flex items-center gap-2 mb-4">
          <div class="size-9 bg-primary rounded-lg flex items-center justify-center text-white"><span class="material-symbols-outlined fill-1">lightbulb</span></div>
          <h3 class="text-white text-lg font-black">Lumio</h3>
        </div>
        <p class="text-sm text-slate-400 mb-4">Iluminamos cada rincón de tu hogar. Diseño, calidez y eficiencia en cada lámpara.</p>
        <div class="flex gap-3">
          <a href="#" class="size-9 bg-slate-800 hover:bg-primary rounded-lg flex items-center justify-center text-white transition-colors"><span class="material-symbols-outlined !text-xl">facebook</span></a>
          <a href="#" class="size-9 bg-slate-800 hover:bg-primary rounded-lg flex items-center justify-center text-white transition-colors"><span class="material-symbols-outlined !text-xl">photo_camera</span></a>
          <a href="#" class="size-9 bg-slate-800 hover:bg-primary rounded-lg flex items-center justify-center text-white transition-colors"><span class="material-symbols-outlined !text-xl">smart_display</span></a>
        </div>
      </div>
      <div>
        <h4 class="text-white text-sm font-black mb-4 uppercase">Sobre nosotros</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="nosotros.html" class="hover:text-primary">Quiénes somos</a></li>
          <li><a href="nosotros.html" class="hover:text-primary">Nuestro equipo</a></li>
          <li><a href="contacto.html" class="hover:text-primary">Sucursales</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white text-sm font-black mb-4 uppercase">Ayuda</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="contacto.html" class="hover:text-primary">Contacto</a></li>
          <li><a href="perfil.html" class="hover:text-primary">Mis pedidos</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white text-sm font-black mb-4 uppercase">Legal</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="privacidad.html" class="hover:text-primary">Políticas de privacidad</a></li>
          <li><a href="terminos.html" class="hover:text-primary">Términos y condiciones</a></li>
        </ul>
        <h4 class="text-white text-sm font-black mb-2 mt-6 uppercase">Contacto</h4>
        <ul class="space-y-2 text-sm">
          <li class="flex items-center gap-2"><span class="material-symbols-outlined !text-base text-primary">location_on</span>Av. Italia 1234, Santiago</li>
          <li class="flex items-center gap-2"><span class="material-symbols-outlined !text-base text-primary">phone</span>+56 2 2345 6789</li>
          <li class="flex items-center gap-2"><span class="material-symbols-outlined !text-base text-primary">mail</span>contacto@lumio.cl</li>
        </ul>
      </div>
    </div>
    <div class="border-t border-slate-800 px-4 sm:px-6 lg:px-8 py-4 text-center text-xs text-slate-500">
      © 2026 Lumio. Todos los derechos reservados.
    </div>
  </footer>`;
}

/* ---- Template para cards de producto ---- */
function productCardHTML(p) {
  const discount = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
  return `
  <div class="bg-white rounded-xl overflow-hidden border border-slate-200 card-hover flex flex-col group">
    <a href="producto.html?id=${p.id}" class="relative aspect-square overflow-hidden bg-slate-100">
      <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover group-zoom"/>
      ${discount ? `<span class="absolute top-2 left-2 bg-primary text-white text-xs font-black px-2 py-1 rounded-md">-${discount}%</span>` : ""}
      <span class="absolute top-2 right-2 bg-white/90 backdrop-blur text-slate-700 text-xs font-bold px-2 py-1 rounded-md capitalize">${p.category}</span>
    </a>
    <div class="p-4 flex-1 flex flex-col">
      <a href="producto.html?id=${p.id}" class="font-bold text-slate-900 text-sm mb-2 hover:text-primary line-clamp-2 leading-tight">${p.name}</a>
      <div class="flex items-center gap-1 mb-2">
        <span class="material-symbols-outlined !text-base text-yellow-400 fill-1">star</span>
        <span class="text-xs font-bold text-slate-700">${p.rating}</span>
        <span class="text-xs text-slate-400">(${p.reviews})</span>
      </div>
      <div class="text-xs text-slate-500 mb-3">Marca: <span class="font-bold text-slate-700">${p.brand}</span></div>
      <div class="mt-auto">
        <div class="flex items-baseline gap-2 mb-3">
          <span class="text-xl font-black text-slate-900">${clp(p.price)}</span>
          ${p.oldPrice ? `<span class="text-xs text-slate-400 line-through">${clp(p.oldPrice)}</span>` : ""}
        </div>
        <button onclick="addToCart(${p.id})" class="w-full flex items-center justify-center gap-2 rounded-lg h-10 bg-primary text-white text-sm font-bold hover:bg-primary-dark transition-colors">
          <span class="material-symbols-outlined !text-base">add_shopping_cart</span>
          Agregar
        </button>
      </div>
    </div>
  </div>`;
}

/* ---- Helper para mini card de producto (perfil, pedido) ---- */
function productMiniCardHTML(p) {
  return `
  <a href="producto.html?id=${p.id}" class="size-20 rounded-lg overflow-hidden bg-slate-100 shrink-0 block">
    <img src="${p.image}" class="w-full h-full object-cover" alt="${p.name}"/>
  </a>`;
}

/* ---- Generador de barras de estrellas ---- */
function starsHTML(rating, size = "text-base") {
  let s = "";
  for (let i = 1; i <= 5; i++) {
    s += `<span class="material-symbols-outlined ${size} ${i <= Math.floor(rating) ? "fill-1 text-yellow-400" : "text-slate-300"}">star</span>`;
  }
  return s;
}

/* ---- Selector de tarjetas (envío/pago) ---- */
function setupCardSelection(groupId, cardClass) {
  const group = document.getElementById(groupId);
  if (!group) return;
  group.addEventListener("change", () => {
    group.querySelectorAll("." + cardClass).forEach(c => c.classList.remove("selected"));
    const checked = group.querySelector("input:checked")?.closest("." + cardClass);
    if (checked) checked.classList.add("selected");
  });
}

/* ---- Indicador "Abierto ahora" ---- */
function isStoreOpen() {
  const now = new Date();
  // Demo: abierto Lun-Vie 9-19, Sáb 10-14, Dom cerrado (Chile)
  const day = now.getDay();   // 0=Dom, 6=Sáb
  const hour = now.getHours();
  if (day === 0) return false;
  if (day === 6) return hour >= 10 && hour < 14;
  return hour >= 9 && hour < 19;
}

/* ---- Fallback de imágenes: si una URL externa falla,
   reemplaza el <img> por un placeholder SVG con icono de lámpara ---- */
function imgFallback(img) {
  if (img.dataset.fallbackApplied) return;
  img.dataset.fallbackApplied = "1";
  const w = img.clientWidth || img.width || 600;
  const h = img.clientHeight || img.height || 600;
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${w} ${h}'>
    <defs>
      <radialGradient id='g' cx='50%' cy='40%' r='60%'>
        <stop offset='0%' stop-color='%23fef3c7'/>
        <stop offset='55%' stop-color='%23fde68a'/>
        <stop offset='100%' stop-color='%23f59e0b'/>
      </radialGradient>
    </defs>
    <rect width='100%' height='100%' fill='url(%23g)'/>
    <g transform='translate(${w/2} ${h/2})' fill='%23ffffff' opacity='0.95'>
      <path d='M -45 -70 L 45 -70 L 35 -10 L -35 -10 Z' fill='%23ffffff'/>
      <rect x='-30' y='-10' width='60' height='10' fill='%23ffffff'/>
      <rect x='-4' y='0' width='8' height='60' fill='%23ffffff'/>
      <ellipse cx='0' cy='68' rx='28' ry='6' fill='%23ffffff'/>
      <circle cx='-45' cy='-90' r='6' fill='%23ffffff'/>
      <circle cx='45' cy='-90' r='6' fill='%23ffffff'/>
    </g>
  </svg>`;
  img.onerror = null;
  img.src = "data:image/svg+xml;utf8," + svg;
}

/* ---- Init común al final del body ---- */
document.addEventListener("DOMContentLoaded", () => {
  refreshCartBadge();
  // Aplicar fallback a cualquier <img> que ya esté roto al cargar
  document.querySelectorAll("img").forEach(img => {
    if (img.complete && img.naturalWidth === 0) imgFallback(img);
    img.addEventListener("error", () => imgFallback(img));
  });
  // Observer para imágenes agregadas dinámicamente
  const obs = new MutationObserver(() => {
    document.querySelectorAll("img:not([data-fallback-applied])").forEach(img => {
      img.addEventListener("error", () => imgFallback(img));
      if (img.complete && img.naturalWidth === 0) imgFallback(img);
    });
  });
  obs.observe(document.body, { childList: true, subtree: true });
});
