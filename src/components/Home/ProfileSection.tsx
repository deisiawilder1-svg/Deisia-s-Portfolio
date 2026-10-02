"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const ProfileSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [motionReady, setMotionReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    setMotionReady(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="profile-heading"
      data-motion-ready={motionReady}
      className={`profile-section portfolio-section scroll-mt-24 px-5 py-24 sm:px-8 lg:py-32 ${isVisible ? "is-visible" : ""}`}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16 lg:gap-20">
        <div className="profile-photo-frame profile-photo-reveal relative mx-auto w-full max-w-[390px]">
          <div className="profile-photo relative flex aspect-[4/5] items-center justify-center overflow-hidden border border-cyan-100/20 bg-[#090d20]">
            <Image
              src="/images/deisia-headshot.png"
              alt="Deisia"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 390px"
              className="object-cover object-center"
            />
            <span aria-hidden="true" className="profile-corner corner-top-left" />
            <span aria-hidden="true" className="profile-corner corner-top-right" />
            <span aria-hidden="true" className="profile-corner corner-bottom-left" />
            <span aria-hidden="true" className="profile-corner corner-bottom-right" />
          </div>
          <div className="mt-3 flex items-center justify-between px-1">
            <span className="game-eyebrow text-[8px] uppercase tracking-[0.14em] text-white/35 sm:text-[9px]">Profile / 01</span>
            <span className="game-eyebrow flex items-center gap-2 text-[8px] uppercase tracking-[0.14em] text-cyan-100/70 sm:text-[9px]">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />
              Learning in progress
            </span>
          </div>
        </div>

        <div className="profile-copy-reveal">
          <p className="game-eyebrow mb-5 text-[9px] uppercase text-cyan-200 sm:text-[10px]">Profile / Meet the person behind the portfolio</p>
          <h2 id="profile-heading" className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Who&apos;s Deisia<span className="text-pink-200">?</span>
          </h2>
          <p className="mb-6 text-sm text-slate-200/65 sm:text-base">
            <span className="text-white/45">Pronounced:</span>{" "}
            <span className="font-medium text-cyan-100">Day-ja</span>
          </p>
          <p className="profile-bio-panel max-w-2xl text-base leading-8 text-slate-100/90 sm:text-lg">
            I&apos;m from Georgia and a veteran of the United States Air Force. I&apos;m curious, willing to learn, and have started a new journey into web development. Right now, I&apos;m developing my skills and discovering what I can create.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="profile-info-panel">
              <span className="game-eyebrow profile-info-label">From</span>
              <span className="profile-info-value">Georgia</span>
            </div>
            <div className="profile-info-panel">
              <span className="game-eyebrow profile-info-label">Service</span>
              <span className="profile-info-value">U.S. Air Force veteran</span>
            </div>
            <div className="profile-info-panel">
              <span className="game-eyebrow profile-info-label">Current focus</span>
              <span className="profile-info-value">Web development</span>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-3 text-xs text-slate-300/55 sm:text-sm">
            <span aria-hidden="true" className="h-px w-8 bg-violet-200/40" />
            Curious by nature. Always learning.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
