import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  background-color: #016b83;
  border-radius: 15px;
`;
export const NavLink = styled(Link)`
  text-decoration: unset;
  cursor: pointer;
  padding: 4px;
`;
export const ImgLogo = styled.img`
  width: 280px;
  height: auto;
  margin-top: 10px;
  position: sticky;
`;

export const DivLogo = styled.div``;

export const RandomBtn = styled.button`
  background-color: greenyellow;
  font-size: 16px;
  font-weight: bold;
  color: black;
  border: none;
  padding: 8px 20px;
  border-radius: 0.5em;
  margin: 0 auto;
  cursor: pointer;
  &:hover {
    transform: translateY(-1%);
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4);
  }
`;
