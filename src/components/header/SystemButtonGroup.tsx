import clsx from "clsx";
import { memo, PropsWithChildren } from "react";
import { Github } from "../SVGIcon";
import { useThemeStore } from "@/store/useThemeStore";

type SystemButtonItemProps = PropsWithChildren<{
  onClick?: () => void;
}>;

const SystemButtonItem = ({ children, onClick }: SystemButtonItemProps) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "flex h-8 w-8 items-center justify-center",
        "cursor-pointer rounded",
        "fill-nord-neutral dark:fill-nord-neutral-dark",
        "text-nord-neutral dark:text-nord-neutral-dark",
        "transition hover:bg-nord-secondary-deep/[0.12] active:bg-nord-secondary-deep/20"
      )}
    >
      {children}
    </div>
  );
};

export const SystemButtonGroup = memo(function SystemButtonGroup() {
  const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode);

  return (
    <div className="flex gap-6 pl-2 md:gap-2 lg:gap-4 lg:pl-6">
      <a href="https://github.com/gaspardruan" target="_blank" rel="noreferrer">
        <SystemButtonItem>
          <Github />
        </SystemButtonItem>
      </a>
      <SystemButtonItem onClick={() => toggleDarkMode()}>
        <div className="material-symbols-outlined">dark_mode</div>
      </SystemButtonItem>
    </div>
  );
});
