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
  const [error, setError] = useState(null);

  const handlechange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await sendRequest();
      console.log("User added successfully:", response);
      history("/userdetails"); // Redirecting to userdetails page
    } catch (error) {
      console.error("Error adding user:", error);
      setError(error.response?.data?.message || "Failed to add user. Please try again.");
    }
  };

  const sendRequest = async () => {
    const response = await axios.post("http://localhost:5000/", {
      name: String(inputs.name),
      email: String(inputs.email),
      age: Number(inputs.age),
      address: String(inputs.address),
    });
    return response.data;
  };

  return (
    <div>
      <Navbar />
      <h1>Add New User</h1>
      {error && (
        <div style={{ color: 'red', margin: '10px 0', padding: '10px', backgroundColor: '#ffe6e6' }}>
          {error}
        </div>
      )}
      <form onSubmit={handlesubmit}>
        <label>Name</label>
        <br />
        <input 
          type="text" 
          name="name" 
          onChange={handlechange} 
          value={inputs.name} 
          required 
        />
        <br />
        <br />

        <label>Email</label>
        <br />
        <input 
          type="email" 
          name="email" 
          onChange={handlechange} 
          value={inputs.email} 
          required 
        />
        <br />
        <br />

        <label>Age</label>
        <br />
        <input 
          type="number" 
          name="age" 
          onChange={handlechange} 
          value={inputs.age} 
          required 
        />
        <br />
        <br />

        <label>Address</label>
        <br />
        <input 
          type="text" 
          name="address" 
          onChange={handlechange} 
          value={inputs.address} 
          required 
        />
        <br />
        <br />

        <button 
          type="submit"
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#4CAF50', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer' 
          }}
        >
          Add User
        </button>
      </form>
    </div>
  );
}

export default Adduser;
