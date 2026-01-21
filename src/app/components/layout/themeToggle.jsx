"use client";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <motion.button
      onClick={() => setDark(!dark)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14 rounded-full
        bg-gradient-to-b from-sky-200 to-white dark:from-[#050B1E] dark:to-[#020617]
        border border-skyblue/40 
        shadow-[0_8px_30px_rgba(48,140,199,0.45)]
        flex items-center justify-center
        text-skyblue dark:text-indigo-300
      "
    >
      {dark ? <FaSun size={20} /> : <FaMoon size={20} />}
    </motion.button>
  );
}
