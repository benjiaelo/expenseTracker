import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css';
function AddUser(props) {
  const [name , setName] = useState('');
  const [contact , setContact] = useState('');
  const [location , setLocation] = useState('');
 

  const handleSubmit = (e) => {
    e.preventDefault();
    props.newUser({ name ,  contact , location});
    setName('');
    setContact('');
    setLocation('');

  
    console.log(name , contact , location );
  }

   
  return (
    <div>
        <Form  style={{ width: '18rem' , margin: '2rem'}}  onSubmit = {handleSubmit}>

        <Form.Floating className="mb-3">
        <Form.Control
          id="floatingNameCustom"
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="floatingPasswordCustom">Full Name</label>

        </Form.Floating>
      <Form.Floating className="mb-3">
       
        <Form.Control
          id="floatingInputCustom"
          type="tel"
          placeholder="+233 555 555 555"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <label htmlFor="floatingInputCustom">Contact</label>
     
      </Form.Floating>

      <Form.Floating>
        <Form.Control
          id="floatingLocationCustom"
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        
        <label htmlFor="floatingLocationCustom">Location</label>
      </Form.Floating>

    

            
          
            <Button variant="primary" type="submit" style={{ width: 'auto' , margin: '2rem'}}  >
                Submit
            </Button>
        </Form>


    </div>
  )
}

export default AddUser