import {CardContainer, CloseButton, Image, LinkDetail} from "./CardStyle";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions";
import { useState, useEffect } from "react";

function Card({name, species, gender, id, image, onClose, addFavorite, removeFavorite, myFavorites}) {
   
   const [isFav, setIsFav] = useState(false);
   const [closeBtn, setCloseBtn] = useState(true);

   useEffect(() => {
      if (!onClose) {
        setCloseBtn(false);
      }
    }, []);

   useEffect(()=>{ 
      myFavorites.forEach(charFav => {
         charFav.id === id && setIsFav(true) 
      })
   },[myFavorites])
   

   const handleFavorite = () => {
      if (isFav) { 
        setIsFav(false);
        removeFavorite(id);
      } else { 
        setIsFav(true);
        addFavorite({
          id,
          name,
          species,
          gender,
          origin,
          image,
        });
      }
    };

   const navigate = useNavigate();
   function navigateHandler() {
      navigate(`/deatil/${id}`);
   }

   return (
      <CardContainer>
      {location.pathname !== "/favorites" && <button
          onClick={() => {
            onClose(id);
          }}
        >
          X
        </button>}

         {isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )}
         <h2>{id}</h2>
         <LinkDetail to={`/detail/${id}`}>
         <h2>{name}</h2> 
         </LinkDetail>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin.name}</h2>
         <Image src={image} alt={name} onClick={navigateHandler} /> 
      </CardContainer>
   );
}

const mapDispatchToProps = (dispatch) => { 
   return {
      addFavorite: (character) => dispatch(addFavorite(character)), 
      removeFavorite: (id) => dispatch(removeFavorite(id)),
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
