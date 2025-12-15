// src/Components/Clouds/ForegroundClouds.jsx
import React from "react"
import { Cloud } from "@react-three/drei"

/* Front-plane palette */
const FG_BLUE_SHADOW = "#4b9adb"
const FG_BLUE_MAIN = "#85c0fe"
const FG_WHITE_TOP = "#FEFEFF"

const CLOUD_TEX = "/textures/cloud.png" // ✅ local, no CORS

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
        texture={CLOUD_TEX}
        key="fg-base-belt"
        seed={8}
        segments={350}
        bounds={[22, 4.2, 5]}
        volume={1}
        opacity={1 * opacity}
        speed={0.03 * speed}
        color={FG_WHITE_TOP}
        fade={0}
        position={[0, -1, -7]}
      />

      {/* LEFT tower */}
      <Cloud
        texture={CLOUD_TEX}
        key="fg-left-tower"
        seed={9}
        segments={100}
        bounds={[15, 4, 6]}
        volume={12}
        opacity={1 * opacity}
        speed={0.05 * speed}
        color={FG_BLUE_SHADOW}
        fade={0}
        position={[-9, -0.5, -10]}
      />

      {/* RIGHT tower */}
      <Cloud
        texture={CLOUD_TEX}
        key="fg-right-tower"
        seed={150}
        segments={360}
        bounds={[25, 5, 6]}
        volume={10}
        opacity={1 * opacity}
        speed={0.02 * speed}
        color={FG_BLUE_MAIN}
        fade={40}
        position={[11, 1.5, -8]}
      />

      {/* Right tower Spreaded */}
      <Cloud
        texture={CLOUD_TEX}
        key="fg-right-spread"
        seed={30}
        segments={800}
        bounds={[5, 4, 9]}
        volume={26}
        opacity={1 * opacity}
        speed={0.05 * speed}
        color={FG_BLUE_SHADOW}
        fade={0}
        position={[7, 1, -6]}
      />

      {/* Center valley */}
      <Cloud
        texture={CLOUD_TEX}
        key="fg-center-valley-a"
        seed={100}
        segments={20}
        bounds={[29, 1.0, 9]}
        volume={25}
        opacity={1 * opacity}
        speed={0.028 * speed}
        color={FG_WHITE_TOP}
        fade={0}
        position={[-4, 0, -7]}
      />

      <Cloud
        texture={CLOUD_TEX}
        key="fg-center-valley-b"
        seed={101}
        segments={30}
        bounds={[29, 1.0, 9]}
        volume={25}
        opacity={1 * opacity}
        speed={0.028 * speed}
        color={FG_WHITE_TOP}
        fade={20}
        position={[6, 0, -7]}
      />

      <Cloud
        texture={CLOUD_TEX}
        key="fg-center-valley-c"
        seed={102}
        segments={30}
        bounds={[29, 1.0, 9]}
        volume={25}
        opacity={1 * opacity}
        speed={0.028 * speed}
        color={FG_WHITE_TOP}
        fade={20}
        position={[6, 0, -9]}
      />

      <Cloud
        texture={CLOUD_TEX}
        key="fg-topper-a"
        seed={11}
        segments={200}
        bounds={[25, 5, 8]}
        volume={24}
        opacity={0.5 * opacity}
        speed={0.01 * speed}
        color={FG_WHITE_TOP}
        fade={50}
        position={[5, 5, -6]}
      />

      {/* White tops */}
      <Cloud
        texture={CLOUD_TEX}
        key="fg-topper-b"
        seed={12}
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
  )
}