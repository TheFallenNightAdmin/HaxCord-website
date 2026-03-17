import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function TerminalBlock({ lines, directory = "~/haxcord" }: {
  lines: { type: "cmd" | "out" | "comment", text: string }[];
  directory?: string;
}) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    const cmds = lines.filter(l => l.type === 'cmd').map(l => l.text).join('\n');
    navigator.clipboard.writeText(cmds);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="rounded-xl border border-border bg-[#050505] font-mono text-sm shadow-2xl shadow-primary/5 overflow-hidden w-full transition-all duration-300 hover:border-primary/30">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-white/[0.02]">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-xs text-muted-foreground tracking-wider font-bold">{directory}</div>
        <button onClick={handleCopy} className="text-muted-foreground hover:text-primary transition-colors focus:outline-none">
          {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <div className="p-6 space-y-2 overflow-x-auto text-left">
        {lines.map((line, i) => (
          <div key={i} className={`whitespace-pre ${line.type === 'comment' ? 'text-muted-foreground/70' : ''} ${line.type === 'cmd' ? 'text-white' : ''} ${line.type === 'out' ? 'text-secondary/80' : ''}`}>
            {line.type === 'cmd' && <span className="mr-3 text-primary select-none">$</span>}
            {line.type === 'comment' && <span className="mr-3 text-muted-foreground/50 select-none">#</span>}
            {line.type === 'out' && <span className="mr-3 text-secondary/50 select-none">{">"}</span>}
            {line.text}
          </div>
        ))}
      </div>
    </div>
  );
}
