import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const DesktopComputers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        object={computer.scene}
        scale={0.6}
        position={[0, -3.25, -1.5]}
        rotation={[-0.001, -0.2, -0.1]}
      />
    </mesh>
  );
};

const MobileComputers = () => {
  const computer = useGLTF('./cv_Qrcode/bl_cvQrcode1.gltf');
  // const computer = useGLTF("./resume/resume2023_31Dec.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        object={computer.scene}
        scale={0.6}
        position={[0, -2, -1.2]}
        rotation={[-0.001, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      const isMobileDevice = window.matchMedia('(max-width: 500px)').matches;
      const isHorizontal = Math.abs(window.orientation) === 90;
  
      setIsMobile(isMobileDevice || isHorizontal);
    };
  
    const handleMediaQueryChange = (event) => {
      checkOrientation();
    };
  
    const handleOrientationChange = () => {
      checkOrientation();
    };
  
    window.addEventListener('resize', handleMediaQueryChange);
    window.addEventListener('orientationchange', handleOrientationChange);
  
    checkOrientation();
  
    return () => {
      window.removeEventListener('resize', handleMediaQueryChange);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        {isMobile ? (
          <Suspense fallback={<CanvasLoader />}>
            <MobileComputers />
          </Suspense>
        ) : (
          <DesktopComputers />
        )}
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;