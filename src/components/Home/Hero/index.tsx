import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[min(900px,100svh)] scroll-mt-20 items-center overflow-hidden pb-16 pt-32 sm:pt-36 lg:pt-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="space-orbit absolute left-1/2 top-[46%] aspect-square w-[min(82vw,740px)] -translate-x-1/2 -translate-y-1/2 rounded-full" />
        <div className="absolute left-1/2 top-[46%] aspect-square w-[min(64vw,570px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/10" />
        <div className="absolute left-[18%] top-[31%] h-2 w-2 rounded-full bg-cyan-100 shadow-[0_0_18px_5px_rgba(103,232,249,0.45)]" />
        <div className="absolute right-[19%] top-[62%] h-1.5 w-1.5 rounded-full bg-pink-200 shadow-[0_0_18px_5px_rgba(244,114,182,0.45)]" />
        <div className="absolute right-[30%] top-[22%] h-1 w-1 rounded-full bg-white shadow-[0_0_14px_4px_rgba(255,255,255,0.4)]" />
        <div className="absolute bottom-[19%] left-[31%] h-1 w-1 rounded-full bg-violet-200 shadow-[0_0_16px_4px_rgba(196,181,253,0.45)]" />
        <div className="absolute left-1/2 top-[46%] h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_35%_30%,#c6f5ff_0%,#6c91f5_18%,#6d4acb_48%,#241848_72%,transparent_74%)] opacity-80 blur-[1px] sm:h-44 sm:w-44" />
        <div className="absolute left-1/2 top-[46%] h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/15 blur-3xl sm:h-72 sm:w-72" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1000px] px-5 text-center sm:px-8">
        <div className="game-eyebrow mb-7 inline-flex items-center gap-3 rounded-sm border border-cyan-200/25 bg-slate-950/55 px-4 py-2 text-[10px] font-bold uppercase text-cyan-100 sm:text-xs">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />
          Personal universe // press start
        </div>

        <p className="game-eyebrow mb-3 text-xs font-bold uppercase text-pink-200 sm:text-sm">
          Welcome to
        </p>
        <h1 className="game-title mx-auto mb-6 max-w-5xl text-4xl font-black leading-[1.16] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          Deisia&apos;s
          <span className="mt-2 block bg-linear-to-r from-cyan-200 via-white to-pink-200 bg-clip-text text-transparent">
            Website
          </span>
        </h1>
        <p className="mx-auto mb-9 max-w-xl text-base leading-7 text-slate-200/85 sm:text-lg sm:leading-8">
          A developer&apos;s universe in progress. Come explore how I got here,
          what I&apos;m learning, and what I&apos;m building.
        </p>

        <Link
          href="#features"
          className="game-start-button game-eyebrow group inline-flex min-h-14 items-center justify-center gap-3 rounded-sm border border-cyan-200/55 bg-linear-to-r from-indigo-600/90 via-violet-600/90 to-fuchsia-600/90 px-7 py-4 text-xs font-bold uppercase text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200 sm:text-sm"
        >
          <span aria-hidden="true" className="text-cyan-100">▶</span>
          Enter the universe
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
        </Link>

        <Link
          href="#features"
          className="game-eyebrow mx-auto mt-12 flex w-fit items-center gap-2 text-[10px] uppercase text-white/55 transition hover:text-cyan-100"
        >
          <span className="animate-bounce" aria-hidden="true">↓</span>
          Scroll to explore
        </Link>
      </div>
    </section>
  );
};

export default Hero;
