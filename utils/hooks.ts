import { useState, useEffect, useLayoutEffect } from "react";

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
}
