

"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Container } from "@/components/layout/container";

const uspItems = [
  "Seed Funding",
  "Focus on Intellectual Property",
  "Global Collaborations",
  "Patent Registrations",
  "Work Space",
  "Legal Assistance",
  "Branding",
  "Industry Advisors",
  "Cloud Credits",
  "Technical Mentorship",
  "Fabrication Facilities",
  "Market Validation",
  "Co-Working Space",
  "Alumni Connect",
];

export default function OurUSPs() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(
      el.scrollLeft + el.clientWidth < el.scrollWidth - 1
    );
  };

  useEffect(() => {
    updateScrollState();
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollState);
    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -260, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 260, behavior: "smooth" });
  };

  // Reusable Glass Button Component for consistency
  const GlassButton = ({ 
    direction, 
    onClick, 
    disabled 
  }: { 
    direction: "left" | "right"; 
    onClick: () => void; 
    disabled: boolean 
  }) => {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        aria-label={`Scroll ${direction}`}
        className={`
          relative shrink-0 h-14 w-14 rounded-full 
          flex items-center justify-center
          transition-all duration-500 ease-out
          backdrop-blur-[12px]
          group
          ${
            disabled
              ? "opacity-20 cursor-not-allowed scale-95"
              : "opacity-100 hover:scale-105 active:scale-95 cursor-pointer shadow-2xl shadow-black/20"
          }
        `}
        style={{
          background: disabled 
            ? "rgba(255,255,255,0.03)" 
            : "rgba(255,255,255,0.07)",
        }}
      >
        {/* 1. The Gradient Ring Border (Top-Left & Bottom-Right Highlight) */}
        <div
          className={`absolute inset-0 rounded-full pointer-events-none transition-opacity duration-500 ${disabled ? 'opacity-30' : 'opacity-100'}`}
          style={{
            padding: "1.5px",
            background: "linear-gradient(135deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.01) 35%, rgba(255,255,255,0.01) 65%, rgba(255,255,255,0.3) 100%)",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />

        {/* 2. Surface Shine (Subtle top sheen) */}
        {!disabled && (
          <div 
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.1) 0%, transparent 60%)"
            }}
          />
        )}

        {/* 3. Chevron Icon - Explicit Border Logic */}
        <span
          className={`
            relative z-10 w-[10px] h-[10px] 
            transition-all duration-300
            ${direction === "left" 
              ? "border-t-[2px] border-l-[2px] -rotate-45 ml-1" 
              : "border-t-[2px] border-r-[2px] rotate-45 mr-1"
            }
            ${disabled ? "border-white/30" : "border-white/90 group-hover:border-white"}
          `}
        />
      </button>
    );
  };

  return (
    <section className="bg-[#212121] py-24">
      <Container>
        {/* ================= TOP ROW ================= */}
        <div className="flex items-center gap-24">
          {/* TITLE */}
          <div className="shrink-0">
            <h2 className="relative text-white text-[30px] font-medium leading-none">
              Our USPs
              <span className="absolute left-0 top-full mt-2 h-[3px] w-10 bg-[#FFBA00]" />
            </h2>
          </div>

          {/* USP + CHEVRONS */}
          <div className="flex items-center gap-10 flex-1 min-w-0">
            
            <GlassButton 
              direction="left" 
              onClick={scrollLeft} 
              disabled={!canScrollLeft} 
            />

            {/* USP ROW WITH EDGE FADES */}
            <div className="relative flex-1 min-w-0">
              <div
                ref={scrollRef}
                className="flex gap-16 overflow-hidden whitespace-nowrap"
              >
                {uspItems.map((item, index) => (
                  <span
                    key={index}
                    className="text-white text-[16px] shrink-0 font-light tracking-wide opacity-90"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* LEFT EDGE FADE */}
              {canScrollLeft && (
                <div className="
                  pointer-events-none
                  absolute left-0 top-0 h-full w-24
                  bg-gradient-to-r
                  from-[#212121]
                  to-transparent
                " />
              )}

              {/* RIGHT EDGE FADE */}
              {canScrollRight && (
                <div className="
                  pointer-events-none
                  absolute right-0 top-0 h-full w-24
                  bg-gradient-to-l
                  from-[#212121]
                  to-transparent
                " />
              )}
            </div>

            <GlassButton 
              direction="right" 
              onClick={scrollRight} 
              disabled={!canScrollRight} 
            />

          </div>
        </div>

        {/* ================= BUTTON ROW ================= */}
        <div className="mt-20 flex justify-end">
          <motion.button
            className="group relative inline-flex items-center gap-4 px-10 py-4 text-black overflow-hidden"
            style={{
              backgroundColor: "#FFBA00",
              fontSize: "16px",
              fontWeight: 500,
            }}
          >
            <span className="absolute inset-0 bg-white/20 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
            <span className="relative z-10">Apply for Incubation</span>
            <span className="relative z-10 inline-block transition-transform duration-400 ease-out group-hover:-rotate-90 group-hover:translate-x-1">
              →
            </span>
          </motion.button>
        </div>
      </Container>
    </section>
  );
}