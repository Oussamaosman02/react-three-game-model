import { Float } from "@react-three/drei";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Containr from "./cmpnts/Contenedor";
import ModelB from "./Scene1";
import ModelC from "./Scene2";
import ModelE from "./Scene4";

function Main() {
  const Boton = styled.button`
    position: relative;
    height: 20%;
    align-self: center;
    width: 20vw;
    height: 5vh;
    -webkit-text-stroke: 0.1px navy;
    border-radius: 25px;
    top: -2vh;
    left: 39vw;
    margin: 0 0 4vh 0;
    font-weight: 900;
    background-color: #00539cff;
    color: whitesmoke;
    border-style: none;
  `;
  return (
    <>
      {/*Models for the home page */}
      <Containr
        nombreModelo="Junkrat"
        xc={13}
        zc={16.5}
        yc={4}
        xp={10}
        zp={10}
        yp={-20}
        descripcion={
          "Esta es una descripcion de este personaje del juego.Se llama Junkrat y es uno de los principales jugadors que vas a poder controlar."
        }
      >
        <ModelC animacion={false} posicion={[7, -20, 7]} />
      </Containr>
      <Containr
        nombreModelo="Michi-bot"
        xc={8}
        zc={23}
        yc={4}
        xp={0}
        zp={10}
        yp={-18.5}
        descripcion={
          "Esta es una descripcion de este personaje del juego.Se llama Michi-Bot y es uno de los principales jugadors que vas a poder controlar. "
        }
      >
        <Float>
          <ModelE animacion={false} posicion={[3, -12, 5]} />
        </Float>
      </Containr>
      <Containr
        nombreModelo="Buster-Drone"
        xc={8}
        zc={23}
        yc={4}
        xp={0}
        zp={10}
        yp={-17}
        descripcion={
          "Esta es una descripcion de este personaje del juego.Se llama Buster-Drone y es uno de los principales jugadors que vas a poder controlar. "
        }
      >
        <Float>
          <ModelB animacion={false} posicion={[3, 8, 10]} />
        </Float>
      </Containr>

      <Link to="/scene">
        <Boton>Escena</Boton>
      </Link>
    </>
  );
}

export default Main;
