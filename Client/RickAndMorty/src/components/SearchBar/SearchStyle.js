import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
export const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;
export const SearchInput = styled.input`
  padding: 5px;
  border-radius: 0.5em;
  margin-left: auto;
  align-items: center;
`;

export const SearchButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 0.5em;
  cursor: pointer;
  &:hover {
    transform: translateY(-1%);
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4);
  }
`;
