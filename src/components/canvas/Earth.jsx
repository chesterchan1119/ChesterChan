import React, { Suspense , useEffect, useState  } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth =  ({isMobile}) => {
  const modelPath = isMobile ? "./resume/resume2023_31Dec.gltf" : "./talking/scene.gltf";
  const model = useGLTF(modelPath);
  const scale = isMobile ? 2 : 5;
  const positionY = isMobile ? 1 : -4.5;

  return (
    <mesh>
      <primitive object={model.scene} scale={[scale, scale, scale]} position-y={positionY} rotation-y={0} />

      <hemisphereLight intensity={0.15} groundColor ="black" />
      <pointLight intensity={1}/> 
      <spotLight 
            position= {isMobile? [-20,100,10] :[-20,100,10]} 
            angle={0.12}
            penumbra={1} 
            intensity={0.5} 
            castShadow
            shadow-mapSize={1024}
          
          /> 
    </mesh>
  );
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false) ;
  const cameraPosition = isMobile ? [-10, 4, 32] : [-10, 4, 15];
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
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 30,
        near: 0.1,
        far: 200,
        position: cameraPosition,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth  isMobile={isMobile} />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;