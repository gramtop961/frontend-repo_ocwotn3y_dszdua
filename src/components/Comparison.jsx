import { Check, X, Sparkles } from "lucide-react";

const rows = [
  {
    label: "Personalized discovery",
    hellolocal: "Taste-based picks that learn over time",
    others: "Generic lists and paid placement",
  },
  {
    label: "Verified, trusted reviews",
    hellolocal: "Real locals, verified profiles",
    others: "Anonymous, low-signal ratings",
  },
  {
    label: "Instant booking & tickets",
    hellolocal: "Reserve tables, classes, and events in-app",
    others: "Link-outs to third-party sites",
  },
  {
    label: "Local-only deals",
    hellolocal: "City partners and time-sensitive perks",
    others: "One-size-fits-all coupons",
  },
  {
    label: "Live map heatmap",
    hellolocal: "See what's trending right now",
    others: "Static pins and outdated info",
  },
];

export default function Comparison() {
  return (
    <section id="compare" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-orange-300">
            <Sparkles className="h-4 w-4" /> Why we stand out
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">HelloLocal vs Others</h2>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            Built for your city from day one. Here's how we compare.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
          <div className="grid grid-cols-12 text-sm font-semibold text-white/90">
            <div className="col-span-5 p-4 border-b border-white/10">Feature</div>
            <div className="col-span-3 p-4 border-b border-white/10">HelloLocal</div>
            <div className="col-span-4 p-4 border-b border-white/10">Others</div>
          </div>
          <ul>
            {rows.map((r, idx) => (
              <li
                key={r.label}
                className={`grid grid-cols-12 items-center text-white/80 ${
                  idx % 2 === 0 ? "bg-white/[0.03]" : ""
                }`}
              >
                <div className="col-span-5 p-4 border-t border-white/10">{r.label}</div>
                <div className="col-span-3 p-4 border-t border-white/10 flex items-start gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-orange-500/20 text-orange-300 ring-1 ring-orange-400/30">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-white/90">{r.hellolocal}</span>
                </div>
                <div className="col-span-4 p-4 border-t border-white/10 flex items-start gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-white/60 ring-1 ring-white/15">
                    <X className="h-3.5 w-3.5" />
                  </span>
                  <span>{r.others}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
