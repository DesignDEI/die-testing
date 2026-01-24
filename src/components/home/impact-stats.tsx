"use client";

import { Container } from "@/components/layout/container";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 225, suffix: "+", label: "Funds raised by startups" },
  { value: 1.2, suffix: " Cr", label: "Corpus Fund" },
  { value: 145, suffix: "+", label: "Pre-Incubation Projects" },
  { value: 110, suffix: "+", label: "Events Organised" },
  { value: 37, suffix: "", label: "Incubated Startups" },
  { value: 6, suffix: "", label: "Technology Transfer" },
];

/* ---------------- SMOOTH COUNT-UP ---------------- */

function SmoothCountUp({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const inView = useInView(wrapperRef, { once: true, margin: "-100px" });

  const base = useMotionValue(0);
  const spring = useSpring(base, {
    stiffness: 90,
    damping: 18,
    mass: 0.6,
  });

  /* initial count */
  useEffect(() => {
    if (inView) base.set(value);
  }, [inView, value, base]);

  /* write value */
  useEffect(() => {
    return spring.on("change", (latest) => {
      if (!ref.current) return;

      ref.current.textContent =
        value % 1 !== 0
          ? latest.toFixed(1) + suffix
          : Math.round(latest).toString() + suffix;
    });
  }, [spring, suffix, value]);

  /* hover-accelerated recount */
  const handleHover = () => {
    base.set(0);
    base.set(value);
  };

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={handleHover}
      className="inline-block"
    >
      <span ref={ref}>0{suffix}</span>
    </div>
  );
}

/* ---------------- MAIN COMPONENT ---------------- */

export function ImpactStats() {
  return (
    <section
      style={{ backgroundColor: "#212121" }}
      className="py-28"
    >
      <Container>
        {/* Heading */}
        <motion.div
          className="mb-20 max-w-xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="flex items-center gap-3 mb-[30px]">
            <span className="h-2 w-2 rounded-full bg-[#FFBA00]" />
            <p className="text-sm tracking-wide text-white/70 uppercase">
              Impact you can trust
            </p>
          </div>

          <h2 className="text-4xl font-normal text-white">
            The{" "}
            <span className="bg-[#FFBA00] text-black px-2">
              numbers
            </span>{" "}
            speak.
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-y-16 gap-x-24 md:grid-cols-6">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-left group"
            >
              <div
                className="
                  transition-colors duration-300
                  text-white
                  whitespace-nowrap
                  group-hover:text-[#FFBA00]
                "
                style={{
                  fontSize: "75px",
                  fontWeight: 400,
                  lineHeight: 1,
                }}
              >
                <SmoothCountUp
                  value={item.value}
                  suffix={item.suffix}
                />
              </div>

              <p
  className="
    mt-6
    text-white/70
    text-left
    whitespace-nowrap
  "
  style={{
    fontSize: "14px",
    fontWeight: 400,
  }}
>
  {item.label}
</p>


            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
