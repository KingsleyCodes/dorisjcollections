"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { ShoppingBag, Heart, ShieldCheck, Truck } from "lucide-react";

export default function Home() {
  const whatsappNumber = "2348123435342";
  const defaultMessage = encodeURIComponent(
    "Hi Doris J Collections! I'm interested in viewing your available thrift pieces."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-100 px-4 py-8 md:py-12 flex flex-col justify-center items-center">
      <div className="max-w-xl w-full mx-auto space-y-6">
        
        {/* Brand Header Badge */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-900 tracking-tight">
            Doris J Collections
          </h1>

          <p className="text-pink-700 text-base md:text-lg font-medium leading-relaxed max-w-md mx-auto">
            Affordable, handpicked pre-loved fashion & quality pieces tailored for every classy woman.
          </p>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="bg-white/80 backdrop-blur border border-pink-200 p-4 rounded-2xl flex flex-col items-center text-center shadow-sm">
            <ShoppingBag className="w-6 h-6 text-pink-600 mb-2" />
            <span className="font-bold text-pink-900 text-sm">Quality Checked</span>
            <span className="text-pink-600 text-xs">Gently used & pristine condition</span>
          </div>

          <div className="bg-white/80 backdrop-blur border border-pink-200 p-4 rounded-2xl flex flex-col items-center text-center shadow-sm">
            <Truck className="w-6 h-6 text-pink-600 mb-2" />
            <span className="font-bold text-pink-900 text-sm">Fast Delivery</span>
            <span className="text-pink-600 text-xs">Delivered straight to your door</span>
          </div>
        </div>

        {/* Feature Highlight Box */}
        <div className="bg-gradient-to-br from-pink-600 to-pink-500 text-white rounded-3xl p-6 shadow-xl shadow-pink-300/40 relative overflow-hidden">
          <div className="relative z-10 space-y-3">
            <div className="flex items-center gap-2 text-pink-100 text-xs uppercase tracking-wider font-bold">
              <Heart className="w-4 h-4 fill-pink-300 text-pink-300" />
              <span>Instant WhatsApp Shopping</span>
            </div>
            <h2 className="text-2xl font-bold leading-snug">
              Ready to upgrade your wardrobe without breaking the bank?
            </h2>
            <p className="text-pink-100 text-sm">
              Chat directly with us to see our latest drops, request specific sizes, or place an order in minutes!
            </p>
          </div>
        </div>

        {/* Main WhatsApp CTA Button */}
        <div className="pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.98] text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-3 text-lg transition-all duration-200"
          >
            <FaWhatsapp className="w-7 h-7" />
            <span>Chat on WhatsApp Now</span>
          </a>
          <p className="text-center text-pink-500 text-xs mt-3 flex items-center justify-center gap-1">
            <ShieldCheck className="w-4 h-4" /> Instant response • Quick & easy ordering
          </p>
        </div>

      </div>
    </main>
  );
}