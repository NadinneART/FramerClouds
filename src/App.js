import React from "react";
import { Canvas } from "@react-three/fiber";
import { Clouds, Cloud, OrbitControls } from "@react-three/drei";

function CloudScene() {
  return (
    <Canvas camera={{ position: [0, 2, 12], fov: 55 }}>
      <color attach="background" args={["#050816"]} />
      <fog attach="fog" args={["#050816", 5, 20]} />

      {/* Lights */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={1} />

      {/* Clouds */}
      <Clouds>
        <Cloud
          segments={60}
          bounds={[4, 2, 2]}
          volume={7}
          opacity={0.8}
          speed={0.2}
          color="#ffffff"
          fade={40}
          position={[0, 1.5, 0]}
        />
        <Cloud
          segments={40}
          bounds={[4, 2, 2]}
          volume={5}
          opacity={0.6}
          speed={0.25}
          color="#9fc9ff"
          fade={35}
          position={[-3, 1, -2]}
        />
      </Clouds>

      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}

export default function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#050816",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <CloudScene />
    </div>
  );
}
