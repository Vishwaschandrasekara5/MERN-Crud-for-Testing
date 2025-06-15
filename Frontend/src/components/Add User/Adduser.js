import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Adduser() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    age: "",
    address: "",
  });

  const handlechange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    await sendRequest();
    history("/user"); 
  };

  const sendRequest = async () => {
    await axios.post("http://localhost:5000/", {
      name: String(inputs.name),
      email: String(inputs.email),
      age: Number(inputs.age),
      address: String(inputs.address),
    });
  };

  return (
    <div>
      <Navbar />
      <h1>This is add user page</h1>
      <form onSubmit={handlesubmit}>
        <label>Name</label>
        <br />
        <input type="text" name="name" onChange={handlechange} value={inputs.name} required />
        <br />
        <br />

        <label>Email</label>
        <br />
        <input type="email" name="email" onChange={handlechange} value={inputs.email} required />
        <br />
        <br />

        <label>Age</label>
        <br />
        <input type="number" name="age" onChange={handlechange} value={inputs.age} required />
        <br />
        <br />

        <label>Address</label>
        <br />
        <input type="text" name="address" onChange={handlechange} value={inputs.address} required />
        <br />
        <br />

        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default Adduser;
