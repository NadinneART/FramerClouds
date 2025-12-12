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
      {/* =========================
          SHADOW BAND (behind)
          - slightly lower Y
          - more negative Z (further back)
          - a bit larger
         ========================= */}
      <Cloud
        seed={401}
        segments={70}
        bounds={[10.5, 2.3, 5.2]}
        volume={3.4}
        opacity={0.55 * opacity}
        speed={0.02 * speed}
        color={DETAIL_BLUE}
        fade={12}
        position={[-6.5, -4.2, -9.5]}
      />

      <Cloud
        seed={402}
        segments={80}
        bounds={[12.5, 2.6, 6.0]}
        volume={3.8}
        opacity={0.6 * opacity}
        speed={0.02 * speed}
        color={DETAIL_BLUE}
        fade={12}
        position={[-1.8, -4.4, -9.8]}
      />

      <Cloud
        seed={403}
        segments={90}
        bounds={[16.0, 3.0, 7.2]}
        volume={4.4}
        opacity={0.65 * opacity}
        speed={0.02 * speed}
        color={DETAIL_BLUE}
        fade={10}
        position={[5.5, -4.5, -10.2]}
      />

      {/* Right-heavy deeper shadow (helps match reference) */}
      <Cloud
        seed={404}
        segments={90}
        bounds={[18.0, 3.2, 7.8]}
        volume={4.8}
        opacity={0.55 * opacity}
        speed={0.02 * speed}
        color={DETAIL_BLUE}
        fade={10}
        position={[10.5, -4.7, -10.8]}
      />

      {/* =========================
          HIGHLIGHT BAND (front)
          - slightly higher Y
          - closer Z (less negative)
          - whiter
         ========================= */}
      <Cloud
        seed={501}
        segments={85}
        bounds={[11.5, 2.4, 5.2]}
        volume={3.6}
        opacity={0.85 * opacity}
        speed={0.03 * speed}
        color={DETAIL_WHITE}
        fade={14}
        position={[-7.2, -3.6, -7.8]}
      />

      <Cloud
        seed={502}
        segments={95}
        bounds={[13.5, 2.7, 6.0]}
        volume={4.0}
        opacity={0.9 * opacity}
        speed={0.03 * speed}
        color={DETAIL_WHITE}
        fade={14}
        position={[-2.0, -3.9, -8.0]}
      />

      <Cloud
        seed={503}
        segments={105}
        bounds={[16.5, 3.2, 7.0]}
        volume={4.6}
        opacity={0.95 * opacity}
        speed={0.03 * speed}
        color={DETAIL_WHITE}
        fade={12}
        position={[5.2, -4.0, -8.2]}
      />

      {/* Big bright right puff cluster (reference has a strong right mass) */}
      <Cloud
        seed={504}
        segments={120}
        bounds={[20.0, 3.6, 8.2]}
        volume={5.2}
        opacity={0.95 * opacity}
        speed={0.03 * speed}
        color={DETAIL_WHITE}
        fade={12}
        position={[12.5, -4.1, -8.5]}
      />

      {/* Small topper accents (subtle, makes it feel “cumulus”) */}
      <Cloud
        seed={505}
        segments={70}
        bounds={[8.0, 2.0, 4.2]}
        volume={2.6}
        opacity={0.65 * opacity}
        speed={0.035 * speed}
        color={DETAIL_WHITE}
        fade={16}
        position={[9.0, -2.9, -7.4]}
      />
    </group>
  );
}