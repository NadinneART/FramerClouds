function CloudScene() {
  return (
    <Canvas camera={{ position: [0, 1.5, 10], fov: 40 }}>
      <color attach="background" args={["#050816"]} />
      <fog attach="fog" args={["#050816", 5, 20]} />

      {/* Lights */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={1} />

      {/* Clouds */}
      <Clouds material="phong">

        {/* Left big cloud */}
        <Cloud
          segments={80}
          bounds={[6, 3, 2]}
          volume={8}
          opacity={0.9}
          speed={0.15}
          color="#ffffff"
          fade={60}
          position={[-4, -1, 0]}
        />

        {/* Left mid cloud */}
        <Cloud
          segments={60}
          bounds={[4, 2.5, 2]}
          volume={6}
          opacity={0.85}
          speed={0.18}
          color="#b4d5ff"
          fade={45}
          position={[-2.2, -0.8, -0.5]}
        />

        {/* Right big cloud */}
        <Cloud
          segments={80}
          bounds={[6, 3, 2]}
          volume={8}
          opacity={0.9}
          speed={0.15}
          color="#ffffff"
          fade={60}
          position={[4, -1, 0]}
        />

        {/* Right mid cloud */}
        <Cloud
          segments={60}
          bounds={[4, 2.5, 2]}
          volume={6}
          opacity={0.85}
          speed={0.18}
          color="#b4d5ff"
          fade={45}
          position={[2.2, -0.8, -0.5]}
        />

        {/* Soft center fog to blend the gap */}
        <Cloud
          segments={40}
          bounds={[3, 1, 2]}
          volume={2}
          opacity={0.4}
          speed={0.1}
          color="#ffffff"
          fade={30}
          position={[0, -0.3, -1]}
        />

      </Clouds>

      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}