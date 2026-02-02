// "use client";

// import Image from "next/image";
// import { useRef } from "react";

// const testimonials = [
//   {
//     img: "/home/changelog-trust/1.svg",
//     text:
//       "There’s a saying: ‘Most people don’t start.’ For us, that start was made possible by the incredible team at SRM Bootstrappers’ Research Council. From the initial bootcamp to invaluable guidance at pivotal moments, SRM BRC has been instrumental in shaping our firm’s growth.",
//     name: "ARNAV MADAN",
//     role: "Co-Founder & CEO at Niramaya Health-Tech Pvt. Ltd",
//   },
//   {
//     img: "/home/changelog-trust/2.svg",
//     text:
//       "I walked into the FabLab with just a rough idea and a lot of doubts. What stood out was how approachable everything felt. From mentors to machines, I learned to think, test, fail, and iterate.",
//     name: "KARTHIK NAIR",
//     role: "B.Tech Mechanical Engineering",
//   },
//   {
//     img: "/home/changelog-trust/3.svg",
//     text:
//       "I am thrilled to be incubated with the Bootstrappers’ Research Council of SRM University. BRC is doing remarkable work in supporting startups in the EV space, and we look forward to growing under their guidance.",
//     name: "AKASH JOSHI",
//     role: "Founder & MD at Xorbit EV",
//   },
//   {
//     img: "/home/changelog-trust/4.svg",
//     text:
//       "We, at ZHA Ferrocrete and Luminescence Pvt. Ltd., are thrilled to be registered as a pre-incubatee with the Bootstrappers' Research Council. The facilities provided have been instrumental in enhancing our operations, including access to a private cabin for focused work, complimentary use of various machinery in the FabLab, and a series of entrepreneurship-focused events that inspire and support innovation. We deeply appreciate the opportunities the Bootstrappers' Research Council has created for us and look forward to their continued support in driving our future growth and success.",
//     name: "DR. PRADEEP SIVANANTHAM",
//     role: "Director at ZHA Ferrocrete and Luminescence Pvt. Ltd",
//   },
//   {
//     img: "/home/changelog-trust/5.svg",
//     text:
//       "We are profoundly grateful to SRMIST's Startup Incubator - BRC for their unwavering support and guidance during the formative stages of our company. Their dedication to nurturing start-ups like ours has been pivotal in our growth and success. The funds, resources, mentorship, and vibrant community they provided have been invaluable, enabling us to navigate challenges and seize opportunities with confidence. Thank you, BRC, for believing in our vision and empowering us to turn our dreams into reality. Your commitment to fostering innovation and entrepreneurship is truly inspiring, and we are honored to be part of your incredible network.",
//     name: "Team",
//     role: "Abinava Rizel",
//   },
//   {
//     img: "/home/changelog-trust/6.svg",
//     text:
//       "The Entrepreneurship Bootcamp truly stands out as DEI's biggest strength. Over the five days, my initial ideas became more structured and refined, and I gained much-needed clarity on how to approach them realistically. The mentorship sessions were especially valuable—they helped me identify gaps, validate assumptions, and think from both a user and business perspective. It wasn't just informative, but genuinely helpful, making it a must-participate experience for anyone serious about entrepreneurship.",
//     name: "ANANYA S.",
//     role: "Student Innovator, SRMIST",
//   },
// ];

// export default function ChangelogTrustSection() {
//   const sliderRef = useRef<HTMLDivElement>(null);

//   const scroll = (direction: "left" | "right") => {
//     if (!sliderRef.current) return;
//     const amount = direction === "left" ? -420 : 420;
//     sliderRef.current.scrollBy({ left: amount, behavior: "smooth" });
//   };

//   return (
//     <section className="w-full bg-[#212121] py-24">
//       <div className="mx-auto max-w-7xl px-6">
//         {/* Heading */}
//         <div className="mb-16 max-w-2xl">
//           <p className="text-[30px] font-medium text-white">
//             Straight from the heart of our changemakers
//           </p>
//           <p className="mt-2 text-[30px] font-medium text-white">
//             They{" "}
//             <span className="bg-[#FFBA00] px-2 text-black">trust us.</span>{" "}
//             You can too.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="relative">
//           <div
//             ref={sliderRef}
//             className="flex gap-6 overflow-x-hidden scroll-smooth"
//           >
//             {testimonials.map((item, i) => (
//               <div
//                 key={i}
//                 className="flex-shrink-0 w-[391px] h-[543px] bg-[#272727] p-8 flex flex-col"
//               >
//                 <Image
//                   src={item.img}
//                   alt={item.name}
//                   width={112}
//                   height={76}
//                   className="mb-12"
//                 />

//                 {/* FIXED TEXT BLOCK */}
//                 <p className="text-[16px] font-regular text-white leading-relaxed flex-grow overflow-y-auto pr-4">
//                   “{item.text}”
//                 </p>

//                 <div className="mt-8">
//                   <p className="text-[14px] font-regular text-white">
//                     {item.name}
//                   </p>
//                   <p className="text-[12px] font-regular text-[#878787] mt-1">
//                     {item.role}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Glass Chevron Controls */}
//           <div className="mt-12 flex justify-center gap-4">
//             <button
//               onClick={() => scroll("left")}
//               className="h-10 w-10 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition"
//             >
//               ←
//             </button>
//             <button
//               onClick={() => scroll("right")}
//               className="h-10 w-10 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition"
//             >
//               →
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





// "use client";

// import Image from "next/image";
// import { useRef, useState, useEffect } from "react";

// const testimonials = [
//   {
//     img: "/home/changelog-trust/1.svg",
//     text:
//       "There’s a saying: ‘Most people don’t start.’ For us, that start was made possible by the incredible team at SRM Bootstrappers’ Research Council. From the initial bootcamp to invaluable guidance at pivotal moments, SRM BRC has been instrumental in shaping our firm’s growth.",
//     name: "ARNAV MADAN",
//     role: "Co-Founder & CEO at Niramaya Health-Tech Pvt. Ltd",
//   },
//   {
//     img: "/home/changelog-trust/2.svg",
//     text:
//       "I walked into the FabLab with just a rough idea and a lot of doubts. What stood out was how approachable everything felt. From mentors to machines, I learned to think, test, fail, and iterate.",
//     name: "KARTHIK NAIR",
//     role: "B.Tech Mechanical Engineering",
//   },
//   {
//     img: "/home/changelog-trust/3.svg",
//     text:
//       "I am thrilled to be incubated with the Bootstrappers’ Research Council of SRM University. BRC is doing remarkable work in supporting startups in the EV space, and we look forward to growing under their guidance.",
//     name: "AKASH JOSHI",
//     role: "Founder & MD at Xorbit EV",
//   },
//   {
//     img: "/home/changelog-trust/4.svg",
//     text:
//       "We, at ZHA Ferrocrete and Luminescence Pvt. Ltd., are thrilled to be registered as a pre-incubatee with the Bootstrappers' Research Council. The facilities provided have been instrumental in enhancing our operations.",
//     name: "DR. PRADEEP SIVANANTHAM",
//     role: "Director at ZHA Ferrocrete and Luminescence Pvt. Ltd",
//   },
//   {
//     img: "/home/changelog-trust/5.svg",
//     text:
//       "We are profoundly grateful to SRMIST's Startup Incubator - BRC for their unwavering support and guidance during the formative stages of our company.",
//     name: "Team",
//     role: "Abinava Rizel",
//   },
//   {
//     img: "/home/changelog-trust/6.svg",
//     text:
//       "The Entrepreneurship Bootcamp truly stands out as DEI's biggest strength. Over the five days, my initial ideas became more structured and refined.",
//     name: "ANANYA S.",
//     role: "Student Innovator, SRMIST",
//   },
// ];

// export default function ChangelogTrustSection() {
//   const sliderRef = useRef<HTMLDivElement | null>(null);

//   const [canScrollLeft, setCanScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(true);

//   const updateScrollState = () => {
//     const el = sliderRef.current;
//     if (!el) return;

//     setCanScrollLeft(el.scrollLeft > 0);
//     setCanScrollRight(
//       el.scrollLeft + el.clientWidth < el.scrollWidth - 1
//     );
//   };

//   useEffect(() => {
//     updateScrollState();
//   }, []);

//   useEffect(() => {
//     const el = sliderRef.current;
//     if (!el) return;

//     el.addEventListener("scroll", updateScrollState);
//     return () => el.removeEventListener("scroll", updateScrollState);
//   }, []);

//   const scroll = (direction: "left" | "right") => {
//     if (!sliderRef.current) return;
//     sliderRef.current.scrollBy({
//       left: direction === "left" ? -420 : 420,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="w-full bg-[#212121] py-24">
//       <div className="mx-auto max-w-7xl px-6">
//         {/* Heading */}
//         <div className="mb-16 max-w-2xl">
//           <p className="text-[30px] font-medium text-white">
//             Straight from the heart of our changemakers
//           </p>
//           <p className="mt-2 text-[30px] font-medium text-white">
//             They{" "}
//             <span className="bg-[#FFBA00] px-2 text-black">trust us.</span>{" "}
//             You can too.
//           </p>
//         </div>

//         {/* Slider */}
//         <div className="relative">
//           <div
//             ref={sliderRef}
//             className="flex gap-6 overflow-x-hidden scroll-smooth"
//           >
//             {testimonials.map((item, i) => (
//               <div
//                 key={i}
//                 className="flex-shrink-0 w-[391px] h-[543px] bg-[#272727] p-8 flex flex-col"
//               >
//                 <Image
//                   src={item.img}
//                   alt={item.name}
//                   width={112}
//                   height={76}
//                   className="mb-12"
//                 />

//                 <p className="text-[16px] text-white leading-relaxed flex-grow overflow-y-auto pr-4">
//                   “{item.text}”
//                 </p>

//                 <div className="mt-8">
//                   <p className="text-[14px] text-white">{item.name}</p>
//                   <p className="text-[12px] text-[#878787] mt-1">
//                     {item.role}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* LEFT EDGE FADE */}
//           {canScrollLeft && (
//             <div className="
//               pointer-events-none
//               absolute left-0 top-0 h-full w-20
//               bg-gradient-to-r
//               from-[#212121]
//               to-transparent
//             " />
//           )}

//           {/* RIGHT EDGE FADE */}
//           {canScrollRight && (
//             <div className="
//               pointer-events-none
//               absolute right-0 top-0 h-full w-20
//               bg-gradient-to-l
//               from-[#212121]
//               to-transparent
//             " />
//           )}
//         </div>

//         {/* Liquid Glass Controls */}
//         <div className="mt-12 flex justify-center gap-6">
//           {/* LEFT */}
//           <button
//             onClick={() => scroll("left")}
//             disabled={!canScrollLeft}
//             aria-label="Scroll left"
//             className={`
//               relative h-12 w-12 rounded-full
//               flex items-center justify-center
//               transition-all duration-300
//               ${
//                 canScrollLeft
//                   ? `
//                     bg-white/10 backdrop-blur-lg
//                     border border-white/25
//                     shadow-[0_12px_36px_rgba(0,0,0,0.35)]
//                     hover:bg-white/18 hover:backdrop-blur-xl hover:scale-105
//                     active:scale-95
//                   `
//                   : `
//                     bg-white/5 backdrop-blur-sm
//                     border border-white/10
//                     opacity-40 cursor-not-allowed
//                   `
//               }
//             `}
//           >
//             <span className="absolute inset-0 rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)]" />
//             <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/70 via-white/20 to-white/5 opacity-60" />
//             <span className="relative z-10 h-3 w-3 border-l-[2.5px] border-b-[2.5px] border-white rotate-45" />
//           </button>

//           {/* RIGHT */}
//           <button
//             onClick={() => scroll("right")}
//             disabled={!canScrollRight}
//             aria-label="Scroll right"
//             className={`
//               relative h-12 w-12 rounded-full
//               flex items-center justify-center
//               transition-all duration-300
//               ${
//                 canScrollRight
//                   ? `
//                     bg-white/10 backdrop-blur-lg
//                     border border-white/25
//                     shadow-[0_12px_36px_rgba(0,0,0,0.35)]
//                     hover:bg-white/18 hover:backdrop-blur-xl hover:scale-105
//                     active:scale-95
//                   `
//                   : `
//                     bg-white/5 backdrop-blur-sm
//                     border border-white/10
//                     opacity-40 cursor-not-allowed
//                   `
//               }
//             `}
//           >
//             <span className="absolute inset-0 rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)]" />
//             <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/70 via-white/20 to-white/5 opacity-60" />
//             <span className="relative z-10 h-3 w-3 border-r-[2.5px] border-t-[2.5px] border-white rotate-45" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


















"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

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
      "We, at ZHA Ferrocrete and Luminescence Pvt. Ltd., are thrilled to be registered as a pre-incubatee with the Bootstrappers' Research Council. The facilities provided have been instrumental in enhancing our operations.",
    name: "DR. PRADEEP SIVANANTHAM",
    role: "Director at ZHA Ferrocrete and Luminescence Pvt. Ltd",
  },
  {
    img: "/home/changelog-trust/5.svg",
    text:
      "We are profoundly grateful to SRMIST's Startup Incubator - BRC for their unwavering support and guidance during the formative stages of our company.",
    name: "Team",
    role: "Abinava Rizel",
  },
  {
    img: "/home/changelog-trust/6.svg",
    text:
      "The Entrepreneurship Bootcamp truly stands out as DEI's biggest strength. Over the five days, my initial ideas became more structured and refined.",
    name: "ANANYA S.",
    role: "Student Innovator, SRMIST",
  },
];

export default function ChangelogTrustSection() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = sliderRef.current;
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
    const el = sliderRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollState);
    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -420 : 420,
      behavior: "smooth",
    });
  };

  // Consistent Glass Button Component
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

        {/* Slider */}
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

                <p className="text-[16px] text-white leading-relaxed flex-grow overflow-y-auto pr-4">
                  “{item.text}”
                </p>

                <div className="mt-8">
                  <p className="text-[14px] text-white">{item.name}</p>
                  <p className="text-[12px] text-[#878787] mt-1">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* LEFT EDGE FADE */}
          {canScrollLeft && (
            <div className="
              pointer-events-none
              absolute left-0 top-0 h-full w-20
              bg-gradient-to-r
              from-[#212121]
              to-transparent
            " />
          )}

          {/* RIGHT EDGE FADE */}
          {canScrollRight && (
            <div className="
              pointer-events-none
              absolute right-0 top-0 h-full w-20
              bg-gradient-to-l
              from-[#212121]
              to-transparent
            " />
          )}
        </div>

        {/* Controls - Updated to New Glass Style */}
        <div className="mt-12 flex justify-center gap-6">
          <GlassButton 
            direction="left" 
            onClick={() => scroll("left")} 
            disabled={!canScrollLeft} 
          />
          <GlassButton 
            direction="right" 
            onClick={() => scroll("right")} 
            disabled={!canScrollRight} 
          />
        </div>
      </div>
    </section>
  );
}