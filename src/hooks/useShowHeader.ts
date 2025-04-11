"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useEffectEvent } from "./useEffectEvent";

export const useShowHeader = () => {
  const path = usePathname();
  const [show, setShow] = useState(false);

  const onScroll = useEffectEvent(() => {
    if (show) {
      if (document.documentElement.scrollTop === 0) {
        setShow(false);
      }
      return;
    }
    setShow(true);
  });

  useEffect(() => {
    if (path !== "/") {
      return;
    }

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [path, onScroll]);

  return show;
};
