"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaGithub, FaArrowDown } from "react-icons/fa";

export default function About() {
  const socials = [
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/_https.firdaus/",
    },
    {
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/in/putrafir/",
    },
    {
      icon: FaGithub,
      url: "https://github.com/putrafir",
    },
  ];

  const titles = ["Software Engineer", "UI/UX Designer"];
const [activeTitle, setActiveTitle] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setActiveTitle((prev) => (prev + 1) % titles.length);
  }, 3000); // ganti teks tiap 3 detik

  return () => clearInterval(interval);
}, []);


  return (
    <section
      id="about"
      className="relative min-h-screen px-6 sm:px-12 lg:px-24 pt-20 "
    >
      
      {/* ================= KONTEN BAWAH ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 rounded-3xl
    border border-maroon/40 p-8 backdrop-blur-sm items-center">
        {/* ===== LEFT TEXT ===== */}
        <motion.div
          className="max-w-xl"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <div className="h-[48px] mb-6 overflow-hidden">
  <AnimatePresence mode="wait">
    <motion.h2
      key={titles[activeTitle]}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-4xl font-extrabold font-heading bg-gradient-to-r from-maroon to-maroon-teks bg-clip-text text-transparent"
    >
      {titles[activeTitle]}
    </motion.h2>
  </AnimatePresence>

</div>

{/* ===== FOTO (MOBILE) ===== */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="flex justify-center mb-6 lg:hidden"
>
  <div
    className="
      w-40 h-40
      rounded-full
      overflow-hidden
      border border-maroon
      shadow-[0_0_20px_rgba(193,18,31,0.35)]
    "
  >
    <Image
      src="/img/arifahpicture1.jpg"
      width={160}
      height={160}
      alt="Arifah Machi"
      className="object-cover w-full h-full"
    />
  </div>
</motion.div>


          <motion.p
            variants={itemUp}
            className="text-sm leading-relaxed text-gray-700 mb-8"
          >
            Hi! I'm Arifah Nur Basyiroh Machi, a student at Banyuwangi State Polytechnic, majoring in Business and Informatics, specializing in UI/UX design, Laravel, and Flutter. Familiar with project-based learning, I'm learning how to develop web and mobile applications. I'm continuously developing my technical and teamwork skills to become a responsive, solution-oriented developer, ready to face the challenges of the digital era.
          </motion.p>

          {/* BUTTON + SOCIAL */}
          <motion.div
            variants={itemUp}
            className="flex items-center gap-6"
          >
            <a
              href="https://drive.google.com/"
              target="_blank"
              className="
                rounded-full border-2 border-maroon
                px-7 py-3
                text-maroon
                transition-all duration-300
                hover:bg-maroon hover:text-white
              "
            >
              View CV
            </a>

            <div className="flex gap-4">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  variants={iconPop}
                  target="_blank"
                  className="
                    w-10 h-10 rounded-full
                    border border-maroon
                    flex items-center justify-center
                    text-maroon
                    transition-all duration-300
                    hover:bg-maroon hover:text-white
                  "
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ===== RIGHT IMAGE ===== */}
        <motion.div
  initial={{ opacity: 0, y: 40, scale: 0.95 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
  className="hidden lg:flex justify-center"
>
  <div
    className="
      rounded-full
      overflow-hidden
      border border-maroon
      transition-all duration-500
      hover:shadow-[0_0_25px_rgba(193,18,31,0.35)]
      hover:scale-105
    "
  >
    <Image
      src="/img/arifahpicture1.jpg"
      width={340}
      height={440}
      alt="Arifah Machi"
      className="object-cover"
    />
  </div>
</motion.div>

      </div>
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
