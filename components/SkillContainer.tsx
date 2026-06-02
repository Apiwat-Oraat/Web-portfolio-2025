"use client";

import dynamic from "next/dynamic";
import {
  Blocks,
  Server,
  PanelsTopLeft,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useInView } from "react-intersection-observer";

import { AnimatedList } from "@/components/ui/animated-list";
import { cn } from "@/lib/utils";
import { useSectionReplay } from "./useSectionReplay";
import { useTheme } from "./ThemeProvider";

type StackIconProps = {
  name: string;
  variant?: "dark" | "light";
  className?: string;
};

const StackIcon = dynamic<StackIconProps>(
  () => import("tech-stack-icons").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <span className="size-5 rounded-full border border-white/10 bg-white/10" />
    ),
  }
);

type SkillGroup = {
  title: string;
  icon: LucideIcon;
  status: string;
  time: string;
  accent: string;
  iconClassName: string;
  skills: string[];
};

type TechIconConfig = {
  name?: string;
  custom?: "jwt" | "dbeaver" | "intellij";
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: PanelsTopLeft,
    status: "Primary",
    time: "Core",
    accent: "#2D7FF9",
    iconClassName: "text-white",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "MUI"],
  },
  {
    title: "Backend",
    icon: Server,
    status: "Building",
    time: "API",
    accent: "#3B82F6",
    iconClassName: "text-white",
    skills: ["Node.js", "JavaScript", "Express", "JWT", "Java", "PHP"],
  },
  {
    title: "Database",
    icon: Blocks,
    status: "Active",
    time: "Data",
    accent: "#1D4ED8",
    iconClassName: "text-white",
    skills: ["PostgreSQL", "MySQL", "Prisma"],
  },
  {
    title: "Tools",
    icon: Workflow,
    status: "Daily",
    time: "Flow",
    accent: "#0F2A66",
    iconClassName: "text-white",
    skills: ["Git", "GitHub", "GitLab", "Postman", "Docker", "Vercel", "DBeaver", "VS Code", "IntelliJ IDEA"],
  },
];

const techIcons: Record<string, TechIconConfig> = {
  React: {
    name: "react",
  },
  "Next.js": {
    name: "nextjs",
  },
  TypeScript: {
    name: "typescript",
  },
  "Tailwind CSS": {
    name: "tailwindcss",
  },
  MUI: {
    name: "materialui",
  },
  "Node.js": {
    name: "nodejs",
  },
  JavaScript: {
    name: "js",
  },
  Express: {
    name: "expressjs",
  },
  JWT: {
    custom: "jwt",
  },
  Java: {
    name: "java",
  },
  PHP: {
    name: "php",
  },
  PostgreSQL: {
    name: "postgresql",
  },
  MySQL: {
    name: "mysql",
  },
  Prisma: {
    name: "prisma",
  },
  Git: {
    name: "git",
  },
  GitHub: {
    name: "github",
  },
  GitLab: {
    name: "gitlab",
  },
  Postman: {
    name: "postman",
  },
  Docker: {
    name: "docker",
  },
  Vercel: {
    name: "vercel",
  },
  DBeaver: {
    custom: "dbeaver",
  },
  "VS Code": {
    name: "vscode",
  },
  "IntelliJ IDEA": {
    custom: "intellij",
  },
};

function TechIcon({ label }: { label: string }) {
  const icon = techIcons[label];
  const { theme } = useTheme();

  if (!icon) {
    return null;
  }

  return (
    <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-[#0D0D0D]/65 p-1 shadow-[0_0_16px_rgba(0,0,0,0.05)] dark:shadow-[0_0_16px_rgba(250,250,250,0.14)] ring-1 ring-black/5 dark:ring-white/15">
      {icon.name ? (
        <StackIcon
          name={icon.name}
          variant={theme === "dark" ? "dark" : "light"}
          className="size-5"
        />
      ) : icon.custom === "jwt" ? (
        <JwtIcon />
      ) : icon.custom === "dbeaver" ? (
        <DBeaverIcon />
      ) : icon.custom === "intellij" ? (
        <IntelliJIcon />
      ) : (
        null
      )}
    </span>
  );
}

function JwtIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className="size-5"
      aria-hidden="true"
    >
      <polygon fill="#546e7a" points="21.906,31.772 24.507,29.048 27.107,31.772 27.107,43 21.906,43" />
      <polygon fill="#f50057" points="17.737,29.058 21.442,28.383 21.945,32.115 15.345,41.199 11.138,38.141" />
      <polygon fill="#d500f9" points="15.962,24.409 19.355,26.041 17.569,29.356 6.89,32.825 5.283,27.879" />
      <polygon fill="#29b6f6" points="17.256,19.607 19.042,22.922 15.649,24.554 4.97,21.084 6.577,16.137" />
      <polygon fill="#00e5ff" points="21.126,16.482 20.623,20.214 16.918,19.539 10.318,10.455 14.526,7.398" />
      <polygon fill="#546e7a" points="26.094,16.228 23.493,18.952 20.893,16.228 20.893,5 26.094,5" />
      <polygon fill="#f50057" points="30.262,18.943 26.558,19.618 26.055,15.886 32.654,6.802 36.862,9.859" />
      <polygon fill="#d500f9" points="32.039,23.59 28.645,21.958 30.431,18.643 41.11,15.174 42.717,20.12" />
      <polygon fill="#29b6f6" points="30.744,28.393 28.958,25.078 32.351,23.447 43.03,26.916 41.423,31.863" />
      <polygon fill="#00e5ff" points="26.874,31.518 27.378,27.786 31.082,28.461 37.682,37.545 33.474,40.602" />
    </svg>
  );
}

function DBeaverIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className="size-5"
      aria-hidden="true"
    >
      <path fill="#382a24" d="M59.691 2.094h8.371c23.727 2.445 41 14.258 51.813 35.445 3.223 7.078 5.152 14.461 5.785 22.152v8.371c-2.445 23.727-14.258 41-35.445 51.813-7.078 3.223-14.461 5.152-22.153 5.785h-8.37c-23.727-2.445-41-14.258-51.817-35.445-3.223-7.078-5.148-14.461-5.781-22.153v-8.37c2.445-23.727 14.258-41 35.445-51.817C44.617 4.652 52 2.727 59.691 2.094Zm0 0" />
      <path fill="#e1d7cb" d="M111.383 63.383c-.266-6.586-1.988-12.742-5.168-18.461a13.7 13.7 0 0 0 .617-5.906c-.508-1.262-1.45-1.957-2.832-2.094a83.255 83.255 0 0 0-6.398-.121c.441-.2.933-.324 1.476-.371a43.914 43.914 0 0 0-10.34-10.953c-5.183-4.274-11.175-6.407-17.968-6.399-5.375.11-10.383 1.543-15.016 4.305-9.809 5.61-17.93 13.074-24.371 22.402-2 .23-4.012.352-6.028.367-10.464-1.644-13.5 2.38-9.109 12.063a158.88 158.88 0 0 1 4.922 10.832c-.223 2.95-.387 5.902-.492 8.86A248.742 248.742 0 0 0 11.69 93.66c-.164.328-.328.328-.492 0-8.031-15.05-9.797-30.805-5.293-47.262 6.77-20.222 20.27-33.722 40.492-40.492C68.355.13 87.883 4.641 104.984 19.446c15.66 15.304 21.774 33.808 18.34 55.507-2.812 14.043-9.582 25.734-20.308 35.078-.54.473-1.114.801-1.723.985-1.535-4.579-1.25-9.047.86-13.414a72.913 72.913 0 0 0 7.386-16.247c1.758-5.918 2.371-11.906 1.844-17.972Zm0 0" />
      <path fill="#fcfcfc" d="M88.738 25.477a43.914 43.914 0 0 1 10.34 10.953 4.507 4.507 0 0 0-1.476.37 42.537 42.537 0 0 0-12.309 2.708c-3.856.187-7.711.308-11.57.367-.98.398-1.965.441-2.953.125-2.778-.117-5.075-1.227-6.895-3.324-2.73-1.668-5.602-1.996-8.613-.985-2.13 1.461-2.91 3.47-2.34 6.032 1.308 2.324 1.676 4.785 1.11 7.386a9.527 9.527 0 0 0-.618 1.23A122.545 122.545 0 0 0 35.2 71.263a40.046 40.046 0 0 0-3.691 8.613c-.492 4.273 1.273 7.184 5.293 8.742a26.73 26.73 0 0 0 6.89 1.723c-1.968 1.496-4.187 1.988-6.644 1.476a35.732 35.732 0 0 1-8.984-2.832 250.424 250.424 0 0 0-8.247 16.246 165.412 165.412 0 0 1-4.8-5.66 1.046 1.046 0 0 1 0-.984 196.52 196.52 0 0 1 6.89-14.523c1.282 2.269 3.13 3.789 5.54 4.554-1.93-1.851-3.122-4.11-3.571-6.77a31.083 31.083 0 0 1 1.234-12.554c4.938-15.84 13.84-28.93 26.707-39.262 5.551-3.965 11.704-6.508 18.461-7.633 6.403-.437 12.559.586 18.461 3.079Zm0 0" />
      <path fill="#382a24" d="M70.77 40a89.404 89.404 0 0 0-10.094 4.309 100.73 100.73 0 0 0-6.524 5.293.607.607 0 0 1-.12-.493c.566-2.601.198-5.062-1.11-7.386-.57-2.563.21-4.57 2.34-6.032 3.011-1.011 5.883-.683 8.613.985 1.82 2.097 4.117 3.207 6.895 3.324Zm0 0" />
      <path fill="#372923" d="M97.602 36.8c2.132-.042 4.265 0 6.398.122 1.383.137 2.324.832 2.832 2.094a13.7 13.7 0 0 1-.617 5.906c-1.508 4.21-3.809 7.941-6.89 11.203-2.157 1.457-4.454 1.703-6.895.738-5.399-1.61-9.707-4.687-12.922-9.234-1.024-2.582-.328-4.594 2.094-6.027 1.23-.7 2.46-1.395 3.691-2.094A42.537 42.537 0 0 1 97.602 36.8Zm0 0" />
      <path fill="#887363" d="M85.293 39.508c-1.23.699-2.461 1.394-3.691 2.094-2.422 1.433-3.118 3.445-2.094 6.027 3.215 4.547 7.523 7.625 12.922 9.234 2.441.965 4.738.719 6.894-.738 3.082-3.262 5.383-6.992 6.89-11.203 3.18 5.719 4.903 11.875 5.169 18.46a55.431 55.431 0 0 1-4.797 11.079 33.985 33.985 0 0 1-3.078 3.816 51.437 51.437 0 0 0-3.445 2.586l-.247-.37a32.512 32.512 0 0 0 .86-12.677 9.456 9.456 0 0 0-1.23-3.199 43.144 43.144 0 0 1-4.184 15.754c-3.172 5.95-8.051 8.043-14.645 6.274-9.86-2.813-18.515-7.696-25.972-14.645a37.628 37.628 0 0 0 2.464 8.617c1.52 4.586 1.93 9.262 1.23 14.028a15.734 15.734 0 0 1-.984 2.957 117.498 117.498 0 0 0-8.617 16.984 51.671 51.671 0 0 0-1.968 6.644.94.94 0 0 1-.618.493c-10.257-3.22-19.039-8.715-26.336-16.493a250.509 250.509 0 0 1 8.247-16.246 35.732 35.732 0 0 0 8.984 2.832c2.457.512 4.676.02 6.644-1.476a26.73 26.73 0 0 1-6.89-1.723c-4.02-1.558-5.785-4.469-5.293-8.742a40.046 40.046 0 0 1 3.691-8.613A122.545 122.545 0 0 1 53.414 50.34c.176-.426.383-.836.617-1.23a.607.607 0 0 0 .121.492 100.73 100.73 0 0 1 6.524-5.293A89.404 89.404 0 0 1 70.77 40c.988.316 1.972.273 2.953-.125 3.863-.059 7.718-.184 11.57-.367Zm0 0" />
      <path fill="#fbfbfb" d="M102.031 83.078a88.223 88.223 0 0 1-5.785 16.738c-.52.973-1.3 1.63-2.34 1.97l-.246-.372a25.19 25.19 0 0 0 1.477-9.23 43.549 43.549 0 0 1-4.059 10.586c-1.89.777-3.82.898-5.785.367a7.794 7.794 0 0 1-1.356-2.582 55.403 55.403 0 0 1-1.105-9.356c7.805.528 14.203-2.18 19.2-8.12Zm0 0" />
    </svg>
  );
}

function IntelliJIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className="size-5"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="intellij-a" gradientUnits="userSpaceOnUse" x1="11.16" y1="59.21" x2="58.94" y2="56.78" gradientTransform="rotate(.104) scale(1.21905)">
          <stop offset=".09" stopColor="#fc801d" />
          <stop offset=".23" stopColor="#b07f61" />
          <stop offset=".41" stopColor="#577db3" />
          <stop offset=".53" stopColor="#1e7ce6" />
          <stop offset=".59" stopColor="#087cfa" />
        </linearGradient>
        <linearGradient id="intellij-b" gradientUnits="userSpaceOnUse" x1="89.05" y1="54.12" x2="73.12" y2="6.52" gradientTransform="rotate(.104) scale(1.21905)">
          <stop offset="0" stopColor="#fe2857" />
          <stop offset=".08" stopColor="#cb3979" />
          <stop offset=".16" stopColor="#9e4997" />
          <stop offset=".25" stopColor="#7557b2" />
          <stop offset=".34" stopColor="#5362c8" />
          <stop offset=".44" stopColor="#386cda" />
          <stop offset=".54" stopColor="#2373e8" />
          <stop offset=".66" stopColor="#1478f2" />
          <stop offset=".79" stopColor="#0b7bf8" />
          <stop offset="1" stopColor="#087cfa" />
        </linearGradient>
        <linearGradient id="intellij-c" gradientUnits="userSpaceOnUse" x1="18.72" y1="26.61" x2="78.8" y2="125.99" gradientTransform="rotate(.104) scale(1.21905)">
          <stop offset="0" stopColor="#fe2857" />
          <stop offset=".08" stopColor="#fe295f" />
          <stop offset=".21" stopColor="#ff2d76" />
          <stop offset=".3" stopColor="#ff318c" />
          <stop offset=".38" stopColor="#ea3896" />
          <stop offset=".55" stopColor="#b248ae" />
          <stop offset=".79" stopColor="#5a63d6" />
          <stop offset="1" stopColor="#087cfa" />
        </linearGradient>
      </defs>
      <path fill="url(#intellij-a)" d="M23.492 88.027 6.277 74.434 16.41 55.676l15.223 5.094Zm0 0" />
      <path fill="#087cfa" d="m121.988 36.68-2.105 67.78L74.8 122.517l-24.55-15.849Zm0 0" />
      <path fill="url(#intellij-b)" d="M121.988 36.68 99.68 58.44 71.035 23.297l14.14-15.899Zm0 0" />
      <path fill="url(#intellij-c)" d="m50.25 106.668-35.852 12.957 7.508-26.293 9.727-32.562L4.96 51.848 21.906 5.484l38.301 4.524L99.68 58.44Zm0 0" />
      <path fill="#000" d="M27.43 27.43h73.14v73.14H27.43Zm0 0" />
      <path fill="#fff" d="M36.547 86.746h27.43v4.574h-27.43Zm13.691-45.152v-4.996h-13.64v4.996h3.824v17.261h-3.824v5h13.64v-5h-3.816V41.594Zm13.078 22.648a10.802 10.802 0 0 1-5.351-1.219 12.299 12.299 0 0 1-3.559-2.875l3.766-4.207c.687.778 1.484 1.45 2.367 2a4.849 4.849 0 0 0 2.621.73 3.46 3.46 0 0 0 2.668-1.058 5.07 5.07 0 0 0 .977-3.449V36.57h6.093v17.86a12.384 12.384 0 0 1-.668 4.254 7.919 7.919 0 0 1-4.964 4.879 12.097 12.097 0 0 1-4.036.632" />
    </svg>
  );
}

function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-transparent py-1 pl-1 pr-2.5 text-[11px] font-medium text-zinc-600 dark:text-zinc-400 transition-colors duration-300 hover:border-zinc-400 dark:hover:border-[#FAFAFA]/35 hover:text-zinc-900 dark:hover:text-[#FAFAFA]">
      <TechIcon label={label} />
      {label}
    </span>
  );
}

function SkillNotificationCard({
  group,
}: {
  group: SkillGroup;
}) {
  const Icon = group.icon;
  return (
    <figure
      className={cn(
        "group/card relative mx-auto w-full cursor-pointer overflow-hidden rounded-2xl rounded-tl-md border border-white/50 dark:border-white/20 bg-white/30 dark:bg-white/5 p-3 text-zinc-900 dark:text-[#FAFAFA] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-2xl transition-all duration-300 hover:bg-white/40 dark:hover:bg-white/10 hover:border-white/70 dark:hover:border-white/30",
        "dark:[box-shadow:0_-20px_80px_-20px_rgba(250,250,250,0.12)_inset]",
        "before:absolute before:inset-y-[-20%] before:left-[-70%] before:w-1/2 before:rotate-12 before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.8),transparent)] dark:before:bg-[linear-gradient(90deg,transparent,rgba(250,250,250,0.42),transparent)] before:opacity-0 before:blur-sm before:transition-all before:duration-700 hover:before:left-[120%] hover:before:opacity-100"
      )}
    >
      <div className="relative z-10 flex flex-row items-start gap-3">
        <div
          className={cn(
            "flex size-9 shrink-0 items-center justify-center rounded-full border border-white/20 shadow-[0_0_12px_rgba(165,140,244,0.12)]",
            group.iconClassName
          )}
          style={{ backgroundColor: group.accent }}
        >
          <Icon size={16} />
        </div>

        <div className="min-w-0 flex-1 overflow-hidden">
          <figcaption className="flex flex-wrap items-center gap-x-2 gap-y-1 font-medium text-zinc-900 dark:text-[#FAFAFA]">
            <span className="text-sm">{group.title}</span>
            <span className="text-[11px] text-zinc-500">{group.time}</span>
            <span className="ml-auto rounded-full border border-black/10 dark:border-white/10 bg-transparent px-2 py-0.5 text-[10px] font-medium text-zinc-500 dark:text-zinc-400">
              {group.status}
            </span>
          </figcaption>

          <div className="mt-2 flex flex-wrap gap-1.5 pl-1">
            {group.skills.map((skill) => (
              <TechBadge key={skill} label={skill} />
            ))}
          </div>
        </div>
      </div>
    </figure>
  );
}

function SkillContainer() {
  const { replayKey, handleInViewChange } = useSectionReplay("Skills");
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: false,
    onChange: handleInViewChange,
  });
  const animatedGroups = [...skillGroups].reverse();

  return (
    <div ref={ref} className="relative mx-auto max-w-2xl text-zinc-900 dark:text-[#FAFAFA]">
      <div className="relative min-h-[820px] w-full overflow-visible p-1.5 md:min-h-[620px]">
        {inView && (
          <AnimatedList key={replayKey} delay={420} className="gap-3">
            {animatedGroups.map((group) => (
              <SkillNotificationCard key={group.title} group={group} />
            ))}
          </AnimatedList>
        )}
      </div>
    </div>
  );
}

export default SkillContainer;
