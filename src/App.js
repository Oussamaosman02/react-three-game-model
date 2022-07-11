import { Loader } from "@react-three/drei";
import { Suspense } from "react";
import "./App.css";
import Scene from "./cmpnts/Scene";

function App() {
  return (
    <div className="App">
      {/*Loading template will the scene loads */}
      <Suspense fallback={<Loader 
      containerStyles={{
        width:"100vw",
        height:"100vh",
        margin:0,
        padding:0
      }}
      />}>
        <Scene />
      </Suspense>
    </div>
  );
}

export default App;
