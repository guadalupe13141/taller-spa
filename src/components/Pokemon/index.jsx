import styles from "./Pokemon.module.css";
import { Card, Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import UpdateModal from "../UpdateModal";

function Pokemon(props) {
  //const {pokemon} = props;
  const { pokemon, fetchPokemons, showModal } = props;

  const deletePokemon = async () => {
    await axios.delete(
      `https://hidden-plains-73441.herokuapp.com/api/v1/pokemons/${pokemon.id}`
    );
    props.fetchPokemons();
    alert("Se ha eliminado el pokemon exitosamente!");
  };

  return (
    <Card>
      <Card.Body className={`${styles.card}`}>
        <h3><strong>{pokemon.name}</strong></h3>
        <p> <strong>Experiencia:</strong> {`${pokemon.base_experience}`}</p>  
        <p> <strong>Altura:</strong> {`${pokemon.height}`}</p>
        <p> <strong>Peso:</strong> {`${pokemon.weight}`}</p>
        <div className={`${styles.actionsContainer}`}>
          <UpdateModal pokemon={pokemon} fetchPokemons={fetchPokemons} />
          <Button variant="danger" onClick={deletePokemon}>
            Eliminar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Pokemon;