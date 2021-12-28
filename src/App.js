import './App.css';
import { Canvas, useFrame } from '@react-three/fiber';
import NanachiHead from './components/canvas/NanachiHead';
import { Suspense, useRef, useState, useEffect, useMemo } from 'react';
import * as THREE from 'three'
import ReactDOM from 'react-dom'
import Effects from './components/canvas/Effects'
import Sparks from './components/canvas/Sparks'
import Particles from './components/canvas/Particles'
import { OrbitControls, Loader, Reflector, Text } from '@react-three/drei';
import TextCustom from './components/canvas/TextCustom'

function TextTest({ hover }) {
  const ref = useRef()
  // useFrame((state) => {
  //   if (ref.current) {
  //     ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, state.mouse.x * 2, 0.1)
  //     ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, state.mouse.y / 2, 0.1)
  //     ref.current.rotation.y = 0.8
  //   }
  // })
  return (
    <group ref={ref}>
      <Text
        fontSize={2}
        material={new THREE.MeshStandardMaterial()}
        color="white"
        onClick={(e) => window.open('https://github.com/react-spring/react-three-fiber/blob/master/whatsnew.md', '_blank')}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        jorts.space
      </Text>
    </group>
  )
}


function App() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  return (
    <>
      <Canvas
        mode='concurrent'
        camera={{ fov: 50, position: [0, 0, 30] }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.setClearColor(new THREE.Color('#000000'))
        }}
        dpr={window.devicePixelRatio}
      >
        <Suspense fallback={null}>
          {/* <ambientLight intensity={.75}/> */}
          {/* <fog attach="fog" args={['white', 50, 190]} /> */}
          <pointLight distance={40} intensity={8} color="green" />
          <NanachiHead scale={[50,50,50]} position={[0,0,-10]}/>
          <group scale={[.3,.3,.3]}>
            <Particles count={isMobile ? 500 : 1000} />
            <Sparks radius={1} count={20} colors={['#A2CCB6', '#FCEEB5', '#EE786E', '#e0feff', 'lightpink', 'lightblue']} />
          </group>
          <Reflector
            args={[200, 200]} // PlaneBufferGeometry arguments
            resolution={2048} // Off-buffer resolution, lower=faster, higher=better quality
            mirror={.5}
            mixStrength={1} // Strength of the reflections
            rotation={[-Math.PI/2,0,0]}
            position={[0,-10,0]}
          />
          {/* <TextTest></TextTest> */}
          {/* <TextCustom text={"jorts.space"} position={[-5,1,-5]}></TextCustom> */}
          <Effects />
          {/* <mesh>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh> */}
          {/* <OrbitControls></OrbitControls> */}
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}

export default App;