import styles from "./Pokemon.module.css";
import { Card, Button} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import {removePokemon } from "../../store/actions/pokemonActions";


function Pokemon({ pokemon}) {
  const dispatch = useDispatch();
  const deletePokemon = async () => {
    dispatch(removePokemon(pokemon.id));
    alert("Se ha eliminado el pokemon exitosamente!");
  };

  return (
    <Card>
      <Card.Body className={`${styles.card}`}>
        <h3><strong>{pokemon.name}</strong></h3>
        <p> <strong>Experiencia:</strong> {`${pokemon.base_experience}`}</p>  
        <p> <strong>Altura:</strong> {`${pokemon.height}`}</p>
        <p> <strong>Peso:</strong> {`${pokemon.weight}`}</p>
        <div className={`mb-5 ${styles.pokemImg}`}>
          <img src={pokemon.sprite} alt="pokemon-img" />
        </div>
        <div>
          <NavLink to={`/actualizar/${pokemon.id}`} className="btn btn-primary">Actualizar</NavLink>
          <Button variant="danger" onClick={deletePokemon}>
            Eliminar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Pokemon;