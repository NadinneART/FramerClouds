// src/Components/Clouds/MidCloudsLeft.jsx
import React from "react";
import { Cloud } from "@react-three/drei";

/* Mid-plane palette */
const MID_WHITE_BASE = "#0fabe3";
const MID_BLUE_SHADOW  = "#9ec1e6";

export function MidCloudsLeft({
  position = [0, 0, 0],
  scale = [1, 1, 1],
  opacity = 0.5,
  speed = 1,
}) {
  return (
    <group position={position} scale={scale}>
      {/* Main distant wall */}
      <Cloud
        seed={40}
        segments={40}
        bounds={[26, 6, 8]}
        volume={22}
        opacity={0.5 * opacity}
        speed={0.02 * speed}
        color={MID_WHITE_BASE}
        fade={90}
        position={[-50, 1.8, 1]}
      />

      {/* Higher back layer */}
      <Cloud
        seed={41}
        segments={40}
        bounds={[24, 5, 8]}
        volume={18}
        opacity={0.6* opacity}
        speed={0.018 * speed}
        color={MID_BLUE_SHADOW}
        fade={0}
        position={[-50, 3.8, 1]}
      />
    </group>
  );
}