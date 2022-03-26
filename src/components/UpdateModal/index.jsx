import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

function UpdateModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    name: props.pokemon.name,
    base_experience: props.pokemon.base_experience,
    height: props.pokemon.height,
    weight: props.pokemon.weight,
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(formData);
      await axios.put(
        `https://hidden-plains-73441.herokuapp.com/api/v1/pokemons/${props.pokemon.id}`,
        formData
      );
      props.fetchPokemons();
      handleClose();
      alert("Se ha modificado el pokemon exitosamente!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Editar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Pokemon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Ingresa el nombre"
                onChange={handleChange}
                value={formData.name}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Experiencia:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa el base experience"
                name="base_experience"
                onChange={handleChange}
                value={formData.base_experience}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Altura:</Form.Label>
              <Form.Control
                type="text"
                name="height"
                placeholder="Ingresa el height"
                onChange={handleChange}
                value={formData.height}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Peso:</Form.Label>
              <Form.Control
                type="text"
                name="weight"
                placeholder="Ingresa el weight"
                onChange={handleChange}
                value={formData.weight}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UpdateModal;