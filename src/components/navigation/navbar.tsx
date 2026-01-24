"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "../layout/container";
import { cn } from "../../lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "CIAP", href: "/ciap" },
  { label: "BRC", href: "/brc" },
  { label: "Bio NEST", href: "/bio-nest" },
  { label: "FabLab", href: "/fablab" },
  { label: "Newsletter", href: "/newsletter" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="flex h-[72px] w-full  bg-white">
      {/* LEFT: Logo */}
      <Link
        href="/"
        className="relative flex items-center bg-[#212121] px-6"
      >
        <Image
          src="/navbar/DEI.svg"
          alt="DEI Logo"
          width={150}
          height={40}
          priority
        />
      </Link>

      {/* CENTER: Navigation */}
      <div className="flex flex-1 items-center">
        <Container>
          <nav className="flex h-full items-center justify-end gap-8 mr-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <div
                  key={item.href}
                  className="relative flex h-[72px] items-center"
                >
                  {/* Hover background */}
                  <span className="absolute inset-y-0 left-1/2 w-[calc(100%+16px)] -translate-x-1/2  bg-[#EAEAEA] opacity-0 transition-opacity duration-200 hover:opacity-100" />

                  {/* Text + underline wrapper */}
                  <Link
                    href={item.href}
                    className={cn(
                      "relative z-10 px-4 text-[16px] text-[#373737] hover:text-black"
                    )}
                  >
                    <span className="relative inline-block">
                      {item.label}

                      {/* Active underline (text-aligned) */}
                      {isActive && (
                        <span className="absolute left-0 -bottom-2 h-[2px] w-1/2 rounded-full bg-[#373737]" />
                      )}
                    </span>
                  </Link>
                </div>
              );
            })}
          </nav>
        </Container>
      </div>

      {/* RIGHT: CTA */}
      <Link
        href="/contact"
        className="group relative flex items-center overflow-hidden bg-[#FFBA00] px-6 text-[16px] text-black"
      >
        {/* Hover overlay */}
        <span className="absolute inset-0 translate-y-full bg-[#322C2C] transition-transform duration-300 ease-out group-hover:translate-y-0" />

        <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
          Contact Us <span aria-hidden>↘</span>
        </span>
      </Link>
    </header>
  );
}
