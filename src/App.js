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
const BLUE_MID   = BLUE_BASE;                         // mid plane
const BLUE_DEEP  = mixHex("#4f8ad9", BLUE_BASE, 0.45); // foreground

function CloudScene() {
  return (
    <Canvas
      camera={{ position: [0, 1.2, 18], fov: 32 }}
      gl={{ alpha: true }}
    >
      {/* Lights */}
      <ambientLight intensity={0.9} />
      <directionalLight position={[6, 10, 6]} intensity={1.2} />

      <Clouds /* you can add seed={5} here if you want it 100% stable */>
        {/* 3rd plane – FAR (high + deep + soft) */}
        <Cloud
          seed={1}
          segments={70}
          bounds={[20, 3.2, 5]}   // wide, fairly thin band
          volume={6}
          opacity={0.4}
          speed={0.06}
          color={BLUE_LIGHT}
          fade={90}
          position={[0, 3.0, -6]} // ⬆ Y, ⬅ into Z
        />

        {/* 2nd plane – MID (around center) */}
        <Cloud
          seed={2}
          segments={80}
          bounds={[20, 3.6, 5]}
          volume={9}
          opacity={0.72}
          speed={0.08}
          color={BLUE_MID}
          fade={80}
          position={[0, 0.2, -3]} // mid height, mid depth
        />

        {/* 1st plane – FOREGROUND (low + close + punchy) */}
        <Cloud
          seed={3}
          segments={90}
          bounds={[20, 4.0, 5]}
          volume={11}
          opacity={0.92}
          speed={0.1}
          color={BLUE_DEEP}
          fade={75}
          position={[0, -3.2, 0]} // bottom band, closest
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