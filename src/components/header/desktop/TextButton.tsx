import {
  offset,
  safePolygon,
  useFloating,
  useHover,
  useInteractions,
} from "@floating-ui/react";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { PropsWithChildren, useState } from "react";

const className = clsx(
  "flex items-center justify-center",
  "rounded px-2 py-1.5",
  "transition hover:bg-nord-secondary-deep/[0.12] active:bg-nord-secondary-deep/20"
);

type TextLinkButtonProps = {
  text: string;
  link: string;
};

export const TextLinkButon = ({ text, link }: TextLinkButtonProps) => {
  return (
    <Link className={className} href={link}>
      <span className="text-sm">{text}</span>
    </Link>
  );
};

type TextButtonProps = PropsWithChildren<{
  text: string;
}>;

export const TextButton = ({ text, children }: TextButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10)],
  });

  const params = useParams();
  const scope = params.scope;
  const active = scope === text.toLowerCase();

  const hover = useHover(context, {
    handleClose: safePolygon(),
  });
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  return (
    <>
      <button
        ref={refs.setReference}
        {...getReferenceProps()}
        className={clsx(className, active && "font-bold text-nord-primary")}
      >
        <span className="text-sm">{text}</span>
        <ChevronDown size={20} />
      </button>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          {children}
        </div>
      )}
    </>
  );
};
