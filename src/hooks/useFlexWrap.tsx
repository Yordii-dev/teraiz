import { useEffect, useRef, useState } from "react";

export function useFlexWrap<T extends HTMLElement>() {
  const containerRef = useRef<T | null>(null);
  const [isWrapped, setIsWrapped] = useState(false);

  useEffect(() => {
    const checkWrap = () => {
      const container = containerRef.current;
      if (!container || container.children.length < 2) return;

      const firstTop = container.children[0].getBoundingClientRect().top;

      for (let i = 1; i < container.children.length; i++) {
        const childTop = container.children[i].getBoundingClientRect().top;
        if (childTop !== firstTop) {
          setIsWrapped(true);
          return;
        }
      }

      setIsWrapped(false);
    };

    checkWrap();
    window.addEventListener("resize", checkWrap);
    return () => window.removeEventListener("resize", checkWrap);
  }, []);

  return { containerRef, isWrapped };
}
