'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, OrbitControls, Stars } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function Core() {
  const group = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (!group.current) return

    group.current.rotation.y += delta * 0.18
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.08
  })

  return (
    <group ref={group}>
      <Float speed={1.5} rotationIntensity={0.35} floatIntensity={0.65}>
        <mesh>
          <icosahedronGeometry args={[1.18, 7]} />
          <MeshDistortMaterial
            color="#5d92ff"
            roughness={0.18}
            metalness={0.55}
            distort={0.28}
            speed={1.6}
          />
        </mesh>

        <mesh rotation={[Math.PI / 2.35, 0.1, 0.2]}>
          <torusGeometry args={[1.72, 0.018, 16, 180]} />
          <meshStandardMaterial color="#9fc0ff" emissive="#396bd0" emissiveIntensity={1.5} />
        </mesh>

        <mesh rotation={[0.35, Math.PI / 2.2, -0.25]}>
          <torusGeometry args={[1.98, 0.012, 16, 180]} />
          <meshStandardMaterial color="#53d89f" emissive="#197a56" emissiveIntensity={1.25} />
        </mesh>
      </Float>

      <mesh position={[2.05, 0.55, 0.15]}>
        <sphereGeometry args={[0.085, 24, 24]} />
        <meshStandardMaterial color="#8db4ff" emissive="#5d92ff" emissiveIntensity={2} />
      </mesh>

      <mesh position={[-1.7, -1.22, 0.45]}>
        <sphereGeometry args={[0.065, 24, 24]} />
        <meshStandardMaterial color="#53d89f" emissive="#53d89f" emissiveIntensity={1.7} />
      </mesh>
    </group>
  )
}

export default function TechScene() {
  return (
    <div className="webgl-shell" aria-label="Experimento 3D interactivo con WebGL">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.2], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.55} />
        <pointLight position={[4, 4, 5]} intensity={34} color="#8db4ff" />
        <pointLight position={[-4, -2, 3]} intensity={22} color="#53d89f" />
        <Core />
        <Stars radius={35} depth={18} count={950} factor={2.2} saturation={0} fade speed={0.35} />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.55}
          minPolarAngle={Math.PI / 2.7}
          maxPolarAngle={Math.PI / 1.7}
        />
      </Canvas>

      <div className="webgl-chip webgl-chip-one">Three.js</div>
      <div className="webgl-chip webgl-chip-two">React Three Fiber</div>
      <div className="webgl-chip webgl-chip-three">WebGL</div>
      <div className="webgl-hint">Arrastrá para rotar</div>
    </div>
  )
}
