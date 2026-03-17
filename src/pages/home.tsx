import { Link } from "wouter";
import { Github, Zap, Shield, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { TypingText } from "../components/typing-text";

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col">
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-4 py-20">
        <img src={`${import.meta.env.BASE_URL}images/cyber-bg.png`} alt="Cyber Background"
          className="absolute inset-0 z-[999] w-full h-full object-cover opacity-20 pointer-events-none mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <div className="font-mono text-sm md:text-base text-secondary tracking-widest uppercase mb-4">
            <TypingText text="// sys.init() -- bypass injected" delay={40} />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white text-glow-white uppercase tracking-tight leading-none">
            Discord.<br/><span className="text-primary text-glow-red">Reimagined.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-mono mt-6">
            Open source. No telemetry. No ads.<br className="hidden sm:block"/> Just your favorite chat app the way you want it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
            <Link href="/install"
              className="w-full sm:w-auto px-8 py-4 bg-primary/10 border border-primary/50 text-primary font-display font-bold tracking-[0.2em] uppercase hover:bg-primary hover:text-white hover:box-glow-red transition-all duration-300 shadow-lg shadow-primary/10"
            >Get HaxCord</Link>
            <a href="https://github.com/TheFallenNightAdmin/haxcord" target="_blank" rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-display font-bold tracking-[0.2em] uppercase hover:bg-white/10 hover:border-white/30 hover:text-glow-white transition-all duration-300 flex items-center justify-center gap-3"
            ><Github className="w-5 h-5" /> View Source</a>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-black/50 backdrop-blur-md py-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-12 text-center divide-y sm:divide-y-0 sm:divide-x divide-border/50">
          <div className="pt-6 sm:pt-0">
            <div className="text-5xl font-display font-black text-white mb-2">1</div>
            <div className="font-mono text-xs text-primary tracking-[0.2em] uppercase">Total Downloads</div>
          </div>
          <div className="pt-6 sm:pt-0">
            <div className="text-5xl font-display font-black text-white mb-2">15+</div>
            <div className="font-mono text-xs text-primary tracking-[0.2em] uppercase">Core Features</div>
          </div>
          <div className="pt-6 sm:pt-0">
            <div className="text-5xl font-display font-black text-secondary text-glow-secondary mb-2">ZERO</div>
            <div className="font-mono text-xs text-secondary tracking-[0.2em] uppercase">Trackers Found</div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <div className="font-mono text-sm text-primary tracking-widest uppercase mb-4">// core_advantages</div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Why Use <span className="text-primary">HaxCord</span>?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-border p-10 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transition-transform duration-500 group-hover:scale-110" />
            <Shield className="w-12 h-12 text-primary mb-6 relative z-10" />
            <h3 className="text-2xl font-display font-bold text-white mb-4 relative z-10">Total Privacy</h3>
            <p className="text-muted-foreground font-mono text-sm leading-relaxed relative z-10">We strip out all Discord analytics, tracking endpoints, and crash reporters. Your data stays on your machine, always.</p>
          </div>
          <div className="bg-card border border-border p-10 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full transition-transform duration-500 group-hover:scale-110" />
            <Code2 className="w-12 h-12 text-secondary mb-6 relative z-10" />
            <h3 className="text-2xl font-display font-bold text-white mb-4 relative z-10">Client-Side Mods</h3>
            <p className="text-muted-foreground font-mono text-sm leading-relaxed relative z-10">Inject your own CSS themes and JS plugins safely. Completely modular architecture that won't break on updates.</p>
          </div>
        </div>
        <div className="text-center mt-16">
          <Link href="/features" className="inline-flex items-center gap-2 text-primary font-mono tracking-widest uppercase hover:text-glow-red transition-all duration-300 group">
            View all features <Zap className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
