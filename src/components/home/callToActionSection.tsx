"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";

/* ------------------ Animation ------------------ */

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function CallToActionSection() {
  return (
    <section className="w-full bg-[#2E2E2E] py-24">
      <Container>
        <div className="flex flex-col">
          {/* Text Block — moved more to the right */}
          <div className="pl-20">
            <p className="text-white text-[30px] font-regular leading-tight">
              Ready to turn ideas into action?
            </p>

            <div className="mt-2">
              <p className="text-white text-[30px] font-medium leading-tight">
                Let’s get started.
              </p>

              <span className="mt-2 inline-block h-[6px] w-16 bg-[#FFBA00]" />
            </div>
          </div>

          {/* Button Row — moved more to the left */}
          <div className="mt-20 flex justify-end pr-32">
            <motion.button
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group relative inline-flex items-center gap-4 px-8 py-4 overflow-hidden text-black"
              style={{
                backgroundColor: "#FFBA00",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              <span className="absolute inset-0 bg-white/20 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
              <span className="relative z-10">Connect with us</span>
              <span className="relative z-10 inline-block transition-transform duration-400 ease-out group-hover:-rotate-90 group-hover:translate-x-1">
                →
              </span>
            </motion.button>
          </div>
        </div>
      </Container>
    </section>
  );
}
