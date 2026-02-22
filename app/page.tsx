import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Methodology } from "@/components/methodology"
import { Programs } from "@/components/programs"
import { Process } from "@/components/process"
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
        <Process />
        <Testimonials />
        <Plans />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
