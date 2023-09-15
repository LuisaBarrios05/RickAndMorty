import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styled.div`
  background-color: rgba(5, 0, 0, 0.6);
  border-radius: 15px;
  padding: 5px;
  margin: 5px;
  margin-top: 30px;
  cursor: pointer;
  display: inline-block;
  flex: 0 0 auto;
  flex-wrap: wrap;
  width: 250px;
  height: 550px; /* Establece una altura fija para todas las tarjetas */
  vertical-align: bottom;
  transition: transform 0.3s ease-in-out;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-3%);
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

export const LinkDetail = styled(Link)`
  /*white-space: nowrap;  Evita que el texto se rompa en varias líneas */
  overflow: hidden; /* Oculta el contenido que excede el ancho */
  text-overflow: ellipsis;
`;

export const Image = styled.img`
  max-width: 85%;
  max-height: 75%;
  border-radius: 10px;
  margin-top: 0px;
`;
