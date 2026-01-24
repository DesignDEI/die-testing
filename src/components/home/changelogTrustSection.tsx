"use client";

import Image from "next/image";
import { useRef } from "react";

const testimonials = [
  {
    img: "/home/changelog-trust/1.svg",
    text:
      "There’s a saying: ‘Most people don’t start.’ For us, that start was made possible by the incredible team at SRM Bootstrappers’ Research Council. From the initial bootcamp to invaluable guidance at pivotal moments, SRM BRC has been instrumental in shaping our firm’s growth.",
    name: "ARNAV MADAN",
    role: "Co-Founder & CEO at Niramaya Health-Tech Pvt. Ltd",
  },
  {
    img: "/home/changelog-trust/2.svg",
    text:
      "I walked into the FabLab with just a rough idea and a lot of doubts. What stood out was how approachable everything felt. From mentors to machines, I learned to think, test, fail, and iterate.",
    name: "KARTHIK NAIR",
    role: "B.Tech Mechanical Engineering",
  },
  {
    img: "/home/changelog-trust/3.svg",
    text:
      "I am thrilled to be incubated with the Bootstrappers’ Research Council of SRM University. BRC is doing remarkable work in supporting startups in the EV space, and we look forward to growing under their guidance.",
    name: "AKASH JOSHI",
    role: "Founder & MD at Xorbit EV",
  },
  {
    img: "/home/changelog-trust/4.svg",
    text:
      "We, at ZHA Ferrocrete and Luminescence Pvt. Ltd., are thrilled to be registered as a pre-incubatee with the Bootstrappers' Research Council. The facilities provided have been instrumental in enhancing our operations, including access to a private cabin for focused work, complimentary use of various machinery in the FabLab, and a series of entrepreneurship-focused events that inspire and support innovation. We deeply appreciate the opportunities the Bootstrappers' Research Council has created for us and look forward to their continued support in driving our future growth and success.",
    name: "DR. PRADEEP SIVANANTHAM",
    role: "Director at ZHA Ferrocrete and Luminescence Pvt. Ltd",
  },
  {
    img: "/home/changelog-trust/5.svg",
    text:
      "We are profoundly grateful to SRMIST's Startup Incubator - BRC for their unwavering support and guidance during the formative stages of our company. Their dedication to nurturing start-ups like ours has been pivotal in our growth and success. The funds, resources, mentorship, and vibrant community they provided have been invaluable, enabling us to navigate challenges and seize opportunities with confidence. Thank you, BRC, for believing in our vision and empowering us to turn our dreams into reality. Your commitment to fostering innovation and entrepreneurship is truly inspiring, and we are honored to be part of your incredible network.",
    name: "Team",
    role: "Abinava Rizel",
  },
  {
    img: "/home/changelog-trust/6.svg",
    text:
      "The Entrepreneurship Bootcamp truly stands out as DEI's biggest strength. Over the five days, my initial ideas became more structured and refined, and I gained much-needed clarity on how to approach them realistically. The mentorship sessions were especially valuable—they helped me identify gaps, validate assumptions, and think from both a user and business perspective. It wasn't just informative, but genuinely helpful, making it a must-participate experience for anyone serious about entrepreneurship.",
    name: "ANANYA S.",
    role: "Student Innovator, SRMIST",
  },
];

export default function ChangelogTrustSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const amount = direction === "left" ? -420 : 420;
    sliderRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-[#212121] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 max-w-2xl">
          <p className="text-[30px] font-medium text-white">
            Straight from the heart of our changemakers
          </p>
          <p className="mt-2 text-[30px] font-medium text-white">
            They{" "}
            <span className="bg-[#FFBA00] px-2 text-black">trust us.</span>{" "}
            You can too.
          </p>
        </div>

        {/* Cards */}
        <div className="relative">
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-hidden scroll-smooth"
          >
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[391px] h-[543px] bg-[#272727] p-8 flex flex-col"
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  width={112}
                  height={76}
                  className="mb-12"
                />

                {/* FIXED TEXT BLOCK */}
                <p className="text-[16px] font-regular text-white leading-relaxed flex-grow overflow-y-auto pr-4">
                  “{item.text}”
                </p>

                <div className="mt-8">
                  <p className="text-[14px] font-regular text-white">
                    {item.name}
                  </p>
                  <p className="text-[12px] font-regular text-[#878787] mt-1">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Glass Chevron Controls */}
          <div className="mt-12 flex justify-center gap-4">
            <button
              onClick={() => scroll("left")}
              className="h-10 w-10 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              className="h-10 w-10 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
