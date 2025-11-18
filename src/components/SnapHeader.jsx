import { Ghost, Mail, Link as LinkIcon, MapPin } from "lucide-react"

export default function SnapHeader() {
  return (
    <header className="sticky top-0 z-40">
      <div className="bg-[#FFFC00] border-b border-black/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shadow-[0_4px_0_#000]">
              <Ghost className="w-6 h-6 text-[#FFFC00]" />
            </div>
            <div>
              <p className="text-sm leading-tight font-semibold text-black">Stacy Lee</p>
              <p className="text-xs text-black/70 -mt-0.5">Software Engineer • MIT</p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <a href="#projects" className="text-sm font-medium px-3 py-1.5 rounded-full border border-black/20 hover:border-black/40 transition">Projects</a>
            <a href="#experience" className="text-sm font-medium px-3 py-1.5 rounded-full border border-black/20 hover:border-black/40 transition">Experience</a>
            <a href="#skills" className="text-sm font-medium px-3 py-1.5 rounded-full border border-black/20 hover:border-black/40 transition">Skills</a>
            <a href="#contact" className="text-sm font-medium px-3 py-1.5 rounded-full bg-black text-[#FFFC00] shadow-[0_4px_0_#000] hover:translate-y-[1px] transition inline-flex items-center gap-2">
              <Mail className="w-4 h-4" /> Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
