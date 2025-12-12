// src/App.js
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Clouds } from "@react-three/drei";

import { ForegroundClouds } from "./Components/Clouds/ForegroundClouds";
import { MidClouds } from "./Components/Clouds/MidClouds";
import { MidCloudsLeft } from "./Components/Clouds/MidCloudsLeft";
import { ForegroundDetailClouds } from "./Components/Clouds/ForegroundDetailClouds";

function CloudScene() {
  return (
    <Canvas camera={{ position: [0, 1.4, 18], fov: 32 }} gl={{ alpha: true }}>
      <ambientLight intensity={2} />
      <directionalLight position={[7, 14, 6]} intensity={2} color="#ffffff" />

      <Clouds limit={1000}>
        {/* 3rd (BACK): Midclouds */}
        <MidCloudsLeft position={[20, -8, -24]} opacity={0.3} speed={0.8} scale={[0.9, 1, 1]} />
        <MidClouds     position={[15, -2, -18]} opacity={0.6} speed={0.8} scale={[1, 1, 1]} />

        {/* 2nd: Foreground mass */}
        <ForegroundClouds position={[4, -12, -4]} opacity={1} speed={2} scale={[1, 1.4, 1]} />

        {/* 1st (FRONT): Foreground details */}
        <ForegroundDetailClouds position={[10, 1, 2]} opacity={1} speed={1} scale={[1, 1, 1]} />
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