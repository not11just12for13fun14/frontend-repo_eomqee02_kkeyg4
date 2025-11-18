import { Briefcase, Trophy, Users } from "lucide-react"

const roles = [
  {
    company: "Snapchat (Snap Inc.)",
    title: "Senior Software Engineer, Camera Platform",
    period: "2022 — Present",
    achievements: [
      "Owned creator filter pipeline; cut effect latency by 35% across iOS/Android.",
      "Shipped on‑device model updates streamed via gRPC; reduced app size by 18%.",
      "Mentored 4 engineers; drove quarterly reliability OKRs (99.98% SLO)."
    ]
  },
  {
    company: "Stripe",
    title: "Software Engineer, Issuing",
    period: "2020 — 2022",
    achievements: [
      "Designed idempotent APIs and webhooks for virtual card provisioning.",
      "Implemented observability with OpenTelemetry; MTTR improved 44%.",
      "Partnered with Risk to deploy real‑time rules engine (Kafka streams)."
    ]
  },
  {
    company: "MIT Media Lab",
    title: "Research Assistant, Human Dynamics",
    period: "2018 — 2020",
    achievements: [
      "Published CVPR workshop paper on lightweight facial landmark tracking.",
      "Built classroom analytics dashboards used by 3 departments.",
      "Taught Python for Engineers to 120+ students as TA."
    ]
  }
]

export default function ExperienceSnap() {
  return (
    <section id="experience" className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black">Experience</h2>
        </div>

        <div className="grid gap-6">
          {roles.map((r, idx) => (
            <div key={idx} className="rounded-2xl border-2 border-black bg-[#FFFC00]/60 shadow-[0_10px_0_#000] overflow-hidden">
              <div className="p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-lg">{r.title}</h3>
                    <p className="text-sm text-black/80">{r.company}</p>
                  </div>
                  <span className="text-sm font-semibold px-3 py-1 rounded-full border border-black/20 bg-white/70">{r.period}</span>
                </div>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-black/80">
                  {r.achievements.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
