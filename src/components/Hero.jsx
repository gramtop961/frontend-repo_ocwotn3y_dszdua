import { motion } from "framer-motion";
import { Rocket, MapPin } from "lucide-react";

const phoneScreens = [
  "https://images.unsplash.com/photo-1522120690111-3d2b2b1f9fcb?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-600/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-orange-500/30 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-amber-400/30 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-10 md:pt-28 md:pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-sm text-white/90 backdrop-blur">
                <Rocket className="h-4 w-4 text-orange-300" />
                Discover your city, instantly
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                HelloLocal connects you with the best nearby
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-300"> businesses</span>, deals, and events
              </h1>
              <p className="mt-5 text-lg text-white/80 max-w-xl mx-auto md:mx-0">
                Personalized picks, verified reviews, and instant booking — all in one sleek app built for your city.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-start justify-center">
                <a
                  href="#signup"
                  className="inline-flex justify-center rounded-xl bg-orange-500 text-white px-5 py-3 font-semibold shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition"
                >
                  Join the waitlist
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/20 text-white px-5 py-3 font-semibold hover:bg-white/15 transition"
                >
                  <MapPin className="h-5 w-5 text-orange-300" /> Explore features
                </a>
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              className="relative h-[520px] md:h-[560px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-amber-400/20 rounded-3xl blur-2xl" />
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-500/40 to-amber-400/40 opacity-60" />
              <div className="relative grid grid-cols-2 gap-4 p-4">
                {phoneScreens.map((src, i) => (
                  <motion.div
                    key={src}
                    className={`relative rounded-[2rem] bg-black/70 ring-1 ring-white/20 overflow-hidden shadow-2xl ${
                      i === 0 ? "rotate-[-8deg] translate-y-6" : "rotate-[8deg] -translate-y-6"
                    }`}
                    whileHover={{ y: i === 0 ? -6 : 6 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-2 h-1.5 w-28 rounded-full bg-white/20" />
                    <img
                      src={src}
                      alt="App screen"
                      className="h-[480px] w-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 bg-black/50 backdrop-blur">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/3i3Cc0BXn3Y?rel=0&modestbranding=1&showinfo=0"
                  title="HelloLocal promo video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
