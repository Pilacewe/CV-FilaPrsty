"use client";

import React, { useState } from "react";
import {
  FaArrowLeft,
  FaPlane,
  FaPalette,
  FaFont,
  FaExternalLinkAlt,
  FaHome,
  FaInfoCircle,
  FaSuitcase,
  FaExpand, // Icon untuk tombol expand
  FaTimes, // Icon untuk tombol close
} from "react-icons/fa";
import Link from "next/link";

export default function TravelProjectShowcase() {
  // --- STATE UNTUK MODAL GAMBAR ---
  // Menyimpan URL gambar yang sedang dibuka. Jika null, berarti modal tertutup.
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-cyan-500/30">
      {/* --- FLOATING BACK BUTTON --- */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-sm text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all group shadow-2xl"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        Kembali ke Portofolio
      </Link>

      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* ================= BAGIAN ATAS (DIPERTAHANKAN) ================= */}

        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-24 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold uppercase tracking-wider">
            <FaPlane /> Travel Website Platform
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Travling! <span className="text-slate-600">Explore.</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Platform web responsif untuk pemesanan tiket perjalanan dan
            eksplorasi destinasi wisata. Menggabungkan fotografi imersif dengan
            alur pemesanan (booking flow) yang sederhana.
          </p>
        </div>

        {/* --- HERO SHOWCASE (LAPTOP MOCKUP STYLE) --- */}
        <div className="relative mb-32 group">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

          {/* Browser Window */}
          <div className="relative bg-[#0a0a0a] rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl">
            <div className="h-12 bg-[#111] border-b border-white/5 flex items-center px-6 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              <div className="ml-4 px-4 py-1 bg-[#222] rounded-md text-[10px] text-slate-500 flex-1 text-center font-mono">
                travling.com/home
              </div>
            </div>
            {/* MAIN HERO IMAGE */}
            <div className="aspect-video w-full overflow-hidden bg-slate-900 relative">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
                alt="Travling Hero Section"
                className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* --- PROJECT OVERVIEW --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-8 h-1 bg-cyan-500 rounded-full"></span> The
              Challenge
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Pengguna sering merasa kewalahan dengan informasi yang terlalu
              padat pada situs travel konvensional. Tantangannya adalah
              menyajikan ratusan destinasi tanpa terlihat "berantakan".
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-8 h-1 bg-blue-500 rounded-full"></span> The
              Solution
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Menggunakan "Card-Based Layout" dengan white space yang luas. Kami
              memprioritaskan gambar berkualitas tinggi untuk membangun emosi
              user.
            </p>
          </div>
        </div>

        {/* --- DESIGN SYSTEM --- */}
        <div className="mb-32 p-8 md:p-12 bg-[#0F0F0F] rounded-3xl border border-white/5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Design System
            </h2>
            <p className="text-slate-500">Fondasi visual identitas Travling!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Typography Section */}
            <div className="space-y-6">
              <h4 className="flex items-center gap-2 text-xl font-bold text-slate-200">
                <FaFont className="text-[#42A7C3]" /> Typography
              </h4>
              <div className="p-6 bg-black/40 rounded-xl border border-white/10 space-y-6">
                {/* Font 1: Josefin Sans */}
                <div className="border-b border-white/5 pb-4">
                  <p
                    className="text-4xl font-bold text-white"
                    style={{ fontFamily: '"Josefin Sans", sans-serif' }}
                  >
                    Aa
                  </p>
                  <p className="text-slate-400 text-sm mt-1">
                    Josefin Sans / Bold
                  </p>
                </div>

                {/* Font 2: Jost (Bold & Regular) */}
                <div className="flex gap-8 border-b border-white/5 pb-4">
                  <div>
                    <p
                      className="text-4xl font-bold text-white"
                      style={{ fontFamily: '"Jost", sans-serif' }}
                    >
                      Aa
                    </p>
                    <p className="text-slate-400 text-sm mt-1">Jost / Bold</p>
                  </div>
                  <div>
                    <p
                      className="text-4xl font-normal text-white"
                      style={{ fontFamily: '"Jost", sans-serif' }}
                    >
                      Aa
                    </p>
                    <p className="text-slate-400 text-sm mt-1">
                      Jost / Regular
                    </p>
                  </div>
                </div>

                {/* Font 3: Baskerville */}
                <div>
                  <p
                    className="text-4xl font-normal text-white"
                    style={{ fontFamily: '"Baskerville Old Face", serif' }}
                  >
                    Aa
                  </p>
                  <p className="text-slate-400 text-sm mt-1">
                    Baskerville Old Face / Regular
                  </p>
                </div>
              </div>
            </div>

            {/* Color Palette Section */}
            <div className="space-y-6">
              <h4 className="flex items-center gap-2 text-xl font-bold text-slate-200">
                <FaPalette className="text-[#6100FF]" /> Color Palette
              </h4>

              {/* Grid Updated to 4 Columns for your 4 colors */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {/* Color 1: Purple */}
                <div className="space-y-2 text-center">
                  <div className="h-20 w-full bg-[#6100FF] rounded-xl shadow-lg shadow-[#6100FF]/20"></div>
                  <p className="text-xs text-slate-400">#6100FF</p>
                </div>

                {/* Color 2: Cyan */}
                <div className="space-y-2 text-center">
                  <div className="h-20 w-full bg-[#42A7C3] rounded-xl shadow-lg shadow-[#42A7C3]/20"></div>
                  <p className="text-xs text-slate-400">#42A7C3</p>
                </div>

                {/* Color 3: Dark Gray */}
                <div className="space-y-2 text-center">
                  <div className="h-20 w-full bg-[#444444] border border-white/20 rounded-xl"></div>
                  <p className="text-xs text-slate-400">#444444</p>
                </div>

                {/* Color 4: Medium Gray */}
                <div className="space-y-2 text-center">
                  <div className="h-20 w-full bg-[#6C6C6C] rounded-xl"></div>
                  <p className="text-xs text-slate-400">#6C6C6C</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- MAIN LANDING PAGE (FULL SCROLL) --- */}
        <div className="space-y-6 mb-24">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Main Landing Page
              </h3>
              <p className="text-slate-400">
                Tampilan penuh halaman utama secara keseluruhan.
              </p>
            </div>
          </div>
          <div className="relative rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden group">
            {/* Browser Bar Decoration */}
            <div className="sticky top-0 z-10 h-10 bg-[#151515] border-b border-white/5 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-700"></div>
              <div className="w-3 h-3 rounded-full bg-slate-700"></div>
            </div>
            {/* IMAGE SLOT: FULL HOME */}
            <img
              src="/images/travel-hero.png"
              alt="Full Homepage Design"
              className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              onError={(e) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/1440x3000/111/444?text=Paste+Your+Full+Homepage+Here";
              }}
            />
          </div>
        </div>

        {/* ================= BAGIAN BARU (3 SLOT: HOME, ABOUT, OUR TOUR) ================= */}
        {/* ================= BAGIAN YANG DI-UPDATE (CORE PAGES OVERVIEW) ================= */}

        <div className="border-t border-white/10 pt-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-1 bg-cyan-500 rounded-full"></div>
            <h2 className="text-3xl font-bold text-white">
              Core Pages Overview
            </h2>
          </div>

          {/* 3 GRID SLOT DENGAN FITUR "VIEW FULL IMAGE" */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* SLOT 1: HOME PAGE */}
            <div className="group space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <FaHome className="text-cyan-500" /> Home Page
                </h3>
              </div>

              {/* Card Container */}
              <div className="relative rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden hover:border-cyan-500/50 hover:-translate-y-2 transition-all duration-300 shadow-xl h-[500px]">
                {/* Mini Browser Bar */}
                <div className="h-8 bg-[#111] border-b border-white/5 flex items-center px-3 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/40"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/40"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/40"></div>
                </div>

                {/* Image */}
                <div className="h-full w-full overflow-hidden relative">
                  <img
                    src="/images/travel-home-full.png"
                    alt="Home Page Interface"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/600x1200/111/444?text=Home+Page+View";
                    }}
                  />

                  {/* OVERLAY BUTTON: LIHAT FULL IMAGE */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() =>
                        setPreviewImage("/images/travel-home-full.png")
                      }
                      className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg"
                    >
                      <FaExpand /> Lihat Gambar Penuh
                    </button>
                  </div>
                </div>

                {/* Overlay Label (Tetap ada di bawah jika tidak di hover) */}
                <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black to-transparent pointer-events-none group-hover:opacity-0 transition-opacity">
                  <p className="text-xs text-cyan-400 font-bold uppercase tracking-wider">
                    Starting Point
                  </p>
                </div>
              </div>
            </div>

            {/* SLOT 2: ABOUT US */}
            <div className="group space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <FaInfoCircle className="text-blue-500" /> About Us
                </h3>
              </div>

              {/* Card Container */}
              <div className="relative rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-300 shadow-xl h-[500px]">
                <div className="h-8 bg-[#111] border-b border-white/5 flex items-center px-3 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/40"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/40"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/40"></div>
                </div>

                {/* Image */}
                <div className="h-full w-full overflow-hidden relative">
                  <img
                    src="/images/travel-about.png"
                    alt="About Us Interface"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/600x1200/111/444?text=About+Us+Page";
                    }}
                  />

                  {/* OVERLAY BUTTON: LIHAT FULL IMAGE */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() =>
                        setPreviewImage("/images/travel-about.png")
                      }
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg"
                    >
                      <FaExpand /> Lihat Gambar Penuh
                    </button>
                  </div>
                </div>

                <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black to-transparent pointer-events-none group-hover:opacity-0 transition-opacity">
                  <p className="text-xs text-blue-400 font-bold uppercase tracking-wider">
                    Company Story
                  </p>
                </div>
              </div>
            </div>

            {/* SLOT 3: OUR TOUR */}
            <div className="group space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <FaSuitcase className="text-purple-500" /> Our Tour
                </h3>
              </div>

              {/* Card Container */}
              <div className="relative rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden hover:border-purple-500/50 hover:-translate-y-2 transition-all duration-300 shadow-xl h-[500px]">
                <div className="h-8 bg-[#111] border-b border-white/5 flex items-center px-3 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/40"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/40"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/40"></div>
                </div>

                {/* Image */}
                <div className="h-full w-full overflow-hidden relative">
                  <img
                    src="/images/travel-tour.png"
                    alt="Our Tour Interface"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/600x1200/111/444?text=Our+Tour+Page";
                    }}
                  />

                  {/* OVERLAY BUTTON: LIHAT FULL IMAGE */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setPreviewImage("/images/travel-tour.png")}
                      className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg"
                    >
                      <FaExpand /> Lihat Gambar Penuh
                    </button>
                  </div>
                </div>

                <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black to-transparent pointer-events-none group-hover:opacity-0 transition-opacity">
                  <p className="text-xs text-purple-400 font-bold uppercase tracking-wider">
                    Destinations List
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- FOOTER ACTION --- */}
        <div className="mt-32 text-center border-t border-white/10 pt-16">
          <h2 className="text-2xl font-bold text-white mb-6">
            Tertarik dengan hasil desain ini?
          </h2>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.figma.com/design/JdAdhu7IzEWkRICMkmbf6Q/Untitled?node-id=4-133&t=pGwLG6KI2ri9vEXw-1"
              className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-bold transition-all flex items-center gap-2 shadow-lg hover:shadow-cyan-500/25"
            >
              <FaExternalLinkAlt /> Lihat Prototype Figma
            </a>
          </div>
          <p className="text-slate-600 text-sm mt-12">
            © 2024 Travling! Project by Fila Prasetyo.
          </p>
        </div>
      </div>

      {/* ================= MODAL POPUP (FULL IMAGE VIEWER) ================= */}
      {/* Bagian ini akan muncul menutupi layar ketika 'previewImage' ada isinya */}

      {previewImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          {/* Backdrop Gelap (Klik untuk tutup) */}
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
            onClick={() => setPreviewImage(null)}
          ></div>

          {/* Container Gambar */}
          <div className="relative w-full max-w-4xl h-[90vh] bg-[#0a0a0a] rounded-2xl overflow-hidden shadow-2xl flex flex-col animate-fadeIn border border-white/10">
            {/* Header Modal */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#111]">
              <h3 className="text-white font-bold text-sm uppercase tracking-wider">
                Full Image Preview
              </h3>
              <button
                onClick={() => setPreviewImage(null)}
                className="p-2 bg-white/10 rounded-full hover:bg-red-500/20 hover:text-red-500 transition-colors"
              >
                <FaTimes />
              </button>
            </div>

            {/* Area Gambar Scrollable */}
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar bg-[#050505]">
              <img
                src={previewImage}
                alt="Full Preview"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
