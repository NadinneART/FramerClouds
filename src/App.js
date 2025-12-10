// App.js
import React, { useMemo } from "react"
import { Canvas } from "@react-three/fiber"
import { Points, PointMaterial, OrbitControls } from "@react-three/drei"

/* ----------------- Color “tokens” ----------------- */
const BLUE_FAR = "#e1f2ff"  // 3rd plane (top, far)
const BLUE_MID = "#b9e0ff"  // 2nd plane (middle)
const BLUE_NEAR = "#8ec3ff" // 1st plane (bottom, foreground)

/* ----------------- Seeded random ------------------ */
// Simple deterministic PRNG (mulberry32)
function seededRandom(seed = 1) {
  let t = seed >>> 0
  return function () {
    t += 0x6d2b79f5
    let r = t
    r = Math.imul(r ^ (r >>> 15), r | 1)
    r ^= r + Math.imul(r ^ (r >>> 7), r | 61)
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296
  }
}

/* ------------- Generate a horizontal plane -------- */
function randomOnHorizontalPlane(count, width, depth, heightVariation, seed = 1) {
  const random = seededRandom(seed)
  const points = new Float32Array(count * 3)

  for (let i = 0; i < count * 3; i += 3) {
    // X: spread along width
    points[i] = (random() - 0.5) * width
    // Y: small vertical variation
    points[i + 1] = (random() - 0.5) * heightVariation
    // Z: spread along depth
    points[i + 2] = (random() - 0.5) * depth
  }

  return points
}

/* ---------------- CloudPlane component ------------- */
function CloudPlane({
  seed = 1,
  count = 800,
  width = 20,
  depth = 6,
  heightVariation = 1.5,
  color = "#ffffff",
  size = 60,
  opacity = 0.9,
  position = [0, 0, 0],
}) {
  const positions = useMemo(
    () => randomOnHorizontalPlane(count, width, depth, heightVariation, seed),
    [count, width, depth, heightVariation, seed]
  )

  return (
    <group position={position}>
      <Points positions={positions} frustumCulled={false}>
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation
          depthWrite={false}
          opacity={opacity}
        />
      </Points>
    </group>
  )
}

/* --------------------- Scene ---------------------- */
function CloudScene() {
  return (
    <Canvas
      camera={{ position: [0, 2, 16], fov: 40 }}
      gl={{ alpha: true }}
    >
      {/* Optional: orbit to inspect while designing */}
      {/* <OrbitControls enablePan={false} /> */}

      {/* A bit of ambient light to keep things soft */}
      <ambientLight intensity={0.6} />

      {/* 3rd plane – FAR (top of viewport) */}
      <CloudPlane
        seed={10}
        count={900}
        width={32}
        depth={10}
        heightVariation={1.2}
        color={BLUE_FAR}
        size={45}
        opacity={0.6}
        position={[0, 4, -10]}   // high & far
      />

      {/* 2nd plane – MIDDLE (middle of viewport) */}
      <CloudPlane
        seed={20}
        count={1100}
        width={28}
        depth={9}
        heightVariation={2.0}
        color={BLUE_MID}
        size={55}
        opacity={0.8}
        position={[0, 1.2, -6]}  // mid height & depth
      />

      {/* 1st plane – FOREGROUND (bottom of viewport) */}
      <CloudPlane
        seed={30}
        count={1300}
        width={30}
        depth={8}
        heightVariation={2.5}
        color={BLUE_NEAR}
        size={70}
        opacity={0.95}
        position={[0, -2.5, -3]} // low & closer
      />
    </Canvas>
  )
}

export default function App() {
  return (
    <div className="App">
      <div className="canvas-wrapper">
        <CloudScene />
      </div>
    </div>
  )
}