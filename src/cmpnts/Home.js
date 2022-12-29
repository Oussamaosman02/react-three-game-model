import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Home() {
  const Boton = styled.button`
    position: relative;
    height: 20%;
    align-self: center;
    width: 20vw;
    height: 5vh;
    -webkit-text-stroke: 0.1px navy;
    border-radius: 25px;
    top: -2vh;
    margin: 0 0 4vh 0;
    font-weight: 900;
    background-color: #00539cff;
    color: whitesmoke;
    border-style: none;
  `;
  const Seccion = styled.section`
    position: relative;
    width: 90vw;
    margin: 2vh 0 0vh 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 0;
  `;
  return (
    <div
      style={{
        backgroundColor: "rgba(138, 170, 229, 0.5)",
        maxWidth: "100vw",
        minHeight: "100vh",
        margin: "0",
        padding: "0",
      }}
    >
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Searching Now
      </h1>
      <h2
        style={{
          textAlign: "center",
        }}
      >
        Tu nuevo juego!!
      </h2>
      <Seccion>
        <Seccion>
          <img
            style={{
              width: "40%",
              border: "1px solid navy",
            }}
            src="https://telegra.ph/file/9856c002cafb2d72401cf.png"
            alt="Models involving the project"
          />
          <Link to="/models">
            <Boton>Avatares</Boton>
          </Link>
        </Seccion>
        <Seccion>
          <img
            style={{
              width: "40%",
              border: "1px solid navy",
            }}
            src="https://telegra.ph/file/539f36b6af35b495170c9.jpg"
            alt="Models involving the project"
          />
          <Link to="/scene">
            <Boton>Escena de Inicio</Boton>
          </Link>
        </Seccion>
      </Seccion>
    </div>
  );
}
