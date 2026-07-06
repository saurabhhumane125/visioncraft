import { Hero } from "@/components/sections/Hero"
import { TrustedMarquee } from "@/components/sections/TrustedMarquee"
import { Services } from "@/components/sections/Services"
import { Portfolio } from "@/components/sections/Portfolio"
import { WhyVisionCraft } from "@/components/sections/WhyVisionCraft"
import { Process } from "@/components/sections/Process"
import { Testimonials } from "@/components/sections/Testimonials"
import { FinalCTA } from "@/components/sections/FinalCTA"

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedMarquee />
      <Services />
      <Portfolio />
      <WhyVisionCraft />
      <Process />
      <Testimonials />
      <FinalCTA />
    </>
  )
}
