const skills = [
  { group: "Core", items: ["TypeScript", "React/React Native", "Node.js", "Go", "Python"] },
  { group: "Systems", items: ["gRPC", "Kafka", "Redis Streams", "Postgres", "MongoDB"] },
  { group: "ML/CV", items: ["MediaPipe", "ONNX", "TensorFlow Lite", "OpenCV"] },
  { group: "Cloud & Tools", items: ["Kubernetes", "Docker", "Terraform", "Datadog", "Grafana"] }
]

export default function SkillsSnap() {
  return (
    <section id="skills" className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black mb-6">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((s, idx) => (
            <div key={idx} className="rounded-2xl border-2 border-black bg-[#FFFC00]/50 shadow-[0_10px_0_#000] p-5">
              <h3 className="font-bold text-lg mb-2">{s.group}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((i, j) => (
                  <span key={j} className="text-xs px-2 py-1 rounded-full border border-black/20 bg-white/70">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
