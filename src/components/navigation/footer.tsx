"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "CIAP", href: "/ciap" },
  { label: "BRC", href: "/brc" },
  { label: "Bio NEST", href: "/bio-nest" },
  { label: "Fablab", href: "/fablab" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Contact Us", href: "/contact-us" },
];

const socialIcons = [
  { src: "/navigation/1.svg", alt: "LinkedIn" },
  { src: "/navigation/2.svg", alt: "Instagram" },
  { src: "/navigation/3.svg", alt: "X" },
  { src: "/navigation/4.svg", alt: "Facebook" },
];

export default function SiteFooter() {
  const pathname = usePathname();

  return (
    <footer className="w-full bg-black border-t border-white/10">
      <div
        className="flex items-center justify-between py-6"
        style={{ paddingLeft: "48px", paddingRight: "41px" }}
      >
        {/* LEFT */}
        {/* LEFT */}
<div className="flex items-center gap-16">
  {/* SOCIAL ICONS */}
  <div className="flex items-center gap-5">
    {socialIcons.map((icon, index) => (
      <div key={index} className="flex items-center">
        <Image
          src={icon.src}
          alt={icon.alt}
          width={24}
          height={24}
          className="object-contain"
        />
      </div>
    ))}
  </div>

  <span className="text-white text-[16px] font-light">
    © Copyright DEI 2026. All Rights Reserved.
  </span>
</div>


        {/* RIGHT NAV */}
        <nav className="flex items-center gap-8">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={label}
                href={href}
                className={`relative text-[16px] font-normal transition-colors duration-200 ${
                  isActive
                    ? "text-[#BFBFBF]"
                    : "text-[#BFBFBF] hover:text-[#FFBA00]"
                }`}
              >
                {label}

                {isActive && (
                  <span className="absolute left-0 -bottom-1 h-[2px] w-1/2 bg-[#FFBA00]" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
