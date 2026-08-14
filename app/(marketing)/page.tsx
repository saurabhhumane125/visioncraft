import { Hero } from "@/components/sections/Hero"
import { TrustedMarquee } from "@/components/sections/TrustedMarquee"
import { Services } from "@/components/sections/Services"
import { Portfolio } from "@/components/sections/Portfolio"
import { WhyVisionCraft } from "@/components/sections/WhyVisionCraft"
import { Testimonials } from "@/components/sections/Testimonials"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { OpeningRibbon } from "@/components/ui/OpeningRibbon"

export default function Home() {
  return (
    <>
      <OpeningRibbon />
      <Hero />
      <TrustedMarquee />
      <Services />
      <Portfolio />
      <WhyVisionCraft />
      <Testimonials />
      <FinalCTA />
    </>
  )
}
