// src/Components/Clouds/ForegroundDetailClouds.jsx
import React from "react";
import { Cloud } from "@react-three/drei";
import cloudTex from "../../Assets/cloud.png"

/* Detail palette */
const DETAIL_BLUE_SHADOW = "#80B6E1";
const DETAIL_WHITE_TOP   = "#FEFEFF";

const CLOUD_TEX = cloudTex

export function ForegroundDetailClouds({
  position = [0, 0, 0],
  scale = [1, 1, 1],
  opacity = 1,
  speed = 1,
}) {
  return (
    <group position={position} scale={scale}>
      {/* =========================
          LEFT → MID (lighter density)
         ========================= */}

      <Cloud
        texture={CLOUD_TEX}
        seed={610}
        segments={60}
        bounds={[4.0, 1.1, 2.4]}
        volume={2.0}
        opacity={0.55 * opacity}
        speed={0.03 * speed}
        color={DETAIL_WHITE_TOP}
        fade={14}
        position={[-14.0, -2.9, 1.0]}
      />

      <Cloud
        texture={CLOUD_TEX}
        seed={611}
        segments={60}
        bounds={[3.6, 1.0, 2.2]}
        volume={1.8}
        opacity={0.40 * opacity}
        speed={0.03 * speed}
        color={DETAIL_BLUE_SHADOW}
        fade={14}
        position={[-12.0, -3.1, 1.1]}
      />

      <Cloud
        texture={CLOUD_TEX}
        seed={612}
        segments={65}
        bounds={[4.2, 1.2, 2.5]}
        volume={2.1}
        opacity={0.60 * opacity}
        speed={0.03 * speed}
        color={DETAIL_WHITE_TOP}
        fade={14}
        position={[-10.0, -2.8, 1.0]}
      />

      <Cloud
        texture={CLOUD_TEX}
        seed={613}
        segments={60}
        bounds={[3.7, 1.0, 2.2]}
        volume={1.9}
        opacity={0.35 * opacity}
        speed={0.03 * speed}
        color={DETAIL_BLUE_SHADOW}
        fade={14}
        position={[-8.4, -3.2, 1.15]}
      />

      <Cloud
        texture={CLOUD_TEX}
        seed={614}
        segments={70}
        bounds={[4.6, 1.3, 2.7]}
        volume={2.2}
        opacity={0.62 * opacity}
        speed={0.03 * speed}
        color={DETAIL_WHITE_TOP}
        fade={14}
        position={[-6.6, -2.9, 1.05]}
      />

      <Cloud
        texture={CLOUD_TEX}
        seed={615}
        segments={60}
        bounds={[3.8, 1.0, 2.2]}
        volume={2.0}
        opacity={0.38 * opacity}
        speed={0.03 * speed}
        color={DETAIL_BLUE_SHADOW}
        fade={14}
        position={[-4.8, -3.2, 1.2]}
      />

      <Cloud
        texture={CLOUD_TEX}
        seed={616}
        segments={70}
        bounds={[4.8, 1.3, 2.8]}
        volume={2.3}
        opacity={0.65 * opacity}
        speed={0.03 * speed}
        color={DETAIL_WHITE_TOP}
        fade={14}
        position={[-3.0, -2.9, 1.05]}
      />

      {/* =========================
          CENTER
         ========================= */}

      <Cloud
        texture={CLOUD_TEX}
        seed={617}
        segments={60}
        bounds={[3.9, 1.05, 2.3]}
        volume={2.0}
        opacity={0.36 * opacity}
        speed={0.03 * speed}
        color={DETAIL_BLUE_SHADOW}
        fade={14}
        position={[-1.2, -3.2, 1.2]}
      />

      <Cloud
        texture={CLOUD_TEX}
        seed={618}
        segments={75}
        bounds={[5.2, 1.35, 3.0]}
        volume={2.5}
        opacity={0.68 * opacity}
        speed={0.03 * speed}
        color={DETAIL_WHITE_TOP}
        fade={14}
        position={[0.8, -2.95, 1.05]}
      />

      <Cloud
        texture={CLOUD_TEX}
        seed={619}
        segments={60}
        bounds={[4.0, 1.1, 2.4]}
        volume={2.1}
        opacity={0.40 * opacity}
        speed={0.03 * speed}
        color={DETAIL_BLUE_SHADOW}
        fade={14}
        position={[2.6, -3.15, 1.15]}
      />

      {/* =========================
          RIGHT (more density)
         ========================= */}

      <Cloud
        texture={CLOUD_TEX}
        seed={620}
        segments={80}
        bounds={[5.8, 1.45, 3.2]}
        volume={2.7}
        opacity={0.75 * opacity}
        speed={0.03 * speed}
        color={DETAIL_WHITE_TOP}
        fade={12}
        position={[4.6, -2.85, 1.0]}
      />

      <Cloud
        texture={CLOUD_TEX}
        seed={621}
        segments={65}
        bounds={[4.4, 1.15, 2.6]}
        volume={2.2}
        opacity={0.42 * opacity}
        speed={0.03 * speed}
        color={DETAIL_BLUE_SHADOW}
        fade={12}
        position={[6.2, -3.1, 1.15]}
      />

      <Cloud
        texture={CLOUD_TEX}
        seed={622}
        segments={85}
        bounds={[6.2, 1.55, 3.4]}
        volume={2.9}
        opacity={0.78 * opacity}
        speed={0.03 * speed}
        color={DETAIL_WHITE_TOP}
        fade={12}
        position={[7.6, -2.8, 0.95]}
      />

      <Cloud
        texture={CLOUD_TEX}
        seed={623}
        segments={65}
        bounds={[4.6, 1.2, 2.7]}
        volume={2.3}
        opacity={0.40 * opacity}
        speed={0.03 * speed}
        color={DETAIL_BLUE_SHADOW}
        fade={12}
        position={[9.2, -3.2, 1.2]}
      />

      <Cloud
        texture={CLOUD_TEX}
        seed={624}
        segments={90}
        bounds={[6.6, 1.6, 3.6]}
        volume={3.1}
        opacity={0.80 * opacity}
        speed={0.03 * speed}
        color={DETAIL_WHITE_TOP}
        fade={12}
        position={[10.6, -2.9, 0.95]}
      />

      <Cloud
        texture={CLOUD_TEX}
        seed={625}
        segments={65}
        bounds={[4.8, 1.25, 2.8]}
        volume={2.3}
        opacity={0.38 * opacity}
        speed={0.03 * speed}
        color={DETAIL_BLUE_SHADOW}
        fade={12}
        position={[12.0, -3.1, 1.15]}
      />

      <Cloud
        texture={CLOUD_TEX}
        seed={626}
        segments={95}
        bounds={[7.0, 1.7, 3.8]}
        volume={3.2}
        opacity={0.80 * opacity}
        speed={0.03 * speed}
        color={DETAIL_WHITE_TOP}
        fade={12}
        position={[13.4, -2.85, 0.9]}
      />

      <Cloud
        texture={CLOUD_TEX}
        seed={627}
        segments={65}
        bounds={[4.8, 1.25, 2.8]}
        volume={2.2}
        opacity={0.35 * opacity}
        speed={0.03 * speed}
        color={DETAIL_BLUE_SHADOW}
        fade={12}
        position={[14.8, -3.2, 1.2]}
      />

      <Cloud
        texture={CLOUD_TEX}
        seed={628}
        segments={90}
        bounds={[6.8, 1.65, 3.7]}
        volume={3.0}
        opacity={0.75 * opacity}
        speed={0.03 * speed}
        color={DETAIL_WHITE_TOP}
        fade={12}
        position={[16.2, -2.9, 0.9]}
      />
    </group>
  );
}