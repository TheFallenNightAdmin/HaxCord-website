import { motion } from "framer-motion";

const logs = [
  {
    version: "v0.2.0",
    date: "15/03/2026",
    title: "Bug Fixes",
    changes: [
      "Fixed bare return in loader.js crashing Discord on startup",
      "Fixed session.setPreloads() call that doesn't exist in Electron",
      "Fixed preload never chaining Discord's original preload",
      "Fixed missing chunk.pop() in Webpack causing repeated crashes",
      "Fixed wrong path src/core/loader.js injected by Installer"
    ]
  },
  {
    version: "v0.1.0",
    date: "Initial Release",
    title: "Initial Release",
    changes: ["First public release of HaxCord"]
  }
];

export default function Changelog() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-4xl mx-auto px-4 py-24">
      <div className="mb-16">
        <div className="font-mono text-sm text-secondary tracking-widest uppercase mb-4">// version_history</div>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white">Update <span className="text-primary text-glow-red">Changelog</span></h1>
      </div>
      <div className="relative border-l-2 border-border/50 ml-4 md:ml-8 space-y-16 pb-12">
        {logs.map((log, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }} className="relative pl-8 md:pl-12">
            <div className={`absolute -left-[11px] top-1.5 w-5 h-5 rounded-full border-4 border-background ${i === 0 ? 'bg-primary box-glow-red' : 'bg-muted-foreground'}`} />
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-3">
              <span className={`font-mono font-bold tracking-widest ${i === 0 ? 'text-primary' : 'text-secondary'}`}>{log.version}</span>
              <span className="font-mono text-sm text-muted-foreground">// {log.date}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">{log.title}</h3>
            <ul className="space-y-4 bg-card/50 border border-border rounded-xl p-6 md:p-8">
              {log.changes.map((change, j) => (
                <li key={j} className="flex items-start gap-4 text-muted-foreground font-mono text-sm leading-relaxed">
                  <span className="text-primary mt-0.5 shrink-0">▹</span>
                  <span>{change}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
