import * as THREE from 'three'
import React, { useRef, useMemo, useEffect } from 'react'
import { extend, useThree, useFrame } from '@react-three/fiber'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass'
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass'
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass'

// import { WaterPass } from '../post/Waterpass'

extend({ EffectComposer, ShaderPass, RenderPass, GlitchPass, UnrealBloomPass, FilmPass, AfterimagePass })

export default function Effects() {
  const composer = useRef()
  const { scene, gl, size, camera } = useThree()
  const aspect = useMemo(() => new THREE.Vector2(512, 512), [])
  useEffect(() => void composer.current.setSize(size.width, size.height), [size])
  useFrame(() => composer.current.render(), 1)
  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" scene={scene} camera={camera} />
      {/* <waterPass attachArray="passes" factor={1.5} /> */}
      <filmPass attachArray="passes" args={[0.6,0.8,2048,false]}/>
      <afterimagePass attachArray="passes" args={[0.75]} />
      <unrealBloomPass attachArray="passes" args={[aspect, .4, .4, .3]} />
    </effectComposer>
  )
}