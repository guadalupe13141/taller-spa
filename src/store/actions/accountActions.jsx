import {ActionTypes} from "./constants/index";

export const depositar = (cantidad) => {
    return{
        type: ActionTypes.DEPOSITAR,
        payload: cantidad,
    };
};

export const retirar = (cantidad) => {
    return{
        type: ActionTypes.RETIRAR,
        payload: cantidad,
    };
};
