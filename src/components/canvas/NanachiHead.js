/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, textures } = useGLTF('/rantichi_head_only_web.glb')

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    // group.current.rotation.x = Math.PI / 1.75 + Math.cos(t / 4) / 8
    group.current.rotation.y = Math.sin(t / 4) / 8
    group.current.rotation.z = (Math.sin(t / 1.5)) / 20
    group.current.position.y = (Math.sin(t / 1.5)) / 10
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, -0.04, -0.01]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001.geometry}
          material={materials.MAT_Body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_1.geometry}
          material={materials.MAT_Emotes}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_2.geometry}
          material={materials.MAT_Hair}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/rantichi_head_only_web.glb')