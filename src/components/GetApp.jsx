import { Apple, Play } from "lucide-react";

export default function GetApp() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-fuchsia-600 via-indigo-600 to-cyan-500 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 pointer-events-none" style={{background:"radial-gradient(900px 300px at 10% 10%, rgba(255,255,255,.4), transparent), radial-gradient(800px 300px at 90% 90%, rgba(255,255,255,.4), transparent)"}} />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Get the app</h2>
            <p className="mt-2 text-white/90 max-w-xl">Coming soon to iOS and Android. Follow us for updates and early access drops.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 bg-black/80 text-white rounded-xl px-5 py-3 border border-white/10 hover:bg-black transition">
                <Apple className="h-5 w-5" /> App Store
              </a>
              <a href="#" className="inline-flex items-center gap-2 bg-black/80 text-white rounded-xl px-5 py-3 border border-white/10 hover:bg-black transition">
                <Play className="h-5 w-5" /> Google Play
              </a>
              <a href="#" className="inline-flex items-center gap-2 bg-white text-gray-900 rounded-xl px-5 py-3 font-semibold shadow-lg hover:shadow-xl transition">
                Follow on X
              </a>
              <a href="#" className="inline-flex items-center gap-2 bg-white text-gray-900 rounded-xl px-5 py-3 font-semibold shadow-lg hover:shadow-xl transition">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
