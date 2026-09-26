"use client"

import Link from "next/link"
import { LiquidCtaButton } from "@/components/buttons/liquid-cta-button"
import { Sparkles, ArrowRight } from "lucide-react"

export function HeroSection() {
  return <section id="company" className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 relative"><div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-transparent to-transparent" /><div className="relative z-10 text-center max-w-3xl mx-auto"><div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 mb-8"><Sparkles className="w-4 h-4 text-zinc-400" /><span className="text-sm text-zinc-400">Education Before Speculation · IV-SOL Ecosystem</span></div><h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6"><span className="text-zinc-100 block">Digital Finance Education</span><span className="bg-gradient-to-r from-zinc-500 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">for the IV-SOL Era.</span></h1><p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">IVT Media Group helps learners understand digital finance, blockchain, AI, cybersecurity, and the IV-SOL ecosystem through practical guidance from Vaulted Academy.</p><div className="flex flex-col sm:flex-row items-center justify-center gap-4"><Link href="#ventures"><LiquidCtaButton>View Ventures</LiquidCtaButton></Link><Link href="#capabilities" className="group flex items-center gap-2 px-6 py-3 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"><span>Explore Our Work</span><ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" /></Link></div></div></section>
}
