// src/App.js
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Clouds } from "@react-three/drei";
import cloudTex from "./Assets/cloud.png";
import { ForegroundClouds } from "./Components/Clouds/ForegroundClouds";
import { MidClouds } from "./Components/Clouds/MidClouds";
import { MidCloudsLeft } from "./Components/Clouds/MidCloudsLeft";
import { ForegroundDetailClouds } from "./Components/Clouds/ForegroundDetailClouds";

import CameraZoomOut from "./Components/CameraZoomOut";


function CloudScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 1.4, 18], fov: 32 }}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      }}
    >
 {/* Camera animation on load */}
     {/* <CameraZoomOut 
        from={[0, 1.4, 12]}   // start near foreground
        to={[0, 1.4, 18]}    // end at default
        duration={1.2}
      />*/} 

      <ambientLight intensity={4} />
      <directionalLight position={[7, 14, 6]} intensity={3} color="#6de7ff" />

      {/* 3rd (BACK): Mid clouds */}
      <Clouds limit={800} texture={cloudTex}>
        <MidCloudsLeft
          position={[20, -8, -24]}
          opacity={0.3}
          speed={0.8}
          scale={[0.9, 1, 1]}
        />
        <MidClouds
          position={[15, -2, -18]}
          opacity={0.3}
          speed={0.8}
          scale={[1, 1, 1]}
        />
      </Clouds>

      {/* 2nd: Foreground mass */}
      <Clouds limit={600} texture={cloudTex}>
        <ForegroundClouds
          position={[4, -12, -4]}
          opacity={1}
          speed={2}
          scale={[1, 1.4, 1]}
        />
      </Clouds>

      {/* 1st (FRONT): Foreground details */}
      <Clouds limit={400} texture={cloudTex}>
        <ForegroundDetailClouds
          position={[2, -3, 4]}
          opacity={1}
          speed={1}
          scale={[1, 1, 4]}
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
