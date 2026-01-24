"use client";

import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

/* ------------------ Variants ------------------ */

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const highlightVariants = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ------------------ Component ------------------ */

export function InnovationOverview() {
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleFirstHover = () => {
    if (!hasAnimated) {
      controls.start("show");
      setHasAnimated(true);
    }
  };

  return (
    <section className="w-full bg-white py-40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="
            grid
            grid-cols-1
            md:grid-cols-[1fr_1.15fr]
            gap-20
          "
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          onMouseEnter={handleFirstHover}
        >
          {/* LEFT — Heading (UNCHANGED) */}
          <motion.h2
  variants={fadeUpVariants}
  className="max-w-lg text-black font-medium leading-tight"
  style={{
    fontSize: "30px",   // medium-level emphasis
    lineHeight: "1.35",
  }}
>
  Fostering a Culture of Innovation
  <br />
  and Startup Success
</motion.h2>


          {/* RIGHT — Content (pulled left, animated on hover) */}
          <div className="space-y-8 md:pt-28 md:-ml-40">
            <motion.p
              variants={fadeUpVariants}
              className="
                text-neutral-700
                text-[16px]
                font-normal
                leading-[1.85]
                tracking-[0.01em]
                text-left
                [hyphens:auto]
                [word-spacing:0.02em]
              "
            >
              The Directorate of Entrepreneurship and Innovation (DEI) at SRMIST
              serves as the central hub for innovation and startup culture across
              SRM campuses, supporting innovators from ideation to market-ready
              solutions through mentorship, incubation, funding access,
              fabrication labs, and multidisciplinary collaboration. This
              ecosystem is strengthened by the Bootstrappers’ Research Council
              (BRC), a Section-8 non-profit supporting early-stage startups across
              defense, healthcare, e-mobility, deep tech, and food tech, and by
              BIRAC BioNEST at SRM, backed by the Government of India, which
              accelerates life-science and healthcare innovations through
              advanced labs, fabrication facilities, and clinical research
              access. Complementing these efforts, the Centre for Intellectual
              Asset Protection (CIAP) enables IP filing, protection, technology
              transfer, and commercialization—together creating a seamless
              pathway from idea to impact.
            </motion.p>

            <motion.button
  variants={fadeUpVariants}
  className="
    group
    relative
    inline-flex
    h-[66px]
    w-[220px]
    items-center
    justify-center
    gap-4
    text-black
    overflow-hidden
  "
  style={{
    backgroundColor: "#FFBA00",
    fontSize: "14px",
    fontWeight: 500,
  }}
>
  <span className="absolute inset-0 bg-white/20 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
  <span className="relative z-10">Know More</span>
  <span className="relative z-10 inline-block transition-transform duration-400 ease-out group-hover:-rotate-90 group-hover:translate-x-1">
    →
  </span>
</motion.button>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
