"use client";

import { useState } from "react";

export default function ShippingInfo() {
  const [lang] = useState<"es" | "en">("es");

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
      selectMethod: "Selecciona método",
      ems: "EMS - Rápido (3-12 días) - $23",
      epacket: "ePacket Light - Medio (10-19 días) - $12",
      small: "Small Packet - Económico (15-25 días) - $9",
      comments: "Comentarios adicionales",
      submit: "Enviar información",
      back: "← Volver al inicio"
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
      selectMethod: "Select method",
      ems: "EMS - Fast (3-12 days) - $23",
      epacket: "ePacket Light - Medium (10-19 days) - $12",
      small: "Small Packet - Economical (15-25 days) - $9",
      comments: "Additional comments",
      submit: "Submit information",
      back: "← Back to home"
    }
  };

  const text = t[lang];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Header simple */}
      <header className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-3xl px-6 py-4">
          <a href="/" className="text-sm text-gray-600 hover:text-gray-900">
            {text.back}
          </a>
        </div>
      </header>

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
              className="w-full rounded-xl border border-gray-300 px-4 py-3"
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
              className="w-full rounded-xl border border-gray-300 px-4 py-3"
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
              className="w-full rounded-xl border border-gray-300 px-4 py-3"
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
              className="w-full rounded-xl border border-gray-300 px-4 py-3"
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
              className="w-full rounded-xl border border-gray-300 px-4 py-3"
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
              className="w-full rounded-xl border border-gray-300 px-4 py-3"
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
              className="w-full rounded-xl border border-gray-300 px-4 py-3"
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
              className="w-full rounded-xl border border-gray-300 px-4 py-3"
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
              className="w-full rounded-xl border border-gray-300 px-4 py-3"
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
              className="w-full rounded-xl border border-gray-300 px-4 py-3"
            >
              <option value="">{text.selectMethod}</option>
              <option value="EMS">{text.ems}</option>
              <option value="ePacket">{text.epacket}</option>
              <option value="Small Packet">{text.small}</option>
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
              className="w-full rounded-xl border border-gray-300 px-4 py-3"
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full rounded-full bg-red-600 px-8 py-4 text-lg font-semibold text-white hover:bg-red-700"
          >
            {text.submit}
          </button>

        </form>
      </div>
    </div>
  );
}