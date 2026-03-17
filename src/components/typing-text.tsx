import { useState, useEffect } from "react";

export function TypingText({ text, delay = 50 }: { text: string; delay?: number }) {
  const [content, setContent] = useState("");
  useEffect(() => {
    setContent("");
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) { setContent((prev) => prev + text.charAt(i)); i++; }
      else clearInterval(timer);
    }, delay);
    return () => clearInterval(timer);
  }, [text, delay]);
  return (
    <span className="inline-flex items-center">
      {content}
      <span className="inline-block w-2.5 h-[1.1em] bg-primary ml-1.5 animate-pulse" />
    </span>
  );
}
