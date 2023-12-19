import React,{useState} from "react";
import { Form } from "semantic-ui-react";

//create submbmit function incuding newPokeData,
//a call back function received as prop to send up data to pokepage
//in pokepage, define function to send data to server
function PokemonForm({onHandleSubmit}) {
  const [formData, setFormData] = useState({
      name: "",
      hp: '',
      frontUrl: '',
      backUrl: '' 
  })
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e) =>{
    e.preventDefault()

    const newPokeData = {
      name: formData.name,
      hp: formData.hp,
      sprites: {
          front:formData.frontUrl,
          back:formData.backUrl
        }
    }
    onHandleSubmit(newPokeData)
    setFormData({
      name: "",
      hp: '',
      frontUrl: '',
      backUrl: '' 
  })
  }



  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input value={formData.name} onChange={handleChange} fluid label="Name" placeholder="Name" name="name" />
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
