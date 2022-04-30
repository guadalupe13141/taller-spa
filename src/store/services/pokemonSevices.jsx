import axios from "../../utils/axios";

export const add = async function(data){
    return await axios.post(`/pokemons`, data);
}

export const getAll = async function(filters=""){
    let filterStr = filters ? "?":"";
    if(filters){
        for(const filter in filters){
            filterStr = filterStr + `${filter}=${filters[filter]}&`;

        }
    }
    return await axios.get("/pokemons");
}

export const remove = async function(id){
    return await axios.delete(`/pokemons/${id}`);
}

export const getOne = async function(id){
    return await axios.get(`/pokemons/${id}`);
}

export const update = async function(id, data){
    return await axios.put(`/pokemons/${id}`, data);
}