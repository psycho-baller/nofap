import { useRef } from "react";
import {
  //   useHelper,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";

export default function Experience() {
  const cube = useRef();
  const colorArray = [
    "#FF0000",
    "#FF7F00",
    "#FFFF00",
    "#00FF00",
    "#0000FF",
    "#4B0082",
    "#8B00FF",
  ];

  // float 32 array for the random colors
  const color = new Float32Array(600);
  

  return (
    <>
      <ambientLight intensity={0.5} />

      <Sparkles
        /** Number of particles (default: 100) */
        count={200}
        /** Speed of particles (default: 1) */
        speed={0.2}
        /** Opacity of particles (default: 1) */
        // opacity?: number | Float32Array
        /** Color of particles (default: 100) */
        // random color
        color={colorArray[Math.floor(Math.random() * colorArray.length)]}
        /** Size of particles (default: randomized between 0 and 1) */
        size={2}
        /** The space the particles occupy (default: 1) */
        scale={5}
        /** Movement factor (default: 1) */
        // noise?: number | [number, number, number] | THREE.Vector3 | Float32Array
      />
    </>
  );
}
