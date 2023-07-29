import React, { Suspense , useEffect, useState  } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth =  ({isMobile}) => {
  const phone = useGLTF("./pp/scene.gltf");
 

  return (
    <mesh>
      <primitive 
        object={phone.scene} 
        scale={5} 
        position-y={-4} 
        rotation-y={0} 
      />
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
  useEffect(() => {
      //add a listener for changes to the screen size 
      const mediaQuery = window.matchMedia('(max-width: 400px)');  //check whether we are on a mobile device 
      
      // set the initial value of the 'isMobile' state
      setIsMobile(mediaQuery.matches) ; 

     // Define a callback function to handle changes to the media query
      const handleMediaQueryChange = (event) => { 
        setIsMobile(event.matches); 
      }

      // add the callback function as a listener for changes to the media query 
      mediaQuery.addEventListener('change' , handleMediaQueryChange);

      return () => {
        mediaQuery.removeEventListener('change' , handleMediaQueryChange); 
      }
    }, [])
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
        position: [-10, 4, 15],
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