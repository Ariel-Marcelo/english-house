import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Methodology } from "@/components/methodology"
import { Programs } from "@/components/programs"
import { Modalities } from "@/components/modalities"
import { Testimonials } from "@/components/testimonials"
import { Plans } from "@/components/plans"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Methodology />
        <Programs />
        <Modalities />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
