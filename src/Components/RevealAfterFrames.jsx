// src/Components/RevealAfterFrames.jsx
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

export function RevealAfterFrames({ frames = 12, onReady }) {
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

  useEffect(() => {
    count.current = 0;
    fired.current = false;
  }, []);

  return null;
}