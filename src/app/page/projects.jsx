"use client";
import { useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { scaleUp, slideUp, itemUp } from "@/lib/animation";
import Header from "../components/partials/header";
import { FaArrowDown } from "react-icons/fa";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const projects = [
    {
      title: "DineQR",
      image: "/img/cover/cover-dineqr.webp",
      description:
        "DineQR adalah aplikasi pemesanan dan pembayaran berbasis QR yang dirancang untuk membantu warung, kafe, dan restoran meningkatkan efisiensi layanan.Pelanggan dapat memesan langsung dari meja hanya dengan melakukan scan QR, tanpa perlu antre atau mengunduh aplikasi tambahan.Melalui DineQR, proses operasional menjadi lebih rapi, cepat, dan terintegrasi, sekaligus mendukung transformasi digital UMKM kuliner dengan solusi yang praktis dan terjangkau.",
      tech: ["PHP", "Laravel", "TailwindCss"],
      category: "website",
      link: "#",
    },
    {
      title: "TBMATE",
      image: "/img/cover/cover-tbmate.webp",
      description:
        "TBMATE adalah aplikasi kesehatan berbasis mobile yang dirancang untuk meningkatkan kepatuhan minum obat bagi pasien Tuberkulosis (TBC). Aplikasi ini berfungsi sebagai pendamping digital yang memastikan pengobatan berjalan tuntas melalui fitur pengingat otomatis yang terjadwal serta sistem VOT Pintar berbasis kecerdasan buatan untuk mengawasi konsumsi obat secara efektif. Selain fokus pada kedisiplinan jadwal, TBMATE juga memfasilitasi pengguna dengan fitur Konsultasi Dokter yang terintegrasi dengan API Halodoc, memungkinkan pasien mendapatkan jawaban cepat mengenai dosis atau efek samping obat. Dengan pendekatan yang praktis dan suportif, aplikasi ini bertujuan menutup celah bagi penyakit untuk kambuh kembali dan membantu pasien mencapai kesembuhan total dengan lebih tenang.",
      tech: ["Dart", "Flutter", "Firebase", "Figma"],
      category: "mobile",
      link: "#",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter.toLowerCase()
        );
  return (
    <section
      id="projects"
      className="relative  px-4 md:px-24 py-16 md:py-32"
    >

        

      {/* Title */}
      <div className="text-skyblue text-center mb-16">
        <Header title="My Projects" />

        <LayoutGroup>
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border shadow-[0_0_25px_rgba(48,140,199,0.35)] border-skyblue rounded-full  p-2 backdrop-blur"
          >
            {["All", "Website", "Mobile"].map((item) => {
              const isActive = activeFilter === item;

              return (
                <button
                  key={item}
                  onClick={() => setActiveFilter(item)}
                  className={`relative px-6 py-2 rounded-full text-sm font-medium transition
    ${isActive ? "text-white" : "text-skyblue hover:text-white hover:bg-skyblue"}
  `}
                >
                  {/* Active background (animated) */}
                  {isActive && (
                    <motion.span
                      layoutId="activeFilter"
                      className="absolute inset-0 rounded-full bg-skyblue text-white"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                      }}
                    />
                  )}

                  {/* Text */}
                  <span className="relative z-10">{item}</span>
                </button>
              );
            })}
          </motion.div>
        </LayoutGroup>
      </div>

      {/* Projects Grid */}
      <motion.div
        variants={scaleUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10"
      >
        {filteredProjects.map((project, i) => (
          <div
            key={i}
            className="
      group rounded-3xl
      bg-foreground border border-skyblue/30
      overflow-hidden
      transition-all duration-500
      hover:border-skyblue
      hover:shadow-[0_0_25px_rgba(48,140,199,0.35)]
    "
          >
            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="
          w-full h-[200px] md:h-[360px] object-cover
          transition-transform duration-700
          group-hover:scale-105
        "
              />
            </div>

            {/* CONTENT */}
            <div className="p-8">
              {/* Title */}
              <h3 className=" text-xl md:text-2xl text-skyblue font-bold mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className=" text-xs md:text-sm text-skyblue/70 leading-relaxed mb-6 line-clamp-2">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-nowrap gap-3 mb-8 overflow-x-auto scrollbar-hide">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="
              flex items-center gap-2
              px-4 py-1.5
              rounded-full
              bg-skyblue text-white
              text-xs font-semibold
              whitespace-nowrap
            "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href={project.link}
                className="
          inline-flex items-center gap-2
          rounded-full border border-skyblue/30
          px-6 py-2 text-sm font-medium
          text-skyblue
          transition-all duration-300
          hover:bg-skyblue hover:text-white
        "
              >
                View Work
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}