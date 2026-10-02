"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  { number: "01", name: "HTML & CSS", note: "Building the structure and style" },
  { number: "02", name: "JavaScript", note: "Learning to bring ideas to life" },
  { number: "03", name: "React", note: "Exploring interactive web experiences" },
  { number: "04", name: "SQL", note: "Learning how to work with data" },
];

const JourneySection = () => {
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
      { threshold: 0.12 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="journey"
      aria-labelledby="journey-heading"
      data-motion-ready={motionReady}
      className={`journey-section scroll-mt-20 px-2 py-16 sm:px-4 sm:py-20 lg:py-24 ${isVisible ? "is-visible" : ""}`}
    >
      <div className="journey-paper-stack mx-auto max-w-[1720px]">
        <div className="journey-paper px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-14">
          <div aria-hidden="true" className="journey-paper-details" />
          <div className="journey-paper-content">
            <div className="mb-10 flex items-center justify-between gap-4 border-b border-white/15 pb-4 sm:mb-12">
              <span className="journey-kicker">Field notes / 01</span>
              <span className="journey-kicker flex items-center gap-2"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-cyan-200" /> Web development</span>
            </div>

            <header className="journey-intro max-w-3xl">
              <p className="journey-overline">A new path, one lesson at a time</p>
              <h2 id="journey-heading" className="journey-heading mt-3 text-3xl font-bold leading-tight sm:text-5xl">
                How Did We Get Here<span aria-hidden="true" className="text-pink-200">?</span>
              </h2>
              <p className="journey-story mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
                In 2026, I began lessons with VetBoss to learn the fundamentals of web development. I&apos;m building my skills step by step, turning curiosity into practice with each new tool I learn.
              </p>
            </header>

            <div className="journey-skills-heading mt-12 flex items-end justify-between gap-4 border-b border-white/15 pb-3 sm:mt-14">
              <div>
                <p className="journey-overline">Notes from the learning desk</p>
                <h3 className="journey-subheading mt-2 text-xl font-bold sm:text-2xl">Skills</h3>
              </div>
              <span aria-hidden="true" className="journey-stamp hidden sm:inline-flex">IN PROGRESS</span>
            </div>

            <div className="journey-skills-grid mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((skill) => (
                <article key={skill.number} className="journey-skill-card group relative p-5 transition duration-300 hover:-translate-y-1 sm:p-6">
                  <span aria-hidden="true" className="journey-skill-index">{skill.number}</span>
                  <span className="journey-skill-status absolute right-4 top-3">Learning</span>
                  <h4 className="journey-skill-name mt-7 text-lg font-bold">{skill.name}</h4>
                  <p className="journey-skill-note mt-2 text-sm leading-6">{skill.note}</p>
                  <span aria-hidden="true" className="journey-skill-mark absolute right-4 bottom-4 h-2 w-2 rounded-full" />
                </article>
              ))}
            </div>

            <footer className="mt-9 flex items-center justify-between gap-4 border-t border-white/15 pt-4">
              <p className="journey-footnote">Still learning. Still curious. More to come.</p>
              <span aria-hidden="true" className="journey-page-number">01</span>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
