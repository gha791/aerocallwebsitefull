
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text3D, Center, Stars, useMatcapTexture } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function PhoneModel() {
  const mesh = useRef<Mesh>(null!);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={mesh} scale={2}>
      {/* Phone Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.5, 1, 0.1]} />
        <meshStandardMaterial color={"#333333"} />
      </mesh>
      {/* Phone Screen */}
      <mesh position={[0, 0, 0.06]}>
        <boxGeometry args={[0.45, 0.95, 0.01]} />
        <meshStandardMaterial color={"#000000"} emissive={"#0044ff"} emissiveIntensity={0.5} />
      </mesh>
      {/* Notch */}
      <mesh position={[0, 0.45, 0.06]}>
        <boxGeometry args={[0.1, 0.02, 0.01]} />
        <meshStandardMaterial color={"#000000"} />
      </mesh>
       {/* Side Buttons */}
      <mesh position={[-0.26, 0.2, 0]}>
        <boxGeometry args={[0.02, 0.1, 0.08]} />
        <meshStandardMaterial color={"#555555"} />
      </mesh>
      <mesh position={[-0.26, 0.05, 0]}>
        <boxGeometry args={[0.02, 0.1, 0.08]} />
        <meshStandardMaterial color={"#555555"} />
      </mesh>
    </group>
  );
}

function Title3D() {
    const [matcap] = useMatcapTexture('C7C7D7_4C4E5A_818393_6C6C74', 256);
    
    return (
        <Center>
            <Text3D
                font="/Inter_Bold.json"
                size={0.7}
                height={0.2}
                curveSegments={12}
                bevelEnabled
                bevelThickness={0.02}
                bevelSize={0.02}
                bevelOffset={0}
                bevelSegments={5}
            >
                AEROCALL
                <meshMatcapMaterial matcap={matcap} />
            </Text3D>
        </Center>
    )
}

export default function HomePage() {
  return (
    <main className="flex-1 h-[calc(100vh-150px)]">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <PhoneModel />
        <Title3D />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </main>
  );
}
