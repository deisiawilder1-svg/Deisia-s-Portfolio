import Link from "next/link";

const Footer = () => (
  <footer className="border-t border-white/10 px-5 py-8 sm:px-8">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
      <Link href="/" className="game-eyebrow text-xs font-bold uppercase tracking-[0.16em] text-white/80">
        Deisia<span className="text-cyan-200">.dev</span>
      </Link>
      <p className="text-xs text-slate-300/45">A work in progress, made with curiosity and care.</p>
      <Link href="/#home" className="text-xs text-slate-300/55 transition hover:text-cyan-100">Back to the top ↑</Link>
    </div>
  </footer>
);

export default Footer;
