"use client";

import React, { useState } from "react";
// Import font dari Google Fonts via Next.js
import { Jost, Kantumruy_Pro } from "next/font/google";
import {
  FaArrowLeft,
  FaBookOpen,
  FaPenNib,
  FaLaptopCode,
  FaExternalLinkAlt,
  FaTimes,
  FaExpand,
  FaPalette,
  FaFont,
  FaLayerGroup,
} from "react-icons/fa";
import Link from "next/link";

// --- FONT CONFIGURATION ---
const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-jost",
});

const kantumruy = Kantumruy_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600"], // Regular, Medium, etc.
  variable: "--font-kantumruy",
});

export default function BookPublishingShowcase() {
  const [showModal, setShowModal] = useState(false);

  // --- CONFIG ---
  const mainImage = "/images/book-landing-design.png"; // Ganti dengan screenshot desktop Anda
  const figmaLink = "https://www.figma.com/file/your-file-id";

  // --- PALETTE VARIABLES ---
  const colors = {
    blue: "#5961F9", // Primary / Trust
    cream: "#FCFCE9", // Background / Text Base
    pink: "#F72585", // CTA / Accent / Creative
    darkBg: "#0F0F1A", // Latar belakang portfolio (bukan desain)
  };

  return (
    <div
      className={`min-h-screen text-[#FCFCE9] selection:bg-[#F72585]/30 ${jost.variable} ${kantumruy.variable}`}
      style={{ backgroundColor: colors.darkBg }}
    >
      {/* --- NAVIGASI KEMBALI --- */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-sm font-medium hover:bg-[#5961F9] hover:border-[#5961F9] transition-all group shadow-xl"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        <span style={{ fontFamily: "var(--font-jost)" }}>Kembali</span>
      </Link>

      <div className="max-w-[1280px] mx-auto px-6 py-24 relative overflow-hidden">
        {/* --- BACKGROUND GLOWS --- */}
        {/* Blue Glow Top Left */}
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-[#5961F9] rounded-full blur-[180px] opacity-20 pointer-events-none"></div>
        {/* Pink Glow Bottom Right */}
        <div className="absolute top-[40%] -right-20 w-[500px] h-[500px] bg-[#F72585] rounded-full blur-[180px] opacity-15 pointer-events-none"></div>

        {/* ================= HEADER ================= */}
        <div className="text-center mb-20 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F72585]/30 bg-[#F72585]/10 text-[#F72585] text-xs font-bold uppercase tracking-widest font-sans">
            <FaBookOpen /> Web Design
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            StoryTeller
            <span className="text-[#5961F9]">.</span>
          </h1>

          <p
            className="text-xl md:text-2xl opacity-90 font-light"
            style={{ fontFamily: "var(--font-kantumruy)" }}
          >
            Book Publishing & Author Landing Page
          </p>
        </div>

        {/* ================= HERO: MACBOOK MOCKUP ================= */}
        {/* CSS-Only Laptop Mockup Frame */}
        <div className="relative w-full max-w-5xl mx-auto mb-32 perspective-1000">
          {/* Wrapper Laptop */}
          <div
            className="relative group cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            {/* 1. Screen Bezel */}
            <div className="relative bg-[#1a1a1a] rounded-t-2xl md:rounded-t-[2rem] p-2 md:p-4 shadow-2xl border border-[#333] border-b-0 mx-auto w-full max-w-[900px] aspect-[16/10] z-20 transition-transform duration-500 group-hover:-translate-y-2">
              {/* Camera Dot */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#444] rounded-full z-30 md:block hidden"></div>

              {/* 2. The Screen Content (Image) */}
              <div className="w-full h-full bg-[#050510] rounded-lg md:rounded-xl overflow-hidden relative border border-white/5">
                <img
                  src={mainImage}
                  alt="Book Landing Page Design"
                  className="w-full h-full object-cover object-top hover:object-bottom transition-all duration-[3s] ease-in-out"
                  // Efek hover:object-bottom akan men-scroll gambar ke bawah perlahan
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/1440x900/0a0a0a/5961F9?text=Desktop+Landing+Design";
                  }}
                />

                {/* Overlay Hint */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full flex items-center gap-2 font-sans font-bold">
                    <FaExpand /> View Full Design
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Laptop Base */}
            <div className="relative mx-auto w-full max-w-[1050px] h-4 md:h-6 bg-[#2a2a2a] rounded-b-xl md:rounded-b-3xl shadow-[0_50px_100px_-20px_rgba(89,97,249,0.3)] z-10 border-t border-[#333]">
              {/* Notch untuk buka laptop */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 md:w-24 h-2 bg-[#1f1f1f] rounded-b-lg"></div>
            </div>
          </div>

          {/* Decoration Elements Floating */}
          <div className="absolute top-1/2 -left-12 -translate-y-1/2 hidden lg:block animate-bounce delay-700">
            <div className="w-16 h-16 bg-[#5961F9] rounded-2xl rotate-12 opacity-20 blur-sm"></div>
          </div>
          <div className="absolute top-1/4 -right-8 hidden lg:block animate-bounce">
            <div className="w-12 h-12 bg-[#F72585] rounded-full opacity-20 blur-sm"></div>
          </div>
        </div>

        {/* ================= DETAILS SECTION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {/* Card 1: Colors */}
          <div className="p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-[#5961F9]/50 transition-all group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#5961F9]/20 rounded-xl text-[#5961F9]">
                <FaPalette size={20} />
              </div>
              <h3
                style={{ fontFamily: "var(--font-jost)" }}
                className="text-xl font-bold"
              >
                Color Palette
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between group/item">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#5961F9] shadow-lg shadow-[#5961F9]/30 ring-2 ring-transparent group-hover/item:ring-white/20 transition-all"></div>
                  <div>
                    <p
                      className="font-bold text-sm"
                      style={{ fontFamily: "var(--font-jost)" }}
                    >
                      Electric Blue
                    </p>
                    <p className="text-xs opacity-50 font-mono">#5961F9</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between group/item">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F72585] shadow-lg shadow-[#F72585]/30 ring-2 ring-transparent group-hover/item:ring-white/20 transition-all"></div>
                  <div>
                    <p
                      className="font-bold text-sm"
                      style={{ fontFamily: "var(--font-jost)" }}
                    >
                      Neon Pink
                    </p>
                    <p className="text-xs opacity-50 font-mono">#F72585</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between group/item">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FCFCE9] border border-white/10 ring-2 ring-transparent group-hover/item:ring-white/20 transition-all"></div>
                  <div>
                    <p
                      className="font-bold text-sm"
                      style={{ fontFamily: "var(--font-jost)" }}
                    >
                      Cream Paper
                    </p>
                    <p className="text-xs opacity-50 font-mono">#FCFCE9</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Typography */}
          <div className="p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-[#F72585]/50 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#F72585]/20 rounded-xl text-[#F72585]">
                <FaFont size={20} />
              </div>
              <h3
                style={{ fontFamily: "var(--font-jost)" }}
                className="text-xl font-bold"
              >
                Typography
              </h3>
            </div>

            <div className="space-y-8">
              {/* Jost */}
              <div>
                <p
                  className="text-xs opacity-50 uppercase tracking-widest mb-2"
                  style={{ fontFamily: "var(--font-jost)" }}
                >
                  Headings
                </p>
                <div
                  className="text-3xl"
                  style={{ fontFamily: "var(--font-jost)" }}
                >
                  Jost <span className="font-bold">Bold</span>
                </div>
                <p className="text-sm opacity-60 mt-1">
                  Geometric, Modern, Clean
                </p>
              </div>

              <div className="w-full h-[1px] bg-white/10"></div>

              {/* Kantumruy */}
              <div>
                <p
                  className="text-xs opacity-50 uppercase tracking-widest mb-2"
                  style={{ fontFamily: "var(--font-jost)" }}
                >
                  Body Copy
                </p>
                <div
                  className="text-3xl"
                  style={{ fontFamily: "var(--font-kantumruy)" }}
                >
                  Kantumruy Pro
                </div>
                <p
                  className="text-sm opacity-60 mt-1"
                  style={{ fontFamily: "var(--font-kantumruy)" }}
                >
                  Unique character, legible, stylish.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Layout Strategy */}
          <div className="md:col-span-2 lg:col-span-1 p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-[#FCFCE9]/30 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#FCFCE9]/20 rounded-xl text-[#FCFCE9]">
                <FaLayerGroup size={20} />
              </div>
              <h3
                style={{ fontFamily: "var(--font-jost)" }}
                className="text-xl font-bold"
              >
                Layout Strategy
              </h3>
            </div>

            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-[#5961F9] font-bold">01.</span>
                <p
                  className="text-sm leading-relaxed opacity-80"
                  style={{ fontFamily: "var(--font-kantumruy)" }}
                >
                  <strong className="text-white block mb-1">Hero Split:</strong>
                  Menggunakan split screen (Teks Kiri, Visual Buku Kanan) untuk
                  langsung menarik perhatian user pada produk utama.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="text-[#F72585] font-bold">02.</span>
                <p
                  className="text-sm leading-relaxed opacity-80"
                  style={{ fontFamily: "var(--font-kantumruy)" }}
                >
                  <strong className="text-white block mb-1">Clear CTA:</strong>
                  Tombol "Pre-order" menggunakan warna Pink kontras (#F72585) di
                  atas background gelap/krem.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="text-[#FCFCE9] font-bold">03.</span>
                <p
                  className="text-sm leading-relaxed opacity-80"
                  style={{ fontFamily: "var(--font-kantumruy)" }}
                >
                  <strong className="text-white block mb-1">Whitespace:</strong>
                  Penggunaan background Cream (#FCFCE9) yang luas untuk
                  memberikan ruang bernapas pada teks panjang.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= FOOTER ================= */}
        <div className="text-center pt-16 border-t border-white/5">
          <h2
            className="text-3xl font-bold mb-8"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            Ready to publish?
          </h2>

          <a
            href={figmaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#5961F9] hover:bg-[#464cc9] text-white rounded-xl font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-[#5961F9]/25"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            <FaExternalLinkAlt />
            Open Project in Figma
          </a>

          <div
            className="mt-12 flex items-center justify-center gap-2 opacity-40 text-sm font-light"
            style={{ fontFamily: "var(--font-kantumruy)" }}
          >
            <FaPenNib /> Designed with passion.
          </div>
        </div>
      </div>

      {/* ================= MODAL FULLVIEW ================= */}
      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#0F0F1A]/95 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          ></div>

          {/* Content */}
          <div className="relative z-70 w-full max-w-6xl max-h-full flex flex-col">
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setShowModal(false)}
                className="flex items-center gap-2 text-[#FCFCE9] hover:text-[#F72585] transition-colors"
              >
                <span className="text-sm font-bold uppercase tracking-wider">
                  Close
                </span>
                <FaTimes size={24} />
              </button>
            </div>

            <div className="overflow-auto rounded-lg shadow-2xl border border-white/10 bg-[#FCFCE9]">
              <img
                src={mainImage}
                alt="Full Design Preview"
                className="w-full h-auto block"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/1440x2400/0a0a0a/5961F9?text=Full+Landing+Page+Design";
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
