"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, MessageCircle } from "lucide-react";
import Header from "../components/partials/header";

const blogs = [
  {
    id: 1,
    image: "/img/achievements/kmipn-winner2025.jpeg",
    title: "2nd place in the KMIPN Innovation Creation category, UX and Accessibility Innovation subcategory",
    date: "Oct 16, 2025",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative min-h-screen scroll-smooth px-4 py-5 mb-20 bg-[radial-gradient(circle_at_top_left,#7FC6F9,transparent_40%)] dark:bg-none"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20 text-skyblue">
          <Header title="Achievements" />
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
          {blogs.map((blog, i) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.25 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden bg-skyblue/10 cursor-pointer shadow-[0_0_25px_rgba(48,140,199,0.35)]"
            >
              {/* Image */}
              <div className="relative h-[360px]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-skyblue/95 via-skyblue-teks/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-4 text-xs text-white/70 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {blog.date}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white leading-snug transition-colors duration-300 ">
                  {blog.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}