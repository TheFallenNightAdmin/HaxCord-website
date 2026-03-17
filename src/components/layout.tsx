import { Link, useLocation } from "wouter";
import { Github, Menu, X, Terminal } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  const [location] = useLocation();
  const isActive = location === href;
  return (
    <Link href={href} onClick={onClick}
      className={`font-mono text-sm tracking-widest uppercase transition-all duration-300 px-3 py-2 rounded-md ${
        isActive ? "text-primary text-glow-red bg-primary/5" : "text-muted-foreground hover:text-white hover:bg-white/5"
      }`}
    >
      {children}
    </Link>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="fixed inset-0 pointer-events-none z-50 bg-noise opacity-50 mix-blend-overlay" />
      <header className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-xl border-b border-border shadow-lg shadow-black/50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Terminal className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
            <span className="font-display font-black text-2xl text-white tracking-widest group-hover:text-glow-white transition-all duration-300">
              HAX<span className="text-primary group-hover:text-glow-red transition-all duration-300">CORD</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/features">Features</NavLink>
            <NavLink href="/install">Install</NavLink>
            <NavLink href="/changelog">Changelog</NavLink>
            <NavLink href="/community">Community</NavLink>
            <div className="w-px h-6 bg-border mx-2" />
            <a href="https://github.com/TheFallenNightAdmin/haxcord" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-mono text-xs tracking-widest uppercase transition-all duration-300 rounded-md"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          </nav>
          <button className="md:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-3xl border-b border-border p-4 flex flex-col gap-2 shadow-2xl"
            >
              <NavLink href="/">Home</NavLink>
              <NavLink href="/features">Features</NavLink>
              <NavLink href="/install">Install</NavLink>
              <NavLink href="/changelog">Changelog</NavLink>
              <NavLink href="/community">Community</NavLink>
              <a href="https://github.com/TheFallenNightAdmin/haxcord" target="_blank" rel="noreferrer"
                className="mt-4 flex items-center justify-center gap-2 px-4 py-3 bg-white/5 border border-white/10 text-white font-mono text-sm tracking-widest uppercase rounded-md"
              >
                <Github className="w-5 h-5" /> View on GitHub
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <main className="flex-1 pt-20 flex flex-col relative z-10">{children}</main>
      <footer className="border-t border-border bg-black/80 py-12 mt-auto relative z-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="font-display font-black text-2xl text-white tracking-widest mb-2 opacity-80">HAX<span className="text-primary">CORD</span></div>
            <p className="text-muted-foreground font-mono text-sm">Open source. No telemetry. No ads.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 font-mono text-sm text-muted-foreground">
            <a href="https://github.com/TheFallenNightAdmin/haxcord" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a>
            <a href="https://github.com/TheFallenNightAdmin/haxcord/issues" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Report Bug</a>
            <a href="https://github.com/TheFallenNightAdmin/haxcord/blob/main/README.md" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Docs</a>
            <Link href="/changelog" className="hover:text-primary transition-colors">Changelog</Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 text-center md:text-left text-xs text-muted-foreground/40 font-mono">
          Not affiliated with Discord Inc. This is a client mod. Use at your own risk.
        </div>
      </footer>
    </div>
  );
}
