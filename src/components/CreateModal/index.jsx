import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";

function ShowModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    name: "",
    base_experience: "",
    height: "",
    weight: "",
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.post(
        "https://hidden-plains-73441.herokuapp.com/api/v1/pokemons",
        formData
      );
      props.fetchPokemons();
      handleClose();
      alert("Se ha agregado el pokemon exitosamente!");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Agregar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear nuevo Pokemon</Modal.Title>
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

export default ShowModal;