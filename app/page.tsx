"use client";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

// Import Ikon
import {
  FaMobileAlt,
  FaLaptopCode,
  FaTshirt,
  FaPlane,
  FaPepperHot,
  FaBookOpen,
  FaPenNib,
  FaImage,
  FaCoffee,
  FaNetworkWired,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMicrosoft,
  FaFileExcel,
  FaBars,
  FaTimes,
  FaCrown,
  FaGraduationCap,
  FaBriefcase,
  FaArrowUp,
  FaDownload,
  FaAward,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
  FaCertificate,
  FaWhatsapp,
} from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import {
  SiFlutter,
  SiNextdotjs,
  SiMikrotik,
  SiFigma,
  SiReact,
  SiTailwindcss,
  SiCanva,
  SiGooglecolab,
  SiHtml5,
} from "react-icons/si";

// 1. Kita definisikan dulu bentuk data Project-nya agar TypeScript paham
interface ProjectType {
  id: number;
  title: string;
  desc: string;
  tags: string[];
  icon: React.ReactNode;
  color: string;
  bgGroup: string;
  borderGroup: string;
  detailImage?: string; // Tanda ? artinya opsional (boleh ada boleh tidak)
  link?: string;
  github?: string;
}

import { MdDesignServices, MdWifiTethering, MdAnalytics } from "react-icons/md";

export default function FeaturedProjects() {
  // 2. Gunakan Interface tadi di sini.
  // Artinya: state ini boleh berisi 'ProjectType' ATAU 'null'
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  const projects: ProjectType[] = [
    {
      id: 2,
      title: "Cooking App UI/UX",
      desc: "Desain aplikasi resep makanan dengan fitur pencarian bahan dan tutorial video. Fokus pada alur pengguna yang intuitif dan visual yang menggugah selera.",
      tags: ["Figma", "Mobile Design", "Prototyping"],
      icon: <FaMobileAlt />,
      color: "text-orange-400",
      bgGroup: "group-hover:bg-orange-500/20",
      borderGroup: "hover:border-orange-500/50",
      link: "/demo/cooking",
    },
    {
      id: 3,
      title: "Re-Desain Kopi Kenangan",
      desc: "Studi kasus perancangan ulang antarmuka aplikasi Kopi Kenangan untuk meningkatkan pengalaman pemesanan dan loyalitas pengguna.",
      tags: ["UI Redesign", "Case Study", "Figma"],
      icon: <FaCoffee />,
      color: "text-amber-400",
      bgGroup: "group-hover:bg-amber-500/20",
      borderGroup: "hover:border-amber-500/50",
      link: "/demo/kenangan/",
    },
    {
      id: 4,
      title: "Concert Ticket App UI/UX",
      desc: "Perancangan antarmuka aplikasi pemesanan tiket konser dengan fitur denah venue interaktif dan sistem pembayaran digital.",
      tags: ["Event Tech", "App Design", "UX Research"],
      icon: <FaMobileAlt />,
      color: "text-purple-400",
      bgGroup: "group-hover:bg-purple-500/20",
      borderGroup: "hover:border-purple-500/50",
      link: "/demo/concert/",
    },
    {
      id: 5,
      title: "Travling! Website UI/UX",
      desc: "Landing page travel agent yang modern untuk mempromosikan destinasi wisata lokal dengan tata letak visual yang imersif.",
      tags: ["Web Design", "Travel", "Landing Page"],
      icon: <FaPlane />,
      color: "text-cyan-400",
      bgGroup: "group-hover:bg-cyan-500/20",
      borderGroup: "hover:border-cyan-500/50",
      link: "/demo/travel/", // <--- INI BAGIAN PENTINGNYA
    },
    {
      id: 6,
      title: "Clothing Store Website",
      desc: "Desain e-commerce fashion dengan katalog produk yang bersih, filter pencarian detail, dan keranjang belanja yang user-friendly.",
      tags: ["E-Commerce", "Web UI", "Fashion"],
      icon: <FaTshirt />,
      color: "text-pink-400",
      bgGroup: "group-hover:bg-pink-500/20",
      borderGroup: "hover:border-pink-500/50",
      link: "/demo/clothing",
    },
    {
      id: 7, // misal id proyek cabai
      title: "Sistem Deteksi Cabai",
      desc: "Sistem berbasis AI untuk mendeteksi penyakit pada tanaman cabai...",
      icon: "🌶️",
      color: "text-red-500", // Pastikan formatnya text-{warna}-{angka}
      bgGroup: "group-hover:bg-red-500/20",
      borderGroup: "hover:border-red-500/50",
      tags: ["Python", "TensorFlow", "IoT"],
      link: "https://link-demo-anda.com",
      github: "#", // <--- TAMBAHKAN INI
    },
    {
      id: 8,
      title: "Book Publishing Landing Page",
      desc: "Halaman web promosi untuk peluncuran buku baru, mencakup sinopsis, biografi penulis, dan formulir pre-order.",
      tags: ["Web Layout", "Typography", "Marketing"],
      icon: <FaBookOpen />,
      color: "text-emerald-400",
      bgGroup: "group-hover:bg-emerald-500/20",
      borderGroup: "hover:border-emerald-500/50",
      link: "/demo/publish-book/",
    },
    {
      id: 9,
      title: "Desain Logo",
      desc: "Pembuatan identitas visual (branding) untuk institusi pendidikan/kegiatan sekolah menggunakan vektor grafis.",
      tags: ["Illustrator", "Branding", "Vector"],
      icon: <FaPenNib />,
      color: "text-indigo-400",
      bgGroup: "group-hover:bg-indigo-500/20",
      borderGroup: "hover:border-indigo-500/50",
      link: "/demo/logo/",
    },
    {
      id: 10,
      title: "Desain Poster Komersial",
      desc: "Pembuatan materi promosi cetak dan digital untuk berbagai event atau produk (Contoh: Rest Area KM 21).",
      tags: ["Graphic Design", "Canva/Ps", "Advertising"],
      icon: <FaImage />,
      color: "text-yellow-400",
      bgGroup: "group-hover:bg-yellow-500/20",
      borderGroup: "hover:border-yellow-500/50",
      link: "/demo/poster/",
    },
  ];
  // State untuk Menu Mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State untuk Tombol Scroll-to-Top
  const [showScrollTop, setShowScrollTop] = useState(false);

  // State untuk Active Navigation (Indikator Aktif)
  const [activeSection, setActiveSection] = useState("home");

  // Daftar Menu Navigasi
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Skills", id: "skills" },
    { name: "Competencies", id: "competencies" },
    { name: "Certificates", id: "certificates" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  // Effect untuk mendeteksi scroll window & Active Section
  useEffect(() => {
    const handleScroll = () => {
      // Logic Scroll to Top
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    // Logic Intersection Observer untuk Active Nav State
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: any[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // Fungsi Scroll Halus
  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden relative">
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/5 transition-all shadow-lg shadow-cyan-500/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* LOGO */}
          <div
            className="font-bold text-xl text-white tracking-wider cursor-pointer group shrink-0"
            onClick={() => scrollToSection("home")}
          >
            FILA
            <span className="text-cyan-400 group-hover:text-white transition-colors">
              .DEV
            </span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex gap-6 text-[13px] font-medium tracking-wide uppercase">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`transition-all relative group py-2 ${
                  activeSection === item.id
                    ? "text-cyan-400"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
                    activeSection === item.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none p-2 active:scale-95 transition-transform"
            >
              {isMenuOpen ? (
                <FaTimes className="text-2xl text-cyan-400" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#0a0a0a] border-b border-white/10 absolute w-full animate-fadeIn shadow-2xl">
            <div className="flex flex-col p-4 space-y-2 text-center text-sm font-medium">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`py-3 border-b border-white/5 last:border-0 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? "bg-cyan-900/20 text-cyan-400"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
      {/* --- HERO SECTION --- */}
      <section
        id="home"
        className="pt-32 pb-16 px-6 min-h-screen flex items-center"
      >
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 w-full">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-bold tracking-widest uppercase mb-2 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Mahasiswa Semester 7
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Hi, I'm <span className="text-cyan-400">Fila Prasetyo</span>{" "}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                Network Engineer
              </span>{" "}
              <br />&{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                UI/UX Designer
              </span>
            </h1>

            <p className="text-lg text-slate-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Mahasiswa Ilmu Komputer di Universitas Pakuan Bogor dengan latar
              belakang kuat di Teknik Jaringan (SMK TKJ). Saya menggabungkan
              kemampuan teknis <b>Infrastruktur Jaringan</b> dengan kreativitas{" "}
              <b>Desain Digital</b>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <a
                href="/cv (2).pdf"
                download
                className="px-8 py-3.5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 group"
              >
                <FaDownload className="group-hover:animate-bounce" />
                Download CV
              </a>

              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3.5 border border-white/20 hover:bg-white/5 text-white font-bold rounded-lg transition-all"
              >
                Hubungi Saya
              </button>
            </div>
          </div>

          {/* Image Profile */}
          <div className="flex-1 relative group flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl z-10 group-hover:border-cyan-500/50 transition-colors">
              {/* Pastikan file foto ada di public/profile.jpg */}
              <Image
                src="/profile.jpg"
                alt="Fila Prasetyo Kurniawan"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      {/* --- EDUCATION & EXPERIENCE (ABOUT) --- */}
      <section id="about" className="py-20 px-6 bg-[#080808]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Tentang Saya
            </h2>
            <p className="text-slate-500">Perjalanan Pendidikan & Karir</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Education (Kiri) */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <FaGraduationCap className="text-2xl text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Pendidikan</h3>
              </div>
              <div className="space-y-8 pl-4 border-l-2 border-white/10 ml-3">
                <div className="relative pl-8 group">
                  <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-cyan-500 ring-4 ring-[#080808] group-hover:scale-125 transition-transform"></span>
                  <h4 className="text-lg font-bold text-white">
                    S1 Ilmu Komputer
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Universitas Pakuan Bogor • 2022 - Sekarang
                  </p>
                  <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                    Mahasiswa aktif Ilmu Komputer dengan fokus pada pengembangan
                    website dan desain UI/UX. Terlibat dalam proyek perancangan
                    antarmuka menggunakan Figma, pembuatan user flow, serta
                    analisis kebutuhan pengguna, pengolahan citra digital, data
                    mining, pemrograman, hingga pengembangan sistem berbasis
                    mikrokontroler. Kombinasi pemahaman teknis dan desain ini
                    membuat saya mampu merancang solusi digital yang tidak hanya
                    fungsional, tetapi juga mudah digunakan dan berorientasi
                    pada pengguna.
                  </p>
                </div>
                <div className="relative pl-8 group">
                  <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-700 ring-4 ring-[#080808] group-hover:bg-cyan-500 transition-colors"></span>
                  <h4 className="text-lg font-bold text-white">
                    SMK TI Annisa
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Teknik Komputer dan Jaringan • 2019 - 2022
                  </p>
                  <p className="text-slate-500 text-xs mt-2">
                    Mempelajari dasar jaringan komputer, hardware, dan
                    troubleshooting, pengelolaan server berbasis Linux dan
                    Ubuntu. Mulai mengenal desain UI/UX melalui pembuatan mockup
                    sederhana website, pengaturan layout antarmuka, serta
                    penggunaan tools desain dasar. Terbiasa berpikir sistematis
                    dan problem solving sejak tingkat SMK.
                  </p>
                </div>
              </div>
            </div>

            {/* Work Experience (Kanan) */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <FaBriefcase className="text-2xl text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Pengalaman Kerja
                </h3>
              </div>
              <div className="space-y-8 pl-4 border-l-2 border-white/10 ml-3">
                <div className="relative pl-8 group">
                  <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-[#080808] group-hover:scale-125 transition-transform"></span>
                  <h4 className="text-lg font-bold text-white">
                    UI/UX Designer (Magang)
                  </h4>
                  <p className="text-slate-400 text-sm">
                    PT WRmedia • Agustus 2025 - November 2025
                  </p>
                  <ul className="text-slate-500 text-xs mt-2 list-disc ml-4 space-y-1">
                    <li>
                      Perancangan UI/UX website dan aplikasi menggunakan Figma.
                    </li>
                    <li>
                      Pembuatan wireframe, mockup, dan prototype untuk kebutuhan
                      proyek internal.
                    </li>
                    <li>
                      Penyusunan user flow dan struktur navigasi yang
                      user-friendly.
                    </li>
                    <li>
                      Kolaborasi dengan tim developer untuk implementasi desain.
                    </li>
                    <li>
                      Revisi dan penyempurnaan desain berdasarkan feedback
                      stakeholder.
                    </li>
                  </ul>
                </div>
                <div className="relative pl-8 group">
                  <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-700 ring-4 ring-[#080808] group-hover:bg-blue-500 transition-colors"></span>
                  <h4 className="text-lg font-bold text-white">
                    Teknisi Jaringan (FTTH) (Magang)
                  </h4>
                  <p className="text-slate-400 text-sm">
                    PT. Rafa Teknologi Solusi • Okt 2021 - Des 2021
                  </p>
                  <ul className="text-slate-500 text-xs mt-2 list-disc ml-4 space-y-1">
                    <li>Instalasi hardware & software jaringan internet.</li>
                    <li>Troubleshooting RT/RW Net di area Laladon Ciomas.</li>
                    <li>Migrasi kabel UTP ke Fiber Optik di Ciapus.</li>
                    <li>Manajemen jalur jaringan ke rumah pelanggan.</li>
                  </ul>
                </div>

                <div className="relative pl-8 group">
                  <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-700 ring-4 ring-[#080808] group-hover:bg-blue-500 transition-colors"></span>
                  <h4 className="text-lg font-bold text-white">
                    Freelance UI/UX & Web Project
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Self-Employed • 2022 - Sekarang
                  </p>
                  <p className="text-slate-500 text-xs mt-2">
                    Mengerjakan berbagai proyek desain aplikasi (Cook,
                    Travling!) dan redesain aplikasi Kopi Kenangan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- SERVICES --- */}
      <section id="services" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Layanan
            </h2>
            <p className="text-slate-500">
              Apa yang bisa saya kerjakan untuk Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 bg-gradient-to-br from-slate-900 to-[#050505] rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all hover:-translate-y-2 duration-300 group">
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-400 text-3xl group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <MdWifiTethering />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Network Engineering
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Instalasi FTTH, Migrasi Kabel Fiber Optik, Troubleshooting
                Jaringan RT/RW Net, dan Konfigurasi Mikrotik (Winbox).
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-900 to-[#050505] rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all hover:-translate-y-2 duration-300 group">
              <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-purple-400 text-3xl group-hover:bg-purple-500 group-hover:text-white transition-colors">
                <SiFigma />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                UI/UX Design
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Desain antarmuka aplikasi mobile dan website yang modern dan
                user-friendly menggunakan Figma.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-900 to-[#050505] rounded-2xl border border-white/5 hover:border-green-500/30 transition-all hover:-translate-y-2 duration-300 group">
              <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 text-green-400 text-3xl group-hover:bg-green-500 group-hover:text-white transition-colors">
                <MdAnalytics />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Data Analyst
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Pengolahan dan analisis data menggunakan Microsoft Excel dan
                Google Colab (Python Basics).
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* --- SKILLS --- */}
      <section id="skills" className="py-20 px-6 bg-[#080808]">
        <div className="max-w-6xl mx-auto">
          {/* Diperbaiki: Judul disamakan ukurannya dengan section lain */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Technical Skills
            </h2>
            <p className="text-slate-500">Tools & Teknologi yang dikuasai</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              {
                Icon: SiMikrotik,
                name: "Mikrotik",
                desc: "Winbox Config",
                color: "text-teal-500",
              },
              {
                Icon: FaNetworkWired,
                name: "Fiber Optic",
                desc: "FTTH & Splicing",
                color: "text-yellow-500",
              },
              {
                Icon: SiFigma,
                name: "Figma",
                desc: "UI/UX Design",
                color: "text-purple-400",
              },
              {
                Icon: SiCanva,
                name: "Canva",
                desc: "Graphic Design",
                color: "text-blue-400",
              },
              {
                Icon: FaMicrosoft,
                name: "Ms. Office",
                desc: "Word, PPT, Excel",
                color: "text-blue-500",
              },
              {
                Icon: SiGooglecolab,
                name: "Google Colab",
                desc: "Data Analysis",
                color: "text-orange-500",
              },
              {
                Icon: SiHtml5,
                name: "HTML",
                desc: "Web Structure",
                color: "text-orange-600",
              },
              {
                Icon: VscCode,
                name: "Visual Studio Code",
                desc: "AI-Assisted Developer",
                color: "text-blue-500",
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="p-6 bg-[#050505] rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all group hover:-translate-y-1"
              >
                <skill.Icon
                  className={`text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform ${skill.color}`}
                />
                <h3 className="text-lg font-bold text-white">{skill.name}</h3>
                <p className="text-xs text-slate-500 mt-1">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --- COMPETENCIES --- */}
      <section
        id="competencies"
        className="py-24 bg-[#050505] border-t border-white/5 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-24 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Kompetensi Utama
            </h2>
            <p className="text-slate-500 text-lg">
              Spesialisasi Teknis & Desain Berdasarkan Prioritas
            </p>
          </div>

          {/* Grid Podium Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 relative items-start">
            {/* --- RANK 2: NETWORK (Kiri) --- */}
            <div className="relative group md:mt-16 w-full">
              {/* Badge Nomor 2 */}
              <div className="absolute -top-6 left-6 z-20 flex items-center justify-center w-14 h-14 bg-slate-900 border border-cyan-500/50 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.3)] transform -rotate-6 group-hover:rotate-0 transition-all duration-300">
                <span className="text-2xl font-black text-cyan-400">02</span>
              </div>

              {/* Card Content */}
              <div className="relative z-10 p-8 bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:border-cyan-500/50 transition-all duration-300 group-hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-8 mt-2">
                  <div className="p-3 bg-cyan-900/20 rounded-lg ring-1 ring-cyan-500/30 group-hover:bg-cyan-500/20 transition-colors">
                    <SiMikrotik className="text-3xl text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Network Technician
                  </h3>
                </div>

                <ul className="text-slate-400 text-sm space-y-4 list-disc ml-5 marker:text-cyan-500 font-medium">
                  <li>Instalasi & Maintenance FTTH</li>
                  <li>Splicing Kabel Fiber Optik</li>
                  <li>Manajemen Bandwidth Mikrotik</li>
                  <li>Troubleshooting Jaringan</li>
                </ul>
              </div>
            </div>

            {/* --- RANK 1: UI/UX (Tengah - 3D King) --- */}
            <div className="relative group w-full z-20 md:-translate-y-8 md:scale-105">
              {/* Badge Nomor 1 (Floating Crown) */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center justify-center">
                <FaCrown className="text-yellow-400 text-2xl mb-1 animate-bounce" />
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-800 rounded-full flex items-center justify-center border-4 border-[#050505] shadow-[0_0_30px_rgba(168,85,247,0.6)]">
                  <span className="text-4xl font-black text-white">01</span>
                </div>
              </div>

              {/* Card Content Rank 1 */}
              <div className="relative h-full p-10 pt-16 bg-gradient-to-b from-slate-900 to-[#0a0a0a] rounded-2xl border-2 border-purple-500/50 shadow-[0_0_80px_rgba(168,85,247,0.2)] transition-all duration-300 group-hover:shadow-[0_0_100px_rgba(168,85,247,0.4)]">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    UI/UX Designer
                  </h3>
                  <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold tracking-widest uppercase">
                    Main Expertise
                  </div>
                </div>

                {/* Ikon Besar di Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] text-purple-500/5 pointer-events-none z-0">
                  <SiFigma />
                </div>

                <div className="relative z-10 grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-purple-500/50 transition-all">
                    <div className="bg-purple-500/20 p-2 rounded-md">
                      <SiFigma className="text-purple-400" />
                    </div>
                    <span className="text-slate-200 text-sm font-medium">
                      Wireframing & Prototyping
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-purple-500/50 transition-all">
                    <div className="bg-purple-500/20 p-2 rounded-md">
                      <FaAward className="text-purple-400" />
                    </div>
                    <span className="text-slate-200 text-sm font-medium">
                      Mobile App & Web Interface
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-purple-500/50 transition-all">
                    <div className="bg-purple-500/20 p-2 rounded-md">
                      <FaAward className="text-purple-400" />
                    </div>
                    <span className="text-slate-200 text-sm font-medium">
                      User Experience Research
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* --- RANK 3: DATA (Kanan) --- */}
            <div className="relative group md:mt-16 w-full">
              {/* Badge Nomor 3 */}
              <div className="absolute -top-6 right-6 z-20 flex items-center justify-center w-14 h-14 bg-slate-900 border border-green-500/50 rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.3)] transform rotate-6 group-hover:rotate-0 transition-all duration-300">
                <span className="text-2xl font-black text-green-400">03</span>
              </div>

              {/* Card Content */}
              <div className="relative z-10 p-8 bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:border-green-500/50 transition-all duration-300 group-hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-8 mt-2">
                  <div className="p-3 bg-green-900/20 rounded-lg ring-1 ring-green-500/30 group-hover:bg-green-500/20 transition-colors">
                    <FaFileExcel className="text-3xl text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Data Processing
                  </h3>
                </div>

                <ul className="text-slate-400 text-sm space-y-4 list-disc ml-5 marker:text-green-500 font-medium">
                  <li>Advanced Microsoft Excel</li>
                  <li>Data Entry & Validation</li>
                  <li>Python Basics (Google Colab)</li>
                  <li>Administrasi Project</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- NEW SECTION: CERTIFICATES (MTCNA) --- */}
      <section id="certificates" className="py-20 bg-[#080808] relative">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-72 h-72 bg-teal-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-teal-500/10 rounded-full mb-4">
              <FaCertificate className="text-3xl text-teal-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Sertifikasi Profesional
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">
              Bukti kredibilitas dan standar kompetensi internasional yang telah
              saya raih.
            </p>
          </div>

          {/* MTCNA CARD */}
          <div className="group relative bg-[#050505] rounded-3xl border border-teal-500/20 p-8 md:p-12 overflow-hidden hover:border-teal-500/50 transition-all duration-500">
            {/* Glow Effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-teal-500/20 rounded-full blur-3xl group-hover:bg-teal-500/30 transition-all"></div>

            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Logo / Badge Area */}
              <div className="shrink-0 relative">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-teal-900/50 flex items-center justify-center bg-slate-900 relative shadow-2xl shadow-teal-900/20">
                  <div className="text-center">
                    <SiMikrotik className="text-6xl text-teal-500 mx-auto mb-2" />
                    <span className="font-bold text-white text-lg tracking-widest">
                      MTCNA
                    </span>
                  </div>
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border border-teal-500/30 scale-110 animate-pulse-slow"></div>
              </div>

              {/* Content Area */}
              <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                  MikroTik Certified Network Associate
                </h3>

                {/* Updated: Menampilkan ID Sertifikat & Masa Berlaku */}
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
                  <div className="inline-block px-3 py-1 bg-teal-900/30 border border-teal-500/30 rounded text-teal-400 text-sm font-medium">
                    ID: 2203NA7028
                  </div>
                  <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded text-slate-400 text-sm font-medium">
                    Valid until: 12 Mar 2025
                  </div>
                </div>

                <p className="text-slate-400 leading-relaxed mb-6">
                  Sertifikasi tingkat dasar (Associate) yang diterbitkan oleh
                  MikroTikls SIA (Latvia) pada 12 Maret 2022. Memvalidasi
                  kompetensi dalam konfigurasi RouterOS, manajemen bandwidth,
                  firewall, dan troubleshooting jaringan.
                </p>

                {/* Tags Kompetensi */}
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2 text-slate-300 text-sm">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    Routing & Bridging
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 text-sm">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    Firewall & QOS
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 text-sm">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    Wireless Network
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- PROJECTS SECTION --- */}
      <section
        id="projects"
        className="py-24 px-6 bg-[#080808] border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header dengan Instruksi Klik */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-slate-500 mb-6">
              Selected works from Design & Engineering
            </p>

            {/* INI PETUNJUK LIVE DEMO */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-900/20 border border-cyan-500/30 rounded-full animate-pulse">
              <FaExternalLinkAlt className="text-cyan-400 text-sm" />
              <span className="text-cyan-300 text-sm font-semibold tracking-wide">
                Click on any card to view Live Demo
              </span>
            </div>
          </div>

          {/* Grid Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group relative bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/5 ${project.borderGroup} transition-all duration-500 hover:-translate-y-2 cursor-pointer shadow-lg`}
              >
                {/* Header Warna Kartu */}
                <div
                  className={`h-2 w-full bg-gradient-to-r from-transparent via-current to-transparent opacity-50 ${project.color}`}
                ></div>

                <div className="p-8 relative z-10">
                  {/* Icon & Title */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`p-3 rounded-xl bg-white/5 ${project.bgGroup} ${project.color} transition-colors duration-300`}
                    >
                      <div className="text-2xl">{project.icon}</div>
                    </div>
                    <div
                      className={`p-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 ${project.color}`}
                    >
                      <FaExternalLinkAlt className="text-sm" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm line-clamp-3 leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold uppercase tracking-wider text-slate-500 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b from-transparent to-current opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none ${project.color}`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION (Ditambahkan agar lengkap) --- */}
      <section id="contact" className="py-20 px-6 bg-[#080808]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Let's Connect
          </h2>
          <p className="text-slate-400 mb-12">
            Tertarik bekerja sama atau berdiskusi tentang proyek Jaringan &
            Desain? Jangan ragu untuk menghubungi saya.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a
              href="mailto:filakurniawan556@gmail.com"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 border border-white/10 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:text-cyan-400 transition-all group"
            >
              <FaEnvelope className="text-xl" />
              <span>filakurniawan556@gmail.com</span>
            </a>
            <a
              href="https://wa.me/6289516690518"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 border border-white/10 rounded-xl hover:bg-green-500/10 hover:border-green-500/50 hover:text-green-400 transition-all group"
            >
              <FaWhatsapp className="text-xl" />
              <span>+62 895-1669-0518</span>
            </a>
          </div>

          <div className="flex justify-center gap-6 mt-12">
            <a
              href="#"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-blue-400 transition-colors"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="py-8 border-t border-white/5 text-center text-slate-600 text-sm">
        <p>© 2024 Fila Prasetyo Kurniawan. All rights reserved.</p>
      </footer>

      {/* --- MODAL / POPUP DETAIL (HANYA LIVE DEMO) --- */}
      {/* --- MODAL / POPUP DETAIL --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          {/* Backdrop Blur */}
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setSelectedProject(null)}
          ></div>

          {/* Modal Content */}
          <div className="relative w-full max-w-2xl bg-[#0F0F0F] rounded-2xl border border-white/10 shadow-2xl animate-in fade-in zoom-in duration-300 overflow-hidden ring-1 ring-white/10">
            {/* Header Modal - Visual menarik dengan Icon Besar */}
            <div className="relative h-40 bg-slate-900 overflow-hidden flex items-center justify-center group">
              {/* Background Gradient Dinamis */}
              <div
                className={`absolute inset-0 opacity-30 bg-gradient-to-br from-black via-black to-current ${selectedProject.color}`}
              ></div>

              {/* Animated Background Shapes */}
              <div
                className={`absolute top-0 left-0 w-full h-full opacity-20 ${selectedProject.color.replace(
                  "text-",
                  "bg-"
                )} blur-3xl transform scale-150`}
              ></div>

              {/* Icon */}
              <div
                className={`relative z-10 text-7xl drop-shadow-2xl transform transition-transform duration-500 group-hover:scale-110`}
              >
                {selectedProject.icon}
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-red-500/80 text-white rounded-full transition-all duration-300 backdrop-blur-sm border border-white/10 z-20 hover:rotate-90"
              >
                <FaTimes size={18} />
              </button>
            </div>

            {/* Body Modal */}
            <div className="p-8">
              {/* Label Kategori */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className={`text-xs font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-white/5 border border-white/5 ${selectedProject.color}`}
                >
                  Project Details
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
              </div>

              {/* Judul & Deskripsi */}
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                {selectedProject.title}
              </h2>
              <p className="text-slate-300 leading-relaxed mb-8 text-base md:text-lg font-light">
                {selectedProject.desc}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {selectedProject.tags.map((tag, i) => (
                  <div
                    key={i}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold border border-white/10 bg-[#1a1a1a] text-slate-400 shadow-sm flex items-center gap-2`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${selectedProject.color.replace(
                        "text-",
                        "bg-"
                      )}`}
                    ></span>
                    {tag}
                  </div>
                ))}
              </div>

              {/* --- ACTION BUTTONS --- */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/5">
                {/* BUTTON 1: LIVE DEMO (Selalu Muncul) */}
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex-1 flex items-center justify-center gap-3 py-3.5 px-6 rounded-xl font-bold text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-2xl 
                    ${
                      /* Menggunakan logika warna yang lebih robust: bg-current mengambil warna text dari parent, atau fallback */ ""
                    }
                    bg-gradient-to-r from-slate-800 to-slate-900 border border-white/20 hover:border-white/50 group`}
                  >
                    {/* Icon Demo dengan warna proyek */}
                    <FaExternalLinkAlt
                      className={`${selectedProject.color} group-hover:text-white transition-colors`}
                    />
                    <span>Live Preview</span>
                  </a>
                )}

                {/* BUTTON 2: GITHUB (Khusus Deteksi Cabai atau jika ada link github) */}
                {selectedProject.github ? (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 py-3.5 px-6 rounded-xl font-bold text-white bg-[#0a0a0a] border border-white/10 hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
                    <span>Source Code</span>
                  </a>
                ) : /* Jika tidak ada github, kita sembunyikan atau render placeholder kosong agar layout tetap rapi */
                null}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
