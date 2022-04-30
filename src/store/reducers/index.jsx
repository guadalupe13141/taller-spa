import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import pokemonReducer from "./pokemonReducer"

const reducers = combineReducers({
    account: accountReducer,
    pokemons: pokemonReducer,
});

export default reducers;