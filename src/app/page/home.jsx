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
    min-h-[90svh] sm:min-h-screen md:min-h-[95vh] xl:min-h-screen
    px-6 sm:px-10 md:px-14 xl:px-24
    pt-24 sm:pt-28 lg:pt-32
    bg-gradient-to-r from-skyblue via-seagreen to-foreground
    backdrop-blur
    rounded-b-[3rem]
    shadow-[0_8px_20px_rgba(48,140,199,0.35)]
    overflow-hidden

  
    dark:shadow-[0_8px_30px_rgba(153,54,239,0.45)]
    dark:bg-[radial-gradient(circle_at_bottom_left,#9936ef_10%,transparent_70%)]
  "
>

        {/* ================= JUDUL BESAR ================= */}
        <div
  className="
    relative z-30
    max-w-7xl mx-auto
    flex flex-col-reverse xl:flex-row
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
        mb-4 dark:text-white dark:drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)] 
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
            text-[clamp(1.8rem,4vw,3.6rem)] lg:text-[3.8rem] md:leading-tight
            font-heading font-extrabold
            drop-shadow-[0_8px_24px_rgba(0,0,0,0.3)]
            bg-gradient-to-r from-seagreen to-white
            bg-clip-text text-transparent dark:from-indigo-300 dark:to-white
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
  mb-0 lg:mb-0 mt-12 md:mt-14 xl:mt-20"
  >
    <Image
      src="/img/whale.png" // ganti sesuai gambarmu
      alt="Hero Illustration"
      width={420}
      height={420}
      className=" w-[260px]
  sm:w-[320px]
  md:w-[360px]
  xl:w-[420px]
        object-contain
        drop-shadow-[0_20px_60px_rgba(48,140,199,0.45)] dark:hidden
      "
    />

    <Image
      src="/img/space.png" // ganti sesuai gambarmu
      alt="Hero Illustration"
      width={420}
      height={420}
      className=" w-[260px]
  sm:w-[320px]
  md:w-[360px]
  xl:w-[420px]
        object-contain
        drop-shadow-[0_20px_60px_rgba(48,140,199,0.45)] hidden dark:block
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
      tracking-wide dark:hidden
    "
  >
    Dive into my work
  </span>

  <span
    className="
      text-sm sm:text-base
      font-medium
      text-white
      tracking-wide hidden dark:block
    "
  >
    Explore My Digital Cosmos
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
    <FaArrowDown className="text-foreground dark:text-white text-xl sm:text-2xl" />
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
