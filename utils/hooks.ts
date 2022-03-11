import { useState, useEffect, useLayoutEffect, RefObject } from "react";

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

interface UseIntersectionObserverArgs extends IntersectionObserverInit {
  freezeOnceVisible?: boolean
}

export const useIntersectionObserver: (
  elementRef: RefObject<Element>,
  args: UseIntersectionObserverArgs,
) => IntersectionObserverEntry | undefined = (elementRef, { freezeOnceVisible, root, rootMargin, threshold }) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>()

  const frozen = entry?.isIntersecting && freezeOnceVisible

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry)
  }

  useEffect(() => {
    const node = elementRef?.current // DOM Ref
    const hasIOSupport = !!window.IntersectionObserver

    if (!hasIOSupport || frozen || !node) return

    const observerParams = { threshold, root, rootMargin }
    const observer = new IntersectionObserver(updateEntry, observerParams)

    observer.observe(node)

    return () => observer.disconnect()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef, JSON.stringify(threshold), root, rootMargin, frozen])

  return entry
}

// hook to detect when an element becomes visible on screen. 
export const useReveal = (elementRef: RefObject<Element>, threshold = 0.5) => {
  const entry = useIntersectionObserver(elementRef, { threshold });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!entry || visible) return;
    if (visible !== entry.isIntersecting) {
      setVisible(entry.isIntersecting);
    }
  }, [entry, visible])

  return { visible };
}
