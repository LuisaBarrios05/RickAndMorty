import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  /* background-color: #0d1523; */
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.9);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const NavLink = styled(Link)`
  text-decoration: unset;
  cursor: pointer;
  padding: 4px;
  margin: 0px;
`;
export const ImgLogo = styled.img`
  width: 295px;
  height: auto;
  margin-top: 10px;
  position: sticky;
`;

export const RandomBtn = styled.button`
  background-color: greenyellow;
  font-size: 16px;
  font-weight: bold;
  color: black;
  border: none;
  padding: 8px 20px;
  border-radius: 0.5em;
  margin-right: 0 10px;
  cursor: pointer;
  &:hover {
    transform: translateY(-1%);
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4);
  }
`;
