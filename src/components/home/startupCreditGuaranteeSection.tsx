"use client";

import Image from "next/image";
import { Container } from "@/components/layout/container";
import { motion } from "framer-motion";

/* ✅ ADD THIS VARIANT */
const fadeUpVariants = {
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

export default function StartupCreditGuaranteeSection() {
  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/home/dpiit.svg"
            alt="DPIIT Startup India"
            width={160}
            height={80}
            priority
          />
        </div>

        {/* Heading */}
        <div className="text-center space-y-6 mb-16">
          <p className="text-[24px] font-semibold text-[#0165A1] leading-tight">
            With
            <br />
            <span className="text-black">CREDIT</span>{" "}
            <span className="inline-block px-3 py-1 rounded-md bg-[#F9BC10] text-black">
              GUARANTEE
            </span>
          </p>

          {/* SCHEME FOR STARTUPS */}
          <div className="flex flex-col items-center gap-3">
            <span className="w-[280px] h-[2px] bg-[#0165A1]" />
            <p className="text-[20px] font-light tracking-[0.2em] text-[#0165A1]">
              SCHEME FOR STARTUPS
            </p>
            <span className="w-[280px] h-[2px] bg-[#0165A1]" />
          </div>

          <p className="text-[24px] font-semibold text-[#0165A1] max-w-3xl mx-auto">
            The support isn’t just symbolic it’s substantial
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-14">
          <div className="space-y-1">
            <p className="text-[24px] font-medium text-black">
              Loans up to <span className="text-[#0165A1]">₹20 Cr</span> are
            </p>
            <p className="text-[24px] font-medium text-black">
              eligible for guarantee cover
            </p>
          </div>

          <div className="space-y-1 md:border-l md:border-r md:border-[#4083AC] px-6">
            <p className="text-[24px] font-medium text-black">
              For Loans up to <span className="text-[#0165A1]">₹10 Cr</span>,
            </p>
            <p className="text-[24px] font-medium text-black">
              startups get 85% coverage
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-[24px] font-medium text-black">
              For Loans above <span className="text-[#0165A1]">₹10 Cr</span>,
            </p>
            <p className="text-[24px] font-medium text-black">
              coverage is 75%
            </p>
          </div>
        </div>

        {/* Description */}
<div className="text-center space-y-4 mb-16">
  <p className="text-[20px] font-regular text-black max-w-4xl mx-auto">
    This means lenders feel secure and startups get easier access to credit
  </p>

  <p className="text-[20px] font-regular text-black">
    Your growth, backed by assurance
  </p>
</div>


        {/* CTA */}
        <div className="flex justify-center">
          <motion.button
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="group relative inline-flex items-center gap-4 px-8 py-4 overflow-hidden text-black"
            style={{
              backgroundColor: "#FFBA00",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            {/* Hover overlay */}
            <span className="absolute inset-0 bg-white/20 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />

            <span className="relative z-10">Apply Now</span>

            <span className="relative z-10 inline-block transition-transform duration-500 ease-out group-hover:-rotate-90 group-hover:translate-x-1">
              →
            </span>
          </motion.button>
        </div>
      </Container>
    </section>
  );
}
