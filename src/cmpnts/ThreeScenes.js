import { useThree, Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { Terrain } from "./Plane";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function ThreeScenes({ children, xc, yc, zc, xp, zp, yp }) {
  /*camera controls  for controling the max and min distance of zoom*/
  const CameraController = () => {
    const { camera, gl } = useThree();
    useEffect(() => {
      const controls = new OrbitControls(camera, gl.domElement);
      controls.minDistance = 5;
      controls.maxDistance = 30;
      return () => {
        controls.dispose();
      };
    }, [camera, gl]);
  };
  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ position: [xc, yc, zc], fov: 90 }}
    >
      {/*Position of the camara and also the height and width to occupy al the parents size*/}
      <CameraController />
      <ambientLight />
      {children}
      <Terrain x={xp} z={zp} y={yp} />
      {/*Plane */}
    </Canvas>
  );
}

export default ThreeScenes;
