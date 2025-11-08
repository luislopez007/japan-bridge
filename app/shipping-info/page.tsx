"use client";

import { useState } from "react";

export default function ShippingInfo() {
  const [lang, setLang] = useState<"es" | "en">("es");

  const t = {
    es: {
      title: "Información de Envío",
      subtitle: "Completa tus datos para continuar con tu pedido",
      fullName: "Nombre completo",
      email: "Correo electrónico",
      phone: "Teléfono (WhatsApp)",
      country: "País",
      state: "Estado/Provincia",
      city: "Ciudad",
      zipCode: "Código Postal",
      address: "Dirección completa",
      addressPlaceholder: "Calle, número, colonia...",
      references: "Referencias adicionales",
      referencesPlaceholder: "Entre qué calles, color de casa...",
      shippingMethod: "Método de envío",
      selectMethod: "Selecciona el tipo de envío que prefieres",
      ems: "🚀 Opción 1 - (Recomendado)",
      epacket: "✈️ Opción 2 - (Rápido)",
      small: "📦 Opción 3 - (Más económico)",
      comments: "Comentarios adicionales",
      submit: "Enviar información",
      footer: "Japan Bridge Co. • Tu puente hacia Japón"
    },
    en: {
      title: "Shipping Information",
      subtitle: "Complete your details to continue with your order",
      fullName: "Full name",
      email: "Email address",
      phone: "Phone (WhatsApp)",
      country: "Country",
      state: "State/Province",
      city: "City",
      zipCode: "Zip Code",
      address: "Complete address",
      addressPlaceholder: "Street, number, neighborhood...",
      references: "Additional references",
      referencesPlaceholder: "Between which streets, house color...",
      shippingMethod: "Shipping method",
      selectMethod: "Select your preferred shipping type",
      ems: "🚀 Option 1 - (Recommended)",
      epacket: "✈️ Option 2 - (Fast)",
      small: "📦 Option 3 - (Most economical)",
      comments: "Additional comments",
      submit: "Submit information",
      footer: "Japan Bridge Co. • Your bridge to Japan"
    }
  };

  const text = t[lang];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* HEADER - Igual que página principal */}
      <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-8">
            <a href="/" className="text-xl font-semibold text-gray-900">Japan Bridge</a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                {lang === "es" ? "← Inicio" : "← Home"}
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

      {/* Espaciador para el header fijo */}
      <div className="h-20"></div>

      {/* Formulario */}
      <div className="mx-auto max-w-3xl px-6 py-12">
        
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">{text.title}</h1>
          <p className="text-lg text-gray-600">{text.subtitle}</p>
        </div>

        <form 
          action="https://formspree.io/f/xgvrwagn" 
          method="POST"
          className="rounded-3xl bg-white p-8 shadow-sm"
        >
          
          {/* Nombre */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-gray-900">
              {text.fullName} *
            </label>
            <input
              type="text"
              name="nombre"
              required
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-gray-900">
              {text.email} *
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20"
            />
          </div>

          {/* Teléfono */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-gray-900">
              {text.phone} *
            </label>
            <input
              type="tel"
              name="telefono"
              required
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20"
            />
          </div>

          {/* País */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-gray-900">
              {text.country} *
            </label>
            <input
              type="text"
              name="pais"
              required
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20"
            />
          </div>

          {/* Estado */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-gray-900">
              {text.state} *
            </label>
            <input
              type="text"
              name="estado"
              required
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20"
            />
          </div>

          {/* Ciudad */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-gray-900">
              {text.city} *
            </label>
            <input
              type="text"
              name="ciudad"
              required
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20"
            />
          </div>

          {/* Código Postal */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-gray-900">
              {text.zipCode} *
            </label>
            <input
              type="text"
              name="codigo_postal"
              required
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20"
            />
          </div>

          {/* Dirección */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-gray-900">
              {text.address} *
            </label>
            <textarea
              name="direccion"
              rows={3}
              required
              placeholder={text.addressPlaceholder}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20"
            />
          </div>

          {/* Referencias */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-gray-900">
              {text.references}
            </label>
            <textarea
              name="referencias"
              rows={2}
              placeholder={text.referencesPlaceholder}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20"
            />
          </div>

          {/* Método de envío */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-gray-900">
              {text.shippingMethod} *
            </label>
            <select
              name="metodo_envio"
              required
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20"
            >
              <option value="">{text.selectMethod}</option>
              <option value="Opción 1 - Recomendado">{text.ems}</option>
              <option value="Opción 2 - Rápido">{text.epacket}</option>
              <option value="Opción 3 - Económico">{text.small}</option>
            </select>
          </div>

          {/* Comentarios */}
          <div className="mb-8">
            <label className="mb-2 block text-sm font-semibold text-gray-900">
              {text.comments}
            </label>
            <textarea
              name="comentarios"
              rows={3}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20"
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full rounded-full bg-red-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-red-700"
          >
            {text.submit}
          </button>

        </form>
      </div>

      {/* FOOTER - Igual que página principal */}
      <footer className="border-t border-gray-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 text-center">
            <div className="mb-4 text-2xl font-semibold text-gray-900">Japan Bridge</div>
            <p className="text-sm text-gray-600">{text.footer}</p>
          </div>

          <div className="mt-8 text-center text-xs text-gray-400">
            © 2024 Japan Bridge Co. {lang === "es" ? "Todos los derechos reservados" : "All rights reserved"}
          </div>
        </div>
      </footer>

    </div>
  );
}