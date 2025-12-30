"use client";

import React from "react";
import {
  FaArrowLeft,
  FaUtensils,
  FaFire,
  FaPlay,
  FaShoppingBasket,
  FaMobileAlt,
  FaQuoteLeft,
} from "react-icons/fa";
import Link from "next/link";

export default function CookingProjectShowcase() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-500/30">
      {/* --- FLOATING BACK BUTTON --- */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-sm text-slate-300 hover:text-orange-400 hover:border-orange-500/50 transition-all group shadow-2xl"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        Kembali ke Portofolio
      </Link>

      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* --- HEADER TITLE --- */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-bold uppercase tracking-wider">
            <FaUtensils /> Culinary Mobile App
          </div>
          <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500">
            Cooking Master App
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Case study perancangan aplikasi kuliner modern yang berfokus pada
            pengalaman memasak yang interaktif dan manajemen bahan yang efisien.
          </p>
        </div>

        {/* --- NEW INTRO SECTION: NARRATIVE LEFT/RIGHT + CENTER IMAGE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-32">
          {/* COLUMN 1: LEFT NARRATIVE (Background & Problem) */}
          <div className="space-y-12 order-2 lg:order-1 text-center lg:text-right">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center justify-center lg:justify-end gap-3">
                The Background{" "}
                <span className="w-8 h-1 bg-orange-500 rounded-full hidden lg:block"></span>
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Banyak orang ingin memasak makanan sehat di rumah tetapi sering
                kebingungan menentukan menu berdasarkan bahan yang tersisa di
                kulkas mereka.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center justify-center lg:justify-end gap-3">
                The Challenge{" "}
                <span className="w-8 h-1 bg-orange-500 rounded-full hidden lg:block"></span>
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Menciptakan antarmuka yang bersih namun kaya fitur, di mana
                pengguna dapat mencari resep kompleks tanpa merasa kewalahan
                (cognitive overload).
              </p>
            </div>
          </div>

          {/* COLUMN 2: CENTER IMAGE (MAIN SHOWCASE) */}
          {/* TEMPAT MEMASUKKAN GAMBAR UTAMA PILIHAN ANDA */}
          <div className="order-1 lg:order-2 relative h-[600px] w-full bg-[#0a0a0a] rounded-[3rem] border-4 border-[#1a1a1a] shadow-2xl overflow-hidden flex items-center justify-center group">
            {/* Efek Glow di belakang gambar */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-500/20 blur-[100px] rounded-full pointer-events-none"></div>

            {/* IMAGE TAG - Ganti src dengan gambar pilihan Anda */}
            <img
              src="/images/cooking-main-intro.png"
              alt="Cooking App Main Display"
              className="relative z-10 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              // Placeholder jika gambar belum ada
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070&auto=format&fit=crop";
              }}
            />

            {/* Floating Badge (Hiasan) */}
            <div className="absolute bottom-8 w-[90%] bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center justify-between z-20">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-widest">
                  Total Recipes
                </p>
                <p className="text-xl font-bold text-white">2,450+</p>
              </div>
              <div className="bg-orange-500 p-2 rounded-lg text-white">
                <FaFire />
              </div>
            </div>
          </div>

          {/* COLUMN 3: RIGHT NARRATIVE (Solution & Outcome) */}
          <div className="space-y-12 order-3 lg:order-3 text-center lg:text-left">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center justify-center lg:justify-start gap-3">
                <span className="w-8 h-1 bg-orange-500 rounded-full hidden lg:block"></span>{" "}
                The Solution
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Fitur "Smart Fridge" yang memungkinkan pengguna memasukkan bahan
                yang mereka miliki, dan algoritma akan menampilkan resep yang
                relevan secara instan.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center justify-center lg:justify-start gap-3">
                <span className="w-8 h-1 bg-orange-500 rounded-full hidden lg:block"></span>{" "}
                Visual Style
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Menggunakan tema gelap (Dark Mode) untuk menonjolkan warna-warna
                cerah dari fotografi makanan, membuat setiap hidangan terlihat
                menggugah selera.
              </p>
            </div>
          </div>
        </div>

        {/* ================= SECTION 1: USER JOURNEY (ALUR PENGGUNA) ================= */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
            <h2 className="text-3xl font-bold text-white">
              01. The User Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Screen 1: Onboarding / Login */}
            <div className="space-y-4 group">
              <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-4 group-hover:border-orange-500/50 transition-all duration-300">
                <img
                  src="/images/onboarding22.png"
                  onError={(e) =>
                    (e.currentTarget.src =
                      "https://via.placeholder.com/400x800/111/444?text=Login+Screen")
                  }
                  className="w-full h-auto rounded-lg shadow-lg opacity-80 group-hover:opacity-100 transition-opacity"
                  alt="Login Screen"
                />
              </div>
              <div className="px-2">
                <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                  Onboarding
                </h3>
                <p className="text-sm text-slate-400 mt-2">
                  Desain login yang bersih dengan opsi sosial media agar
                  pengguna bisa masuk dengan cepat.
                </p>
              </div>
            </div>

            {/* Screen 2: Home Feed */}
            <div className="space-y-4 md:mt-12 group">
              <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-4 group-hover:border-orange-500/50 transition-all duration-300">
                <img
                  src="/images/homep.png"
                  onError={(e) =>
                    (e.currentTarget.src =
                      "https://via.placeholder.com/400x800/111/444?text=Home+Feed")
                  }
                  className="w-full h-auto rounded-lg shadow-lg opacity-80 group-hover:opacity-100 transition-opacity"
                  alt="Home Screen"
                />
              </div>
              <div className="px-2">
                <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                  Main Feed
                </h3>
                <p className="text-sm text-slate-400 mt-2">
                  Rekomendasi resep berdasarkan preferensi waktu (Sarapan/Makan
                  Siang) dan popularitas.
                </p>
              </div>
            </div>

            {/* Screen 3: Search & Filter */}
            <div className="space-y-4 group">
              <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-4 group-hover:border-orange-500/50 transition-all duration-300">
                <img
                  src="/images/search.png"
                  onError={(e) =>
                    (e.currentTarget.src =
                      "https://via.placeholder.com/400x800/111/444?text=Search+Filter")
                  }
                  className="w-full h-auto rounded-lg shadow-lg opacity-80 group-hover:opacity-100 transition-opacity"
                  alt="Search Screen"
                />
              </div>
              <div className="px-2">
                <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                  Smart Search
                </h3>
                <p className="text-sm text-slate-400 mt-2">
                  Filter canggih berdasarkan bahan yang tersedia di kulkas,
                  kalori, atau jenis diet.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SECTION 2: FEATURE DEEP DIVE ================= */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
            <h2 className="text-3xl font-bold text-white">
              02. Feature Deep Dive
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
            {/* Large Feature: Detail Resep */}
            <div className="md:col-span-2 bg-[#0F0F0F] rounded-3xl overflow-hidden border border-white/5 relative group transition-all hover:shadow-orange-900/10 hover:shadow-2xl">
              <img
                src="/images/resep.png"
                onError={(e) =>
                  (e.currentTarget.src =
                    "https://via.placeholder.com/800x600/111/444?text=Full+Recipe+Detail")
                }
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-8">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <FaUtensils className="text-orange-500" /> Recipe Instructions
                </h3>
                <p className="text-slate-300 mt-2">
                  Tampilan detail langkah demi langkah memasak dengan tipografi
                  yang mudah dibaca saat memasak.
                </p>
              </div>
            </div>

            {/* Tall Feature: Shopping List */}
            <div className="md:row-span-1 bg-[#0F0F0F] rounded-3xl overflow-hidden border border-white/5 relative group">
              <img
                src="/images/account.png"
                onError={(e) =>
                  (e.currentTarget.src =
                    "https://via.placeholder.com/400x800/111/444?text=Shopping+List")
                }
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-full text-orange-400 border border-white/10">
                <FaShoppingBasket size={20} />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
                <h4 className="font-bold text-white text-lg">Shopping List</h4>
                <p className="text-xs text-slate-400">
                  Auto-generated from recipes
                </p>
              </div>
            </div>

            {/* Standard Feature: Responsive */}
            <div className="bg-[#0F0F0F] rounded-3xl overflow-hidden border border-white/5 relative group p-6 flex flex-col justify-center items-center text-center hover:bg-[#151515] transition-colors">
              <div className="w-20 h-20 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 text-4xl mb-4 border border-orange-500/30 group-hover:scale-110 transition-transform">
                <FaMobileAlt />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Responsive Design
              </h3>
              <p className="text-slate-400 text-sm">
                Layout yang fleksibel menyesuaikan berbagai ukuran layar
                perangkat mobile pengguna.
              </p>
            </div>

            {/* Standard Feature: Ingredients */}
            <div className="md:col-span-2 bg-[#0F0F0F] rounded-3xl overflow-hidden border border-white/5 relative group">
              <img
                src="/images/00 - Cover.png"
                onError={(e) =>
                  (e.currentTarget.src =
                    "https://via.placeholder.com/800x400/111/444?text=Ingredients+Section")
                }
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                <span className="text-orange-400 font-bold flex items-center gap-2">
                  <FaFire /> Dynamic Ingredients
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* --- FOOTER --- */}
        <div className="border-t border-white/10 pt-16 text-center pb-8">
          <FaQuoteLeft className="text-4xl text-white/10 mx-auto mb-4" />
          <p className="text-xl text-slate-300 italic max-w-2xl mx-auto mb-8 font-light">
            "Desain yang baik bukan hanya tentang bagaimana tampilannya, tetapi
            bagaimana cara kerjanya untuk membantu pengguna mencapai tujuan
            mereka di dapur."
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full text-white font-bold hover:shadow-lg hover:shadow-orange-500/20 transition-all transform hover:-translate-y-1">
              Buka Figma Prototype
            </button>
          </div>
          <p className="text-slate-600 text-sm mt-12">
            © 2024 Cooking Master Project. Created by Fila Prasetyo.
          </p>
        </div>
      </div>
    </div>
  );
}
