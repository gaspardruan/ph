import { ChevronLeft, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

type ProjectItem = {
  id: string;
  title: string;
};

type MobileNavProps = {
  projects: ProjectItem[];
};

export default function MobileNav({ projects }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const [scope, setScope] = useState("");

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const title = scope ? "Project" : "Menu";

  return (
    <div className="flex md:hidden">
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded transition hover:bg-nord-secondary-deep/10"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <Menu />
      </button>

      {open && (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-[1px]"
          onClick={() => setOpen(false)}
          aria-label="Close menu overlay"
        />
      )}

      <nav
        className={[
          "fixed bottom-0 top-0 z-40 flex w-64 flex-col rounded-l-2xl border border-nord-neutral/10",
          "bg-nord-foreground/90 px-6 pb-8 pr-4 shadow-lg backdrop-blur",
          "transition-[right] duration-300 dark:border-nord-neutral-dark/10 dark:bg-nord-foreground-dark/90",
          open ? "right-0" : "-right-64",
        ].join(" ")}
      >
        <div className="flex h-16 items-center justify-between border-b border-nord-neutral/10 px-2 dark:border-nord-neutral-dark/10">
          <button
            type="button"
            className="flex items-center gap-2 rounded py-2 pr-2 font-semibold"
            onClick={() => setScope("")}
          >
            {scope && <ChevronLeft size={18} />}
            <span>{title}</span>
          </button>
          <button
            type="button"
            className="rounded p-2 transition hover:bg-nord-secondary-deep/10"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-5">
          {!scope ? (
            <button
              type="button"
              className="w-full rounded px-2 py-3 text-left font-semibold transition hover:bg-nord-secondary-deep/10"
              onClick={() => setScope("project")}
            >
              Project
            </button>
          ) : (
            <div className="flex flex-col gap-2">
              {projects.map((project) => (
                <a
                  key={project.id}
                  href={`/docs/project/${project.id}`}
                  className="rounded px-2 py-3 font-semibold transition hover:bg-nord-secondary-deep/10"
                  onClick={() => setOpen(false)}
                >
                  {project.title}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-center">
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
