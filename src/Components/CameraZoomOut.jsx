import React from "react";
import { useThree, useFrame } from "@react-three/fiber";

export default function CameraZoomOut({
  from = [0, 1.4, 6],
  to = [0, 1.4, 18],
  duration = 1.2,
}) {
  const { camera } = useThree();
  const t = React.useRef(0);

  // Set initial camera position once
  React.useEffect(() => {
    camera.position.set(from[0], from[1], from[2]);
    camera.updateProjectionMatrix();
  }, [camera, from]);

  useFrame((_, delta) => {
    if (t.current >= 1) return;

    t.current = Math.min(1, t.current + delta / duration);

    // Smoothstep easing (cinematic)
    const k = t.current * t.current * (3 - 2 * t.current);

    camera.position.set(
      from[0] + (to[0] - from[0]) * k,
      from[1] + (to[1] - from[1]) * k,
      from[2] + (to[2] - from[2]) * k
    );

    camera.updateProjectionMatrix();
  });

  return null;
}