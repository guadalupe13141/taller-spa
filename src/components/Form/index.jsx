import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "../../utils/axios";

function ShowModal({pokemon, handleSubmit, setFormData, formData }) {

  let initialData = {};
  if (pokemon) {
    initialData = { ...pokemon };
    delete initialData.id;
  } else {
    initialData = {
      name: "",
      base_experience: "",
      height: "",
      weight: "",
      sprite: "",
    };
  }

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
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
            placeholder="Ingresa la experiencia"
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
            placeholder="Ingresa la altura"
            onChange={handleChange}
            value={formData.height}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Peso:</Form.Label>
            <Form.Control
            type="text"
            name="weight"
            placeholder="Ingresa el peso"
            onChange={handleChange}
            value={formData.weight}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Sprite:</Form.Label>
            <Form.Control
            type="text"
            name="sprite"
            placeholder="Ingresa el sprite"
            onChange={handleChange}
            value={formData.sprite}
            />
        </Form.Group>
        <Button variant="primary" type="submit">
            Guardar
        </Button>
        </Form>
        </>
  );
}

export default ShowModal;