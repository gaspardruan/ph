import Link from "next/link";
import Image from "next/image";
import { memo } from "react";

export const Logo = memo(function Logo() {
  return (
    <Link href="/">
      <Image
        alt="R logo"
        width={40}
        height={40}
        src="/R-black.png"
        className="inline  dark:invert hover:hidden "
      />
    </Link>
  );
});
