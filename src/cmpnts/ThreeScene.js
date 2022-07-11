import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Terrain } from "./Plane";
import posPLano from "./positions.json";
import ModelB from "../Scene1";
import ModelE from "../Scene4";
import ModelC from "../Scene2";

const ThreeScene = () => {
  const terPos = posPLano;
  return (
    <Canvas
      style={{ backgroundColor: "black" }}
      shadows={true}
      camera={{ position: [25, 33, 33], fov: 90 }}
    >
      {/*background color of the canvas*/}
      <color attach="background" args={["#000"]} />
      {/*creation of the  spot light that generates shadows */}
      <spotLight
        color={"#fff"}
        decay={1}
        power={6}
        intensity={5}
        distance={60}
        angle={Math.PI}
        position={[-7, 50, 4]}
        castShadow
        shadow-mapSize={[1024, 1024]}
      >
        {/*Field that will contain the shadows */}
        <orthographicCamera attach="shadow-camera" args={[-60, 60, 60, -60]} />
      </spotLight>
      {/*all the planes positions mentioned in the positions.json
      I preffered different planes instead one larger becauese it looks better and more realistic
      */}
      {terPos.map((plano) => {
        return <Terrain x={plano.x} z={plano.y} key={plano.id} />;
      })}
      {/*all the models,are imported from gltfjsx tool.
        All the skinned mesh of the models had to have castShadow and receiveShadow
       */}
      <ModelB animacion={true} posicion={[0, 10.3, -10]} />
      <ModelE animacion={true} posicion={[0, -20, 15]} />
      <ModelC animacion={true} posicion={[-7, 0, 4]} />
      {/*to control the complete scene and rotate it automaically */}
      <OrbitControls autoRotate />
    </Canvas>
  );
};

export default ThreeScene;
