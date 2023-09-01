import { NavContainer, NavLink, ImgLogo, DivLogo, RandomBtn } from "./NavStyle";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import logo from "../../assets/Rick_and_Morty.png";

export default function NavBar({ onSearch, random }) {
    return (
        <NavContainer>
           <DivLogo> <ImgLogo src={logo}></ImgLogo> </DivLogo>
           
                <NavLink to="/about">About</NavLink>
                <NavLink to="/home">Home</NavLink> 
                <NavLink to="/favorites">Favorites</NavLink>
            
            <SearchBar onSearch={onSearch} random={random}/>  
        </NavContainer>
    )
}
