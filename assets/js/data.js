/* ====================================================================
   Lumio · Datos mock compartidos por todas las páginas
   Cargado ANTES que assets/js/main.js
   ==================================================================== */

// Catálogo de lámparas (id, nombre, categoría, precio, oldPrice, rating, reviews, image, stock, marca, descripción, destacado)
const PRODUCTS = [
  // -------- De mesa --------
  {
    id: 1,
    name: "Lámpara de Escritorio LED Nórdica",
    category: "mesa",
    price: 24990,
    oldPrice: 29990,
    rating: 4.8,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80",
    stock: 32,
    brand: "Nordlys",
    featured: true,
    description: "Lámpara de escritorio con luz LED regulable y brazo articulado. Tres temperaturas de color (cálida, neutra y fría) y cinco niveles de intensidad. Base con carga inalámbrica Qi para smartphones compatibles."
  },
  {
    id: 2,
    name: "Lámpara de Mesa Bohemia",
    category: "mesa",
    price: 18990,
    oldPrice: null,
    rating: 4.6,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&q=80",
    stock: 24,
    brand: "Atelier",
    featured: false,
    description: "Pantalla tejida en hilo de algodón crudo sobre base de cerámica mate. Difusión suave y cálida, perfecta para dormitorios y living. Incluye ampolleta LED E27 de 6W."
  },
  {
    id: 3,
    name: "Flexo de Estudio Profesional",
    category: "mesa",
    price: 39990,
    oldPrice: 47990,
    rating: 4.9,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80",
    stock: 14,
    brand: "LumenPro",
    featured: false,
    description: "Flexo de estudio con lupa integrada y luz LED de alto CRI (95+). Ideal para lectura, manualidades y trabajo de detalle. Brazo con doble articulación y base con peso."
  },

  // -------- De pie --------
  {
    id: 4,
    name: "Lámpara de Pie Trípode Madera",
    category: "pie",
    price: 59990,
    oldPrice: 72990,
    rating: 4.7,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=600&q=80",
    stock: 16,
    brand: "Nordlys",
    featured: true,
    description: "Lámpara de pie con base trípode de madera de roble y pantalla de lino beige. Altura 1,55 m. Interruptor de pie y cable textil trenzado."
  },
  {
    id: 5,
    name: "Lámpara de Pie Arqueada Negra",
    category: "pie",
    price: 89990,
    oldPrice: null,
    rating: 4.8,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1543198126-a4cc6c1fd0a4?w=600&q=80",
    stock: 9,
    brand: "Halo",
    featured: true,
    description: "Diseño escultural con arco de metal negro mate y contrapeso esférico. Pantalla orientable. Perfecta para iluminar un sofá o una mesa auxiliar. Altura 2 m."
  },
  {
    id: 6,
    name: "Lámpara de Lectura Minimalista",
    category: "pie",
    price: 34990,
    oldPrice: 39990,
    rating: 4.5,
    reviews: 73,
    image: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?w=600&q=80",
    stock: 20,
    brand: "Atelier",
    featured: false,
    description: "Lámpara de lectura con cabezal orientable y dimmer táctil. Estructura de aluminio cepillado, base estable. Ideal junto a un sillón o en una habitación."
  },

  // -------- De techo --------
  {
    id: 7,
    name: "Plafón LED Redondo 40 cm",
    category: "techo",
    price: 29990,
    oldPrice: 36990,
    rating: 4.6,
    reviews: 134,
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&q=80",
    stock: 22,
    brand: "Halo",
    featured: true,
    description: "Plafón LED de techo con difusor opal y marco en aluminio satinado. 24W, 2400 lúmenes, luz neutra regulable. Instalación en superficie, ideal para pasillos y dormitorios."
  },
  {
    id: 8,
    name: "Plafón Cuadrado Decorativo",
    category: "techo",
    price: 38990,
    oldPrice: null,
    rating: 4.7,
    reviews: 81,
    image: "https://images.unsplash.com/photo-1524634126442-357e0eac3c14?w=600&q=80",
    stock: 18,
    brand: "LumenPro",
    featured: false,
    description: "Plafón cuadrado de 50 cm con diseño geométrico en relieve. Iluminación LED 36W de bajo consumo, 3 temperaturas de color con memoria."
  },
  {
    id: 9,
    name: "Spot Empotrable Orientable",
    category: "techo",
    price: 14990,
    oldPrice: 18990,
    rating: 4.4,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80",
    stock: 40,
    brand: "Halo",
    featured: false,
    description: "Set de 3 spots empotrables LED orientables 360°. 7W cada uno, 3000K, marco blanco mate. Driver incluido y fácil instalación."
  },

  // -------- Colgantes --------
  {
    id: 10,
    name: "Colgante de Vidrio Ámbar",
    category: "colgantes",
    price: 45990,
    oldPrice: 54990,
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&q=80",
    stock: 12,
    brand: "Atelier",
    featured: true,
    description: "Colgante individual con pantalla de vidrio soplado color ámbar y cuerpo de latón envejecido. Cable textil 1,5 m regulable. Crea un ambiente íntimo y sofisticado."
  },
  {
    id: 11,
    name: "Colgante de Cobre Minimalista",
    category: "colgantes",
    price: 32990,
    oldPrice: null,
    rating: 4.6,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1530603907829-659ab6ee0748?w=600&q=80",
    stock: 19,
    brand: "Nordlys",
    featured: false,
    description: "Lámpara colgante con campana de cobre pulido y detalle interior blanco. Estilo industrial moderno, perfecta sobre una mesa de comedor o una isla de cocina."
  },
  {
    id: 12,
    name: "Colgante Múltiple Negro Mate",
    category: "colgantes",
    price: 79990,
    oldPrice: 94990,
    rating: 4.8,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1573663920076-29b8ae7cad95?w=600&q=80",
    stock: 8,
    brand: "Halo",
    featured: false,
    description: "Conjunto de 5 colgantes con pantallas cónicas de metal negro mate a distintas alturas. Rosetón central rectangular. Perfecto para comedores largos."
  },

  // -------- LED --------
  {
    id: 13,
    name: "Tira LED Inteligente 5m RGB",
    category: "led",
    price: 19990,
    oldPrice: 24990,
    rating: 4.5,
    reviews: 198,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80",
    stock: 35,
    brand: "LumenPro",
    featured: true,
    description: "Tira LED de 5 metros con 16 millones de colores, control por app y asistentes de voz. Adhesivo 3M y adaptador incluidos. Sincronización con música."
  },
  {
    id: 14,
    name: "Ampolleta LED Inteligente E27",
    category: "led",
    price: 9990,
    oldPrice: null,
    rating: 4.7,
    reviews: 245,
    image: "https://images.unsplash.com/photo-1551734413-4b1a64f75e88?w=600&q=80",
    stock: 60,
    brand: "LumenPro",
    featured: false,
    description: "Ampolleta LED inteligente 9W con rosca E27. RGB + blanco ajustable, control WiFi, compatible con Alexa y Google Home. Pack de 2 unidades."
  },
  {
    id: 15,
    name: "Panel LED Slim 60x60 cm",
    category: "led",
    price: 34990,
    oldPrice: 42990,
    rating: 4.6,
    reviews: 76,
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80",
    stock: 14,
    brand: "Halo",
    featured: false,
    description: "Panel LED ultradelgado 60x60 cm para cielos falsos. 48W, 4800 lúmenes, marco blanco. Driver incluido, instalación en cielos modulares."
  },

  // -------- Decorativas --------
  {
    id: 16,
    name: "Lámpara de Sal del Himalaya",
    category: "decorativas",
    price: 22990,
    oldPrice: 27990,
    rating: 4.4,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1602874801006-622f5c0a8cda?w=600&q=80",
    stock: 22,
    brand: "Atelier",
    featured: true,
    description: "Lámpara natural tallada en bloque de sal rosa del Himalaya. Emite un cálido resplandor anaranjado y, según la tradición, ioniza el ambiente. Base de madera noble y ampolleta incluida."
  },
  {
    id: 17,
    name: "Globo Terráqueo Iluminado",
    category: "decorativas",
    price: 39990,
    oldPrice: null,
    rating: 4.5,
    reviews: 58,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    stock: 11,
    brand: "Atelier",
    featured: false,
    description: "Globo terráqueo con mapa político clásico y luz LED interior. Base de madera con meridianas de latón. Funciona como pieza decorativa y de estudio."
  },
  {
    id: 18,
    name: "Lámpara de Lava Retro Multicolor",
    category: "decorativas",
    price: 17990,
    oldPrice: 22990,
    rating: 4.3,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1573663920076-29b8ae7cad95?w=600&q=80",
    stock: 18,
    brand: "Halo",
    featured: false,
    description: "Icónica lámpara de lava con base cromada y vaso de cristal. Mezcla de cera multicolor que crea movimiento hipnótico. Bombilla de 25W incluida."
  }
];

// Reseñas (id, productId, user, rating, date, comment, avatar)
const REVIEWS = [
  { id: 1,  productId: 1,  user: "Camila Rojas",      rating: 5, date: "2026-08-15", comment: "Excelente lámpara, el brazo articulado es súper práctico. La luz cálida es perfecta para trabajar de noche.", avatar: "CR" },
  { id: 2,  productId: 1,  user: "Diego Espinoza",    rating: 4, date: "2026-07-22", comment: "Muy buena relación calidad-precio. La carga inalámbrica funciona genial con mi iPhone.", avatar: "DE" },
  { id: 3,  productId: 1,  user: "Francisca Muñoz",   rating: 5, date: "2026-06-10", comment: "Es la segunda que compro. La primera la tengo hace 3 años y sigue perfecta.", avatar: "FM" },
  { id: 4,  productId: 4,  user: "Tomás Herrera",     rating: 5, date: "2026-09-01", comment: "El trípode de roble se ve precioso. Le da un toque nórdico increíble al living.", avatar: "TH" },
  { id: 5,  productId: 4,  user: "Valentina Soto",    rating: 5, date: "2026-08-18", comment: "Quedó espectacular junto al sofá. La luz es muy cálida y envolvente.", avatar: "VS" },
  { id: 6,  productId: 5,  user: "Andrés Carvajal",   rating: 4, date: "2026-08-28", comment: "Diseño imponente. El montaje fue sencillo y queda muy firme en el piso.", avatar: "AC" },
  { id: 7,  productId: 7,  user: "Lorena Pizarro",    rating: 4, date: "2026-07-30", comment: "Ilumina muy bien el dormitorio completo. Quedó elegante y moderno.", avatar: "LP" },
  { id: 8,  productId: 7,  user: "Matías Vergara",    rating: 5, date: "2026-09-05", comment: "Perfecto, instalación rápida y la luz es súper pareja, sin sombras.", avatar: "MV" },
  { id: 9,  productId: 10, user: "Paula Sepúlveda",   rating: 5, date: "2026-08-12", comment: "El vidrio ámbar es una belleza, parece una joyería. Estoy enamorada.", avatar: "PS" },
  { id: 10, productId: 13, user: "Renato Tapia",      rating: 5, date: "2026-09-10", comment: "La sincronización con la música es lo mejor, ambienta cualquier reunión.", avatar: "RT" },
  { id: 11, productId: 13, user: "Isidora León",      rating: 4, date: "2026-08-25", comment: "Buena tira LED, el adhesivo se pega bien. Faltó un poco más de largo pero todo ok.", avatar: "IL" },
  { id: 12, productId: 16, user: "Sebastián Ríos",    rating: 5, date: "2026-08-05", comment: "La lámpara de sal es preciosa, el color cálido que entrega es único en la pieza.", avatar: "SR" }
];

// Pedidos del usuario (id, date, status, total, shipping, payment, address, products[])
const ORDERS = [
  { id: "LU-2026-0142", date: "2026-09-15", status: "delivered", total: 84970,  shipping: 3990, payment: "Tarjeta de crédito",     address: "Av. Las Condes 4520, Of. 12, Las Condes", products: [1, 4, 16] },
  { id: "LU-2026-0189", date: "2026-09-22", status: "shipped",   total: 119970, shipping: 3990, payment: "Transferencia bancaria", address: "Av. Las Condes 4520, Of. 12, Las Condes", products: [10, 12] },
  { id: "LU-2026-0201", date: "2026-09-23", status: "pending",   total: 24990,  shipping: 3990, payment: "Webpay",                address: "Av. Las Condes 4520, Of. 12, Las Condes", products: [2] },
  { id: "LU-2026-0098", date: "2026-07-12", status: "delivered", total: 89990,  shipping: 0,    payment: "Tarjeta de débito",     address: "Av. Las Condes 4520, Of. 12, Las Condes", products: [5] },
  { id: "LU-2026-0045", date: "2026-05-08", status: "delivered", total: 64980,  shipping: 0,    payment: "Efectivo",              address: "Av. Las Condes 4520, Of. 12, Las Condes", products: [11, 6] }
];

// Usuario logueado (mock)
const CURRENT_USER = {
  name:  "Camila",
  lastName: "Soto",
  fullName: "Camila Soto",
  email: "cliente@lumio.cl",
  phone: "+56 9 6234 5678",
  initials: "CS",
  rut: "15.678.432-1",
  memberSince: "2023"
};

// Catálogo de categorías con íconos
const CATEGORIES = [
  { key: "mesa",        label: "De mesa",     icon: "light" },
  { key: "pie",         label: "De pie",      icon: "floor_lamp" },
  { key: "techo",       label: "De techo",    icon: "ceiling_light" },
  { key: "colgantes",   label: "Colgantes",   icon: "pendant_lamp" },
  { key: "led",         label: "LED",         icon: "led" },
  { key: "decorativas", label: "Decorativas", icon: "auto_awesome" }
];

// Estados de pedido
const ORDER_STATUS = {
  delivered: { label: "Entregado",  class: "bg-green-100 text-green-700",   icon: "check_circle" },
  shipped:   { label: "En camino",  class: "bg-blue-100 text-blue-700",     icon: "local_shipping" },
  pending:   { label: "Pendiente",  class: "bg-yellow-100 text-yellow-700", icon: "schedule" }
};
