import SnapHeader from './components/SnapHeader'
import HeroSnap from './components/HeroSnap'
import ProjectsSnap from './components/ProjectsSnap'
import ExperienceSnap from './components/ExperienceSnap'
import SkillsSnap from './components/SkillsSnap'
import ContactSnap from './components/ContactSnap'

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SnapHeader />
      <HeroSnap />
      <ProjectsSnap />
      <ExperienceSnap />
      <SkillsSnap />
      <ContactSnap />

      <footer className="py-8 bg-[#FFFC00] border-t-2 border-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-semibold">© {new Date().getFullYear()} Stacy Lee</p>
          <p className="text-xs text-black/70">Designed with a playful Snapchat‑inspired vibe</p>
        </div>
      </footer>
    </div>
  )
}

export default App
