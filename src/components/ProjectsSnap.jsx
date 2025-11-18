import { Code, Camera, Smartphone, Bot, Globe, Zap } from "lucide-react"

const projects = [
  {
    title: "Spotlight AR Filters",
    tagline: "Real‑time face effects pipeline with WebAssembly",
    description:
      "Built a high‑performance AR filter engine in the browser using WebGL and WASM. Reduced effect load times by 42% and supported 120+ creator filters.",
    badges: ["WebGL", "WASM", "MediaPipe", "TypeScript"],
    icon: Camera,
    link: "#"
  },
  {
    title: "SnapPay Mini‑App",
    tagline: "Peer‑to‑peer payments in chat with 99.99% uptime",
    description:
      "Led a cross‑functional effort to ship an embeddable payments module. Implemented idempotent APIs and observability; processed $12M/mo at launch.",
    badges: ["React Native", "GraphQL", "Postgres", "Kubernetes"],
    icon: Smartphone,
    link: "#"
  },
  {
    title: "Real‑time Map Stories",
    tagline: "Location‑aware stories with edge caching",
    description:
      "Designed a geo‑sharded backend with Redis streams and edge caching. 3.1× faster story starts in dense metros.",
    badges: ["Go", "Redis Streams", "gRPC", "CDN"],
    icon: Globe,
    link: "#"
  }
]

export default function ProjectsSnap() {
  return (
    <section id="projects" className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black">Featured Projects</h2>
          <a href="#contact" className="text-sm font-semibold underline">Request case studies</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <article key={idx} className="group rounded-2xl border-2 border-black bg-[#FFFC00]/70 shadow-[0_10px_0_#000] hover:-translate-y-0.5 transition overflow-hidden">
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-black text-[#FFFC00] flex items-center justify-center">
                    <p.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{p.title}</h3>
                    <p className="text-xs text-black/70 -mt-0.5">{p.tagline}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-black/80 leading-relaxed">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.badges.map((b, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-full border border-black/20 bg-white/70">{b}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
