import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { connect, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import '../App.css';

function AddNote(props) {
  const [title , setTitle] = useState('');
  const [date , setDate] = useState('');
  const [text , setText] = useState('');
 

  const handleSubmit = (e) => {
    e.preventDefault();
    props.newUser({ title ,  date , text});
    setTitle('');
    setDate('');
    setText('');

  
   
  }

   
  return (
    <div>

    


        <Form  style={{ width: '18rem' , margin: '2rem'}}  onSubmit = {handleSubmit}>

        <Form.Floating className="mb-3">
        <Form.Control
          id="floatingNameCustom"
          type="text"
          placeholder="Full Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="floatingPasswordCustom">Note Title</label>

        </Form.Floating>
      <Form.Floating className="mb-3">
       
        <Form.Control
          id="duedate"
          type="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="floatingInputCustom">Date Recorded</label>
     
      </Form.Floating>

      <Form.Floating >
        <Form.Control style={{height:"400px"}}
          id="floatingLocationCustom"
          type="text"
          placeholder="Location"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        
        <label htmlFor="floatingLocationCustom">Note Text</label>
      </Form.Floating>

    

            
          
            <Button class="app-form-button" variant="primary" type="submit" style={{ width: 'auto' , margin: '2rem'}}  >
                Submit
            </Button>
        </Form>


    </div>
  )
}

export default AddNote