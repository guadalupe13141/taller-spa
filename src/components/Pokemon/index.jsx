import styles from "./Pokemon.module.css";
import { Card } from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";

function Pokemon(props) {
  //const {pokemon} = props;
  const [pokemon, setPokemon] = useState(props.pokemon);  

  useEffect(() => {
    try{
      const fetchInfo = async() => {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        setPokemon(response.data);
      };
      fetchInfo();
    } catch (err) {
      console.log(err);
    }
  }, [pokemon.name]);

  return (
    <Card>
      <Card.Body className={`${styles.card}`}>
        <h3><strong>{pokemon.name}</strong></h3>
        <p> <strong>Experience:</strong> {`${pokemon.base_experience}`}</p>  
        <p> <strong>Height:</strong> {`${pokemon.height}`}</p>
        <p> <strong>Weight:</strong> {`${pokemon.weight}`}</p>
      </Card.Body>
    </Card>
  );
}

export default Pokemon;