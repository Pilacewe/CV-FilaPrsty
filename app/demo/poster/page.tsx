"use client";

import React, { useState, useRef, useEffect } from "react";
import { Syne, DM_Sans } from "next/font/google";
import { FaArrowRight, FaTimes, FaCircle } from "react-icons/fa";
import Link from "next/link";

// --- CONFIG FONTS ---
const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm",
});

// --- DATA PROJECTS ---
const projects = [
  {
    id: 1,
    title: "Sweet Delights",
    category: "Branding",
    year: "2024",
    description:
      "Visual identity and promotional assets for premium artisan bakery.",
    src: "/images/cake-poster.png",
    color: "#E8B05C", // Warna background dominan
    textColor: "#000000",
  },
  {
    id: 2,
    title: "Univ. Expo Banner",
    category: "Print Design",
    year: "2024",
    description:
      "Vertical roll-up banner design for major university exhibition.",
    src: "/images/UAS BANNE ROLL UP.png",
    color: "#1F40C4",
    textColor: "#FFFFFF",
  },
  {
    id: 3,
    title: "Mobile Launch",
    category: "UI/UX & Ads",
    year: "2023",
    description:
      "Campaign visuals for a revolutionary fintech mobile application.",
    src: "/images/mobile-campaign.png",
    color: "#10B981",
    textColor: "#000000",
  },
  {
    id: 4,
    title: "Campus Event",
    category: "Editorial",
    year: "2023",
    description: "Typography-focused poster for student information board.",
    src: "/images/UAS POSTER.png",
    color: "#FF4538",
    textColor: "#FFFFFF",
  },
  {
    id: 5,
    title: "Abstract Realm",
    category: "Art Direction",
    year: "2023",
    description:
      "Experimental 3D abstract render series for creative exploration.",
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    color: "#8B5CF6",
    textColor: "#FFFFFF",
  },
];

export default function StackingPortfolio() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <div
      className={`bg-[#050505] min-h-screen ${syne.variable} ${dmSans.variable}`}
    >
      {/* --- HERO SECTION --- */}
      <div className="h-[60vh] flex flex-col justify-center px-8 md:px-20 border-b border-white/10">
        <span
          className="text-white/40 uppercase tracking-widest text-xs mb-4"
          style={{ fontFamily: "var(--font-dm)" }}
        >
          Portfolio 2024-2025
        </span>
        <h1
          className="text-6xl md:text-9xl font-extrabold text-white uppercase tracking-tighter leading-[0.9]"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Selected <br />{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Works.
          </span>
        </h1>
      </div>

      {/* --- STACKING CARDS CONTAINER --- */}
      <div className="relative w-full pb-32">
        {projects.map((project, index) => {
          // Menghitung jarak 'sticky' agar menumpuk rapi
          const topPosition = 100 + index * 40;

          return (
            <div
              key={project.id}
              className="sticky w-full"
              style={{
                top: `${topPosition}px`, // Kunci efek menumpuk
                marginBottom: "10vh", // Jarak scroll
              }}
            >
              <Card project={project} index={index} openModal={setModalImage} />
            </div>
          );
        })}
      </div>

      {/* --- FOOTER --- */}
      <footer className="h-[50vh] flex flex-col justify-center items-center bg-black text-white text-center px-4 relative z-50">
        <h2
          className="text-4xl md:text-6xl font-bold mb-8"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Let's Create Magic.
        </h2>
        <Link
          href="/"
          className="px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform"
        >
          Contact Me
        </Link>
        <div className="mt-20 text-white/30 text-sm">
          © 2024 All Rights Reserved.
        </div>
      </footer>

      {/* --- MODAL --- */}
      {modalImage && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">
          <button
            onClick={() => setModalImage(null)}
            className="absolute top-6 right-6 text-white hover:text-red-500 bg-white/10 p-4 rounded-full transition-all"
          >
            <FaTimes size={24} />
          </button>
          <img
            src={modalImage}
            alt="Full View"
            className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-lg"
          />
        </div>
      )}
    </div>
  );
}

// --- SUB-COMPONENT: CARD (The Stacking Item) ---
interface ProjectProps {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  src: string;
  color: string;
  textColor: string;
}

function Card({
  project,
  index,
  openModal,
}: {
  project: ProjectProps;
  index: number;
  openModal: (src: string) => void;
}) {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-0">
      <div
        className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-white/10 shadow-2xl transition-transform duration-500"
        style={{
          backgroundColor: project.color, // Warna dinamis per project
          color: project.textColor,
          height: "550px", // Tinggi kartu
          transformOrigin: "top center",
        }}
      >
        <div className="flex flex-col md:flex-row h-full">
          {/* BAGIAN KIRI: INFO */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between relative z-10">
            {/* Header Card */}
            <div className="flex justify-between items-start border-b border-current/20 pb-6">
              <div className="flex gap-2 items-center text-xs uppercase tracking-widest font-bold">
                <span className="w-2 h-2 rounded-full bg-current"></span>
                {project.category}
              </div>
              <div className="font-mono opacity-60">0{index + 1}</div>
            </div>

            {/* Title & Desc */}
            <div>
              <h2
                className="text-4xl md:text-5xl font-extrabold uppercase leading-none mb-6"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {project.title}
              </h2>
              <p
                className="opacity-80 text-sm md:text-lg max-w-sm leading-relaxed"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                {project.description}
              </p>
            </div>

            {/* Button */}
            <button
              onClick={() => openModal(project.src)}
              className="group w-fit flex items-center gap-3 px-6 py-3 rounded-full border border-current hover:bg-current hover:text-white/90 transition-all duration-300 mt-6"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              <span className="uppercase text-xs font-bold tracking-widest">
                View Project
              </span>
              <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* BAGIAN KANAN: GAMBAR */}
          <div
            className="w-full md:w-1/2 h-full relative overflow-hidden group cursor-pointer"
            onClick={() => openModal(project.src)}
          >
            {/* Image Wrapper untuk animasi scale */}
            <div className="absolute inset-4 md:inset-6 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-inner">
              <img
                src={project.src}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Overlay Text "CLICK TO EXPAND" */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs uppercase font-bold tracking-widest">
                  Click to Expand
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BACKGROUND DECORATION (Watermark Besar) */}
        <h3
          className="absolute -bottom-4 -right-4 text-[150px] font-black opacity-10 leading-none pointer-events-none select-none"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {project.year}
        </h3>
      </div>
    </div>
  );
}
