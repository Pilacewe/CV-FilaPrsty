"use client";

import React, { useState } from "react";
// Import font Jost dari Google Fonts via Next.js
import { Jost } from "next/font/google";
import {
  FaArrowLeft,
  FaMugHot,
  FaHeart,
  FaFire,
  FaExternalLinkAlt,
  FaTimes,
  FaExpand,
  FaLeaf,
} from "react-icons/fa";
import Link from "next/link";

// Konfigurasi Font Jost
const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "700"], // Light, Regular, Bold
  variable: "--font-jost",
});

export default function KopiKenanganShowcase() {
  const [showModal, setShowModal] = useState(false);

  // --- CONFIG ---
  const mainImage = "/images/kopi-kenangan-redesign.png";
  const figmaLink = "https://www.figma.com/file/your-file-id";

  // --- PALETTE VARIABLES ---
  // Kita simpan di variabel agar mudah dibaca logic-nya
  const colors = {
    primary: "#FF0000", // Merah Utama (Bold)
    secondary: "#EB3333", // Merah Soft (20% look / Accent)
    gold: "#9E722F", // Emas Kopi
    neutral: "#5E5E5E", // Abu-abu Teks
    bg: "#0A0505", // Hitam Background
  };

  return (
    <div
      className={`min-h-screen text-white selection:bg-[#FF0000]/30 ${jost.className}`}
      style={{ backgroundColor: colors.bg }}
    >
      {/* --- FLOATING BACK BUTTON --- */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-sm text-[#5E5E5E] hover:text-white hover:border-[#EB3333] transition-all group shadow-2xl"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        Kembali
      </Link>

      <div className="max-w-[1200px] mx-auto px-6 py-24 relative">
        {/* BACKGROUND ACCENTS */}
        {/* Gunakan #EB3333 untuk glow yang lebih soft di background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EB3333] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#9E722F] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

        {/* ================= HEADER SECTION ================= */}
        <div className="text-center mb-16 space-y-6 relative z-10">
          {/* Badge menggunakan #EB3333 sebagai background tint (20% feel) */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#EB3333]/30 text-[#FF0000] text-sm font-bold uppercase tracking-wider"
            style={{ backgroundColor: `${colors.secondary}20` }}
          >
            {/* Hex + 20 opacity hex code approx */}
            <FaMugHot /> UI Redesign Challenge
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Kopi Kenangan
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FF0000] to-[#9E722F]">
              Reimagined.
            </span>
          </h1>

          <p className="text-[#5E5E5E] max-w-2xl mx-auto text-lg leading-relaxed font-light">
            Eksplorasi redesain halaman utama (Home Screen) aplikasi Kopi
            Kenangan. Fokus pada simplifikasi navigasi, hierarki visual promo,
            dan personalisasi menu favorit.
          </p>
        </div>

        {/* ================= HERO: THE SINGLE PAGE SPOTLIGHT ================= */}
        <div className="relative w-full max-w-5xl mx-auto mb-32">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
            {/* LEFT SIDE: Context */}
            <div className="flex-1 space-y-8 text-right md:text-right order-2 md:order-1 hidden md:block">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Cluttered UI</h3>
                <p className="text-[#5E5E5E] font-light">
                  Mengurangi kebisingan visual dari banner iklan yang bertumpuk.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">
                  Brand Consistency
                </h3>
                <p className="text-[#5E5E5E] font-light">
                  Mengembalikan warna merah ikonik agar lebih elegan & modern.
                </p>
              </div>
            </div>

            {/* CENTER: THE PHONE MOCKUP */}
            <div className="relative group order-1 md:order-2 z-20">
              {/* Ring Glow Accents */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-[#EB3333]/30 rounded-full animate-[spin_10s_linear_infinite] opacity-50 pointer-events-none"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-dashed border-[#9E722F]/20 rounded-full animate-[spin_15s_linear_infinite_reverse] pointer-events-none"></div>

              {/* The Phone */}
              <div
                className="relative w-[320px] aspect-[9/19] bg-black border-[8px] border-[#1a1a1a] rounded-[3rem] shadow-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                style={{ boxShadow: `0 25px 50px -12px ${colors.secondary}20` }} // Shadow pakai warna soft
                onClick={() => setShowModal(true)}
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1a1a1a] rounded-b-xl z-20"></div>

                {/* Image Placeholder */}
                <img
                  src={mainImage}
                  alt="Kopi Kenangan Redesign Home"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/393x852/2a0a0a/FF0000?text=Kopi+Kenangan+UI";
                  }}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="flex items-center gap-2 text-white font-bold border border-white/30 px-4 py-2 rounded-full backdrop-blur-md">
                    <FaExpand /> Zoom Details
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Solutions */}
            <div className="flex-1 space-y-8 text-left order-3 md:order-3 hidden md:block">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Smart Reorder</h3>
                <p className="text-[#5E5E5E] font-light">
                  Fitur pemesanan ulang 1-klik untuk menu kopi favorit user.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">
                  Gamified Points
                </h3>
                <p className="text-[#5E5E5E] font-light">
                  Tampilan status membership yang lebih interaktif dan jelas.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Only Text */}
          <div className="md:hidden mt-12 grid grid-cols-1 gap-6 text-center">
            <div className="p-4 bg-white/5 rounded-xl">
              <h3 className="font-bold text-[#FF0000]">Modern Look</h3>
              <p className="text-xs text-[#5E5E5E] font-light">
                Pembaruan visual yang lebih bersih.
              </p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl">
              <h3 className="font-bold text-[#FF0000]">Better UX</h3>
              <p className="text-xs text-[#5E5E5E] font-light">
                Akses menu favorit lebih cepat.
              </p>
            </div>
          </div>
        </div>

        {/* ================= DEEP DIVE SECTION ================= */}
        <div className="border-t border-white/10 pt-20 mb-24">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Component Breakdown
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Component 1 */}
            <div className="bg-[#120a0a] p-6 rounded-2xl border border-white/5 hover:border-[#EB3333] transition-colors group">
              {/* Icon Background menggunakan EB3333 (soft) */}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: colors.secondary, color: "white" }}
              >
                <FaHeart />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Loyalty Card
              </h3>
              <p className="text-[#5E5E5E] text-sm leading-relaxed font-light">
                Redesain kartu membership "Cinta" dengan progress bar visual
                yang lebih memotivasi user untuk naik level.
              </p>
            </div>

            {/* Component 2 */}
            <div className="bg-[#120a0a] p-6 rounded-2xl border border-white/5 hover:border-[#EB3333] transition-colors group">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: colors.secondary, color: "white" }}
              >
                <FaFire />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Hot Promos</h3>
              <p className="text-[#5E5E5E] text-sm leading-relaxed font-light">
                Mengubah layout banner promo dari carousel kaku menjadi kartu
                horizontal yang dapat di-swipe dengan mudah.
              </p>
            </div>

            {/* Component 3 */}
            <div className="bg-[#120a0a] p-6 rounded-2xl border border-white/5 hover:border-[#EB3333] transition-colors group">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: colors.secondary, color: "white" }}
              >
                <FaMugHot />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Quick Pick</h3>
              <p className="text-[#5E5E5E] text-sm leading-relaxed font-light">
                Bagian "Sering Dipesan" diletakkan di bagian atas untuk
                mempercepat flow user yang membeli menu rutin.
              </p>
            </div>
          </div>
        </div>

        {/* ================= DESIGN SYSTEM MINI ================= */}
        <div className="mb-24 p-8 bg-[#1a0f0f] rounded-3xl border border-white/5">
          <h3 className="text-white font-bold mb-6 flex items-center gap-2">
            <FaLeaf className="text-[#9E722F]" /> Style Guide
          </h3>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Colors */}
            <div className="space-y-4 flex-1 w-full">
              <p className="text-xs text-[#5E5E5E] uppercase tracking-widest font-bold">
                Palette
              </p>
              <div className="grid grid-cols-2 gap-4">
                {/* Primary Red */}
                <div className="space-y-2">
                  <div className="h-16 rounded-lg bg-[#FF0000] shadow-lg shadow-red-900/20 flex items-center justify-center text-xs font-bold">
                    Primary
                  </div>
                  <p className="text-xs font-mono text-[#5E5E5E]">#FF0000</p>
                </div>

                {/* Gold */}
                <div className="space-y-2">
                  <div className="h-16 rounded-lg bg-[#9E722F] shadow-lg shadow-yellow-900/10 flex items-center justify-center text-xs font-bold">
                    Gold
                  </div>
                  <p className="text-xs font-mono text-[#5E5E5E]">#9E722F</p>
                </div>

                {/* Accent Red (The 20% Element) */}
                <div className="space-y-2">
                  <div className="h-16 rounded-lg bg-[#EB3333] flex items-center justify-center text-xs font-bold text-white">
                    Soft/20%
                  </div>
                  <p className="text-xs font-mono text-[#5E5E5E]">#EB3333</p>
                </div>

                {/* Neutral */}
                <div className="space-y-2">
                  <div className="h-16 rounded-lg bg-[#5E5E5E] border border-white/10 flex items-center justify-center text-xs font-bold text-white">
                    Neutral
                  </div>
                  <p className="text-xs font-mono text-[#5E5E5E]">#5E5E5E</p>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="space-y-4 flex-1 w-full">
              <p className="text-xs text-[#5E5E5E] uppercase tracking-widest font-bold">
                Typography
              </p>
              <div className="p-6 bg-black/30 rounded-lg border border-white/5">
                <h1 className="text-3xl font-bold text-white mb-1">Jost</h1>
                <p className="text-[#5E5E5E] text-xs">Geometric Sans-Serif</p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-baseline justify-between border-b border-white/5 pb-2">
                    <span className="text-2xl font-light">Light</span>
                    <span className="text-xs font-mono text-[#5E5E5E]">
                      300
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between border-b border-white/5 pb-2">
                    <span className="text-2xl font-normal">Regular</span>
                    <span className="text-xs font-mono text-[#5E5E5E]">
                      400
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-bold">Bold</span>
                    <span className="text-xs font-mono text-[#5E5E5E]">
                      700
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= FOOTER ================= */}
        <div className="text-center border-t border-white/10 pt-16 pb-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Ingin melihat file aslinya?
          </h2>
          <div className="flex justify-center">
            <a
              href={figmaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#FF0000] hover:bg-[#c90000] text-white rounded-full font-bold transition-all flex items-center gap-2 shadow-lg shadow-[#FF0000]/25 hover:scale-105"
            >
              <FaExternalLinkAlt /> Buka Figma
            </a>
          </div>
          <p className="text-[#5E5E5E] text-sm mt-12">
            Redesign Concept by Anda. Not affiliated with Kopi Kenangan.
          </p>
        </div>
      </div>

      {/* ================= MODAL FULLVIEW ================= */}
      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="relative z-70 max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-[#FF0000] transition-colors"
            >
              <FaTimes size={24} />
            </button>
            <img
              src={mainImage}
              alt="Full Preview"
              className="h-full max-h-[85vh] w-auto rounded-2xl shadow-2xl border border-white/10"
              onError={(e) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/393x852/2a0a0a/FF0000?text=Kopi+Kenangan+UI";
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
