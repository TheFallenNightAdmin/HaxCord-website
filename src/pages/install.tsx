import { motion } from "framer-motion";
import { TerminalBlock } from "../components/terminal-block";
import { Download, Terminal } from "lucide-react";

export default function Install() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-4xl mx-auto px-4 py-24">
      <div className="text-center mb-20">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6 animate-pulse">
          <Download className="w-10 h-10" />
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">Installation <span className="text-primary text-glow-red">Guide</span></h1>
        <p className="text-muted-foreground font-mono text-lg">Inject HaxCord directly into your Discord client. Works on Windows, macOS, and Linux.</p>
      </div>
      <div className="space-y-16">
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-border font-display font-bold text-primary">01</div>
            <h2 className="text-2xl font-display font-bold text-white">Clone Repository</h2>
          </div>
          <TerminalBlock lines={[
            { type: "comment", text: "Clone the latest version from GitHub" },
            { type: "cmd", text: "git clone https://github.com/TheFallenNightAdmin/haxcord" },
            { type: "cmd", text: "cd haxcord" }
          ]} />
        </section>
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-border font-display font-bold text-primary">02</div>
            <h2 className="text-2xl font-display font-bold text-white">Install Dependencies</h2>
          </div>
          <TerminalBlock lines={[
            { type: "comment", text: "Install required packages via npm" },
            { type: "cmd", text: "npm install" },
            { type: "out", text: "added 42 packages, and audited 43 packages in 2s" },
            { type: "out", text: "found 0 vulnerabilities" }
          ]} />
        </section>
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 border border-primary/50 font-display font-bold text-primary box-glow-red">03</div>
            <h2 className="text-2xl font-display font-bold text-white">Inject into Discord</h2>
          </div>
          <TerminalBlock lines={[
            { type: "comment", text: "Run the injection script (Ensure Discord is closed)" },
            { type: "cmd", text: "npm run inject" },
            { type: "out", text: "[HaxCord] Searching for Discord installations..." },
            { type: "out", text: "[HaxCord] Found Discord at: C:\\Users\\User\\AppData\\Local\\Discord" },
            { type: "out", text: "[HaxCord] Backing up original app.asar..." },
            { type: "out", text: "[HaxCord] Injecting HaxCord core..." },
            { type: "out", text: "[HaxCord] Injected successfully! ✨" },
            { type: "out", text: "[HaxCord] Restart Discord to finish." }
          ]} />
        </section>
        <section className="pt-8 border-t border-border mt-16">
          <div className="flex items-center gap-3 text-muted-foreground mb-6">
            <Terminal className="w-5 h-5 text-secondary" />
            <h3 className="text-xl font-display font-bold text-white">How to Uninstall</h3>
          </div>
          <p className="font-mono text-sm text-muted-foreground mb-4">If you want to revert to the vanilla Discord client, the uninjector restores your backup instantly.</p>
          <TerminalBlock lines={[
            { type: "comment", text: "Removes HaxCord and restores original Discord state" },
            { type: "cmd", text: "npm run uninject" }
          ]} />
        </section>
      </div>
    </motion.div>
  );
}
