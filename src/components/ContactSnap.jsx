import { Mail, Send, Phone, MapPin } from "lucide-react"

export default function ContactSnap() {
  return (
    <section id="contact" className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl border-2 border-black bg-[#FFFC00]/70 shadow-[0_10px_0_#000] p-6">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black">Let’s build something fun</h2>
              <p className="mt-2 text-black/80 text-sm leading-relaxed">
                I love fast‑moving teams, ambitious product bets, and shipping pixel‑perfect experiences. Reach out if you’re hiring or want to collaborate.
              </p>
              <div className="mt-4 space-y-2 text-sm">
                <p className="inline-flex items-center gap-2"><Mail className="w-4 h-4" /> stacy@snapmail.dev</p>
                <p className="inline-flex items-center gap-2"><Phone className="w-4 h-4" /> (415) 555‑0199</p>
                <p className="inline-flex items-center gap-2"><MapPin className="w-4 h-4" /> San Francisco, CA</p>
              </div>
            </div>

            <form className="bg-white/80 rounded-xl border border-black/20 p-4 grid gap-3">
              <input placeholder="Your name" className="px-3 py-2 rounded-lg border-2 border-black/20 focus:border-black outline-none" />
              <input placeholder="Your email" className="px-3 py-2 rounded-lg border-2 border-black/20 focus:border-black outline-none" />
              <textarea rows={4} placeholder="Message" className="px-3 py-2 rounded-lg border-2 border-black/20 focus:border-black outline-none" />
              <button type="button" className="justify-self-start inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-[#FFFC00] shadow-[0_4px_0_#000] hover:translate-y-[1px] transition">
                <Send className="w-4 h-4" /> Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
