import { Crepe } from "@milkdown/crepe";
import clsx from "clsx";
import { useLayoutEffect, useRef } from "react";
type HomeEditorProps = {
  value: string;
};

export const HomeEditor = ({ value }: HomeEditorProps) => {
  const divRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!divRef.current) return;

    const crepe = new Crepe({
      root: divRef.current,
      defaultValue: value,
      features: {
        [Crepe.Feature.CodeMirror]: false,
        [Crepe.Feature.Latex]: false,
        [Crepe.Feature.BlockEdit]: false,
        [Crepe.Feature.Toolbar]: false,
      },
    });

    crepe.setReadonly(true);
    crepe.create();

    return () => {
      crepe.destroy();
    };
  }, [value]);

  return (
    <div
      ref={divRef}
      className={clsx(
        "crepe",
        "rounded-2xl border border-nord-outline dark:border-nord-outline-dark",
        "shadow",
        "overflow-hidden"
      )}
    ></div>
  );
};
