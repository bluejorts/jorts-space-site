import * as THREE from 'three'
import React, { forwardRef, useLayoutEffect, useRef, useMemo } from 'react'
import { extend, useLoader } from '@react-three/fiber'
import { Font, FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import Neuropol from './Neuropol_Regular.json'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'

extend({TextGeometry})

export default function TextCustom({text, ...props}) {
const font = new FontLoader().parse(Neuropol);
  // configure font geometry
  const textOptions = {
    font,
    size: 1,
    height: .5
  };

  return (
    <group {...props}>
      <mesh>
        <textGeometry attach='geometry' args={[text, textOptions]} />
        <meshStandardMaterial attach='material' color={"cyan"} emissive={true} emissiveIntensity={5} />
      </mesh>
    </group>
  );
}
