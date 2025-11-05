"use client";

import Image from 'next/image';

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Home() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const [showOtherCountry, setShowOtherCountry] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Hero parallax
  const heroScale = useTransform(smoothProgress, [0, 0.15], [1, 1.2]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  
  // Section 1
  const section1Scale = useTransform(smoothProgress, [0.15, 0.3], [0.8, 1]);
  const section1Opacity = useTransform(smoothProgress, [0.15, 0.25], [0, 1]);
  
  // Section 2
  const section2Scale = useTransform(smoothProgress, [0.3, 0.45], [0.8, 1]);
  const section2Opacity = useTransform(smoothProgress, [0.3, 0.4], [0, 1]);

  const translations = {
    es: {
      hero: {
        title: "Tu puente hacia Japón",
        subtitle: "Compra cualquier producto japonés. Lo enviamos a cualquier parte del mundo.",
        cta: "Solicitar cotización"
      },
      section1: {
        title: "Productos exclusivos",
        subtitle: "Accede a miles de productos que solo existen en Japón",
        features: [
          "Figuras coleccionables limitadas",
          "Manga y libros originales",
          "Tecnología japonesa exclusiva",
          "Cosméticos J-Beauty"
        ]
      },
      section2: {
        title: "Envío simple. Seguro. Rápido.",
        subtitle: "Dos opciones de envío para que elijas lo que mejor se adapte a ti",
        shipping: [
          { type: "Aéreo Express", time: "5-10 días", icon: "✈️" },
          { type: "Marítimo", time: "2-4 meses", icon: "🚢", badge: "Ahorra 60%" }
        ]
      },
      section3: {
        title: "Proceso transparente",
        subtitle: "Cuatro pasos simples desde tu solicitud hasta tu puerta",
        steps: [
          { num: "1", title: "Envías URL", desc: "Del producto que deseas comprar" },
          { num: "2", title: "Cotización", desc: "Recibes precio en 24 horas" },
          { num: "3", title: "Pago", desc: "Método seguro de tu preferencia" },
          { num: "4", title: "Entrega", desc: "Rastreo en tiempo real" }
        ]
      },
      stores: "Nuestras tiendas favoritas",
storesDesc: "Compramos en estas tiendas y muchas más de Japón",
      popular: "Categorías populares",
      quoteTitle: "Solicita tu cotización",
      quoteDesc: "Respuesta en menos de 24 horas",
      fullName: "Nombre completo",
      email: "Correo electrónico",
      country: "País",
      selectCountry: "Selecciona tu país",
      otherCountry: "Especifica tu país",
      productLink: "URL del producto",
      productPlaceholder: "https://www.amazon.co.jp/...",
      additionalComments: "Comentarios adicionales",
      commentsPlaceholder: "Cantidad, color, talla...",
      submitButton: "Enviar solicitud",
      footer: "Japan Bridge Co. • Tu puente hacia Japón",
      trustBadge: "Servicio verificado",
      worldwide: "Envíos internacionales"
    },
    en: {
      hero: {
        title: "Your bridge to Japan",
        subtitle: "Buy any Japanese product. We ship it anywhere in the world.",
        cta: "Request quote"
      },
      section1: {
        title: "Exclusive products",
        subtitle: "Access thousands of products that only exist in Japan",
        features: [
          "Limited edition collectible figures",
          "Original manga and books",
          "Exclusive Japanese technology",
          "J-Beauty cosmetics"
        ]
      },
      section2: {
        title: "Shipping simple. Secure. Fast.",
        subtitle: "Two shipping options for you to choose what suits you best",
        shipping: [
          { type: "Express Air", time: "5-10 days", icon: "✈️" },
          { type: "Sea", time: "2-4 months", icon: "🚢", badge: "Save 60%" }
        ]
      },
      section3: {
        title: "Transparent process",
        subtitle: "Four simple steps from your request to your door",
        steps: [
          { num: "1", title: "Send URL", desc: "Of the product you want" },
          { num: "2", title: "Quote", desc: "Receive price in 24 hours" },
          { num: "3", title: "Payment", desc: "Secure method of your choice" },
          { num: "4", title: "Delivery", desc: "Real-time tracking" }
        ]
      },
      stores: "Our favorite stores",
storesDesc: "We shop at these stores and many more in Japan",
      popular: "Popular categories",
      quoteTitle: "Request your quote",
      quoteDesc: "Response in less than 24 hours",
      fullName: "Full name",
      email: "Email address",
      country: "Country",
      selectCountry: "Select your country",
      otherCountry: "Specify your country",
      productLink: "Product URL",
      productPlaceholder: "https://www.amazon.co.jp/...",
      additionalComments: "Additional comments",
      commentsPlaceholder: "Quantity, color, size...",
      submitButton: "Submit request",
      footer: "Japan Bridge Co. • Your bridge to Japan",
      trustBadge: "Verified service",
      worldwide: "International shipping"
    }
  };

  const t = translations[lang];

  const categories = [
    { img: "/categories/figura.jpg", title: lang === "es" ? "Figuras" : "Figures" },
    { img: "/categories/videojuegos.jpg", title: lang === "es" ? "Videojuegos" : "Games" },
    { img: "/categories/peluches.jpg", title: lang === "es" ? "Peluches" : "Plushies" },
    { img: "/categories/cosmeticos.jpg", title: lang === "es" ? "Cosméticos" : "Cosmetics" },
    { img: "/categories/manga.jpg", title: "Manga" },
    { img: "/categories/tecnologia.jpg", title: lang === "es" ? "Tecnología" : "Tech" },
    { img: "/categories/ropa.jpg", title: lang === "es" ? "Ropa" : "Fashion" },
    { img: "/categories/snacks.jpg", title: "Snacks" },
  ];

  return (
    <div ref={containerRef} className="relative bg-white">
      
      {/* HEADER - Estilo Apple */}
      <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-8">
            <div className="text-xl font-semibold text-gray-900">Japan Bridge</div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#products" className="text-gray-600 hover:text-gray-900 transition-colors">
                {lang === "es" ? "Productos" : "Products"}
              </a>
              <a href="#shipping" className="text-gray-600 hover:text-gray-900 transition-colors">
                {lang === "es" ? "Envíos" : "Shipping"}
              </a>
              <a href="#quote" className="text-gray-600 hover:text-gray-900 transition-colors">
                {lang === "es" ? "Cotizar" : "Quote"}
              </a>
            </nav>
          </div>
          
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 transition-all hover:bg-gray-200"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
        </div>
      </header>

      <main>
        
        {/* HERO - Estilo Apple */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
          {/* Imagen de fondo con parallax */}
          <motion.div 
  className="absolute inset-0"
  style={{ scale: heroScale, opacity: heroOpacity }}
>
  <Image 
    src="/hero.jpg"
    alt="Japan Bridge Hero"
    fill
    className="object-cover"
    quality={90}
    priority
  />
  {/* Overlay oscuro opcional para que el texto se lea mejor */}
  <div className="absolute inset-0 bg-black/40" />
</motion.div>

          {/* Texto hero */}
          <motion.div 
            className="relative z-10 text-center px-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="mb-4 text-6xl font-bold text-white md:text-7xl lg:text-8xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {t.hero.title}
            </motion.h1>
            <motion.p 
              className="mb-8 text-xl text-gray-300 md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t.hero.subtitle}
            </motion.p>
            <motion.a
              href="#quote"
              className="inline-block rounded-full bg-red-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-red-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.hero.cta}
            </motion.a>
          </motion.div>
        </section>

        {/* SECCIÓN 1 - Productos exclusivos */}
        <section id="products" className="relative min-h-screen flex items-center bg-white overflow-hidden">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl lg:text-7xl">
                {t.section1.title}
              </h2>
              <p className="mb-8 text-xl text-gray-600">
                {t.section1.subtitle}
              </p>
              <div className="space-y-4">
                {t.section1.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-red-600" />
                    <span className="text-lg text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
  className="relative aspect-square"
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, margin: "-200px" }}
  transition={{ duration: 0.6 }}
>
  <Image 
    src="/figuras.jpg" 
    alt="Figura japonesa"
    fill
    className="rounded-3xl object-contain"
    quality={85}
  />
</motion.div>
          </div>
        </section>

        {/* SECCIÓN 2 - Envíos */}
        <section id="shipping" className="relative min-h-screen flex items-center bg-gray-50 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 py-24 text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl lg:text-7xl">
                {t.section2.title}
              </h2>
              <p className="mb-16 text-xl text-gray-600">
                {t.section2.subtitle}
              </p>

              <div className="grid gap-8 md:grid-cols-2">
                {t.section2.shipping.map((ship, i) => (
                  <motion.div
                    key={i}
                    className="relative overflow-hidden rounded-3xl bg-white p-12 shadow-sm"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {ship.badge && (
                      <div className="absolute top-4 right-4 rounded-full bg-red-600 px-4 py-1 text-sm font-semibold text-white">
                        {ship.badge}
                      </div>
                    )}
                    <div className="mb-6 text-6xl">{ship.icon}</div>
                    <h3 className="mb-2 text-3xl font-bold text-gray-900">{ship.type}</h3>
                    <p className="text-xl text-gray-600">{ship.time}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECCIÓN 3 - Proceso */}
        <section className="relative bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
                {t.section3.title}
              </h2>
              <p className="mb-16 text-xl text-gray-600">
                {t.section3.subtitle}
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {t.section3.steps.map((step, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-2xl font-bold text-white">
                      {step.num}
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TIENDAS */}
        <section className="bg-gray-50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div 
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-4 text-4xl font-bold text-gray-900">{t.stores}</h2>
              <p className="text-lg text-gray-600">{t.storesDesc}</p>
            </motion.div>

            <div className="grid grid-cols-3 gap-8 md:grid-cols-6">
  {[
    { name: "amazon-jp", url: "https://www.amazon.co.jp" },
    { name: "rakuten", url: "https://www.rakuten.co.jp" },
    { name: "mercari", url: "https://www.mercari.com/jp/" },
    { name: "amiami", url: "https://www.amiami.com" },
    { name: "surugaya", url: "https://www.suruga-ya.jp" },
    { name: "animate", url: "https://www.animate.co.jp" }
  ].map((store, i) => (
    <motion.a
      key={store.name}
      href={store.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, delay: i * 0.03 }}
      whileHover={{ y: -5 }}
    >
            <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-white p-3 shadow-sm grayscale transition-all group-hover:shadow-md group-hover:grayscale-0">
        <Image 
          src={`/logos/${store.name}.png`}
          alt={store.name}
          fill
          className="object-contain p-2"
        />
      </div>
      <span className="text-xs capitalize text-gray-500 group-hover:text-gray-900">
        {store.name.replace("-", " ")}
      </span>
    </motion.a>
  ))}
</div>
          </div>
        </section>

        {/* CATEGORÍAS */}
        <section className="bg-white py-24">
  <div className="mx-auto max-w-7xl px-6">
    
    <style jsx global>{`
      .swiper-pagination {
        bottom: 0 !important;
        position: relative !important;
        margin-top: 3rem !important;
      }

      .swiper-pagination-bullet {
        background: #dc2626 !important;
        opacity: 0.4;
      }

      .swiper-pagination-bullet-active {
        opacity: 1 !important;
      }
    `}</style>

    <motion.div 
      className="mb-16 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-150px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="mb-4 text-4xl font-bold text-gray-900">{t.popular}</h2>
    </motion.div>

            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              className="pb-12"
            >
              {categories.map((cat, i) => (
                <SwiperSlide key={i}>
  <motion.div
    className="group cursor-pointer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.4, delay: i * 0.05 }}
  >
    <div className="relative mb-4 aspect-square overflow-hidden rounded-3xl bg-gray-100">
      <Image 
        src={cat.img}
        alt={cat.title}
        fill
        className="object-cover"
      />
    </div>
    <h3 className="text-center text-lg font-semibold text-gray-900">
      {cat.title}
    </h3>
  </motion.div>
</SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* FORMULARIO */}
        <section id="quote" className="bg-gray-50 py-24">
          <div className="mx-auto max-w-3xl px-6">
            <motion.div 
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-4 text-4xl font-bold text-gray-900">{t.quoteTitle}</h2>
              <p className="text-lg text-gray-600">{t.quoteDesc}</p>
            </motion.div>

            <motion.form 
              action="https://formspree.io/f/xldoabyo" 
              method="POST" 
              className="rounded-3xl bg-white p-8 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.6 }}
            >
              <input type="hidden" name="_language" value={lang} />
{/* Honeypot anti-spam */}
<input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

<div className="mb-6">
  <label htmlFor="nombre" className="mb-2 block text-sm font-semibold text-gray-900">
    {t.fullName}
  </label>
  <input
    type="text"
    id="nombre"
    name="nombre"
    required
    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20"
  />
</div>

              <div className="mb-6">
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-900">
                  {t.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="pais" className="mb-2 block text-sm font-semibold text-gray-900">
                  {t.country}
                </label>
                <select
                  id="pais"
                  name="pais"
                  required
                  onChange={(e) => setShowOtherCountry(e.target.value === "otro")}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20"
                >
                  <option value="">{t.selectCountry}</option>
                  <optgroup label={lang === "es" ? "América del Norte" : "North America"}>
                    <option value="USA">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="Mexico">Mexico</option>
                  </optgroup>
                  <optgroup label={lang === "es" ? "América Central" : "Central America"}>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Panama">Panama</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Honduras">Honduras</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Belize">Belize</option>
                  </optgroup>
                  <optgroup label={lang === "es" ? "América del Sur" : "South America"}>
                    <option value="Argentina">Argentina</option>
                    <option value="Brasil">Brazil</option>
                    <option value="Chile">Chile</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Peru">Peru</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Uruguay">Uruguay</option>
                  </optgroup>
                  <optgroup label={lang === "es" ? "Caribe" : "Caribbean"}>
                    <option value="Cuba">Cuba</option>
                    <option value="República Dominicana">Dominican Republic</option>
                    <option value="Puerto Rico">Puerto Rico</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Trinidad y Tobago">Trinidad and Tobago</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Barbados">Barbados</option>
                  </optgroup>
                  <optgroup label={lang === "es" ? "Europa Occidental" : "Western Europe"}>
                    <option value="UK">United Kingdom</option>
                    <option value="Ireland">Ireland</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                    <option value="Spain">Spain</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Austria">Austria</option>
                    <option value="Luxembourg">Luxembourg</option>
                  </optgroup>
                  <optgroup label={lang === "es" ? "Europa del Norte" : "Northern Europe"}>
                    <option value="Sweden">Sweden</option>
                    <option value="Norway">Norway</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Finland">Finland</option>
                    <option value="Iceland">Iceland</option>
                  </optgroup>
                  <optgroup label={lang === "es" ? "Europa del Sur" : "Southern Europe"}>
                    <option value="Italy">Italy</option>
                    <option value="Greece">Greece</option>
                    <option value="Malta">Malta</option>
                  </optgroup>
                  <optgroup label={lang === "es" ? "Europa del Este" : "Eastern Europe"}>
                    <option value="Poland">Poland</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Romania">Romania</option>
                  </optgroup>
                  <optgroup label={lang === "es" ? "Asia Oriental" : "East Asia"}>
                    <option value="China">China</option>
                    <option value="South Korea">South Korea</option>
                    <option value="Taiwan">Taiwan</option>
                    <option value="Hong Kong">Hong Kong</option>
                  </optgroup>
                  <optgroup label={lang === "es" ? "Sudeste Asiático" : "Southeast Asia"}>
                    <option value="Singapore">Singapore</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Vietnam">Vietnam</option>
                  </optgroup>
                  <optgroup label={lang === "es" ? "Asia del Sur" : "South Asia"}>
                    <option value="India">India</option>
                  </optgroup>
                  <optgroup label={lang === "es" ? "Medio Oriente" : "Middle East"}>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Israel">Israel</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Kuwait">Kuwait</option>
                  </optgroup>
                  <optgroup label={lang === "es" ? "Oceanía" : "Oceania"}>
                    <option value="Australia">Australia</option>
                    <option value="New Zealand">New Zealand</option>
                  </optgroup>
                  <optgroup label={lang === "es" ? "África" : "Africa"}>
                    <option value="South Africa">South Africa</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Egypt">Egypt</option>
                  </optgroup>
                  <option value="otro">{lang === "es" ? "Otro" : "Other"}</option>
                </select>
              </div>

              {showOtherCountry && (
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  <label htmlFor="otro_pais" className="mb-2 block text-sm font-semibold text-gray-900">
                    {t.otherCountry}
                  </label>
                  <input
                    type="text"
                    id="otro_pais"
                    name="otro_pais"
                    required
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20"
                  />
                </motion.div>
              )}

              <div className="mb-6">
  <label htmlFor="producto" className="mb-2 block text-sm font-semibold text-gray-900">
    {t.productLink}
  </label>
  <p className="mb-2 text-xs text-gray-500">
    {lang === "es" ? "Puedes incluir múltiples productos (uno por línea)" : "You can include multiple products (one per line)"}
  </p>
  <textarea
    id="producto"
    name="producto_urls"
    rows={4}
    placeholder={lang === "es" 
      ? "https://www.amazon.co.jp/...\nhttps://www.amiami.com/...\nhttps://www.rakuten.co.jp/..."
      : "https://www.amazon.co.jp/...\nhttps://www.amiami.com/...\nhttps://www.rakuten.co.jp/..."
    }
    required
    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20"
  ></textarea>
</div>

              <div className="mb-8">
                <label htmlFor="comentarios" className="mb-2 block text-sm font-semibold text-gray-900">
                  {t.additionalComments}
                </label>
                <textarea
                  id="comentarios"
                  name="comentarios"
                  rows={4}
                  placeholder={t.commentsPlaceholder}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-red-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-red-700"
              >
                {t.submitButton}
              </button>
            </motion.form>
          </div>
        </section>

        {/* FOOTER - Estilo Apple */}
        <footer className="border-t border-gray-200 bg-white py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-8 text-center">
              <div className="mb-4 text-2xl font-semibold text-gray-900">Japan Bridge</div>
              <p className="text-sm text-gray-600">{t.footer}</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <a href="#" className="transition-colors hover:text-gray-900">
                {lang === "es" ? "Términos" : "Terms"}
              </a>
              <span>•</span>
              <a href="#" className="transition-colors hover:text-gray-900">
                {lang === "es" ? "Privacidad" : "Privacy"}
              </a>
              <span>•</span>
              <a href="#" className="transition-colors hover:text-gray-900">
                FAQ
              </a>
            </div>

            <div className="mt-8 text-center text-xs text-gray-400">
              © 2024 Japan Bridge Co. {lang === "es" ? "Todos los derechos reservados" : "All rights reserved"}
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}