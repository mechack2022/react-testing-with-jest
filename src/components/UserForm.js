import React, {useState} from 'react'



export const UserForm = ({addUser}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({name,email})
  }
  return (
      <form action="" onSubmit={handleSubmit}>
        <div>
        <label htmlFor="name">Name</label>
        <input id='name' type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div>
        <label htmlFor="email">Email</label>
        <input id='email' type="text" name="email" value={email} onChange={(e) =>setEmail(e.target.value)}/>
        </div>
          <button type="submit">Submit</button>
      </form>
  )
}
