// src/App.js
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Clouds } from "@react-three/drei";

import { ForegroundClouds } from "./Components/Clouds/ForegroundClouds";
import { MidClouds } from "./Components/Clouds/MidClouds";
import { MidCloudsLeft } from "./Components/Clouds/MidCloudsLeft";
import { ForegroundDetailClouds } from "./Components/Clouds/ForegroundDetailClouds";

import { RevealAfterFrames } from "./Components/RevealAfterFrames";

function CloudScene({ onReady }) {
  return (
    <Canvas
      dpr={[1, 1.25]} // cap retina cost
      camera={{ position: [0, 1.4, 18], fov: 32 }}
      gl={{
        alpha: true,
        antialias: false,
        powerPreference: "high-performance",
      }}
    >
      {/* Wait a few frames so clouds/shaders stabilize, then allow fade-in */}
      <RevealAfterFrames frames={10} onReady={onReady} />

      <ambientLight intensity={4} />
      <directionalLight position={[7, 14, 6]} intensity={3} color="#6de7ff" />

      {/* 3rd (BACK): Mid clouds */}
      <Clouds limit={800}>
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
      <Clouds limit={600}>
        <ForegroundClouds
          position={[4, -12, -4]}
          opacity={1}
          speed={2}
          scale={[1, 1.4, 1]}
        />
      </Clouds>

      {/* 1st (FRONT): Foreground details (isolated volume) */}
      <Clouds limit={400}>
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
  const [ready, setReady] = React.useState(false);

  return (
    <div className="App">
      <div
        className="canvas-wrapper"
        style={{
          opacity: ready ? 1 : 0,
          transition: "opacity 1000ms ease",
        }}
      >
        <CloudScene onReady={() => setReady(true)} />
      </div>
    </div>
  );
}