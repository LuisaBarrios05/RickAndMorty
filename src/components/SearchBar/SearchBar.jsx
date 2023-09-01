import {SearchContainer, SearchInput, SearchButton} from './SearchStyle'
import { RandomBtn } from '../Nav/NavStyle';
import { useState } from "react";

export default function SearchBar({ onSearch, random }) {
   const [id, setId] = useState("") 
   function handleChange(event) {
      setId(event.target.value);
   }
   return (
      <SearchContainer>
         <RandomBtn className="random" onClick={random}>Random Character</RandomBtn>
         <SearchInput onChange={handleChange} type='search' name="search" value={id} placeholder="Ingresa un número..." />
         <SearchButton onClick={() => {
            onSearch(id);
            setId('');
         }}>Buscar</SearchButton>
         
      </SearchContainer>
   );
}
