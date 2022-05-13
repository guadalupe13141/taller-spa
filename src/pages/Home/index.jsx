import Pokemon from "../../components/Pokemon";
import { Container, Row, Col, Form } from "react-bootstrap";
import "../../App.css";
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchPokemons} from "../../store/actions/pokemonActions"

function Home() {
  const dispatch = useDispatch();
  const {list:pokemons} = useSelector((state) => state.pokemons);

  useEffect(() => {
    try {
      dispatch(fetchPokemons());
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  const debounce = (callback, wait)=>{
    let timer;
    return(...args)=>{
      clearTimeout(timer);
      timer= setTimeout(()=>{
        callback(...args);
      }, wait);
    };
  };

  return(
    <Container className="mt-5">
    <Form>
      <Row>
        <Col xs={2} className="d-flex justify-content-end">
          <Form.Label className="label">Buscar:</Form.Label>
        </Col>
        <Col xs={10}>
          <Form.Control className="buscador"
            type="text"
            placeholder="Ingresa el nombre del Pokemon"
            name="name"
            onKeyUp={
              debounce(function(e){
                const filter = {[e.target.name]: e.target.value.trim()};
                dispatch(fetchPokemons(filter));

              },500)}
          />
        </Col>
        </Row>
      </Form>
      <Row>
        <Col>
          <div className="target m-5">
            {pokemons.map((pokemon) => {
               return (
                <Col
                key={pokemon.id}>
                  <Pokemon pokemon={pokemon} />
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