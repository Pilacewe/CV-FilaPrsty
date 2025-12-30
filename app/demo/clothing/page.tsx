"use client";

import React, { useState } from "react";
import {
  FaArrowLeft,
  FaShoppingBag, // Ganti pesawat dengan tas belanja
  FaPalette,
  FaFont,
  FaExternalLinkAlt,
  FaHome,
  FaSearch,
  FaTshirt,
  FaShoppingCart,
  FaCreditCard,
  FaUser,
  FaExpand,
  FaTimes,
  FaTags,
} from "react-icons/fa";
import Link from "next/link";

export default function ClothingProjectShowcase() {
  // --- STATE UNTUK MODAL GAMBAR ---
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-amber-500/30">
      {/* --- FLOATING BACK BUTTON --- */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-sm text-slate-300 hover:text-amber-400 hover:border-amber-500/50 transition-all group shadow-2xl"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        Kembali ke Portofolio
      </Link>

      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* ================= BAGIAN ATAS ================= */}

        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-24 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-bold uppercase tracking-wider">
            <FaShoppingBag /> E-Commerce Fashion Platform
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Fàithfülness. <span className="text-slate-600">Style.</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Platform e-commerce fashion modern dengan desain minimalis yang
            elegan. Fokus pada pengalaman visual produk (lookbook) dan alur
            belanja (checkout flow) yang seamless.
          </p>
        </div>

        {/* --- HERO SHOWCASE (LAPTOP MOCKUP STYLE) --- */}
        <div className="relative mb-32 group">
          {/* Glow Effect - Ubah warna jadi Amber/Gold untuk kesan mewah */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

          {/* Browser Window */}
          <div className="relative bg-[#0a0a0a] rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl">
            <div className="h-12 bg-[#111] border-b border-white/5 flex items-center px-6 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              <div className="ml-4 px-4 py-1 bg-[#222] rounded-md text-[10px] text-slate-500 flex-1 text-center font-mono">
                fàithfülness.com/store
              </div>
            </div>
            {/* MAIN HERO IMAGE */}
            <div className="aspect-video w-full overflow-hidden bg-slate-900 relative">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
                alt="Clothing Store Hero Section"
                className="w-full h-full object-cover object-center hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* --- PROJECT OVERVIEW --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-8 h-1 bg-amber-500 rounded-full"></span> The
              Challenge
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Toko pakaian online seringkali terasa membingungkan dengan terlalu
              banyak banner promosi. Tantangannya adalah menciptakan suasana
              "Luxury Boutique" secara digital yang tetap fungsional dan cepat.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-8 h-1 bg-orange-500 rounded-full"></span> The
              Solution
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Menerapkan desain monokromatik dengan tipografi serif untuk kesan
              elegan. Mengutamakan foto produk beresolusi tinggi dan fitur
              filter kategori yang intuitif tanpa reload halaman.
            </p>
          </div>
        </div>

        {/* --- DESIGN SYSTEM (Updated: Nunito, Montserrat & 6 Custom Colors) --- */}
        <div className="mb-32 p-8 md:p-12 bg-[#0F0F0F] rounded-3xl border border-white/5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Design System
            </h2>
            <p className="text-slate-500">
              Fondasi visual: Tipografi & Palet Warna
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Typography Section */}
            <div className="space-y-6">
              <h4 className="flex items-center gap-2 text-xl font-bold text-slate-200">
                <FaFont className="text-[#D0E5C7]" /> Typography
              </h4>
              <div className="p-6 bg-black/40 rounded-xl border border-white/10 space-y-8">
                {/* Font 1: Nunito (Bold & Medium) */}
                <div className="border-b border-white/5 pb-6">
                  <div className="flex items-end gap-4 mb-2">
                    <p
                      className="text-5xl text-white"
                      style={{
                        fontFamily: '"Nunito", sans-serif',
                        fontWeight: 700,
                      }}
                    >
                      Aa
                    </p>
                    <p
                      className="text-5xl text-white"
                      style={{
                        fontFamily: '"Nunito", sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      Aa
                    </p>
                  </div>
                  <p className="text-white font-bold text-lg">Nunito</p>
                  <p className="text-slate-400 text-sm">
                    Bold (700), Medium (500)
                  </p>
                </div>

                {/* Font 2: Montserrat (Bold, Medium, Regular) */}
                <div>
                  <div className="flex items-end gap-4 mb-2">
                    <p
                      className="text-4xl text-white"
                      style={{
                        fontFamily: '"Montserrat", sans-serif',
                        fontWeight: 700,
                      }}
                    >
                      Aa
                    </p>
                    <p
                      className="text-4xl text-white"
                      style={{
                        fontFamily: '"Montserrat", sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      Aa
                    </p>
                    <p
                      className="text-4xl text-white"
                      style={{
                        fontFamily: '"Montserrat", sans-serif',
                        fontWeight: 400,
                      }}
                    >
                      Aa
                    </p>
                  </div>
                  <p className="text-white font-bold text-lg">Montserrat</p>
                  <p className="text-slate-400 text-sm">
                    Bold (700), Medium (500), Regular (400)
                  </p>
                </div>
              </div>
            </div>

            {/* Color Palette Section */}
            <div className="space-y-6">
              <h4 className="flex items-center gap-2 text-xl font-bold text-slate-200">
                <FaPalette className="text-[#3D2C45]" /> Color Palette
              </h4>

              {/* Grid 6 Warna (3 kolom x 2 baris pada desktop) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {/* 1. Grey (#9A9A9A) */}
                <div className="space-y-2 text-center group">
                  <div className="h-16 w-full bg-[#9A9A9A] rounded-xl shadow-lg transition-transform group-hover:scale-105"></div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">
                    #9A9A9A
                  </p>
                </div>

                {/* 2. Dark Purple (#3D2C45) */}
                <div className="space-y-2 text-center group">
                  <div className="h-16 w-full bg-[#3D2C45] rounded-xl shadow-lg transition-transform group-hover:scale-105 border border-white/10"></div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">
                    #3D2C45
                  </p>
                </div>

                {/* 3. White (#FFFFFF) */}
                <div className="space-y-2 text-center group">
                  <div className="h-16 w-full bg-[#FFFFFF] rounded-xl shadow-lg transition-transform group-hover:scale-105"></div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">
                    #FFFFFF
                  </p>
                </div>

                {/* 4. Pale Green (#D0E5C7) */}
                <div className="space-y-2 text-center group">
                  <div className="h-16 w-full bg-[#D0E5C7] rounded-xl shadow-lg transition-transform group-hover:scale-105"></div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">
                    #D0E5C7
                  </p>
                </div>

                {/* 5. Black (#000000) */}
                <div className="space-y-2 text-center group">
                  <div className="h-16 w-full bg-[#000000] rounded-xl shadow-lg transition-transform group-hover:scale-105 border border-white/20"></div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">
                    #000000
                  </p>
                </div>

                {/* 6. Dark Teal (#284146) */}
                <div className="space-y-2 text-center group">
                  <div className="h-16 w-full bg-[#284146] rounded-xl shadow-lg transition-transform group-hover:scale-105 border border-white/10"></div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">
                    #284146
                  </p>
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
                Main Storefront
              </h3>
              <p className="text-slate-400">
                Tampilan penuh halaman depan toko dengan banner seasonal.
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
              src="/images/clothing-home-full.png"
              alt="Full Store Homepage Design"
              className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              onError={(e) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/1440x3000/111/D4AF37?text=Paste+Your+Full+Clothing+Homepage+Here";
              }}
            />
          </div>
        </div>

        {/* ================= CORE PAGES OVERVIEW (UPDATED: 6 CARDS) ================= */}
        <div className="border-t border-white/10 pt-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-1 bg-amber-500 rounded-full"></div>
            <h2 className="text-3xl font-bold text-white">
              Core Pages Overview
            </h2>
          </div>

          {/* GRID DIPERBANYAK MENJADI 3 KOLOM x 2 BARIS = 6 ITEM */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. HOME PAGE */}
            <div className="group space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <FaHome className="text-amber-500" /> Home Page
              </h3>
              <div className="relative rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden hover:border-amber-500/50 hover:-translate-y-2 transition-all duration-300 shadow-xl h-[400px]">
                <div className="h-full w-full overflow-hidden relative">
                  <img
                    src="/images/clothing-home.png"
                    alt="Home Page"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/600x1000/111/555?text=Home+Page";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() =>
                        setPreviewImage("/images/clothing-home.png")
                      }
                      className="px-5 py-2 bg-amber-600 text-white rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    >
                      <FaExpand /> Preview
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. CATALOG / SHOP PAGE */}
            <div className="group space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <FaSearch className="text-orange-500" /> Catalog & Filter
              </h3>
              <div className="relative rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden hover:border-orange-500/50 hover:-translate-y-2 transition-all duration-300 shadow-xl h-[400px]">
                <div className="h-full w-full overflow-hidden relative">
                  <img
                    src="/images/clothing-catalog.png"
                    alt="Catalog Page"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/600x1000/111/555?text=Catalog+Page";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() =>
                        setPreviewImage("/images/clothing-catalog.png")
                      }
                      className="px-5 py-2 bg-orange-600 text-white rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    >
                      <FaExpand /> Preview
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. PRODUCT DETAIL */}
            <div className="group space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <FaTshirt className="text-rose-500" /> Product Detail
              </h3>
              <div className="relative rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden hover:border-rose-500/50 hover:-translate-y-2 transition-all duration-300 shadow-xl h-[400px]">
                <div className="h-full w-full overflow-hidden relative">
                  <img
                    src="/images/clothing-detail.png"
                    alt="Product Detail"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/600x1000/111/555?text=Product+Detail";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() =>
                        setPreviewImage("/images/clothing-detail.png")
                      }
                      className="px-5 py-2 bg-rose-600 text-white rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    >
                      <FaExpand /> Preview
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. SHOPPING CART */}
            <div className="group space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <FaShoppingCart className="text-blue-500" /> Shopping Cart
              </h3>
              <div className="relative rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-300 shadow-xl h-[400px]">
                <div className="h-full w-full overflow-hidden relative">
                  <img
                    src="/images/clothing-cart.png"
                    alt="Shopping Cart"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/600x1000/111/555?text=Shopping+Cart";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() =>
                        setPreviewImage("/images/clothing-cart.png")
                      }
                      className="px-5 py-2 bg-blue-600 text-white rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    >
                      <FaExpand /> Preview
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. CHECKOUT PAGE */}
            <div className="group space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <FaCreditCard className="text-green-500" /> Checkout Flow
              </h3>
              <div className="relative rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden hover:border-green-500/50 hover:-translate-y-2 transition-all duration-300 shadow-xl h-[400px]">
                <div className="h-full w-full overflow-hidden relative">
                  <img
                    src="/images/clothing-checkout.png"
                    alt="Checkout"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/600x1000/111/555?text=Checkout+Page";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() =>
                        setPreviewImage("/images/clothing-checkout.png")
                      }
                      className="px-5 py-2 bg-green-600 text-white rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    >
                      <FaExpand /> Preview
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. USER PROFILE */}
            <div className="group space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <FaUser className="text-purple-500" /> About US
              </h3>
              <div className="relative rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden hover:border-purple-500/50 hover:-translate-y-2 transition-all duration-300 shadow-xl h-[400px]">
                <div className="h-full w-full overflow-hidden relative">
                  <img
                    src="/images/clothing-profile.png"
                    alt="User Profile"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/600x1000/111/555?text=User+Profile";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() =>
                        setPreviewImage("/images/clothing-profile.png")
                      }
                      className="px-5 py-2 bg-purple-600 text-white rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    >
                      <FaExpand /> Preview
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- FOOTER ACTION --- */}
        <div className="mt-32 text-center border-t border-white/10 pt-16">
          <h2 className="text-2xl font-bold text-white mb-6">
            Tertarik dengan konsep E-Commerce ini?
          </h2>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.figma.com/design/Wd1aIXM1xtCTJB0YO2MqSb/Untitled?node-id=117-1417&t=Pc3xduhu9FMwJRbO-1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-full font-bold transition-all flex items-center gap-2 shadow-lg hover:shadow-amber-500/25"
            >
              <FaExternalLinkAlt /> Lihat Prototype Figma
            </a>
          </div>
          <p className="text-slate-600 text-sm mt-12">
            © 2024 Fàithfülness Clothes Project. Created by Fila Prasetyo.
          </p>
        </div>
      </div>

      {/* ================= MODAL POPUP (FULL IMAGE VIEWER) ================= */}
      {previewImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
            onClick={() => setPreviewImage(null)}
          ></div>
          <div className="relative w-full max-w-4xl h-[90vh] bg-[#0a0a0a] rounded-2xl overflow-hidden shadow-2xl flex flex-col animate-fadeIn border border-white/10">
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
