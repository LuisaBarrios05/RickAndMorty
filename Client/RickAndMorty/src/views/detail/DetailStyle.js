import styled from "styled-components";

export const CardDetailContainer = styled.div`
  background-color: rgba(5, 0, 0, 0.6);
  border-radius: 15px;
  padding: 5px;
  margin: 5px;
  margin-top: 30px;
  cursor: pointer;
  display: inline-block;
  flex: 0 0 auto;
  flex-wrap: wrap;
  width: 750px;
  height: 410px; /* Establece una altura fija para todas las tarjetas */
  vertical-align: bottom;
  column-count: 2; /* Divide el contenido en 2 columnas */
  column-gap: 10px; /* Establece el espacio entre columnas */
  transition: transform 0.3s ease-in-out;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-3%);
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4);
  }
`;
