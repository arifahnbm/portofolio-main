import { slideUp } from "@/lib/animation";
import { motion } from "framer-motion";
export default function Header({ title }) {
  return (
    <motion.h2
      variants={slideUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="text-4xl md:text-5xl md:mx-[25rem] leading-tight font-extrabold mb-6 bg-gradient-to-r from-skyblue-old to-skyblue bg-clip-text text-transparent text-center"
    >
      {title}
    </motion.h2>
  );
}