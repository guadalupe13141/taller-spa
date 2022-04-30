import Form from "../../components/Form";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon, updatePokemon } from "../../store/actions/pokemonActions";

function UpdatePokemon() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const {selectedPokemon: pokemon} = useSelector((state) => state.pokemons);
  const [formData, setFormData] = useState({
    name: "",
    base_experience: "",
    height: "",
    weight: "",
    sprite: "",
  });

  useEffect(() => {
    dispatch(fetchPokemon(id));
  }, [dispatch, id]);

  useEffect(()=>{
    if(pokemon){
      delete pokemon.id;
      serFormData(pokemon);
    }
  }, [pokemon]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
     dispatch(updatePokemon(id, formData))
     navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <h1 className="white-text m-4 text-center">Editar pokemon</h1>
      <Row className={"justify-content-center"}>
        <Col xs={6}>
          <Card className="p-4">
            <Form
              handleSubmit={handleSubmit}
              formData={formData}
              setFormData={setFormData}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default UpdatePokemon;