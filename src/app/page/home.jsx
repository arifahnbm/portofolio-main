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
  className="
    relative
    min-h-[85svh] sm:min-h-screen
    px-6 sm:px-12 lg:px-24
    pt-24 sm:pt-28 lg:pt-32
    bg-gradient-to-r from-skyblue via-seagreen to-white
    backdrop-blur
    rounded-b-[3rem]
    shadow-[0_8px_20px_rgba(48,140,199,0.35)]
    overflow-hidden
  "
>

        {/* ================= JUDUL BESAR ================= */}
        <div
  className="
    relative z-30
    max-w-7xl mx-auto
    flex flex-col-reverse lg:flex-row
    items-center justify-center
    gap-8 lg:gap-10
    h-full
  "
>

  {/* ===== LEFT: TEXT ===== */}
  <div className="w-full lg:w-1/2 text-center lg:text-left">
    <motion.h1
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="
        font-league-spartan
        text-foreground font-bold
        text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
        leading-[1]
        drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]
        mb-4
      "
    >
      Hello! I'm Arifah Machi
    </motion.h1>

    <div className="h-[140px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h2
          key={titles[activeTitle]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="
            text-[clamp(1.8rem,4vw,3.5rem)]
            font-heading font-extrabold
            drop-shadow-[0_8px_24px_rgba(0,0,0,0.3)]
            bg-gradient-to-r from-seagreen to-white
            bg-clip-text text-transparent
          "
        >
          {titles[activeTitle]}
        </motion.h2>
      </AnimatePresence>
    </div>
  </div>

  {/* ===== RIGHT: IMAGE ===== */}
  <motion.div
    initial={{ opacity: 0, x: 60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
    className="w-full lg:w-1/2
  flex justify-center lg:justify-end
  mb-4 lg:mb-0 mt-40 lg:mt-20"
  >
    <Image
      src="/img/whale.png" // ganti sesuai gambarmu
      alt="Hero Illustration"
      width={420}
      height={420}
      className="
        object-contain
        drop-shadow-[0_20px_60px_rgba(48,140,199,0.45)]
      "
    />
  </motion.div>
</div>




       <motion.a
  href="#projects"
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
