import { motion } from "framer-motion";
import { Stars, BadgeCheck, Clock } from "lucide-react";

const items = [
  {
    icon: Stars,
    title: "Personalized recommendations",
    desc: "Discover places you’ll love based on your tastes, history, and what’s trending nearby.",
  },
  {
    icon: BadgeCheck,
    title: "Verified reviews",
    desc: "Real feedback from real locals. Every review is authenticated to keep things trustworthy.",
  },
  {
    icon: Clock,
    title: "Instant booking",
    desc: "Reserve tables, book classes, and snag tickets without leaving the app.",
  },
];

export default function WhyHelloLocal() {
  return (
    <section id="why" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Why HelloLocal</h2>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            A smarter way to experience your city — tailored, trustworthy, and fast.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur hover:bg-white/7 transition"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-white/80">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
