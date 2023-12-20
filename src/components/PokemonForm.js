import React,{useState} from "react";
import { Form } from "semantic-ui-react";
// set state of input value with onChange event. (formdata)
//make sure name matches with formdata key
//set values to state..create onChange to set state
//create form onSubmit event, create new data object to match exactll data object
//invoke callback function that will be defined in pokemonpage..
//fetch post request and set new data to state using spread operator
function PokemonForm({onHandleSubmit}) {
  const [formdata, setFormdata] = useState({
    name: "",
    hp: 0,
    frontUrl: "",
    backUrl: ""
  })
  const handleChange =(e) =>{
    setFormdata({...formdata, [e.target.name]: e.target.value})
  }
  const handleSubmit =(e) =>{
    e.preventDefault()
    const newPoke={
      name: formdata.name,
      hp: formdata.hp,
      sprites:{
        front: formdata.frontUrl,
        back: formdata.backUrl
      }
    }
    onHandleSubmit(newPoke)
    setFormdata({
      name: "",
      hp: 0,
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
          <Form.Input value={formdata.name} onChange={handleChange} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input value={formdata.hp} onChange={handleChange} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleChange}
            value={formdata.frontUrl} 
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleChange}
            value={formdata.backUrl} 
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
