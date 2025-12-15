import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

export function RevealAfterFrames({ frames = 3, onReady }) {
  const count = useRef(0);
  const fired = useRef(false);

  useFrame(() => {
    if (fired.current) return;
    count.current += 1;

    if (count.current >= frames) {
      fired.current = true;
      onReady?.();
    }
  });

  // Reset if component remounts
  useEffect(() => {
    count.current = 0;
    fired.current = false;
  }, []);

  return null;
}