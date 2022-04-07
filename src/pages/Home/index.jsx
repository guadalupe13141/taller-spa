import Pokemon from "../../components/Pokemon";
import { Container, Row, Col, Form } from "react-bootstrap";
import "../../App.css";
import { useState, useEffect, useCallback } from "react";
import axios from "../../utils/axios";

function Home() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [backUpPokemon, setBackUpPokemon] = useState([]);

  const fetchPokemons = useCallback(async () => {
    const response = await axios.get("/pokemons");
    setAllPokemon(response.data);
    setBackUpPokemon(response.data);
  }, []);

  useEffect(() => {
    try {
      fetchPokemons();
    } catch (err) {
      console.log(err);
    }
  }, [fetchPokemons]);

  const buscarPokemon = function (event) {
    let pokeArray = [...backUpPokemon];
    pokeArray = pokeArray.filter((pokemon) => {
      return (
        pokemon.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1
      );
    });
    setAllPokemon(pokeArray);
  };

  return(
    <Container className="mt-5">
    <Form>
      <Row>
        <Col xs={2} className="d-flex justify-content-end">
          <Form.Label className="label">Buscar:</Form.Label>
        </Col>
        <Col xs={10}>
          <Form.Control
            type="text"
            placeholder="Ingresa el nombre del Pokemon"
            onChange={buscarPokemon}
          />
        </Col>
        </Row>
      </Form>
      <Row>
        <Col>
          <div className="target m-5">
            {allPokemon.map((pokemon) => {
               return (
                <Col>
                  <Pokemon
                    key={pokemon.id}
                    pokemon={pokemon}
                    fetchPokemons={fetchPokemons}
                  />
                </Col>
               );
            })}
          </div>
        </Col>
      </Row>
    </Container>

  );
}

export default Home;