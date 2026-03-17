import { Link } from "wouter";
import { Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-4 text-center">
      <Terminal className="w-16 h-16 text-primary" />
      <h1 className="text-4xl font-bold text-white font-display">
        404 - Page Not Found
      </h1>
      <p className="text-muted-foreground max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 mt-4 font-mono text-sm uppercase transition-colors rounded-md bg-primary hover:bg-primary/80 text-primary-foreground"
      >
        Return Home
      </Link>
    </div>
  );
}
