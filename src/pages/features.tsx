import { motion } from "framer-motion";
import { Palette, Puzzle, Shield, EyeOff, Cpu, Zap, MessageSquare, Settings, Code } from "lucide-react";

const features = [
  { title: "Custom Themes", desc: "Inject CSS to completely overhaul the Discord UI. Support for transparency and custom backgrounds.", icon: Palette },
  { title: "Plugin Support", desc: "Load community plugins or write your own to add entirely new functionality to the client.", icon: Puzzle },
  { title: "Better Privacy", desc: "Blocks all known Discord tracking endpoints, read receipts, and typing indicators at the network level.", icon: Shield },
  { title: "No Telemetry", desc: "Sentry and Science endpoints are neutralized. Your usage data is nobody's business.", icon: EyeOff },
  { title: "Client-Side Mods", desc: "Modify local client behavior without tripping server-side API rate limits or warnings.", icon: Cpu },
  { title: "Performance Boost", desc: "Removes bloatware features like embedded stores and unnecessary background analytics tasks.", icon: Zap },
  { title: "Custom Status", desc: "Advanced rich presence controls and animated custom status bypassing native limits.", icon: MessageSquare },
  { title: "Advanced Settings", desc: "A dedicated settings panel injected straight into your client for managing themes and plugins.", icon: Settings },
  { title: "Script Injection", desc: "Run your own raw JavaScript directly inside the Discord renderer process safely.", icon: Code }
];

export default function Features() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="max-w-7xl mx-auto px-4 py-24">
      <div className="font-mono text-sm text-secondary tracking-widest uppercase mb-4">// core.modules_loaded()</div>
      <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">System <span className="text-primary text-glow-red">Features</span></h1>
      <p className="text-muted-foreground font-mono max-w-2xl mb-16 text-lg">HaxCord is built on a modular architecture, giving you absolute control over your client experience.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="bg-card border border-border p-8 rounded-2xl hover:border-primary/50 hover:box-glow-red transition-all duration-500 group flex flex-col h-full"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_20px_hsla(346,100%,50%,0.5)] transition-all duration-300 mb-6">
              <f.icon className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-3 tracking-tight">{f.title}</h3>
            <p className="text-muted-foreground leading-relaxed font-mono text-sm flex-1">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
