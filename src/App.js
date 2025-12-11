// src/App.js
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Clouds } from "@react-three/drei";

import { ForegroundClouds } from "./Components/Clouds/ForegroundClouds";
import { MidClouds } from "./Components/Clouds/MidClouds";
import { MidCloudsLeft } from "./Components/Clouds/MidCloudsLeft";

function CloudScene() {
  return (
    <Canvas
      camera={{ position: [0, 1.4, 18], fov: 32 }}
      gl={{ alpha: true }}
    >
      {/* Lights */}
      <ambientLight intensity={2} />
      <directionalLight position={[7, 14, 6]} intensity={2} color="#ffffff" />

      {/* One Clouds wrapper – all Cloud elements live in the groups below */}
      <Clouds limit={1000}>

  {/* BACK layer Left */}
        <MidCloudsLeft
          position={[20, -8, -20]}
          opacity={0.5}
          speed={0.8}
          scale={[0.9, 1, 1]}
        />


        {/* BACK layer */}
        <MidClouds
          position={[15, -2, -20]}
          opacity={0.6}
          speed={0.8}
          scale={[1, 1, 1]}
        />

        {/* FRONT layer */}
        <ForegroundClouds
          position={[4, -12, 3]}
          opacity={1}
          speed={2}
          scale={[1, 1.4, 1]}
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