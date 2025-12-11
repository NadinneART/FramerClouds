// src/Components/Clouds/MidClouds.jsx
import React from "react";
import { Cloud } from "@react-three/drei";

/* Mid-plane palette */
const MID_WHITE_BASE = "#16b0e8ff";
const MID_BLUE_SHADOW  = "#9ec1e6";

export function MidClouds({
  position = [0, 0, 0],
  scale = [1, 1, 1],
  opacity = 0.5,
  speed = 1,
}) {
  return (
    <group position={position} scale={scale}>
      {/* Main distant wall */}
      <Cloud
        seed={90}
        segments={150}
        bounds={[26, 6, 3]}
        volume={22}
        opacity={0.9 * opacity}
        speed={0.1 * speed}
        color={MID_WHITE_BASE}
        fade={80}
        position={[10, -1, 1]}
      />

      {/* Higher back layer */}
      <Cloud
        seed={90}
        segments={150}
        bounds={[24, 5, 8]}
        volume={22}
        opacity={0 * opacity}
        speed={0.5 * speed}
        color={MID_BLUE_SHADOW}
        fade={0}
        position={[3, -1, 2]}
      />
    </group>
  );
}