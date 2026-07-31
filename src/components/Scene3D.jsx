import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Icosahedron, MeshDistortMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

// A drifting starfield of data points.
function StarField() {
  const ref = useRef()
  const positions = useMemo(() => {
    const n = 1400
    const arr = new Float32Array(n * 3)
    for (let i = 0; i < n; i++) {
      const r = 6 + Math.random() * 10
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.04
    ref.current.rotation.x += delta * 0.015
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#3ad2da"
        size={0.045}
        sizeAttenuation
        depthWrite={false}
        opacity={0.85}
      />
    </Points>
  )
}

// The central distorted "data core" that slowly morphs and rotates.
function DataCore() {
  const ref = useRef()
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.18
      ref.current.rotation.z += delta * 0.05
    }
  })
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.8}>
      <Icosahedron ref={ref} args={[2.1, 6]}>
        <MeshDistortMaterial
          color="#5aa8ff"
          emissive="#1a3a6b"
          emissiveIntensity={0.5}
          roughness={0.25}
          metalness={0.6}
          distort={0.35}
          speed={1.6}
          wireframe
        />
      </Icosahedron>
    </Float>
  )
}

export default function Scene3D() {
  return (
    <div className="three-bg" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 55 }}
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={1.2} color="#3ad2da" />
          <pointLight position={[-10, -6, -8]} intensity={0.8} color="#bd8cff" />
          <DataCore />
          <StarField />
          <fog attach="fog" args={['#070a11', 10, 22]} />
        </Suspense>
      </Canvas>
    </div>
  )
}
