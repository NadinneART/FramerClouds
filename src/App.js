import React from "react";
import { Canvas } from "@react-three/fiber";
import { Clouds, Cloud } from "@react-three/drei";

// 🔵 1) ONE main blue value – change only this:
const BLUE_BASE = "#79C1E4"; // try things like "#bfe3ff", "#d6efff", etc.

// Small helper to blend two hex colors (used to create lighter / deeper blues)
function mixHex(c1, c2, ratio) {
  const parse = (c) => {
    const hex = c.replace("#", "");
    const n = parseInt(hex, 16);
    return {
      r: (n >> 16) & 255,
      g: (n >> 8) & 255,
      b: n & 255,
    };
  };

  const a = parse(c1);
  const b = parse(c2);

  const r = Math.round(a.r * (1 - ratio) + b.r * ratio);
  const g = Math.round(a.g * (1 - ratio) + b.g * ratio);
  const bl = Math.round(a.b * (1 - ratio) + b.b * ratio);

  return (
    "#" +
    [r, g, bl]
      .map((v) => v.toString(16).padStart(2, "0"))
      .join("")
  );
}

// Derived palette – all based on BLUE_BASE
const BLUE_LIGHT = mixHex("#ffffff", BLUE_BASE, 0.4); // far clouds
const BLUE_MID = BLUE_BASE;                            // mid plane
const BLUE_DEEP = mixHex("#4f8ad9", BLUE_BASE, 0.45);  // foreground

function CloudScene() {
  return (
    <Canvas
      camera={{ position: [0, 1.1, 16], fov: 32 }}
      gl={{ alpha: true }}
    >
      {/* Lights */}
      <ambientLight intensity={0.9} />
      <directionalLight position={[6, 10, 6]} intensity={1.2} />

      <Clouds>
        {/* 3rd plane – far, very soft band near the top */}
        <Cloud
          seed={1}
          segments={70}
          bounds={[18, 3, 4]}
          volume={5}
          opacity={0.45}
          speed={0.08}
          color={BLUE_LIGHT}
          fade={80}
          position={[0, -1.6, -2]}
        />

        {/* 2nd plane – mid depth clouds */}
        <Cloud
          seed={2}
          segments={80}
          bounds={[18, 3.5, 4]}
          volume={8}
          opacity={0.75}
          speed={0.1}
          color={BLUE_MID}
          fade={75}
          position={[0, -3.0, -1]}
        />

        {/* 1st plane – foreground, richer blue, sitting lower */}
        <Cloud
          seed={3}
          segments={90}
          bounds={[18, 3.8, 4]}
          volume={10}
          opacity={0.9}
          speed={0.11}
          color={BLUE_DEEP}
          fade={70}
          position={[0, -4.2, 0.2]}
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
