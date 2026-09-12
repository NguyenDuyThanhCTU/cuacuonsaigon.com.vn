"use client";

import { useEffect, useState } from "react";

export const StickyTop = (divRef: any) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [height, setHeight] = useState(0);

  if (typeof window !== "undefined") {
    useEffect(() => {
      const handleScroll = () => {
        const position =
          window?.pageYOffset || document.documentElement.scrollTop;
        setScrollPosition(position);
      };

      window?.addEventListener("scroll", handleScroll);
      return () => {
        window?.removeEventListener("scroll", handleScroll);
      };
    }, []);
  }
  useEffect(() => {
    if (divRef.current) {
      setHeight(divRef.current.offsetHeight);
    }
  }, []);
  return { height, scrollPosition };
};
