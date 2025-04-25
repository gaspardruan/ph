import clsx from "clsx";
import Link from "next/link";
import { PropsWithChildren } from "react";

export type OutlineItem = {
  text: string;
  level: number;
  id: string;
};

type NestedDivProps = PropsWithChildren<{
  level: number;
}>;

const NestedDiv = ({ level, children }: NestedDivProps) => {
  if (level === 0) return <>{children}</>;

  return (
    <div className={clsx("truncate", level > 2 && "pl-4")}>
      <NestedDiv level={level - 1}>{children}</NestedDiv>
    </div>
  );
};

export const Outline = ({ items }: { items: OutlineItem[] }) => {
  return (
    <div>
      <div className="p-2 text-nord-primary">
        <small>On this page</small>
      </div>
      <div>
        {items
          .filter((item) => item.level === 2 || item.level === 3)
          .map((item) => {
            const url = `#${item.id}`;
            return (
              <Link key={item.id} href={url}>
                <div
                  className={clsx(
                    "p-2",
                    "text-sm font-light",
                    "cursor-pointer rounded-3xl",
                    "text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-50 hover:bg-gray-300 dark:hover:bg-gray-700"
                  )}
                >
                  <NestedDiv level={item.level}>{item.text}</NestedDiv>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};
