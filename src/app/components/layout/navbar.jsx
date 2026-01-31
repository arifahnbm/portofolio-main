"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaTrophy,
  FaEnvelope,
} from "react-icons/fa";



export default function Navbar() {
  const [showFixed, setShowFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.85;
      setShowFixed(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      href: "#home",
      label: "Home",
    },
    {
      href: "#about",
      label: "About",
    },
    {
      href: "#projects",
      label: "Projects",
    },
    {
      href: "#achievements",
      label: "Achievements",
    },
  ];

  const navIcons = [
  { href: "#home", icon: FaHome, label: "Home" },
  { href: "#about", icon: FaUser, label: "About" },
  { href: "#projects", icon: FaFolderOpen, label: "Projects" },
  { href: "#achievements", icon: FaTrophy, label: "Achievements" },
  { href: "#contact", icon: FaEnvelope, label: "Contact" },
];

const [activeSection, setActiveSection] = useState("home");
useEffect(() => {
  const sections = navIcons.map((item) =>
    document.querySelector(item.href)
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      root: null,
      threshold: 0.6, // section dianggap aktif
    }
  );

  sections.forEach((section) => {
    if (section) observer.observe(section);
  });

  return () => observer.disconnect();
}, []);


  const NavbarContent = (
    <>
      <Image
        src="/img/logo-light.png"
        alt="Logo"
        width={100}
        height={40}
        className="object-contain dark:hidden"
      />

      <Image
        src="/img/logo-dark.png"
        alt="Logo"
        width={100}
        height={40}
        className="object-contain hidden dark:block"
      />

      <div className="hidden md:flex items-center">
        <ul className="flex gap-6 items-center pr-10">
          {navItems.map((item) => (
            <li key={item.label} className="list-none">
              <a
                href={item.href}
                className="
          relative inline-block
  px-5 py-2
  text-sm font-semibold
  text-skyblue
  transition-all duration-300
  z-10

  after:content-['']
  after:absolute
  after:left-0
  after:-bottom-2
  after:w-full
  after:h-[2px]
  after:bg-transparent
  after:scale-x-0
  after:origin-left
  after:transition-transform after:duration-300

  hover:text-white

  dark:text-indigo-100
  dark:hover:text-seagreen
  dark:hover:drop-shadow-[0_0_8px_rgba(128,216,195,0.8)]
  dark:after:bg-seagreen
  dark:hover:after:scale-x-100
  "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
  href="#contact"
  className="
    relative overflow-hidden rounded-full
    bg-gradient-to-r from-skyblue-old to-skyblue-teks
    px-7 py-3 font-semibold
    transition-all duration-300 ease-out
    hover:-translate-y-1
    hover:shadow-[0_4px_15px_rgba(48,140,199,0.4)]
    hover:text-white

    dark:text-white
    dark:hover:shadow-[0_4px_15px_rgba(128,216,195,0.6)]
    dark:hover:text-white
    dark:hover:from-seagreen dark:hover:to-foreground
  "
>
  <span
    className="
      absolute inset-0
      bg-gradient-to-r from-skyblue-teks to-skyblue-old
      opacity-0
      transition-opacity duration-300
      hover:opacity-100
    "
  />
  <span className="relative z-10">Contact Me</span>
</a>

      </div>
      
    </>
  );

  return (
    <>




      {/* HERO NAVBAR */}
      <AnimatePresence>
        {!showFixed && (
          <motion.nav
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="top-6 left-1/2 -translate-x-1/2 w-[90%] z-40
  rounded-full
  bg-foreground
  shadow-[0_8px_20px_rgba(48,140,199,0.35)]
  absolute

  dark:top-0
  dark:left-0
  dark:w-full
  dark:translate-x-0
  dark:rounded-none
  dark:bg-foreground/30
  dark:shadow-none
  dark:border-b
  dark:border-foreground
  dark:fixed"
          >
            <div className="hidden lg:flex items-center justify-between px-6 md:px-24 py-6 ">
              {NavbarContent}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* FIXED NAVBAR */}
      <AnimatePresence>
        {showFixed && (
          <motion.nav
            initial={{ y: -90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -90, opacity: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 20 }}
            className="hidden lg:block
  fixed top-6 left-1/2 -translate-x-1/2 w-[90%]
  rounded-full z-50
  bg-foreground
  shadow-[0_8px_20px_rgba(48,140,199,0.35)]
  border border-skyblue

  dark:top-0 dark:left-0 dark:translate-x-0
  dark:w-full
  dark:rounded-none
  dark:bg-foreground
  dark:shadow-none
  dark:border-x-0 dark:border-t-0
  dark:border-b dark:border-foreground
              
            "
          >
            <div className="hidden lg:flex items-center justify-between px-10 md:px-24 py-4">
              {NavbarContent}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="
        fixed top-[72px] left-0 w-full z-40
        bg-skyblue/95 backdrop-blur-xl
        md:hidden overflow-hidden 
      "
          >
            <ul className="flex flex-col gap-6 px-10 py-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-lg font-semibold text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}

              <a
  href="#contact"
  className="
    relative overflow-hidden rounded-full
    bg-gradient-to-r from-skyblue-old to-skyblue-teks
    px-7 py-3 font-semibold
    transition-all duration-300 ease-out
    hover:-translate-y-1
    hover:shadow-[0_4px_15px_rgba(48,140,199,0.4)]
    hover:text-white
  "
>
  <span
    className="
      absolute inset-0
      bg-gradient-to-r from-skyblue-teks to-skyblue-old
      opacity-0
      transition-opacity duration-300
      hover:opacity-100
    "
  />
  <span className="relative z-10">Contact Me</span>
</a>

            </ul>
          </motion.div>
        )}
      </AnimatePresence>



 {/* ===== MOBILE TOP BAR ===== */}
{/* ===== MOBILE TOP BAR ===== */}
<div className="lg:hidden fixed top-4 left-4 right-4 dark:top-0 dark:left-0 dark:right-0 z-50 flex justify-center">
  <div
    className="
      flex items-center justify-between
  w-[98%]
  px-4 py-2
  rounded-full
  bg-foreground
  shadow-[0_12px_40px_rgba(48,140,199,0.45)]
  border border-skyblue/30

  dark:rounded-none
  dark:w-full
  dark:bg-foreground/30
  dark:top-0
  dark:shadow-none
  dark:border-x-0
  dark:border-t-0
  dark:border-b
  dark:border-foreground
    "
  >
    {/* LOGO (LEFT) */}
    <div className="w-10 h-10 flex items-center justify-center">
      <Image
        src="/img/logo.png"
        alt="Logo"
        width={32}
        height={32}
        className="object-contain"
      />
    </div>

    {/* BURGER (RIGHT) */}
    <button
      onClick={() => setMobileOpen(!mobileOpen)}
      className="w-10 h-10 flex items-center justify-center text-skyblue"
    >
      {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
    </button>
  </div>
</div>



<AnimatePresence>
  {mobileOpen && (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -40, opacity: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className="
        lg:hidden
        fixed right-4 top-28
        z-40
        flex flex-col gap-4
        bg-foreground
        rounded-full
        px-2 py-4
        shadow-[0_12px_40px_rgba(48,140,199,0.45)]
        border border-skyblue/30
        dark:shadow-[0_0_12px_rgba(128,216,195,0.8)]
      "
    >
      {navIcons.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="relative group w-12 h-12 flex items-center justify-center"
        >
          {/* ACTIVE INDICATOR */}
          {activeSection === item.href.replace("#", "") && (
            <motion.span
              layoutId="activeIcon"
              className="absolute inset-0
  rounded-full
  bg-gradient-to-r from-skyblue to-seagreen

  dark:rounded-full
  dark:bg-seagreen
  dark:shadow-[0_0_12px_rgba(128,216,195,0.8)]"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}

          {/* ICON */}
          <span
            className={`relative z-10 transition-colors duration-300 ${
              activeSection === item.href.replace("#", "")
                ? "text-white"
                : "text-skyblue group-hover:text-white"
            }`}
          >
            <item.icon size={18} />
          </span>

          {/* HOVER TEXT */}
          <span
            className="
              pointer-events-none
              absolute right-16
              whitespace-nowrap
              text-sm font-semibold
              text-skyblue
              opacity-0 translate-x-2
              group-hover:opacity-100
              group-hover:translate-x-0
              transition-all duration-300
            "
          >
            {item.label}
          </span>
        </a>
      ))}
    </motion.nav>
  )}
</AnimatePresence>


    </>
  );

}
