"use client";

import Image from "next/image";
import { Container } from "@/components/layout/container";

/* ================= CONFIG ================= */

const LOGO_WIDTH = 160;
const LOGO_HEIGHT = 80;
const GAP = 80;

const sections = [
  {
    title: "Our Current Startups",
    folder: "row1",
    direction: "left",
    count: 10,
  },
  {
    title: "Our Graduated Startups",
    folder: "row2",
    direction: "right",
    count: 16,
  },
  {
    title: "Our Partners",
    folder: "row3",
    direction: "left",
    count: 23,
  },
];

/* ================= MARQUEE ROW ================= */

const MarqueeRow = ({
  folder,
  count,
  direction,
}: {
  folder: string;
  count: number;
  direction: "left" | "right";
}) => {
  const logos = Array.from({ length: count }, (_, i) => i + 1);

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex w-max marquee ${
          direction === "right" ? "marquee-reverse" : ""
        }`}
        style={{ gap: `${GAP}px` }}
      >
        {[...logos, ...logos].map((num, index) => (
          <div
            key={index}
            className="relative shrink-0"
            style={{ width: LOGO_WIDTH, height: LOGO_HEIGHT }}
          >
            <Image
              src={`/home/startup-marquee/${folder}/${num}.svg`}
              alt="Startup logo"
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

/* ================= SECTION ================= */

export default function StartupMarqueeSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="space-y-20">
          {sections.map((section) => (
            <div key={section.title} className="space-y-8">
              <h2 className="text-[26px] font-semibold text-[#322C2C]">
                {section.title}
              </h2>

              <MarqueeRow
                folder={section.folder}
                count={section.count}
                direction={section.direction as "left" | "right"}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
