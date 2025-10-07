'use client';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { Suspense } from 'react';
import * as THREE from 'three';

// --- Model loader ---
function Model({ url }) {
  const geometry = useLoader(STLLoader, url);
  geometry.computeVertexNormals();

  // Center and normalize to fit nicely
  geometry.computeBoundingBox();
  const box = geometry.boundingBox;
  const center = new THREE.Vector3();
  box.getCenter(center);
  geometry.translate(-center.x, -center.y, -center.z);

  const size = new THREE.Vector3();
  box.getSize(size);
  const maxDim = Math.max(size.x, size.y, size.z);
  const scale = 1.2 / maxDim; // slightly zoomed-in fit
  geometry.scale(scale, scale, scale);

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial color="#5B9BD5" metalness={0.3} roughness={0.5} />
    </mesh>
  );
}

// --- Viewer wrapper ---
export default function STLViewerSection() {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 w-full h-full flex items-center justify-center overflow-hidden">
      <Canvas camera={{ position: [0, 0, 1.6], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 2, 3]} intensity={0.9} />
        <Suspense fallback={null}>
          <Model url="/models/fuelcellholder.stl" />
        </Suspense>
        <OrbitControls enablePan enableZoom />
      </Canvas>
    </div>
  );
}
