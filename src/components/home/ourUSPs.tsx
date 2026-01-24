"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
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

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -260,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 260,
      behavior: "smooth",
    });
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

          {/* USP + IMAGE CHEVRONS */}
          <div className="flex items-center gap-10 flex-1 min-w-0">
            {/* LEFT CHEVRON IMAGE */}
            <button
              onClick={scrollLeft}
              aria-label="Scroll left"
              className="shrink-0"
            >
              <Image
                src="/home/ourUSP/2.svg"
                /* OR use: /home/ourUSP/1.svg */
                alt="Scroll left"
                width={64}
                height={64}
                priority
              />
            </button>

            {/* USP TEXT ROW */}
            <div
              ref={scrollRef}
              className="flex gap-16 overflow-hidden whitespace-nowrap flex-1"
            >
              {uspItems.map((item, index) => (
                <span
                  key={index}
                  className="text-white text-[16px] shrink-0"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* RIGHT CHEVRON IMAGE */}
            <button
              onClick={scrollRight}
              aria-label="Scroll right"
              className="shrink-0"
            >
              <Image
                src="/home/ourUSP/1.svg"
                /* OR use: /home/ourUSP/2.svg */
                alt="Scroll right"
                width={64}
                height={64}
                priority
              />
            </button>
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
            <span className="relative z-10">
              Apply for Incubation
            </span>
            <span className="relative z-10 inline-block transition-transform duration-400 ease-out group-hover:-rotate-90 group-hover:translate-x-1">
              →
            </span>
          </motion.button>
        </div>
      </Container>
    </section>
  );
}
