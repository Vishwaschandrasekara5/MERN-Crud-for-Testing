import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function UpdateUser() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    age: "",
    address: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const history = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/${id}`);
        if (response.data && response.data.User) {
          setInputs(response.data.User);
        } else {
          setError("No user data received from server");
        }
      } catch (error) {
        console.error("Error fetching user:", error.response || error);
        setError(error.response?.data?.message || "Failed to load user data");
      } finally {
        setLoading(false);
      }
    };
    fetchHandler();
  }, [id]);

  const handlechange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      // Log the data being sent
      console.log("Sending update request with data:", {
        name: String(inputs.name),
        email: String(inputs.email),
        age: Number(inputs.age),
        address: String(inputs.address),
      });

      const response = await axios.put(`http://localhost:5000/${id}`, {
        name: String(inputs.name),
        email: String(inputs.email),
        age: Number(inputs.age),
        address: String(inputs.address),
      });

      // Log the response
      console.log("Server response:", response.data);

      if (response.data) {
        console.log("User updated successfully");
        history("/userdetails");
      } else {
        setError("No response from server");
      }
    } catch (error) {
      console.error("Detailed error:", error.response || error);
      setError(
        error.response?.data?.message ||
          "Failed to update user. Please try again."
      );
    }
  };

  if (loading) {
    return (
      <div>
        <Navbar />
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <h1>Update User</h1>
      {error && (
        <div
          style={{
            color: "red",
            margin: "10px 0",
            padding: "10px",
            backgroundColor: "#ffe6e6",
          }}
        >
          Error: {error}
        </div>
      )}
      <form onSubmit={handlesubmit}>
        <label>Name</label>
        <br />
        <input
          type="text"
          name="name"
          onChange={handlechange}
          value={inputs.name || ""}
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
          value={inputs.email || ""}
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
          value={inputs.age || ""}
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
          value={inputs.address || ""}
          required
        />
        <br />
        <br />

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Update User
        </button>
      </form>
    </div>
  );
}

export default UpdateUser;
