import styled, { keyframes } from "styled-components";

const animName = keyframes`
 0%,50%,100% {
  opacity:0;
 }
 25%,75% {
  opacity:1;
 }
 `;
const Paragraf = styled.p`
  border-radius: 25vw;
  position: absolute;
  padding: 1%;
  overflow: hidden;
  background-color: transparent;
  right: 1%;
  bottom: 1%;
  opacity: 1;
  z-index: 99;
  border: 1px solid white;
`;
const HeadB = styled.h1`
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 0.5px hotpink;
  animation-name: ${animName};
  animation-duration: 4s;
  animation-iteration-count: infinite;
`;

export default function Letters() {
  return (
    <>
      <Paragraf>
        <HeadB>Proximamente</HeadB>
      </Paragraf>
    </>
  );
}
