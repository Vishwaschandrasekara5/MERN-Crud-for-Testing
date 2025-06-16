import React from 'react'
import { Link } from 'react-router-dom';

function User(props) {
    const {_id,name,email,age,address} = props.user;
  return (
    <div>
        <br></br>
      <h1>User Display</h1>
      <br></br>
      <h2>User ID: {_id} </h2>
        <h2>User Name: {name} </h2>
        <h2>User Email: {email} </h2>
        <h2>User Age: {age} </h2>
        <h2>User Address: {address} </h2>
        <Link to={`/userdetails/${_id}`}><button>Update</button></Link>
        <button>Delete</button>
    </div>
  )
}

export default User
