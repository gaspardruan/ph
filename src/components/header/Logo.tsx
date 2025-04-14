import Link from "next/link";
import Image from "next/image";
import { memo } from "react";

export const Logo = memo(function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 lg:gap-4">
      <Image
        alt="R logo"
        width={40}
        height={40}
        src="/R-black.png"
        className="inline  dark:invert"
      />
      {/* <span>Zhongqiu&rsquo;s Home</span> */}
    </Link>
  );
});
