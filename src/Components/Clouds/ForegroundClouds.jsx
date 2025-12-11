// src/Components/Clouds/ForegroundClouds.jsx
import React from "react";
import { Cloud } from "@react-three/drei";

/* Front-plane palette */
const FG_BLUE_SHADOW = "#80B6E1";
const FG_BLUE_MAIN   = "#85c0fe";
const FG_WHITE_TOP   = "#FEFEFF";

export function ForegroundClouds({
  position = [0, 0, 0],
  scale = [1, 1, 1],
  opacity = 1,
  speed = 1,
}) {
  return (
    <group position={position} scale={scale}>
      {/* Base soft blue belt */}
      <Cloud
        seed={8}
        segments={350}
        bounds={[22, 4.2, 5]}
        volume={18}
        opacity={1* opacity}
        speed={0.03 * speed}
        color={FG_WHITE_TOP}
        fade={0}
        position={[0, -1, -7]}
      />

      {/* LEFT tower */}
      <Cloud
        seed={9}
        segments={100}
        bounds={[15, 4, 6]}
        volume={12}
        opacity={1* opacity}
        speed={0.050 * speed}
        color={FG_BLUE_SHADOW}
        fade={0}
        position={[-9, -0.5, -10]}
      />

      {/* RIGHT tower */}
      <Cloud
        seed={150}
        segments={360}
        bounds={[25, 5, 6]}
        volume={24}
        opacity={1 * opacity}
        speed={0.020 * speed}
        color={FG_BLUE_MAIN}
        fade={40}
        position={[11, 1.5, -8]}
      />

/* Right tower Spreaded */
       <Cloud
        seed={90}
        segments={200}
        bounds={[1, 5, 7.5]}
        volume={14}
        opacity={1 * opacity}
        speed={0.050 * speed}
        color={FG_BLUE_SHADOW}
        fade={25}
        position={[7.5, 1.5, -8]}
      />


      {/* Center valley */}
      <Cloud
        seed={80}
        segments={20}
        bounds={[15, 3.0, 6]}
        volume={12}
        opacity={1 * opacity}
        speed={0.028 * speed}
        color={FG_WHITE_TOP}
        fade={0}
        position={[0, 2, -7]}
      />


      {/* White tops */}
      <Cloud
        seed={11}
        segments={140}
        bounds={[20, 3.6, 5]}
        volume={0}
        opacity={1 * opacity}
        speed={0.03 * speed}
        color={FG_WHITE_TOP}
        fade={90}
        position={[3, 3, -6]}
      />
    </group>
  );
}