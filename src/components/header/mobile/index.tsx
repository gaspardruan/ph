import clsx from "clsx";
import { useSidebar } from "./useSideBar";
import { useSidebarStore } from "./useSidebarStore";
import { createPortal } from "react-dom";
import { SystemButtonGroup } from "../SystemButtonGroup";
import { LinkButton, NavButton } from "./NavButton";
import { docConfig } from "@/routes/doc-config";
import { toTitle } from "@/utils/title";
import { memo } from "react";

const ScopeList = () => {
  const scope = useSidebarStore((state) => state.scope);
  if (!scope) {
    return (
      <>
        <NavButton text="Software" />
        <NavButton text="Tests" />
        <LinkButton text="Blog" link="/blog" />
      </>
    );
  }

  const config = docConfig.find((item) => item.scope === scope);

  return (
    <>
      {config?.items.map((item) => (
        <LinkButton
          key={item}
          text={toTitle(item)}
          link={`/docs/${scope}/${item}`}
        />
      ))}
    </>
  );
};

export const MobileNav = memo(function MobileNav() {
  const { isOpen, setIsOpen, scope, setScope } = useSidebarStore();

  const { buttonRef, sidebarRef } = useSidebar();

  const title = toTitle(scope) || "Menu";

  const renderSidebarElement = () => {
    return (
      <nav
        ref={sidebarRef}
        className={clsx(
          "flex flex-col",
          "fixed top-0  bottom-0 w-60 pr-4 pl-6",
          isOpen ? "right-0" : "-right-60",
          "transition-[right] duration-300",
          "rounded-l-2xl",
          "text-nord-neutral dark:text-nord-neutral-dark",
          "bg-gradient-to-b from-nord-foreground/[.64] to-nord-foreground/80 dark:from-nord-foreground-dark/[.64] dark:to-nord-foreground-dark/80",
          "backdrop-blur",
          "border border-nord-neutral/10 dark:border-nord-neutral-dark/10",
          "shadow shadow-nord-background dark:shadow-nord-background-dark"
        )}
      >
        <div className="flex h-16 px-2 items-center justify-between border-b border-nord-neutral/10  dark:border-nord-neutral-dark/10">
          <div className="flex items-center gap-2" onClick={() => setScope("")}>
            {scope && (
              <button className="material-symbols-outlined">
                chevron_left
              </button>
            )}
            <span>{title}</span>
          </div>
          <button
            className="material-symbols-outlined"
            onClick={() => setIsOpen(false)}
          >
            close
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className={clsx("flex flex-col gap-6", "pl-2 pr-3 pt-5 pb-2")}>
            <ScopeList />
          </div>
        </div>
        <div className="flex pb-8 justify-center">
          <SystemButtonGroup />
        </div>
      </nav>
    );
  };

  return (
    <div className="flex md:hidden">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(true)}
        className="flex text-nord-neutral dark:text-nord-neutral-dark"
      >
        <div className="material-symbols-outlined">Menu</div>
      </button>
      {typeof window !== "undefined"
        ? createPortal(renderSidebarElement(), document.body)
        : renderSidebarElement()}
    </div>
  );
});
