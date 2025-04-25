"use client";

import { useThemeStore } from "@/store/useThemeStore";
import { Crepe } from "@milkdown/crepe";
import { editorViewOptionsCtx } from "@milkdown/kit/core";
import { listener, listenerCtx } from "@milkdown/kit/plugin/listener";
import { outline } from "@milkdown/kit/utils";
import { eclipse } from "@uiw/codemirror-theme-eclipse";
import { useEffect, useRef, useState } from "react";
import { Outline, type OutlineItem } from "./Outline";
import clsx from "clsx";

type DocProps = {
  content: string;
};

export const Doc = ({ content }: DocProps) => {
  const [outlines, setOutlines] = useState<OutlineItem[]>([]);
  const darkMode = useThemeStore((state) => state.darkMode);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!divRef.current) return;

    const crepe = new Crepe({
      root: divRef.current,
      defaultValue: content,
      features: {
        [Crepe.Feature.BlockEdit]: false,
        [Crepe.Feature.Latex]: false,
        [Crepe.Feature.Toolbar]: false,
      },
      featureConfigs: {
        [Crepe.Feature.CodeMirror]: {
          theme: darkMode ? undefined : eclipse,
        },
      },
    });

    const editor = crepe.editor;
    editor
      .config((ctx) => {
        ctx.set(editorViewOptionsCtx, {
          attributes: {
            spellcheck: "false",
          },
          editable: () => false,
        });
        ctx.get(listenerCtx).mounted((ctx) => {
          setOutlines(outline()(ctx));
        });
      })
      .use(listener);

    crepe.setReadonly(true);
    crepe.create();

    return () => {
      crepe.destroy();
    };
  }, [content, darkMode]);

  return (
    <>
      <div className="crepe crepe-doc" ref={divRef} />
      <div
        className={clsx(
          "fixed top-50 right-16 bottom-32",
          "hidden xl:flex xl:w-60 flex-col 2xl:right-[calc(50vw-43rem)]",
          "overflow-y-auto styled-scrollbar"
        )}
      >
        <Outline items={outlines} />
      </div>
    </>
  );
};
