import { motion } from "framer-motion";
import { Github, Bug, FileText, MessageCircle } from "lucide-react";

export default function Community() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-5xl mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <div className="font-mono text-sm text-secondary tracking-widest uppercase mb-4">// network.connect()</div>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Join The <span className="text-primary text-glow-red">Resistance</span></h1>
        <p className="text-muted-foreground font-mono text-lg max-w-2xl mx-auto">HaxCord is built by the community, for the community. Contribute to the source, report bugs, and help us build a better client.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <a href="https://github.com/TheFallenNightAdmin/haxcord" target="_blank" rel="noreferrer"
          className="bg-card border border-border p-10 rounded-2xl hover:border-white/50 hover:bg-white/5 transition-all duration-300 group flex flex-col items-center text-center"
        >
          <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Github className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-display font-bold text-white mb-3">GitHub Repository</h3>
          <p className="text-muted-foreground font-mono text-sm">Source code, core releases, and development tracking.</p>
        </a>
        <a href="https://discord.gg/W5Zda2DCu9" target="_blank" rel="noreferrer"
          className="bg-card border border-primary/30 p-10 rounded-2xl hover:border-primary/70 hover:bg-primary/5 transition-all duration-300 group flex flex-col items-center text-center"
        >
          <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <MessageCircle className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-2xl font-display font-bold text-white mb-3">Discord Server</h3>
          <p className="text-muted-foreground font-mono text-sm">Chat with the community, get help, and share your setups.</p>
        </a>
        <a href="https://github.com/TheFallenNightAdmin/haxcord/issues" target="_blank" rel="noreferrer"
          className="bg-card border border-border p-10 rounded-2xl hover:border-primary/50 hover:bg-primary/5 hover:box-glow-red transition-all duration-300 group flex flex-col items-center text-center"
        >
          <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Bug className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-2xl font-display font-bold text-white mb-3">Bug Reports</h3>
          <p className="text-muted-foreground font-mono text-sm">Found a glitch or injection failure? Report it here.</p>
        </a>
      </div>
      <div className="bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
        <div className="relative z-10 text-center md:text-left">
          <h3 className="text-3xl font-display font-bold text-white mb-2">Developer Docs</h3>
          <p className="text-muted-foreground font-mono">Learn how to write custom plugins and CSS themes.</p>
        </div>
        <a href="https://github.com/TheFallenNightAdmin/haxcord/blob/main/README.md" target="_blank" rel="noreferrer"
          className="relative z-10 px-8 py-4 bg-primary text-white font-display font-bold tracking-widest uppercase hover:bg-primary/80 box-glow-red transition-all duration-300 flex items-center gap-3 whitespace-nowrap"
        >
          <FileText className="w-5 h-5" /> Read Docs
        </a>
      </div>
    </motion.div>
  );
}
