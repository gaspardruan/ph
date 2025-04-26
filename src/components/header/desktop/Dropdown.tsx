import { DocConfigItem } from "@/routes/doc-config";
import { toTitle } from "@/utils/title";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { usePathname } from "next/navigation";

type DropdownItemProps = {
  scope: string;
  item: string;
};

const DropdownItem = ({ scope, item }: DropdownItemProps) => {
  const pathname = usePathname();
  const url = `/docs/${scope}/${item}`;
  const active = pathname === url;

  return (
    <Link href={url}>
      <li
        className={clsx(
          "w-44 rounded py-2 px-4",
          "text-sm truncate",
          "transition hover:bg-nord-secondary-deep/12 active:bg-nord-secondary-deep/20",
          active &&
            "bg-nord-secondary-deep/20 hover:!bg-nord-secondary-deep/30 font-bold text-nord-primary"
        )}
      >
        {toTitle(item)}
      </li>
    </Link>
  );
};

export const Dropdown = ({ scope, items }: DocConfigItem) => {
  return (
    <div
      className={clsx(
        "rounded-2xl p-6",
        "bg-nord-foreground dark:bg-nord-foreground-dark",
        "border shadow border-nord-neutral/10 dark:border-nord-neutral-dark/10"
      )}
    >
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <DropdownItem key={item} scope={scope} item={item} />
        ))}
      </ul>
    </div>
  );
};
