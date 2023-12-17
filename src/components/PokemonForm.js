import React,{useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onHandleSubmit}) {
  const [formData, setFormData] = useState({
    name:'',
    hp:0,
    frontUrl:'',
    backUrl:''
  })
  
  const handleChange = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setFormData({...formData, [name]: value })
    }

    const handleSubmit = (e) =>{
      e.preventDefault()
      const newData ={
        name: formData.name,
        hp: formData.hp,
        sprites: {
          front: formData.frontUrl,
          back: formData.backUrl}
      }
      onHandleSubmit(newData);
      setFormData({
        name:'',
        hp:0,
        frontUrl:'',
        backUrl:''
      })
  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={formData.hp} onChange={handleChange} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.frontUrl}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.backUrl}
            onChange={handleChange}

          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
