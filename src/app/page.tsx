import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import { SHOW_PROJECTS_SECTION } from '@/config/featureFlags'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      {SHOW_PROJECTS_SECTION && <Projects />}
    </>
  )
}