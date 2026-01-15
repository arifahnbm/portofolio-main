"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaGithub, FaArrowDown } from "react-icons/fa";

export default function Home() {
  
  const titles = ["SOFTWARE ENGINEER", "UI/UX DESIGNER"];
  const [activeTitle, setActiveTitle] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTitle((prev) => (prev + 1) % titles.length);
    }, 3000); // ganti teks tiap 3 detik
  
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen px-6 sm:px-12 lg:px-24 pt-20 sm:pt-28 lg:pt-32 rounded-b-[3rem] shadow-[0_8px_20px_rgba(48,140,199,0.35)] overflow-hidden
      "
    >
      {/* BACKGROUND IMAGE */}
        <Image
          src="/img/bg-hero2.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center z-10"
        />

        {/* GRADIENT OVERLAY */}
  {/* <div
    className="
      absolute inset-0
      bg-gradient-to-t
      from-[#008ff4]/90
      via-[#008ff4]/40
      to-transparent
      z-20
    "
  /> */}
      
        {/* ================= JUDUL BESAR ================= */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className=" relative z-30
            text-center
            font-league-spartan
            text-foreground text-bold
            text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 
            leading-[0.95] drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]
            mt-[35vh] sm:mt-20 lg:mt-32
          mb-5
          "
        >
          Hello! I'm Arifah Machi
        </motion.h1>

        <div className="h-[200px] mb-6 overflow-hidden relative z-30 mt-2 sm:mt-0">
  <AnimatePresence mode="wait">
    <motion.h2
      key={titles[activeTitle]}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-[clamp(2rem,6vw,6rem)] font-league-spartan text-center drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)] font-extrabold font-heading bg-gradient-to-r from-skyblue-teks to-white bg-clip-text text-transparent"
    >
      {titles[activeTitle]}
    </motion.h2>
  </AnimatePresence>

</div>



       <motion.a
  href="#about"
  animate={{ y: [0, 12, 0] }}
  transition={{
    duration: 1.6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute bottom-10 left-1/2
    -translate-x-1/2
    z-30
    flex flex-col items-center gap-2
    cursor-pointer
  "
>
  <span
    className="
      text-sm sm:text-base
      font-medium
      text-foreground
      tracking-wide
    "
  >
    Dive into my work
  </span>

  {/* ARROW (ROUNDED ONLY HERE) */}
  <div
    className="
      bg-black/40
      p-4
      rounded-full
      shadow-xl
    "
  >
    <FaArrowDown className="text-foreground text-xl sm:text-2xl" />
  </div>

</motion.a>



        

    </section>
  );
}

/* ================= MOTION VARIANTS ================= */

const itemUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const iconPop = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "backOut",
    },
  },
};
