import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

let initialState = { myFavorites: [], allCharacters: [] };
//allCharacter es una copia para filtrar y ordenar para que despues se muestre en myFavorites.
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: action.payload,
      };

    case FILTER:
      const filtered = state.allCharacters.filter(
        (char) => char.gender === action.payload
      );
      return {
        ...state,
        myFavorites: action.payload === "All" ? state.allCharacters : filtered,
      };

    case ORDER: //no funciona el orden ascendente...
      const allCharactersOrder = [...state.allCharacters];
      if (action.payload === "ascendente") {
        allCharactersOrder.sort((a, b) => (a.id > b.id ? 1 : -1));
      }
      if (action.payload === "descendente") {
        allCharactersOrder.sort((a, b) => (b.id > a.id ? 1 : -1));
      }
      return {
        ...state,
        myFavorites: allCharactersOrder,
      };

    default:
      return { ...state };
  }
}
