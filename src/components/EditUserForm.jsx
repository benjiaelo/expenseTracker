import React from 'react'
import { useState } from 'react'
import {Form , Button  }from 'react-bootstrap';
import 'boxicons/css/boxicons.min.css';

function EditUserForm(props) {
    const [name , setName] = useState( props.userInfo.name);
    const [contact , setContact] = useState( props.userInfo.contact);
    const [location , setLocation] = useState( props.userInfo.location);
    const [id , setId] = useState( props.userInfo.id);

const handleSubmit = (e) => {
    e.preventDefault();
    props.updateUser( id ,{name , contact ,  location ,});
    setName('');
    setContact('');
    setLocation('');
    setId('');
    console.log(name , contact , location  ,id);
    props.handleClose();
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


        
      
        <Button variant="primary" type="submit" style={{ width: 'auto', margin: '2rem' }}   >
   <i class="bx bxs-save bx-flashing bx-fw"></i> Save
        </Button>
    </Form>


</div>


    
  )
}

export default EditUserForm;