import Image from "next/image";

type Project = {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  previewImage: string | null;
  githubUrl: string;
  demoUrl: string;
  isPlaceholder: boolean;
};

// Replace this placeholder with real project details when they are ready.
// Add more objects to this array to display more project cards.
const projects: Project[] = [
  {
    id: "project-placeholder-1",
    name: "Add project name",
    description: "Add a short description of what this project does.",
    technologies: ["Add technologies"],
    previewImage: null,
    githubUrl: "",
    demoUrl: "",
    isPlaceholder: true,
  },
];

function ProjectLink({ label, href }: { label: string; href: string }) {
  if (!href) {
    return (
      <span className="project-action project-action-disabled" aria-disabled="true">
        {label}
      </span>
    );
  }

  return (
    <a className="project-action" href={href} target="_blank" rel="noreferrer">
      {label}<span aria-hidden="true"> ↗</span>
    </a>
  );
}

const ProjectsSection = () => (
  <section
    id="projects"
    aria-labelledby="projects-heading"
    className="projects-section scroll-mt-20 px-5 py-24 sm:px-8 lg:py-32"
  >
    <div className="mx-auto max-w-6xl">
      <header className="mb-12 max-w-2xl sm:mb-14">
        <p className="game-eyebrow mb-4 text-[9px] uppercase text-cyan-200 sm:text-[10px]">
          Project select / 01
        </p>
        <h2 id="projects-heading" className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Choose a project<span className="text-pink-200">.</span>
        </h2>
        <p className="mt-5 text-base leading-7 text-slate-200/70 sm:text-lg">
          This is where I&apos;ll share projects as they&apos;re ready to explore.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className={`project-card group relative overflow-hidden border border-white/10 bg-[#0b0e20]/85 p-4 sm:p-5 ${projects.length === 1 ? "project-card-featured" : ""}`}
          >
            <div className="project-preview relative mb-5 aspect-[16/9] overflow-hidden border border-white/10">
              {project.previewImage ? (
                <Image
                  src={project.previewImage}
                  alt={`${project.name} preview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              ) : (
                <div className="project-preview-placeholder absolute inset-0 flex flex-col items-center justify-center gap-3 p-5 text-center">
                  <span className="project-preview-window" aria-hidden="true">
                    <span /><span /><span />
                  </span>
                  <span className="game-eyebrow text-[9px] uppercase tracking-[0.16em] text-cyan-100/75">
                    Add project screenshot
                  </span>
                  <span className="text-xs text-slate-300/45">Preview placeholder</span>
                </div>
              )}
              <span className="project-number game-eyebrow absolute left-3 top-3 px-2.5 py-1.5 text-[8px] uppercase">
                Mission {String(index + 1).padStart(2, "0")}
              </span>
              {project.isPlaceholder && (
                <span className="project-placeholder-label game-eyebrow absolute bottom-3 right-3 px-2.5 py-1.5 text-[8px] uppercase">
                  Placeholder
                </span>
              )}
            </div>

            <div className="project-details">
              <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="game-eyebrow mb-2 text-[8px] uppercase text-white/40">Project {String(index + 1).padStart(2, "0")}</p>
                <h3 className="text-xl font-semibold text-white sm:text-2xl">{project.name}</h3>
              </div>
              <span className="project-select-indicator game-eyebrow inline-flex items-center gap-2 text-[8px] uppercase text-cyan-100/70">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-200" />
                {project.isPlaceholder ? "Details to come" : "View project"}
              </span>
              </div>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-200/65 sm:text-base">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                {project.technologies.map((technology) => (
                  <span key={technology} className="project-tech-tag">{technology}</span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3 border-t border-white/10 pt-4">
                <ProjectLink label={project.isPlaceholder ? "Add GitHub link" : "GitHub"} href={project.githubUrl} />
                <ProjectLink label={project.isPlaceholder ? "Add demo link" : "Live demo"} href={project.demoUrl} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
