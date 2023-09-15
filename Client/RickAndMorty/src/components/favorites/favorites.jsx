import {SelectOrder, SelectFilter} from "./favoritesStyle"
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";



 function Favorites(){

  const myFavorites = useSelector((state) => state.myFavorites)

    const dispatch = useDispatch();

  function handleOrder(evento) {
    dispatch(orderCards(evento.target.value));
  };

  function handleFilter(evento) {
    dispatch(filterCards(evento.target.value));
  }
    
    return(
        <div>
            <div>
                <SelectOrder name="order" defaultValue="orderChar" onChange={handleOrder}>
                    <option value="orderChar" disabled="disabled">Order...</option>
                    <option value="ascedente">Ascendente</option>
                    <option value="descendente">Descendente</option>
                </SelectOrder>
                    
                <SelectFilter name="filter" onChange={handleFilter} defaultValue="All">
                    <option value="All">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknow</option>
                </SelectFilter>
            </div>

            <div>
        {myFavorites.map((char) => (
          <Card
            key={char.id}
            id={char.id}
            name={char.name}
            status={char.status}
            gender={char.gender}
            species={char.species}
            origin={char.origin.name}
            image={char.image}
          />
        ))}
      </div>
            
        </div>
        
    );
}

export default Favorites
