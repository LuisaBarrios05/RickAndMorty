import './App.css';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/Nav/Nav';
import axios from 'axios';
import Detail from './views/detail/detail';
import About from './views/about/about';
import ErrorPage from './views/errorPage/errorPage';
import { Form, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import LandingPage from './views/landingPage/landingPage';
import Favorites from './components/favorites/favorites';


function App() {
   
   const [characters, setCharacters] = useState([])
   
   function onSearch(id) {

      if(!id) return alert('Ingrese un número del 1 al 826')
    if(characters.some(char => char.id === parseInt(id))){
      alert(`Ya existe el personaje con el id ${id}`)
      return
    }

      axios(`https://rym2-production.up.railway.app/api/character/${id}?key=henrym-luisabarrios05`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function onClose(id) {
      let deleted = characters.filter(character => character.id !== Number(id))
      setCharacters(deleted);
   }

  function randomBtn() {

      let haveIt = [];

      let random = (Math.random() * 826).toFixed();

      random = Number(random);

      if (!haveIt.includes(random)) {
         haveIt.push(random);
         fetch(`https://rym2-production.up.railway.app/api/character/${random}?key=henrym-luisabarrios05`)
            .then((response) => response.json())
            .then((data) => {
               if (data.name) {
                  setCharacters((oldChars) => [...oldChars, data]);
               } else {
                  window.alert('¡No hay personajes con este ID!');
               }
            });
      } else{
         return "Ya agregaste todos los personajes";
      }
   }


   const {pathname} = useLocation()

   const [access, setAccess] = useState(false)

   const navigate = useNavigate()

   const EMAIL = "luisa@gmail.com"
   const PASSWORD = "abcdef12"

   const login = (userData) => {
      if(userData.email === EMAIL && userData.password === PASSWORD){
      setAccess(true)
      navigate('/home')
   } else alert("Usuario o contraseña incorrecta")
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
      <div className='App'>
         { pathname !== '/' && <NavBar onSearch={onSearch} random={randomBtn} />} {/*si la ruta actual no es la principal renderiza nav. */}
         
         <Routes>
            <Route path="/" element={<LandingPage login={login}/>}/>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path="/favorites" element={<Favorites/>}/> 
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="*" element={<ErrorPage />} /> 
         </Routes>
      </div>
   );
}

export default App;
