import Form from "../../components/Form";
import { Card, Container, Row, Col } from "react-bootstrap";
import {useNavigate } from "react-router-dom";
import {useState } from "react";
import {useDispatch} from "react-redux";
import { addPokemon } from "../../store/actions/pokemonActions";

function CreatPokemon(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        base_experience: "",
        height: "",
        weight: "",
        sprite: "",
    });

    const handleSubmit = async (e) => {
        try {
        e.preventDefault();
        dispatch(addPokemon(formData));
        navigate("/");
        } catch (err) {
        console.log(err);
        }
    };

    return(
    <Container>
      <h1 className="white-text m-4 text-center">Crear pokemon</h1>
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

export default CreatPokemon;