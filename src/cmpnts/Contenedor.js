import { Loader } from "@react-three/drei";
import React, { Suspense, useState } from "react";
import styled from "styled-components";
import ThreeScenes from "./ThreeScenes";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  align-content: center;
  flex-direction: column;
  width: 90vw;
  position: relative;
  left: 4.5vw;
  margin: 10vh 0;
  border-radius: 25px;
  background-color: rgba(138, 170, 229, 0.5);
  box-shadow: 0px 0px 20px -2px gray;
`;
const Box = styled.div`
  position: relative;
  width: 100%;
  height: 30vh;
  border-radius: 25px;
  padding: 0;
  align-self: center;
  margin: 0px 0 10px 0;
`;

const BoxBorder = styled.span`
  position: absolute;
  box-shadow: 0px 0px 30px -2px gray;
  width: 30vh;
  height: 20vh;
  border-radius: 25px;
  padding: 0;
  align-self: center;
  top: 10vh;
`;

export default function Containr({
  nombreModelo,
  descripcion,
  children,
  xc,
  yc,
  zc,
  xp,
  yp,
  zp,
}) {
  /*For showing the description */
  const [show, setShow] = useState(true);

  const Parrafo = styled.p`
    position: relative;
    padding: 2vw;
    margin-bottom: 1vh;
    display: ${show ? "block" : "none"};
  `;

  const Boton = styled.button`
    position: relative;
    height: 20%;
    align-self: center;
    width: 30vh;
    -webkit-text-stroke: 0.1px navy;
    border-radius: 25px;
    top: 0px;
    margin: 2vh 0;
    font-weight: 900;
    background-color: ${show ? "hotpink" : "#00539cff"};
    color: whitesmoke;
    border-style: none;
  `;
  const Headi = styled.h1`
    position: absolute;
    text-align: center;
    width: 70%;
    left: 14.8%;
    color: whitesmoke;
    font-weight: 500;
  `;

  return (
    <Container>
      <Headi>{nombreModelo}</Headi>
      <BoxBorder />
      <Suspense
        fallback={
          <>
            <BoxBorder>
              <Loader
                containerStyles={{
                  backgroundColor: "rgb(138, 170, 229)",
                  borderRadius: "25px",
                }}
                innerStyles={{ color: "red", backgroundColor: "hotpink" }}
              />
            </BoxBorder>
            <Box />
          </>
        }
      >
        <Box>
          <ThreeScenes xc={xc} yc={yc} zc={zc} xp={xp} zp={zp} yp={yp}>
            {children}
          </ThreeScenes>
        </Box>
      </Suspense>
      <Boton
        onClick={() => {
          setShow(!show);
        }}
      >
        Info
      </Boton>
      <Parrafo>{descripcion}</Parrafo>
    </Container>
  );
}
