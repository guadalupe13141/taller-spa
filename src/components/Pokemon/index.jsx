import styles from "./Pokemon.module.css";
import { Card, Button} from "react-bootstrap";
import axios from "../../utils/axios";
import ShowModal from "../Modal";

function Pokemon({ pokemon, fetchPokemons }) {
  const deletePokemon = async () => {
    await axios.delete(`/pokemons/${pokemon.id}`);
    fetchPokemons();
    alert("Se ha eliminado el pokemon exitosamente!");
  };

  return (
    <Card>
      <Card.Body className={`${styles.card}`}>
        <h3><strong>{pokemon.name}</strong></h3>
        <p> <strong>Experiencia:</strong> {`${pokemon.base_experience}`}</p>  
        <p> <strong>Altura:</strong> {`${pokemon.height}`}</p>
        <p> <strong>Peso:</strong> {`${pokemon.weight}`}</p>
        <div className={`mb-5 ${styles.pokemonImg}`}>
          <img src={pokemon.sprite} alt="pokemon-img" />
        </div>
        <div>
          <ShowModal
            pokemon={pokemon}
            type={"update"}
            fetchPokemons={fetchPokemons}
          />
          <Button variant="danger" onClick={deletePokemon}>
            Eliminar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Pokemon;