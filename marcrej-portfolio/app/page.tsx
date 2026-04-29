"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Project = {
  name: string;
  description: string;
  stack: string[];
  accent: string;
};

type SkillBlock = {
  title: string;
  items: string[];
  description: string;
};

const projects: Project[] = [
  {
    name: "SaludPlus",
    description:
      "Una plataforma pensada para ordenar flujos de atención, reducir fricción y sostener una experiencia visual serena desde el primer uso.",
    stack: ["React", "Next.js", "Tailwind", "APIs"],
    accent: "Digital care system",
  },
  {
    name: "Tuturno",
    description:
      "Un sistema de reservas con foco en claridad, ritmo y conversión, construido para que la navegación se sienta simple y confiable.",
    stack: ["TypeScript", "Forms", "Routing", "UI"],
    accent: "Booking flow",
  },
];

const skills: SkillBlock[] = [
  {
    title: "Backend",
    items: ["Node", "Docker", "AWS"],
    description:
      "Capas de servicio, despliegue y automatización con una mentalidad de producción.",
  },
  {
    title: "Frontend",
    items: ["React", "Next.js"],
    description:
      "Interfaces limpias, rápidas y bien compuestas para experiencias elegantes y funcionales.",
  },
  {
    title: "Compilers",
    items: ["ANTLR4", "PHP"],
    description:
      "Análisis sintáctico y herramientas de lenguaje con enfoque técnico y precisión.",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <main className="min-h-screen bg-[#F2F2E2] text-[#3A5A40]">
      <section
        ref={heroRef}
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16 sm:px-10"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(163,177,138,0.28),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(212,163,115,0.18),_transparent_34%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A3B18A]/40 to-transparent" />

        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 mx-auto max-w-5xl text-center"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.45em] text-[#3A5A40]/55">
            Full-stack Developer in progress
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.95] tracking-tight text-[#344E41] sm:text-7xl lg:text-8xl">
            Marcelo Juárez
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-pretty text-base leading-8 text-[#3A5A40] sm:text-lg">
            Construyo productos digitales con una estética sobria, un lenguaje
            visual orgánico y una atención especial al detalle.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-10 pt-4 sm:px-10 lg:px-12">
        <SectionHeading
          eyebrow="Selected work"
          title="Proyectos"
          description="Dos piezas con una lectura clara, suavidad visual y una presencia profesional contenida."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills"
          description="Bloques limpios, equilibrados y con una paleta de salvia para reforzar el carácter orgánico del conjunto."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {skills.map((skill) => (
            <article
              key={skill.title}
              className="rounded-[2rem] bg-[#A3B18A] px-7 py-8 text-[#F6F3EC] shadow-[0_20px_60px_rgba(58,90,64,0.12)]"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-white/70">
                Focus
              </p>
              <h3 className="font-[family-name:var(--font-display)] mt-4 text-3xl font-semibold tracking-tight">
                {skill.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/85">
                {skill.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/12 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-10 lg:px-12 lg:pb-32">
        <div className="grid gap-8 rounded-[2.5rem] bg-[#DAD7CD]/30 px-7 py-8 shadow-[0_24px_70px_rgba(58,90,64,0.08)] sm:px-10 sm:py-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.45em] text-[#3A5A40]/55">
              Artistic side
            </p>
            <h2 className="font-[family-name:var(--font-display)] mt-4 text-4xl font-semibold tracking-tight text-[#344E41] sm:text-5xl">
              Revista, guitarra y ritmo visual.
            </h2>
            <p className="mt-6 text-base leading-8 text-[#3A5A40]">
              Mi lado artístico aparece en la guitarra y también en la forma en
              que compongo una interfaz. Me interesa que una pieza digital tenga
              pausa, textura y una lectura casi editorial.
            </p>
          </div>

          <div className="grid gap-4 self-end sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[2rem] bg-[#F6F3EC] px-6 py-6 shadow-[0_16px_45px_rgba(58,90,64,0.06)]">
              <p className="text-xs uppercase tracking-[0.35em] text-[#3A5A40]/55">
                Guitar
              </p>
              <p className="mt-4 text-sm leading-7 text-[#3A5A40]">
                La guitarra me da criterio para el ritmo, el silencio y la
                composición de capas dentro de una interfaz.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#F6F3EC] px-6 py-6 shadow-[0_16px_45px_rgba(58,90,64,0.06)]">
              <p className="text-xs uppercase tracking-[0.35em] text-[#3A5A40]/55">
                TikTok
              </p>
              <p className="mt-4 text-sm leading-7 text-[#3A5A40]">
                También exploro contenido corto, donde la síntesis visual y la
                narrativa rápida son parte del proceso creativo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs uppercase tracking-[0.45em] text-[#3A5A40]/55">
        {eyebrow}
      </p>
      <h2 className="font-[family-name:var(--font-display)] mt-4 text-4xl font-semibold tracking-tight text-[#344E41] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[#3A5A40]">{description}</p>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
      className="group relative overflow-hidden rounded-[2.25rem] bg-[#DAD7CD]/30 px-7 py-8 shadow-[0_18px_55px_rgba(58,90,64,0.08)] sm:px-8 sm:py-10"
    >
      <div className="pointer-events-none absolute inset-0 rounded-[2.25rem] bg-[radial-gradient(circle_at_top_right,_rgba(163,177,138,0.32),_transparent_38%),radial-gradient(circle_at_bottom_left,_rgba(212,163,115,0.12),_transparent_38%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#3A5A40]/55">
              Project
            </p>
            <h3 className="font-[family-name:var(--font-display)] mt-4 text-3xl font-semibold tracking-tight text-[#344E41]">
              {project.name}
            </h3>
          </div>

          <span className="rounded-full bg-[#F6F3EC]/90 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[#3A5A40] shadow-[0_10px_25px_rgba(58,90,64,0.06)]">
            {project.accent}
          </span>
        </div>

        <p className="mt-6 max-w-xl text-sm leading-7 text-[#3A5A40]">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full bg-[#F6F3EC]/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[#3A5A40]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}