import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Map, Ticket, Search } from "lucide-react";

const tabs = [
  {
    key: "discover",
    icon: Search,
    label: "Discover",
    media: "https://videos.pexels.com/video-files/3225511/3225511-uhd_2560_1440_25fps.mp4",
    caption: "Swipe through curated spots nearby",
  },
  {
    key: "map",
    icon: Map,
    label: "Map View",
    media: "https://videos.pexels.com/video-files/856673/856673-hd_1920_1080_25fps.mp4",
    caption: "See what's hot around you in real-time",
  },
  {
    key: "book",
    icon: Ticket,
    label: "Book",
    media: "https://videos.pexels.com/video-files/3183101/3183101-uhd_2560_1440_25fps.mp4",
    caption: "Reserve tables and tickets instantly",
  },
  {
    key: "mobile",
    icon: Smartphone,
    label: "Mobile-first",
    media: "https://videos.pexels.com/video-files/6874340/6874340-uhd_2560_1440_24fps.mp4",
    caption: "Designed for speed on the go",
  },
];

export default function FeaturesShowcase() {
  const [active, setActive] = useState("discover");
  const current = tabs.find((t) => t.key === active);

  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">See HelloLocal in action</h2>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            Interactive previews to help you understand key features at a glance.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 border transition ${
                active === t.key
                  ? "bg-white text-gray-900 border-white"
                  : "bg-white/5 text-white border-white/10 hover:bg-white/10"
              }`}
            >
              <t.icon className="h-4 w-4" />
              <span className="text-sm font-semibold">{t.label}</span>
            </button>
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur">
          <div className="aspect-video">
            <AnimatePresence mode="wait">
              <motion.video
                key={current.key}
                src={current.media}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            </AnimatePresence>
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-white/90 bg-black/40 rounded-lg px-4 py-2 backdrop-blur">
            {current.caption}
          </div>
        </div>
      </div>
    </section>
  );
}
