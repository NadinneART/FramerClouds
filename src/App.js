import React from "react";
import { Canvas } from "@react-three/fiber";
import { Clouds, Cloud } from "@react-three/drei";

function CloudScene() {
  return (
    <Canvas
      camera={{ position: [0, 1.1, 16], fov: 32 }} // camera a bit higher
      gl={{ alpha: true }}
    >
      {/* Lights */}
      <ambientLight intensity={0.9} />
      <directionalLight position={[6, 10, 6]} intensity={1.2} />

      <Clouds>
        {/* BASE BLUE MIST (stretches wide, sits low) */}
        <Cloud
          segments={60}
          bounds={[16, 2.4, 3]}
          volume={6}
          opacity={0.82}
          speed={0.09}
          color="#8eb8ff"
          fade={75}
          position={[0, -3.8, 0]}      // moved lower
        />

        {/* LEFT highlight cloud */}
        <Cloud
          segments={85}
          bounds={[7, 4, 3]}
          volume={10}
          opacity={0.98}
          speed={0.11}
          color="#eaf4ff"
          fade={70}
          position={[-5.2, -3.5, 0.4]} // moved lower
        />

        {/* LEFT core (deep blue heart) */}
        <Cloud
          segments={65}
          bounds={[5, 3, 3]}
          volume={7}
          opacity={0.95}
          speed={0.11}
          color="#6ea0f5"
          fade={55}
          position={[-3.7, -3.2, 0]}   // moved lower
        />

        {/* RIGHT highlight cloud */}
        <Cloud
          segments={85}
          bounds={[7, 4, 3]}
          volume={10}
          opacity={0.98}
          speed={0.11}
          color="#eaf4ff"
          fade={70}
          position={[5.2, -3.5, 0.4]}  // moved lower
        />

        {/* RIGHT core */}
        <Cloud
          segments={65}
          bounds={[5, 3, 3]}
          volume={7}
          opacity={0.95}
          speed={0.11}
          color="#6ea0f5"
          fade={55}
          position={[3.7, -3.2, 0]}    // moved lower
        />

        {/* SOFT bluish center haze */}
        <Cloud
          segments={45}
          bounds={[7, 2.0, 3]}
          volume={4}
          opacity={0.32}
          speed={0.08}
          color="#a9c9ff"
          fade={80}
          position={[0, -3.1, -0.4]}   // moved lower
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