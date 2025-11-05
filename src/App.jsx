import Hero from "./components/Hero";
import WhyHelloLocal from "./components/WhyHelloLocal";
import FeaturesShowcase from "./components/FeaturesShowcase";
import Signup from "./components/Signup";
import { Apple, Play } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="fixed inset-0 -z-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-black" />
        <div className="absolute top-[-10%] left-[-10%] h-[50vh] w-[50vh] rounded-full bg-fuchsia-500/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[55vh] w-[55vh] rounded-full bg-cyan-500/20 blur-[120px]" />
      </div>

      <header className="sticky top-0 z-10 backdrop-blur border-b border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-500" />
            <span className="font-extrabold tracking-tight text-white">HelloLocal</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-white/80">
            <a href="#why" className="hover:text-white">Why</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#signup" className="hover:text-white">Waitlist</a>
          </nav>
          <a href="#signup" className="inline-flex items-center rounded-lg bg-white text-gray-900 px-3 py-1.5 text-sm font-semibold shadow">
            Get early access
          </a>
        </div>
      </header>

      <main className="relative z-0">
        <Hero />
        <WhyHelloLocal />
        <FeaturesShowcase />
        <Signup />

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
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-white/60">
          © {new Date().getFullYear()} HelloLocal. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
