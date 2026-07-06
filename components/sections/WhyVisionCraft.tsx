"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const STATEMENTS = [
  {
    id: "01",
    headline: "One cohesive team.",
    body: "Stop managing five freelancers. We provide a single, integrated team for all your creative and technical needs. No miscommunication, zero handoff delays, just seamless execution.",
    accent: "electric",
  },
  {
    id: "02",
    headline: "One brand system.",
    body: "Your website, marketing assets, and video content all speak the same visual language. Brand consistency isn't just a promise — it's hardwired into our process.",
    accent: "lime",
  },
  {
    id: "03",
    headline: "Zero compromises.",
    body: "We bridge the gap between creative ambition and technical execution. We move fast and deliver premium, award-winning quality — on time, every time.",
    accent: "mars",
  },
]

export function WhyVisionCraft() {
  return (
    <section
      id="why-us"
      className="bg-[#151515] text-neutral-100 relative grain py-24 md:py-32"
      aria-label="Why VisionCraft"
    >
      <div className="relative z-10 mx-auto max-w-[1440px] w-full px-5 md:px-10 lg:px-16 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left: Headline */}
        <div className="flex-[1] lg:sticky lg:top-32 h-fit">
          <span className="text-neutral-100/40 text-sm font-mono tracking-widest mb-6 block uppercase">
            The VisionCraft Standard
          </span>
          <h2
            className="font-display font-bold tracking-tight leading-[1.05]"
            style={{ fontSize: "var(--text-display)" }}
          >
            Why
            <br />
            Choose Us
          </h2>
        </div>

        {/* Right: Static Cards with whileInView */}
        <div className="flex-[1.5] flex flex-col gap-12">
          {STATEMENTS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-neutral-950 p-10 md:p-16 border border-neutral-100/5 shadow-2xl relative overflow-hidden group"
            >
              {/* Accent glowing line */}
              <div className={`absolute top-0 left-0 w-full h-[2px] bg-${item.accent}`} />
              
              <span className={`font-display text-[8rem] md:text-[12rem] font-bold leading-none absolute -top-8 -right-8 text-neutral-100/[0.02] pointer-events-none select-none`}>
                {item.id}
              </span>

              <div className="relative z-10 max-w-xl">
                <h3
                  className="font-display font-bold tracking-tight leading-[1.1] mb-8"
                  style={{ fontSize: "var(--text-editorial)" }}
                >
                  {item.headline}
                </h3>
                
                <div className="w-12 h-[2px] bg-neutral-100/20 mb-8" />

                <p className="text-neutral-100/60 text-lg md:text-xl leading-relaxed">
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

