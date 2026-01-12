"use client";

import React, { useState } from "react";
import { Syne, Manrope } from "next/font/google";
import {
  FaArrowLeft,
  FaShapes,
  FaVectorSquare,
  FaPalette,
  FaDownload,
  FaTimes,
  FaImage,
  FaExpand,
  FaEye,
} from "react-icons/fa";
import Link from "next/link";

// --- FONT CONFIG ---
const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-manrope",
});

export default function LogoShowcase() {
  // STATE
  const [activeView, setActiveView] = useState("color"); // 'color', 'black', 'white'
  const [activeLogoIndex, setActiveLogoIndex] = useState(0);

  // STATE MODAL (Sekarang menerima URL string gambar)
  const [modalImage, setModalImage] = useState<string | null>(null);

  // --- CONFIG: LOGO FILES (Untuk Hero Section - Logo Mentah) ---
  const logoFiles = [
    {
      id: 0,
      label: "Main Logo",
      src: "/images/your-logo.png", // Ganti path logo utama
    },
    {
      id: 1,
      label: "Logomark",
      src: "/images/logo-main.png", // Ganti path logo icon
    },
  ];

  // --- CONFIG: MOCKUP IMAGES (Gambar Desain Jadi Anda) ---
  // Masukkan gambar mockup yang sudah Anda buat di sini.
  const mockupImages = [
    {
      src: "/images/Box 1 Front Design.png", // Ganti dengan gambar mockup 1 Anda
      title: "Stationery Design",
      desc: "Business Card & Letterhead",
      span: "col-span-1 md:col-span-2", // Gambar ini akan lebar (full width)
    },
    {
      src: "/images/c2.png", // Ganti dengan gambar mockup 2 Anda
      title: "Mobile Interface",
      desc: "App Icon Implementation",
      span: "col-span-1", // Gambar ini ukuran standar
    },
    {
      src: "/images/Paper Shopping Вag Beautiful.png", // Ganti dengan gambar mockup 3 (Opsional/Duplicate)
      title: "Merchandise",
      desc: "T-Shirt & Packaging",
      span: "col-span-1", // Gambar ini ukuran standar
    },
  ];

  // Config Warna Palette
  const brandColors = [
    { name: "Primary", hex: "#401B8C" },
    { name: "Secondary", hex: "#B5D647" },
    { name: "Dark", hex: "#1A1A1A" },
  ];

  return (
    <div
      className={`min-h-screen bg-[#0A0A0A] text-white selection:bg-white/20 ${syne.variable} ${manrope.variable}`}
    >
      {/* Background Pattern */}
      <div
        className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      {/* --- NAVIGASI --- */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-5 py-2.5 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all group shadow-xl"
        style={{ fontFamily: "var(--font-manrope)" }}
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        Kembali
      </Link>

      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 border-b border-white/10 pb-8">
          <div className="space-y-4">
            <div
              className="inline-flex items-center gap-2 text-[#888] text-xs font-bold uppercase tracking-[0.2em]"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              <FaShapes /> Brand Identity
            </div>
            <h1
              className="text-5xl md:text-7xl font-bold leading-none"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Logo <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#555]">
                Showcase.
              </span>
            </h1>
          </div>
          <div
            className="max-w-sm text-[#888] text-sm leading-relaxed"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            <p>
              Presentasi visual branding yang mencakup struktur logo utama,
              variasi simbol, serta implementasi pada media nyata.
            </p>
          </div>
        </div>

        {/* ================= SECTION 1: LOGO FILE PREVIEW ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24">
          {/* Main Logo Viewer */}
          <div
            className="lg:col-span-2 relative aspect-video lg:aspect-auto min-h-[400px] rounded-3xl border border-white/10 overflow-hidden flex flex-col transition-colors duration-500"
            style={{
              backgroundColor:
                activeView === "white"
                  ? "#FFFFFF"
                  : activeView === "black"
                  ? "#000000"
                  : "#111111",
            }}
          >
            {/* Grid Decoration */}
            <div
              className={`absolute inset-0 opacity-[0.05] pointer-events-none ${
                activeView === "white" ? "invert" : ""
              }`}
              style={{
                backgroundImage:
                  'url("https://www.transparenttextures.com/patterns/graphy.png")',
              }}
            ></div>

            {/* The Logo Image */}
            <div
              className="flex-1 flex items-center justify-center p-12 relative z-10 group cursor-pointer"
              onClick={() => setModalImage(logoFiles[activeLogoIndex].src)}
            >
              <img
                src={logoFiles[activeLogoIndex].src}
                alt="Logo Preview"
                className={`max-w-full max-h-[220px] object-contain transition-all duration-500 drop-shadow-2xl group-hover:scale-105
                            ${
                              activeView === "black"
                                ? "brightness-0 invert"
                                : ""
                            } 
                            ${activeView === "white" ? "brightness-0" : ""}
                        `}
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/500x200/transparent/FFFFFF?text=LOGO+FILE";
                }}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-4 py-2 rounded-full backdrop-blur-md flex items-center gap-2 text-sm font-bold">
                <FaExpand /> View Full
              </div>
            </div>

            {/* Controls */}
            <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/5 relative z-20 bg-black/20 backdrop-blur-sm">
              <div className="flex gap-2 p-1 bg-black/40 rounded-lg border border-white/10">
                {logoFiles.map((logo, index) => (
                  <button
                    key={logo.id}
                    onClick={() => setActiveLogoIndex(index)}
                    className={`px-4 py-2 text-xs font-bold rounded-md transition-all flex items-center gap-2
                                ${
                                  activeLogoIndex === index
                                    ? "bg-white text-black shadow-lg"
                                    : "text-[#888] hover:text-white"
                                }`}
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    <FaImage /> {logo.label}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                {["color", "black", "white"].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setActiveView(mode)}
                    className={`w-8 h-8 rounded-full border border-white/20 transition-all flex items-center justify-center
                                ${
                                  mode === "color"
                                    ? "bg-gradient-to-br from-blue-500 to-pink-500"
                                    : ""
                                }
                                ${mode === "black" ? "bg-black" : ""}
                                ${mode === "white" ? "bg-white" : ""}
                                ${
                                  activeView === mode
                                    ? "ring-2 ring-white scale-110"
                                    : "opacity-50 hover:opacity-100"
                                }`}
                    title={`View in ${mode}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Info Sidebar */}
          <div className="flex flex-col gap-6">
            {/* Color Palette */}
            <div className="flex-1 bg-[#111] rounded-3xl p-8 border border-white/10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-6 text-[#888]">
                <FaPalette />
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Colors
                </span>
              </div>
              <div className="space-y-4">
                {brandColors.map((color, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div
                      className="w-10 h-10 rounded-full shadow-lg"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <div>
                      <p className="font-bold text-sm text-white font-mono">
                        {color.hex}
                      </p>
                      <p className="text-[10px] text-[#666] uppercase">
                        {color.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables Info */}
            <div className="h-auto bg-[#111] rounded-3xl p-8 border border-white/10 flex flex-col justify-center relative overflow-hidden">
              <FaVectorSquare className="absolute -right-4 -bottom-4 text-[8rem] text-white/[0.02]" />
              <h3
                className="text-xl font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                File Formats
              </h3>
              <ul
                className="space-y-3 text-sm text-[#888]"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Source</span>{" "}
                  <span className="text-white">.AI, .EPS</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Digital</span>{" "}
                  <span className="text-white">.PNG, .SVG</span>
                </li>
                <li className="flex justify-between">
                  <span>Print</span>{" "}
                  <span className="text-white">.PDF, .TIFF</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ================= SECTION 2: MOCKUP GALLERY (APPLICATIONS) ================= */}
        <div className="mb-24">
          <div className="flex items-end justify-between mb-10">
            <h2
              className="text-3xl font-bold flex items-center gap-4"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              <span className="w-3 h-10 bg-[#5961F9] block rounded-r-full -ml-6"></span>
              Application & Context
            </h2>
            <p
              className="hidden md:block text-[#666] text-sm"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Implementasi logo pada media nyata.
            </p>
          </div>

          {/* GALLERY GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockupImages.map((item, index) => (
              <div
                key={index}
                className={`relative group rounded-[2rem] overflow-hidden border border-white/10 bg-[#111] ${item.span}`}
              >
                {/* Aspek Rasio Container */}
                <div className="relative w-full h-[400px]">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/800x600/333333/FFFFFF?text=MOCKUP+IMAGE";
                    }}
                  />

                  {/* Dark Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                    {/* Text Info */}
                    <div className="bg-black/60 backdrop-blur-xl p-6 rounded-2xl border border-white/10 flex items-center justify-between">
                      <div>
                        <h4
                          className="text-white font-bold text-lg"
                          style={{ fontFamily: "var(--font-syne)" }}
                        >
                          {item.title}
                        </h4>
                        <p
                          className="text-[#ccc] text-xs uppercase tracking-wider mt-1"
                          style={{ fontFamily: "var(--font-manrope)" }}
                        >
                          {item.desc}
                        </p>
                      </div>
                      <button
                        onClick={() => setModalImage(item.src)}
                        className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-[#ccc] transition-colors"
                      >
                        <FaEye />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= FOOTER ================= */}
        <div className="border-t border-white/10 pt-12 flex flex-col items-center text-center">
          <button
            className="flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-[#ccc] transition-colors shadow-lg shadow-white/10"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            <FaDownload /> Download Brand Kit
          </button>
          <p className="text-[#444] text-xs mt-6">
            © 2024 Your Brand Identity. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* ================= UNIVERSAL IMAGE MODAL ================= */}
      {modalImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
          <div
            className="absolute inset-0 bg-black/95 backdrop-blur-md"
            onClick={() => setModalImage(null)}
          ></div>
          <div className="relative z-10 w-full max-w-5xl max-h-screen flex flex-col items-center">
            {/* Tombol Close */}
            <button
              onClick={() => setModalImage(null)}
              className="absolute -top-12 right-0 md:top-4 md:right-4 text-white hover:text-[#F72585] transition-colors p-2 bg-black/50 rounded-full border border-white/20"
            >
              <FaTimes size={24} />
            </button>

            {/* Gambar Full */}
            <img
              src={modalImage}
              className="w-auto max-h-[85vh] rounded-lg shadow-2xl border border-white/10"
              alt="Full Preview"
            />
          </div>
        </div>
      )}
    </div>
  );
}
