import { Button, Form } from "react-bootstrap";

function FormPokemon({handleSubmit, setFormData, formData }) {
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div>
        <div className="form">

        </div>
     <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="lab">Nombre:</Form.Label>
            <Form.Control
            type="text"
            name="name"
            placeholder="Ingresa el nombre"
            onChange={handleChange}
            value={formData.name}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="lab">Experiencia:</Form.Label>
            <Form.Control
            type="text"
            placeholder="Ingresa la experiencia"
            name="base_experience"
            onChange={handleChange}
            value={formData.base_experience}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="lab"column>Altura:</Form.Label>
            <Form.Control
            type="text"
            name="height"
            placeholder="Ingresa la altura"
            onChange={handleChange}
            value={formData.height}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="lab">Peso:</Form.Label>
            <Form.Control
            type="text"
            name="weight"
            placeholder="Ingresa el peso"
            onChange={handleChange}
            value={formData.weight}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="lab">Sprite:</Form.Label>
            <Form.Control
            type="text"
            name="sprite"
            placeholder="Ingresa el sprite"
            onChange={handleChange}
            value={formData.sprite}
            />
        </Form.Group>
        <Button className="guardar" variant="primary" type="submit">
            Guardar
        </Button>
        
      </Form>
    
    </div>
    
        
  );
}

export default FormPokemon;