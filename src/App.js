// App.js
import React from "react"
import { Canvas } from "@react-three/fiber"
import { Clouds, Cloud } from "@react-three/drei"

/* ---------- Cloud color controls (tweak these only) ---------- */
const BLUE_NEAR = "#8fd3ff"  // foreground blue
const BLUE_MID  = "#bfe4ff"  // middle plane
const BLUE_FAR  = "#dff1ff"  // background plane

function CloudScene() {
  return (
    <Canvas
      camera={{ position: [0, 1.6, 18], fov: 30 }}
      gl={{ alpha: true }}
    >
      {/* Lights */}
      <ambientLight intensity={0.9} />
      <directionalLight position={[6, 10, 6]} intensity={1.2} />

      {/* All clouds share one field */}
      <Clouds material="phong" seed={5} limit={600}>
        {/* ---------- 3rd plano (far, top band) ---------- */}
        <Cloud
          seed={11}
          segments={60}
          bounds={[26, 4, 4]}   // wide, thin band
          volume={8}
          opacity={0.4}
          speed={0.015}
          fade={130}
          color={BLUE_FAR}
          position={[0, 3.4, -9]} // HIGH + DEEP
        />

        {/* A little extra fluff in the far background */}
        <Cloud
          seed={12}
          segments={45}
          bounds={[18, 3.5, 4]}
          volume={5}
          opacity={0.35}
          speed={0.015}
          fade={120}
          color={BLUE_FAR}
          position={[0, 2.6, -8.5]}
        />

        {/* ---------- 2nd plano (middle “mountain”) ---------- */}
        <Cloud
          seed={21}
          segments={70}
          bounds={[22, 5.5, 4]}  // centered band
          volume={14}
          opacity={0.7}
          speed={0.02}
          fade={95}
          color={BLUE_MID}
          position={[0, 0.4, -3.5]} // MID HEIGHT + MID DEPTH
        />

        {/* Side lumps for the mid layer, slightly offset */}
        <Cloud
          seed={22}
          segments={55}
          bounds={[14, 4.5, 4]}
          volume={9}
          opacity={0.65}
          speed={0.02}
          fade={90}
          color={BLUE_MID}
          position={[-6, 0.1, -3]} // left mid
        />

        <Cloud
          seed={23}
          segments={55}
          bounds={[14, 4.5, 4]}
          volume={9}
          opacity={0.65}
          speed={0.02}
          fade={90}
          color={BLUE_MID}
          position={[6, 0.1, -3]} // right mid
        />

        {/* ---------- 1st plano (foreground towers) ---------- */}
        {/* Left foreground tower */}
        <Cloud
          seed={31}
          segments={85}
          bounds={[10, 6, 4]}
          volume={20}
          opacity={0.96}
          speed={0.03}
          fade={80}
          color={BLUE_NEAR}
          position={[-8.2, -3.2, 1.5]} // LOW + VERY CLOSE
        />

        {/* Right foreground tower */}
        <Cloud
          seed={32}
          segments={85}
          bounds={[10, 6, 4]}
          volume={20}
          opacity={0.96}
          speed={0.03}
          fade={80}
          color={BLUE_NEAR}
          position={[8.2, -3.2, 1.5]} // LOW + VERY CLOSE
        />

        {/* Bottom valley between towers */}
        <Cloud
          seed={33}
          segments={70}
          bounds={[18, 3.2, 4]}
          volume={16}
          opacity={0.94}
          speed={0.03}
          fade={80}
          color={BLUE_NEAR}
          position={[0, -3.8, 1.2]} // LOWEST + CLOSE
        />
      </Clouds>
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