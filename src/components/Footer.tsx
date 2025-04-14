import clsx from "clsx";

export const Footer = () => {
  return (
    <footer className="pt-6 pb-12 md:py-12 bg-gray-200 dark:bg-gray-700">
      <div
        className={clsx(
          "mx-8 md:mx-4 lg:mx-20 xl:mx-50 2xl:mx-auto 2xl:max-w-4xl",
          "flex flex-col gap-4 items-center md:flex-row"
        )}
      >
        <div
          className={clsx(
            "flex-1",
            "text-xs md:text-sm lg:text-base",
            "text-nord-neutral/[.80] dark:text-nord-neutral-dark/[.80]",
            "hover:text-nord-neutral dark:hover:text-nord-neutral-dark"
          )}
        >
          <a href="https://beian.miit.gov.cn/">鄂ICP备2021016577号-2</a>
        </div>
        <div
          className={clsx(
            "flex-1",
            "font-light text-xs md:text-sm lg:text-base",
            "text-center md:text-left",
            "text-nord-neutral-deep/40 dark:text-nord-neutral-deep-dark/40"
          )}
        >
          MIT Licensed | Copyright © 2025-present Gaspard Ruan
        </div>
      </div>
    </footer>
  );
};
