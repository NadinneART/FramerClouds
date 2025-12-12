// src/Components/Clouds/ForegroundDetailClouds.jsx
import React from "react";
import { Cloud } from "@react-three/drei";

/* Detail palette (reuse foreground language) */
const DETAIL_WHITE = "#FEFEFF";
const DETAIL_BLUE  = "#80B6E1";

export function ForegroundDetailClouds({
  position = [0, 0, 0],
  scale = [1, 1, 1],
  opacity = 1,
  speed = 1,
}) {
  return (
    <group position={position} scale={scale}>
      {/* Small puffs – left side */}
      <Cloud
        seed={201}
        segments={40}
        bounds={[4.5, 1.2, 2.5]}
        volume={1.6}
        opacity={0.85 * opacity}
        speed={0.04 * speed}
        color={DETAIL_WHITE}
        fade={40}
        position={[-6.5, -2.2, -4]}
      />

      <Cloud
        seed={202}
        segments={45}
        bounds={[5.0, 1.4, 2.8]}
        volume={1.8}
        opacity={0.8 * opacity}
        speed={0.045 * speed}
        color={DETAIL_BLUE}
        fade={45}
        position={[-3.8, -2.4, -4.5]}
      />

      {/* Center small details */}
      <Cloud
        seed={203}
        segments={50}
        bounds={[6.0, 1.6, 3.0]}
        volume={2.0}
        opacity={0.9 * opacity}
        speed={0.035 * speed}
        color={DETAIL_WHITE}
        fade={50}
        position={[0.5, -2.6, -5]}
      />

      {/* Right side cluster (slightly more density) */}
      <Cloud
        seed={204}
        segments={55}
        bounds={[6.5, 1.8, 3.2]}
        volume={2.2}
        opacity={0.85 * opacity}
        speed={0.04 * speed}
        color={DETAIL_BLUE}
        fade={55}
        position={[4.2, -2.5, -5.5]}
      />

      <Cloud
        seed={205}
        segments={45}
        bounds={[4.8, 1.3, 2.6]}
        volume={1.5}
        opacity={0.75 * opacity}
        speed={0.05 * speed}
        color={DETAIL_WHITE}
        fade={60}
        position={[6.8, -2.3, -6]}
      />
    </group>
  );
}