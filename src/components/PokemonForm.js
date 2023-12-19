import React,{useState} from "react";
import { Form } from "semantic-ui-react";
//set state for formData values, onChange for each inputs..value={state}
//create submit function e.preventdefault, reset inputs..
//in submit function, create new poke Object whic call back function will use as argument//new obj key and value
//must match actual db.json key and value format
//
//define callback function in parent component. fetch POST data, once success, set
//pokemon stat with new data
function PokemonForm({onHandleSubmit}) {
  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  })

  const handleChange = (e) =>{
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }
  const handleSubmit = (e) =>{
    e.preventDefault()

    const newPokeObj = {
      name: formData.name,
      hp: formData.hp,
      sprites:{
        front: formData.frontUrl,
        back: formData.backUrl
      }
    }
    onHandleSubmit(newPokeObj)
    setFormData({
      name: "",
      hp: "",
      frontUrl: "",
      backUrl: ""
    })

  }
  


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input value={formData.name}onChange={handleChange}fluid label="Name" placeholder="Name" name="name" />
          <Form.Input value={formData.hp} onChange={handleChange} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleChange}
            value={formData.frontUrl}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleChange}
            value={formData.backUrl}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
