"use client";
import { slideUp } from "@/lib/animation";
import Header from "../components/partials/header";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-smooth py-25 bg-skyblue px-4">
      <div className="absolute inset-0 " />
      <motion.div
        variants={slideUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <motion.h2
      variants={slideUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="text-4xl md:text-5xl md:mx-[25rem] leading-tight font-extrabold mb-6 bg-gradient-to-r from-seagreen to-white bg-clip-text text-transparent text-center dark:from-indigo-300 dark:to-white"
    >
      Get in Touch
    </motion.h2>
        <p className=" text-foreground">For business inquiry please send email to</p>
        <a
          href="mailto:nura60583@gmail.com"
          style={{
            cursor: "pointer",
            color: "#024670",
            textDecoration: "underline",
            display: "inline-block",
            zIndex: 10,
            position: "relative",
          }}
        >
          nura60583@gmail.com
        </a>
      </motion.div>
    </section>
  );
}