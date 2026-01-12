"use client";

import React, { useState } from "react";
import {
  FaArrowLeft,
  FaMusic,
  FaTicketAlt,
  FaPalette,
  FaFont,
  FaExternalLinkAlt,
  FaHome,
  FaSearch,
  FaUser,
  FaExpand,
  FaTimes,
  FaMapMarkerAlt,
  FaQrcode,
  FaCreditCard,
  FaChair,
  FaLayerGroup,
} from "react-icons/fa";
import Link from "next/link";

export default function ConcertProjectShowcase() {
  // --- STATE UNTUK MODAL GAMBAR ---
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // --- DATA HALAMAN ---
  const mobilePages = [
    {
      title: "Splash & Onboarding",
      desc: "Intro animasi & Login",
      icon: <FaMusic className="text-[#4F74C5]" />, // Menggunakan warna utama baru
      img: "/images/concert-splash.png",
      color: "border-[#4F74C5]/50",
    },
    {
      title: "Home Discovery",
      desc: "Rekomendasi Konser",
      icon: <FaHome className="text-[#008CF0]" />,
      img: "/images/concert-home.png",
      color: "border-[#008CF0]/50",
    },
    {
      title: "Search & Filter",
      desc: "Cari Artis / Venue",
      icon: <FaSearch className="text-[#90DF93]" />,
      img: "/images/concert-search.png",
      color: "border-[#90DF93]/50",
    },
    {
      title: "Concert Schedule",
      desc: "Info Jadwal Konser",
      icon: <FaUser className="text-[#A6AAB1]" />,
      img: "/images/concert-jadwal.png",
      color: "border-[#A6AAB1]/50",
    },
    {
      title: "Category Browse",
      desc: "Eksplorasi Genre",
      icon: <FaPalette className="text-[#4F74C5]" />,
      img: "/images/concert-kategori.png",
      color: "border-[#4F74C5]/50",
    },
    {
      title: "Checkout Flow",
      desc: "Ringkasan Pesanan",
      icon: <FaCreditCard className="text-[#008CF0]" />,
      img: "/images/concert-checkout.png",
      color: "border-[#008CF0]/50",
    },
    {
      title: "E-Ticket (QR)",
      desc: "Tiket Digital Masuk",
      icon: <FaQrcode className="text-white" />,
      img: "/images/concert-ticket.png",
      color: "border-white/50",
    },
    {
      title: "User Profile",
      desc: "Riwayat & Pengaturan",
      icon: <FaUser className="text-[#90DF93]" />,
      img: "/images/concert-profile.png",
      color: "border-[#90DF93]/50",
    },
    {
      title: "Map Venue",
      desc: "Lokasi Konser",
      icon: <FaMapMarkerAlt className="text-[#A6AAB1]" />,
      img: "/images/concert-map.png",
      color: "border-[#A6AAB1]/50",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#4F74C5]/30">
      {/* --- FLOATING BACK BUTTON --- */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-sm text-slate-300 hover:text-[#4F74C5] hover:border-[#4F74C5]/50 transition-all group shadow-2xl"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        Kembali ke Portofolio
      </Link>

      <div className="max-w-[1400px] mx-auto px-6 py-24">
        {/* ================= BAGIAN HEADER ================= */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4F74C5]/10 border border-[#4F74C5]/20 text-[#4F74C5] text-sm font-bold uppercase tracking-wider">
            <FaTicketAlt /> Mobile App UI/UX
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Groovetix {/* Gradasi disesuaikan dengan warna baru */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008CF0] to-[#4F74C5]">
              App.
            </span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Aplikasi pemesanan tiket konser berbasis mobile yang memprioritaskan
            pengalaman visual, kemudahan pemilihan kursi, dan keamanan tiket QR
            Code.
          </p>
        </div>

        {/* ================= HERO BARU (CLEAN VERSION) ================= */}
        {/* Tampilan Wide Banner Tanpa Overlay Teks/Bayangan */}
        <div className="relative mb-32 w-full max-w-6xl mx-auto group">
          {/* Background Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#008CF0] to-[#4F74C5] rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-30 transition duration-1000"></div>

          <div className="relative aspect-video md:aspect-[21/9] bg-[#0F0F0F] rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center">
            {/* Background Pattern Halus (Tetap dipertahankan agar tidak terlalu kosong) */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

            {/* Content Placeholder for Hero Image */}
            <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
              {/* Gunakan gambar landscape/banner Anda di sini. */}
              <img
                src="/images/concert-hero-banner.png"
                alt="Groovetix App Presentation"
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  // Fallback sederhana jika gambar tidak ada: hanya menampilkan background kosong yang bersih
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            {/* Overlay Gradient Bottom */}
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent"></div>
          </div>
        </div>

        {/* --- PROJECT OVERVIEW (TEXT) - TETAP SAMA --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 max-w-6xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-8 h-1 bg-[#008CF0] rounded-full"></span> The
              Challenge
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Pembelian tiket konser seringkali membuat stres karena antrian
              virtual yang tidak jelas, UI yang membingungkan saat memilih kursi
              (Seat Plan), dan maraknya calo tiket.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-8 h-1 bg-[#4F74C5] rounded-full"></span> The
              Solution
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Desain mobile-first yang fokus pada kecepatan checkout. Fitur
              "Interactive Seat Map" memudahkan user memilih kursi, dan sistem
              tiket QR dinamis untuk keamanan.
            </p>
          </div>
        </div>

        {/* ================= DESIGN SYSTEM (UPDATED) ================= */}
        <div className="mb-32 p-8 md:p-12 bg-[#0F0F0F] rounded-3xl border border-white/5 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Design System
            </h2>
            <p className="text-slate-500">
              Visual Identity disesuaikan dengan brand guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* --- TYPOGRAPHY SECTION --- */}
            <div className="space-y-8">
              <h4 className="flex items-center gap-2 text-xl font-bold text-slate-200">
                <FaFont className="text-[#4F74C5]" /> Typography
              </h4>

              <div className="space-y-6">
                {/* Font 1: Work Sans */}
                <div className="p-5 bg-black/40 rounded-xl border border-white/10 flex items-center justify-between">
                  <div>
                    <h5 className="text-white text-lg font-bold">Work Sans</h5>
                    <p className="text-slate-500 text-xs mt-1">
                      Bold, Medium, Regular
                    </p>
                  </div>
                  <span className="text-2xl font-bold text-white opacity-20">
                    Aa
                  </span>
                </div>

                {/* Font 2: SF Pro Text */}
                <div className="p-5 bg-black/40 rounded-xl border border-white/10 flex items-center justify-between">
                  <div>
                    <h5
                      className="text-white text-lg font-bold"
                      style={{ fontFamily: "system-ui" }}
                    >
                      SF Pro Text
                    </h5>
                    <p className="text-slate-500 text-xs mt-1">Bold, Regular</p>
                  </div>
                  <span
                    className="text-2xl font-bold text-white opacity-20"
                    style={{ fontFamily: "system-ui" }}
                  >
                    Aa
                  </span>
                </div>

                {/* Font 3: ADLaM Display */}
                <div className="p-5 bg-black/40 rounded-xl border border-white/10 flex items-center justify-between">
                  <div>
                    <h5 className="text-white text-lg font-bold">
                      ADLaM Display
                    </h5>
                    <p className="text-slate-500 text-xs mt-1">Regular</p>
                  </div>
                  {/* Simulasi tampilan ADLaM jika font tidak terload, fallback ke cursive/display */}
                  <span className="text-2xl text-white opacity-20">Aa</span>
                </div>
              </div>
            </div>

            {/* --- COLOR PALETTE SECTION --- */}
            <div className="space-y-8">
              <h4 className="flex items-center gap-2 text-xl font-bold text-slate-200">
                <FaPalette className="text-[#008CF0]" /> Color Palette
              </h4>

              <div className="grid grid-cols-2 gap-4">
                {/* Color 1 */}
                <div className="space-y-3 p-4 bg-black/40 rounded-xl border border-white/5 hover:border-[#008CF0]/50 transition-colors">
                  <div className="h-12 w-full bg-[#008CF0] rounded-lg shadow-lg shadow-[#008CF0]/20"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-white text-sm font-medium">Blue</span>
                    <span className="text-[10px] text-slate-400 uppercase">
                      #008CF0
                    </span>
                  </div>
                </div>

                {/* Color 2 (Main) */}
                <div className="space-y-3 p-4 bg-black/40 rounded-xl border border-white/5 hover:border-[#4F74C5]/50 transition-colors">
                  <div className="h-12 w-full bg-[#4F74C5] rounded-lg shadow-lg shadow-[#4F74C5]/20 relative">
                    <div className="absolute top-1 right-1 px-1.5 py-0.5 bg-black/20 rounded text-[8px] text-white">
                      Main
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white text-sm font-medium">
                      Indigo
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase">
                      #4F74C5
                    </span>
                  </div>
                </div>

                {/* Color 3 */}
                <div className="space-y-3 p-4 bg-black/40 rounded-xl border border-white/5 hover:border-[#90DF93]/50 transition-colors">
                  <div className="h-12 w-full bg-[#90DF93] rounded-lg shadow-lg shadow-[#90DF93]/20"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-white text-sm font-medium">
                      Soft Green
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase">
                      #90DF93
                    </span>
                  </div>
                </div>

                {/* Color 4 */}
                <div className="space-y-3 p-4 bg-black/40 rounded-xl border border-white/5 hover:border-[#A6AAB1]/50 transition-colors">
                  <div className="h-12 w-full bg-[#A6AAB1] rounded-lg"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-white text-sm font-medium">Gray</span>
                    <span className="text-[10px] text-slate-400 uppercase">
                      #A6AAB1
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CORE PAGES OVERVIEW (TETAP 3 KOLOM) ================= */}
        <div className="border-t border-white/10 pt-20">
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="w-12 h-1 bg-gradient-to-r from-[#008CF0] to-[#4F74C5] rounded-full mb-4"></div>
            <h2 className="text-3xl font-bold text-white">App Screens</h2>
            <p className="text-slate-400 text-sm mt-2">
              High-fidelity prototypes (393x852)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 justify-items-center">
            {mobilePages.map((page, index) => (
              <div key={index} className="group w-full max-w-[393px]">
                {/* Header Card Info */}
                <div className="flex items-center justify-between mb-4 px-2">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      {page.icon} {page.title}
                    </h3>
                    <p className="text-xs text-slate-500">{page.desc}</p>
                  </div>
                </div>

                {/* PHONE CARD CONTAINER */}
                <div
                  className={`relative w-full aspect-[393/852] rounded-[2.5rem] border-[6px] border-[#222] bg-[#0a0a0a] overflow-hidden hover:border-white/20 hover:-translate-y-3 transition-all duration-500 shadow-2xl group-hover:shadow-lg`}
                  style={{
                    boxShadow: `0 0 20px -5px ${page.color
                      .replace("border-", "#")
                      .replace("/50", "")}40`,
                  }} // Custom colored shadow
                >
                  {/* Dynamic Island / Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#222] rounded-b-xl z-20"></div>

                  {/* Status Bar */}
                  <div className="absolute top-2 w-full px-6 flex justify-between text-[9px] text-white z-20 opacity-80">
                    <span>9:41</span>
                    <span>100%</span>
                  </div>

                  {/* Image */}
                  <div className="h-full w-full overflow-hidden relative">
                    <img
                      src={page.img}
                      alt={page.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://via.placeholder.com/393x852/111/444?text=${page.title.replace(
                          " ",
                          "+"
                        )}`;
                      }}
                    />

                    {/* OVERLAY BUTTON */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 backdrop-blur-sm">
                      <button
                        onClick={() => setPreviewImage(page.img)}
                        className="px-6 py-2 bg-white text-black rounded-full font-bold text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-105"
                      >
                        <FaExpand /> Preview Full
                      </button>
                    </div>
                  </div>

                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/20 rounded-full z-20"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- FOOTER ACTION (UPDATED LINK TO FIGMA) --- */}
        <div className="mt-32 text-center border-t border-white/10 pt-16">
          <h2 className="text-2xl font-bold text-white mb-6">
            Tertarik melihat detail desainnya?
          </h2>
          <div className="flex justify-center gap-4">
            {/* UPDATE LINK FIGMA DI SINI */}
            <a
              href="https://www.figma.com/design/5VlgA5FRzKBBjNOO8ji4s7/Untitled?node-id=0-1&t=EP4sxFUAiDNYyVfa-1" // Ganti dengan link Figma Anda
              target="_blank" // Membuka di tab baru
              rel="noopener noreferrer" // Keamanan untuk target blank
              className="px-8 py-3 bg-gradient-to-r from-[#008CF0] to-[#4F74C5] hover:from-[#4F74C5] hover:to-[#008CF0] text-white rounded-full font-bold transition-all flex items-center gap-2 shadow-lg shadow-[#4F74C5]/25"
            >
              <FaExternalLinkAlt /> Lihat di Figma
            </a>
          </div>
          <p className="text-slate-600 text-sm mt-12">
            © 2024 Groovetix UI Kit by Fila Prasetyo.
          </p>
        </div>
      </div>

      {/* ================= MODAL POPUP (FULL IMAGE VIEWER) ================= */}
      {previewImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity"
            onClick={() => setPreviewImage(null)}
          ></div>

          <div className="relative h-[90vh] aspect-[393/852] bg-[#0a0a0a] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col animate-fadeInUp border border-white/10">
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-4 right-4 z-50 p-2 bg-black/50 text-white rounded-full hover:bg-red-500 hover:text-white transition-colors border border-white/10"
            >
              <FaTimes />
            </button>

            <div className="flex-1 overflow-y-auto p-0 bg-[#050505] no-scrollbar">
              <img
                src={previewImage}
                alt="Full Preview"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
