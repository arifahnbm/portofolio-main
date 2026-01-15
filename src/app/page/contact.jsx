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
        <Header className="text-foreground" title="Get In Touch" />
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