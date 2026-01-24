"use client";

import React, { useEffect } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

/* ================= DATA ================= */

const stats = [
  { value: "511", label: "Patents Granted" },
  { value: "180", label: "Employment generated" },
  { value: "80+", label: "Mentors Onboard" },
  { value: "60+", label: "Supported Startups" },
  { value: "31", label: "Industry/ Academic Partnership" },
  { value: "11", label: "Startup Graduated" },
];

/* ================= ANIMATION ================= */

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // luxury easing
    },
  },
};

/* ================= COUNT UP ================= */

function CountUp({ value }: { value: string }) {
  const numeric = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    stiffness: 80,
    damping: 20,
  });

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      motionValue.set(numeric);
    }
  }, [inView, numeric, motionValue]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(latest)}${suffix}`;
      }
    });
  }, [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

/* ================= COMPONENT ================= */

export default function ImpactStatsSection() {
  return (
    <section className="w-full py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FFBA00]" />
            <p className="text-[14px] font-light tracking-wide text-black">
              FROM IDEAS TO IMPACT
            </p>
          </div>

          <h2 className="text-[30px] font-regular text-black">
            Few more to grab your{" "}
            <span className="bg-[#FFBA00] px-1">attention</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-16"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-left"
            >
              <div className="text-[75px] leading-none font-regular text-black">
                <CountUp value={item.value} />
              </div>
              <p className="mt-3 text-[14px] font-regular text-black max-w-[140px]">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
