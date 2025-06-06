import { useParams, usePathname } from "next/navigation";
import { useSidebarStore } from "./useSidebarStore";
import Link from "next/link";
import clsx from "clsx";
import { ChevronRight } from "lucide-react";

type NavButtonProps = {
  text: string;
};

export const NavButton = ({ text }: NavButtonProps) => {
  const setScope = useSidebarStore((state) => state.setScope);
  const params = useParams();
  const scope = params.scope;
  const lowerText = text.toLowerCase();

  return (
    <button
      onClick={() => setScope(lowerText)}
      className={clsx(
        "flex items-center justify-between",
        scope === lowerText && "font-bold text-nord-primary"
      )}
    >
      <span className="text-sm">{text}</span>
      <ChevronRight size={20} />
    </button>
  );
};

type LinkButtonProps = {
  text: string;
  link: string;
};

export const LinkButton = ({ text, link }: LinkButtonProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={link}
      className={clsx(
        "flex",
        pathname === link && "font-bold text-nord-primary"
      )}
    >
      <span className="text-sm">{text}</span>
    </Link>
  );
};
