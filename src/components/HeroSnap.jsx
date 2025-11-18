import { Ghost, Sparkles, GraduationCap, MapPin, Github, Linkedin, Globe } from "lucide-react"

export default function HeroSnap() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,252,0,0.25),transparent_60%),radial-gradient(circle_at_80%_0,rgba(0,0,0,0.05),transparent_40%)]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-black text-[#FFFC00] rounded-full px-3 py-1 text-xs shadow-[0_4px_0_#000]">
              <Sparkles className="w-3.5 h-3.5" /> Open to Senior SWE roles
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mt-4 text-black">
              Hi, I’m Stacy Lee
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-black/80 leading-relaxed">
              Full‑stack engineer obsessed with real‑time experiences, computer vision, and delightful mobile UX. I turn complex ideas into snappy, production‑ready products.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#contact" className="px-4 py-2 rounded-full bg-black text-[#FFFC00] inline-flex items-center gap-2 shadow-[0_4px_0_#000] hover:translate-y-[1px] transition">
                <Ghost className="w-4 h-4" /> Get in touch
              </a>
              <a href="#projects" className="px-4 py-2 rounded-full border border-black/20 hover:border-black/40 transition">See projects</a>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-black/70">
              <div className="inline-flex items-center gap-2"><GraduationCap className="w-4 h-4" /> MIT — B.S. Computer Science, 2019</div>
              <div className="inline-flex items-center gap-2"><MapPin className="w-4 h-4" /> San Francisco, CA</div>
            </div>
            <div className="mt-4 flex items-center gap-4 text-black/80">
              <a href="https://github.com/" target="_blank" className="hover:opacity-80"> <Github className="w-5 h-5" /> </a>
              <a href="https://www.linkedin.com/" target="_blank" className="hover:opacity-80"> <Linkedin className="w-5 h-5" /> </a>
              <a href="https://stacy.dev" target="_blank" className="hover:opacity-80"> <Globe className="w-5 h-5" /> </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-[#FFFC00] border-2 border-black shadow-[0_12px_0_#000] overflow-hidden flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" alt="Stacy portrait" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-black text-[#FFFC00] text-xs px-3 py-1 rounded-full shadow-[0_6px_0_#000]">5+ yrs experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}
