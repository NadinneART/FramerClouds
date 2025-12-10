// App.js
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Clouds, Cloud } from "@react-three/drei";

/* ---------- Cloud color controls (tweak these only) ---------- */
const BLUE_NEAR = "#ff8fdaff";  // foreground blue
const BLUE_MID  = "#aeddff";    // middle plane blue
const BLUE_FAR  = "#d9eeff";    // far plane blue

function CloudScene() {
  return (
    <Canvas
      camera={{ position: [0, 1.2, 18], fov: 30 }}
      gl={{ alpha: true }}
    >
      {/* Lights */}
      <ambientLight intensity={0.9} />
      <directionalLight position={[6, 10, 6]} intensity={1.2} />

      {/* Stable cloud field */}
      <Clouds material="phong" seed={5} limit={600}>
        
        {/* ---------- 3rd plano (far background layer) ---------- */}
        <Cloud
          seed={11}
          segments={60}
          bounds={[24, 5, 6]}   // wide & a bit tall
          volume={10}
          opacity={0.55}
          speed={0.02}
          fade={120}
          color={BLUE_FAR}
          position={[0, 3.2, -6]} // high & far
        />

        {/* ---------- 2nd plano (middle layer) ---------- */}
        <Cloud
          seed={21}
          segments={70}
          bounds={[22, 6, 6]}
          volume={14}
          opacity={0.75}
          speed={0.03}
          fade={90}
          color={BLUE_MID}
          position={[0, 0.8, -3]}
        />

        {/* ---------- 1st plano (foreground left tower) ---------- */}
        <Cloud
          seed={31}
          segments={85}
          bounds={[11, 7, 6]}
          volume={20}
          opacity={0.95}
          speed={0.04}
          fade={75}
          color={BLUE_NEAR}
          position={[-8.5, -2.6, 0.4]}
        />

        {/* ---------- Foreground right tower ---------- */}
        <Cloud
          seed={32}
          segments={85}
          bounds={[11, 7, 6]}
          volume={20}
          opacity={0.95}
          speed={0.04}
          fade={75}
          color={BLUE_NEAR}
          position={[8.5, -2.6, 0.4]}
        />

        {/* ---------- Center bottom foreground valley ---------- */}
        <Cloud
          seed={33}
          segments={70}
          bounds={[16, 4.5, 6]}
          volume={16}
          opacity={0.9}
          speed={0.035}
          fade={80}
          color={BLUE_NEAR}
          position={[0, -3.4, 0.8]}
        />

      </Clouds>
    </Canvas>
  );
}

export default function App() {
  return (
    <div className="App">
      <div className="canvas-wrapper">
        <CloudScene />
      </div>
    </div>
  );
}