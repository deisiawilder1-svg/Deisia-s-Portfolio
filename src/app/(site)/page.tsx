import Link from "next/link";
import { Metadata } from "next";
import ProfileSection from "@/components/Home/ProfileSection";
import JourneySection from "@/components/Home/JourneySection";
import ProjectsSection from "@/components/Home/ProjectsSection";

export const metadata: Metadata = {
  title: "Deisia | Web Developer in Progress",
  description:
    "Meet Deisia, follow her journey into web development, and explore what she is learning.",
};

export default function Home() {
  return (
    <main>
      <section id="home" className="portfolio-hero relative isolate flex min-h-[min(850px,100svh)] scroll-mt-20 items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8">
        <div aria-hidden="true" className="hero-sun absolute left-1/2 top-[42%] -z-10 aspect-square w-[min(74vw,600px)] -translate-x-1/2 -translate-y-1/2 rounded-full" />
        <div aria-hidden="true" className="hero-ring absolute left-1/2 top-[42%] -z-10 aspect-square w-[min(90vw,810px)] -translate-x-1/2 -translate-y-1/2 rounded-full" />
        <div className="mx-auto w-full max-w-5xl text-center">
          <span className="game-eyebrow mb-7 inline-flex items-center gap-3 border border-cyan-100/20 bg-[#080b1d]/75 px-4 py-2.5 text-[9px] uppercase text-cyan-100 sm:text-[11px]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_14px_#67e8f9]" />
            A little corner of the internet
          </span>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-white/65">Welcome to</p>
          <h1 className="game-title mx-auto text-4xl font-black leading-[1.5] text-white sm:text-6xl md:text-7xl">
            Deisia&apos;s <span className="block bg-linear-to-r from-cyan-200 via-white to-pink-200 bg-clip-text text-transparent">Website</span>
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-slate-200/80 sm:text-lg">
            New to coding, big on dedication. Follow along as I turn curiosity into code, one project at a time.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href="#journey" className="game-start-button game-eyebrow inline-flex min-h-14 items-center gap-3 border border-cyan-100/50 bg-linear-to-r from-indigo-600/90 via-violet-600/90 to-fuchsia-600/90 px-7 py-4 text-[10px] uppercase text-white transition hover:-translate-y-1 hover:border-cyan-100 sm:text-xs">
              Explore my journey <span aria-hidden="true">↓</span>
            </Link>
            <Link href="#about" className="inline-flex min-h-14 items-center border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white">A little about me</Link>
          </div>
          <div className="game-eyebrow mt-20 flex items-center justify-center gap-3 text-[9px] uppercase text-white/40">
            <span className="h-px w-10 bg-white/20" /> Scroll to explore <span className="h-px w-10 bg-white/20" />
          </div>
        </div>
      </section>

      <ProfileSection />

      <JourneySection />

      <ProjectsSection />

      <section id="game" className="px-5 pb-24 pt-10 sm:px-8 lg:pb-32">
        <div className="game-panel relative mx-auto max-w-6xl overflow-hidden border border-cyan-100/20 px-6 py-14 text-center sm:px-12 sm:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-50" style={{ backgroundImage: "linear-gradient(rgba(139, 159, 255, .05) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 159, 255, .05) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
          <div className="relative mx-auto max-w-2xl">
            <p className="game-eyebrow mb-5 text-[10px] uppercase text-pink-200">03 / Bonus level</p>
            <h2 className="game-title text-2xl leading-[1.7] text-white sm:text-4xl">How do you like the webpage?</h2>
            <p className="mt-5 text-base leading-7 text-slate-200/70">A little game is still under construction. In the meantime, take a look around and tell me what you think.</p>
            <Link href="#about" className="game-start-button game-eyebrow mt-8 inline-flex min-h-14 items-center gap-3 border border-cyan-100/45 bg-[#111531]/90 px-7 py-4 text-[10px] uppercase text-white transition hover:border-cyan-100 sm:text-xs">Meet Deisia <span aria-hidden="true">↑</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
