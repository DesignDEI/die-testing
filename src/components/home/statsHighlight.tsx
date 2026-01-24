"use client";

import { motion } from "framer-motion";

type StatItem = {
  value: string;
  label: string;
};

const stats: StatItem[] = [
  {
    value: "6k+",
    label: "Students Completed Design Thinking and Methodology Course",
  },
  {
    value: "420",
    label: "Students Completed Data Science with Venture Application Course",
  },
  {
    value: "250",
    label: "Students Completed Entrepreneurship Bootcamp Course",
  },
  {
    value: "20+",
    label: "Students Completed Blockchain Technology and Social Impact Course",
  },
];

/* ------------------ Animation Variants ------------------ */

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
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

export default function StatsHighlight() {
  return (
    <section className="w-full pt-20 pb-16">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative mt-8"
            >
              {/* Text Box */}
              <div className="bg-[#EAEAEA] px-6 pb-8 pt-14 text-left">
                <p className="text-[16px] font-normal leading-snug text-[#111111]">
                  {item.label}
                </p>
              </div>

              {/* Number Box */}
              <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">
                <div className="bg-[#212121] px-10 py-3">
                  <span className="text-[24px] font-semibold text-white">
                    {item.value}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
