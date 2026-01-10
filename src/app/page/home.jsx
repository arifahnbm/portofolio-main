"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaGithub, FaArrowDown } from "react-icons/fa";

export default function Home() {
  

  return (
    <section
      id="home"
      className="relative min-h-[75vh] sm:min-h-screen px-6 sm:px-12 lg:px-24 pt-20 sm:pt-28 lg:pt-32 bg-maroon rounded-b-[3rem] shadow-[0_0_25px_rgba(193,18,31,0.35)] overflow-visible
      "
    >
        {/* ===== MOBILE CONTENT ===== */}
      <div className="flex flex-col items-center justify-center sm:hidden">
        {/* Foto Profil */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            w-40 h-40
            rounded-full
            overflow-hidden
            border-4 border-foreground
            shadow-xl
            mb-2
          "
        >
          <Image
            src="/img/profile.jpg" // ganti sesuai file kamu
            alt="Profile"
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Judul */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden sm:block
            text-center
            font-heading font-extrabold
            text-foreground
            text-[clamp(2.2rem,9vw,3rem)]
            leading-tight
          "
        >
          Hello! I'm <br />
          Arifah Nur <br />
          Basyiroh Machi
        </motion.h1>
      </div>
      
        {/* ================= JUDUL BESAR ================= */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className=" relative z-10
            text-center
            font-heading font-extrabold
            text-foreground
            text-[clamp(3rem,8vw,7rem)]
            leading-[0.95]
            mt-40 sm:mt-16
          mb-24 sm:mb-32
          "
        >
          Hello! I'm <br />
          Arifah Nur <br className="sm:hidden" />
          Basyiroh Machi
        </motion.h1>

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
    z-10
    bg-black/40
    p-4
    rounded-full
    shadow-xl
    cursor-pointer
  "
>
  <FaArrowDown className="text-foreground text-xl sm:text-2xl" />
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
