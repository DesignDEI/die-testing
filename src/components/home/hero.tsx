// "use client";

// import {
//   motion,
//   useMotionValue,
//   useAnimationFrame,
// } from "framer-motion";
// import Image from "next/image";
// import { useEffect, useRef } from "react";
// import { Container } from "../layout/container";

// /* ================= CONFIG ================= */

// const CUBE_SIZE = 480;
// const FACE_GAP = 30;

// const FACE_RADIUS = 0;
// const FACE_SIZE = CUBE_SIZE - FACE_GAP * 2;
// const DEPTH = CUBE_SIZE / 2 - FACE_GAP;

// const IMPULSE = 0.025;
// const FRICTION = 0.97;
// const MAX_VELOCITY = 1.6;

// /* ================= HERO ================= */

// export function Hero() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   const rotX = useMotionValue(0);
//   const rotY = useMotionValue(0);

//   const velX = useRef(0);
//   const velY = useRef(0);

//   /* ---------- Mouse impulse ---------- */
//   useEffect(() => {
//     const el = containerRef.current;
//     if (!el) return;

//     let lastX = 0;
//     let lastY = 0;

//     const onMove = (e: MouseEvent) => {
//       const r = el.getBoundingClientRect();
//       const x = e.clientX - r.left;
//       const y = e.clientY - r.top;

//       const dx = x - lastX;
//       const dy = y - lastY;

//       lastX = x;
//       lastY = y;

//       velY.current += dx * IMPULSE;
//       velX.current -= dy * IMPULSE;

//       velX.current = clamp(velX.current, -MAX_VELOCITY, MAX_VELOCITY);
//       velY.current = clamp(velY.current, -MAX_VELOCITY, MAX_VELOCITY);
//     };

//     el.addEventListener("mousemove", onMove);
//     return () => el.removeEventListener("mousemove", onMove);
//   }, []);

//   /* ---------- Inertia ---------- */
//   useAnimationFrame(() => {
//     velX.current *= FRICTION;
//     velY.current *= FRICTION;

//     rotX.set(rotX.get() + velX.current);
//     rotY.set(rotY.get() + velY.current);
//   });

//   return (
//     <section className="relative overflow-hidden bg-white">
//       <Container>
//         <div
//           ref={containerRef}
//           className="relative min-h-[90vh] grid place-items-center"
//         >
//           {/* ===== CUBE WRAPPER ===== */}
//           <div 
//             className="relative z-10"
//             style={{ 
//               perspective: "1400px",
//             }}
//           >
//             {/* Cube */}
//             <motion.div
//               style={{
//                 rotateX: rotX,
//                 rotateY: rotY,
//                 transformStyle: "preserve-3d",
//               }}
//             >
//               <div
//                 className="relative [transform-style:preserve-3d]"
//                 style={{ width: CUBE_SIZE, height: CUBE_SIZE }}
//               >
//                 <Face src="/home/1.png" transform={`translateZ(${DEPTH}px)`} />
//                 <Face
//                   src="/home/2.png"
//                   transform={`rotateY(180deg) translateZ(${DEPTH}px)`}
//                 />
//                 <Face
//                   src="/home/3.png"
//                   transform={`rotateY(90deg) translateZ(${DEPTH}px)`}
//                 />
//                 <Face
//                   src="/home/4.png"
//                   transform={`rotateY(-90deg) translateZ(${DEPTH}px)`}
//                 />
//                 <Face
//                   src="/home/5.png"
//                   transform={`rotateX(90deg) translateZ(${DEPTH}px)`}
//                 />
//                 <Face
//                   src="/home/6.png"
//                   transform={`rotateX(-90deg) translateZ(${DEPTH}px)`}
//                 />
//               </div>
//             </motion.div>
//           </div>

          
//           <h1 
//             className="pointer-events-none absolute z-20 text-[220px] font-medium tracking-tight text-white whitespace-nowrap"
//             style={{
//               mixBlendMode: "difference",
//             }}
//           >
//             SRM  @ DEI
//           </h1>

//           {/* ===== BOTTOM META CONTENT ===== */}
//           <div className="pointer-events-none absolute inset-x-0 bottom-10 z-40">
//             <div className="mx-auto max-w-7xl px-6 flex items-end justify-between">
//               <div className="space-y-[10px] text-sm text-black">
//                 <p className="font-medium">Your Idea, Our Mission</p>
//                 <p className="opacity-80">The Best Support for Startups.</p>
//               </div>

//               <div className="text-sm text-black text-left space-y-1">
//                 <p>admin.dei@srmist.edu.in</p>
//                 <p className="inline-block border-b border-yellow-400 pb-[2px]">
//                   associate.outreach@srmbrc.com
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }

// /* ================= FACE ================= */

// function Face({ src, transform }: { src: string; transform: string }) {
//   return (
//     <div
//       className="absolute"
//       style={{
//         width: FACE_SIZE,
//         height: FACE_SIZE,
//         left: "50%",
//         top: "50%",
//         transform: `translate(-50%, -50%) ${transform}`,
//         borderRadius: FACE_RADIUS,
//         boxShadow: "0 14px 40px rgba(0,0,0,0.12)",
//         overflow: "hidden",
//         backfaceVisibility: "hidden",
//         WebkitBackfaceVisibility: "hidden",
//       }}
//     >
//       <Image src={src} alt="" fill className="object-cover" />
//     </div>
//   );
// }

// /* ================= UTILS ================= */

// function clamp(v: number, min: number, max: number) {
//   return Math.min(Math.max(v, min), max);
// }















"use client";

import {
  motion,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Container } from "../layout/container";

/* ================= CONFIG ================= */

const CUBE_SIZE = 480;
const FACE_GAP = 30;

const FACE_RADIUS = 0;
const FACE_SIZE = CUBE_SIZE - FACE_GAP * 2;
const DEPTH = CUBE_SIZE / 2 - FACE_GAP;

const IMPULSE = 0.025;
const FRICTION = 0.97;
const MAX_VELOCITY = 1.6;

/* ================= HERO ================= */

export function Hero() {
  // 🔴 CHANGED: track full section, not cube container
  const sectionRef = useRef<HTMLElement>(null);

  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);

  const velX = useRef(0);
  const velY = useRef(0);

  /* ---------- Mouse impulse (FULL WIDTH) ---------- */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let lastX = 0;
    let lastY = 0;

    const onMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      const dx = x - lastX;
      const dy = y - lastY;

      lastX = x;
      lastY = y;

      velY.current += dx * IMPULSE;
      velX.current -= dy * IMPULSE;

      velX.current = clamp(velX.current, -MAX_VELOCITY, MAX_VELOCITY);
      velY.current = clamp(velY.current, -MAX_VELOCITY, MAX_VELOCITY);
    };

    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  /* ---------- Inertia ---------- */
  useAnimationFrame(() => {
    velX.current *= FRICTION;
    velY.current *= FRICTION;

    rotX.set(rotX.get() + velX.current);
    rotY.set(rotY.get() + velY.current);
  });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white"
    >
      <Container>
        <div className="relative min-h-[90vh] grid place-items-center">
          {/* ===== CUBE WRAPPER ===== */}
          <div
            className="relative z-10"
            style={{
              perspective: "1400px",
            }}
          >
            <motion.div
              style={{
                rotateX: rotX,
                rotateY: rotY,
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className="relative [transform-style:preserve-3d]"
                style={{ width: CUBE_SIZE, height: CUBE_SIZE }}
              >
                <Face src="/home/1.png" transform={`translateZ(${DEPTH}px)`} />
                <Face
                  src="/home/2.png"
                  transform={`rotateY(180deg) translateZ(${DEPTH}px)`}
                />
                <Face
                  src="/home/3.png"
                  transform={`rotateY(90deg) translateZ(${DEPTH}px)`}
                />
                <Face
                  src="/home/4.png"
                  transform={`rotateY(-90deg) translateZ(${DEPTH}px)`}
                />
                <Face
                  src="/home/5.png"
                  transform={`rotateX(90deg) translateZ(${DEPTH}px)`}
                />
                <Face
                  src="/home/6.png"
                  transform={`rotateX(-90deg) translateZ(${DEPTH}px)`}
                />
              </div>
            </motion.div>
          </div>

          <h1
            className="pointer-events-none absolute z-20 text-[220px] font-medium tracking-tight text-white whitespace-nowrap"
            style={{ mixBlendMode: "difference" }}
          >
            SRM  @ DEI
          </h1>

          {/* ===== BOTTOM META CONTENT ===== */}
          <div className="pointer-events-none absolute inset-x-0 bottom-10 z-40">
            <div className="mx-auto max-w-7xl px-6 flex items-end justify-between">
              <div className="space-y-[10px] text-sm text-black">
                <p className="font-medium">Your Idea, Our Mission</p>
                <p className="opacity-80">The Best Support for Startups.</p>
              </div>

              <div className="text-sm text-black text-left space-y-1">
                <p>admin.dei@srmist.edu.in</p>
                <p className="inline-block border-b border-yellow-400 pb-[2px]">
                  associate.outreach@srmbrc.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ================= FACE ================= */

function Face({ src, transform }: { src: string; transform: string }) {
  return (
    <div
      className="absolute"
      style={{
        width: FACE_SIZE,
        height: FACE_SIZE,
        left: "50%",
        top: "50%",
        transform: `translate(-50%, -50%) ${transform}`,
        borderRadius: FACE_RADIUS,
        boxShadow: "0 14px 40px rgba(0,0,0,0.12)",
        overflow: "hidden",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
      }}
    >
      <Image src={src} alt="" fill className="object-cover" />
    </div>
  );
}

/* ================= UTILS ================= */

function clamp(v: number, min: number, max: number) {
  return Math.min(Math.max(v, min), max);
}
