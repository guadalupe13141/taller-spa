import Pokemon from "./components/Pokemon";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [backUpPokemon, setBackUpPokemon] = useState([]);

  useEffect(() => {
    try {
      let fetchPokemon = async function () {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon",
        );
        setAllPokemon(response.data.results);
        setBackUpPokemon(response.data.results);
      };
      fetchPokemon();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const buscarPokemon = function (event) {
    let pokeArray = [...backUpPokemon];
    pokeArray = pokeArray.filter((pokemon) => {
      let pokename = `${pokemon.name}`;
      return (
        pokename.toLowerCase().search(event.target.value.toLowerCase()) !== -1
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
              return <Pokemon key={pokemon.name} pokemon={pokemon} />;
            })}
          </div>
        </Col>
      </Row>
    </Container>

  );
}

export default App;