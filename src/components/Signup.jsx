import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, MapPin } from "lucide-react";

export default function Signup() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      // For now, mimic success since no backend is required for this landing page.
      await new Promise((r) => setTimeout(r, 700));
      setStatus({ ok: true, message: "You're on the list! We'll be in touch soon." });
      e.currentTarget.reset();
    } catch (e) {
      setStatus({ ok: false, message: "Something went wrong. Please try again." });
    }
  };

  return (
    <section id="signup" className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Join the HelloLocal waitlist</h2>
          <p className="mt-3 text-white/80">Be the first to get early access when we launch in your city.</p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur"
        >
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-white/90 mb-1">Name</label>
            <div className="relative">
              <User className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
              <input name="name" required placeholder="Jane Doe" className="w-full bg-black/40 border border-white/10 rounded-lg pl-9 pr-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
            </div>
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-white/90 mb-1">Email</label>
            <div className="relative">
              <Mail className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
              <input type="email" name="email" required placeholder="you@example.com" className="w-full bg-black/40 border border-white/10 rounded-lg pl-9 pr-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-white/90 mb-1">City</label>
            <div className="relative">
              <MapPin className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
              <input name="location" required placeholder="San Francisco, CA" className="w-full bg-black/40 border border-white/10 rounded-lg pl-9 pr-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
            </div>
          </div>
          <div className="sm:col-span-2 flex items-center justify-between gap-3">
            <p className="text-xs text-white/60">We respect your privacy. Unsubscribe anytime.</p>
            <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-white text-gray-900 px-5 py-2.5 font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition">
              Request early access
            </button>
          </div>
          {status && (
            <div className={`sm:col-span-2 text-sm font-medium ${status.ok ? "text-emerald-400" : "text-red-400"}`}>
              {status.message}
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
