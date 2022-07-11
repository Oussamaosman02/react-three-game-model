import { Plane, useTexture } from "@react-three/drei";
import React from "react";
import { DoubleSide, LinearEncoding } from "three";

export function Terrain({ x = 0, y = -0.2, z = 0 }) {
  /*name and path of the textures
  available names are:
  aerial_rocks_02
  aerial_rocks_04
  coast_sand_04
  forest_leaves_03
  rock_boulder_cracked
  */
  let name = "coast_sand_04";
  let path = `./assets/textures/${name}_`;
  /*
  Here are the textures map loaded in it's rescpective map
  */
  const cTxtr = useTexture({
    map: `${path}diff_1k.jpg`,
    displacementMap: `${path}disp_1k.jpg`,
    aoMap: `${path}arm_1k.jpg`,
    roughnessMap: `${path}arm_1k.jpg`,
    metalnessMap: `${path}arm_1k.jpg`,
    normalMap: `${path}nor_gl_1k.jpg`,
  });
  return (
    <Plane
      args={[25, 25, 50, 50]}
      position={[x, y, z]}
      rotation-x={-Math.PI * 0.5}
      castShadow
      receiveShadow
    >
      {/*Plane receive shadows and the maps and materials */}
      <meshStandardMaterial
        {...cTxtr}
        normalMap-encoding={LinearEncoding}
        side={DoubleSide}
      />
    </Plane>
  );
}
