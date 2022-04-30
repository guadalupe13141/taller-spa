import { ActionTypes } from "../constants";

const reducer = (state=0, {type, payload}) => {
    switch(type){
        case ActionTypes.DEPOSITAR:
            return state + payload;
        case ActionTypes.RETIRAR:
            return state - payload;
        default:
            return state;
        
    }
};

export default reducer;