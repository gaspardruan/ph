import { ChevronDown } from "@/components/SVGIcon";
import {
  offset,
  safePolygon,
  useFloating,
  useHover,
  useInteractions,
} from "@floating-ui/react";
import clsx from "clsx";
import Link from "next/link";
import { PropsWithChildren, useState } from "react";

const className = clsx(
  "flex items-center justify-center",
  "rounded px-2 py-1.5",
  "fill-nord-neutral dark:fill-nord-neutral-dark",
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
  const hover = useHover(context, {
    handleClose: safePolygon(),
  });
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  return (
    <>
      <button
        ref={refs.setReference}
        {...getReferenceProps()}
        className={className}
      >
        <span className="text-sm">{text}</span>
        <div>
          <ChevronDown />
        </div>
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
