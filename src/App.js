import React, {useState} from 'react';
import './App.css';
import {UserForm} from './components/UserForm';
import {UserList} from './components/UserList';


function App() {
    const [users, setUsers] = useState([])
    const addUser = (user) => {
       setUsers([...users, user])
        console.log("users", users)
    }

  return (
    <div className="App">
          <UserForm  addUser ={addUser} />
        <hr/>
        <UserList users={users} />
    </div>
  );
}

export default App;
