"use client"

import { AnimatedBackground } from "@/components/core/animated-background"
import Link from "next/link"

const navLinks = [
  { href: "#company", label: "Company" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#ventures", label: "Ventures" },
]

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-4">
      <nav className="max-w-5xl mx-auto flex items-center justify-between h-12 px-6 rounded-full bg-zinc-900/70 border border-zinc-800/50 backdrop-blur-md">
        <Link href="/" className="font-display text-lg font-semibold text-zinc-100">
          IVT Media Group
        </Link>
        <div className="flex items-center gap-1">
          <AnimatedBackground
            defaultValue={navLinks[0].label}
            className="rounded-full bg-zinc-800/80 ring-1 ring-zinc-700/60"
            transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
            enableHover
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-id={link.label}
                className="px-4 py-1.5 text-sm rounded-full transition-colors duration-300 text-zinc-400 hover:text-zinc-100"
              >
                {link.label}
              </Link>
            ))}
          </AnimatedBackground>
          <Link
            href="#contact"
            className="ml-2 px-4 py-1.5 text-sm rounded-full bg-zinc-100 text-zinc-900 font-medium hover:bg-zinc-200 transition-colors"
          >
            Request Access
          </Link>
        </div>
      </nav>
    </header>
  )
}
