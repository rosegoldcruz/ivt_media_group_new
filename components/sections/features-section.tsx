"use client"

import { motion } from "motion/react"
import { BarChart3, Zap, Command, Layers } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const capabilities = [
  [BarChart3, "Media & Brand Infrastructure", "Build and support digital brands, content systems, communications infrastructure, and online media operations."],
  [Zap, "Technology & Platforms", "Develop websites, digital platforms, internal systems, integrations, and scalable technology infrastructure."],
  [Command, "Automation & Operations", "Workflow automation, communications systems, CRM infrastructure, integrations, and operational tooling."],
  [Layers, "Venture Development", "Support projects from concept through brand, technology, launch, infrastructure, and ongoing operation."],
] as const

export function FeaturesSection() {
  return <section id="capabilities" className="px-6 py-24"><div className="max-w-5xl mx-auto"><motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12"><p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Capabilities</p><h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-4">Infrastructure Behind Digital Ventures.</h2><p className="text-zinc-500 max-w-xl mx-auto text-balance">We combine media, technology, automation, and operations to build the systems behind modern digital businesses.</p></motion.div><div className="grid grid-cols-1 md:grid-cols-2 gap-3">{capabilities.map(([Icon, title, description], index) => <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}><Card className="group h-full overflow-hidden border-zinc-800/50 bg-zinc-900/50 hover:border-zinc-700/50 transition-all duration-300 rounded-2xl"><CardContent className="p-6"><div className="flex items-center gap-3 mb-3"><div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center"><Icon className="w-5 h-5 text-zinc-400 group-hover:text-zinc-200 transition-colors" /></div><p className="font-heading font-semibold text-zinc-100">{title}</p></div><p className="text-zinc-500 text-sm leading-relaxed">{description}</p></CardContent></Card></motion.div>)}</div></div></section>
}
