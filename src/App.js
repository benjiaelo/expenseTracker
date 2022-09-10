
import './App.css';
import {useState } from 'react';
import { Row , Col,Container } from 'react-bootstrap';
import AddUser from './components/AddUser';
import UserData from './components/UserData';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
     user.id = Math.floor((Math.random() * 1000000
     ) + 1);
    setUsers([...users, user]);
  }

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  }

  const editUser = (id, updateUser) => {
    setUsers(users.map(user => user.id === id ? updateUser : user));
  }

  return (
    <div clas>
      <Container className=" mx-auto">
        <Row>
          <Col md={6}>
          <AddUser  newUser = {addUser} />

          </Col>

          <Col md={6}>
          <UserData  
          userData = {users} 
          deleteUser = {deleteUser}
          editUser = {editUser}
          
          
          
          />

          </Col>
        </Row>

       
      </Container>


     
    </div>
  );
}

export default App;
