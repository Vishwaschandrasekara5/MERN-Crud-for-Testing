import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function User(props) {
    const {_id, name, email, age, address} = props.user;
    const [error, setError] = useState(null);
    const history = useNavigate();

    const deleteHandler = async () => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                await axios.delete(`http://localhost:5000/${_id}`);
                console.log("User deleted successfully");
                history("/userdetails");
            } catch (error) {
                console.error("Error deleting user:", error);
                setError("Failed to delete user. Please try again.");
            }
        }
    };

    return (
        <div style={{ 
            padding: '20px',
            margin: '10px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            backgroundColor: '#fff'
        }}>
            {error && (
                <div style={{ color: 'red', marginBottom: '10px' }}>
                    {error}
                </div>
            )}
            <h2 style={{ color: '#333', marginBottom: '15px' }}>User Details</h2>
            <div style={{ marginBottom: '10px' }}>
                <strong>Name:</strong> {name}
            </div>
            <div style={{ marginBottom: '10px' }}>
                <strong>Email:</strong> {email}
            </div>
            <div style={{ marginBottom: '10px' }}>
                <strong>Age:</strong> {age}
            </div>
            <div style={{ marginBottom: '20px' }}>
                <strong>Address:</strong> {address}
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
                <Link to={`/userdetails/${_id}`}>
                    <button style={{
                        padding: '8px 16px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}>
                        Update
                    </button>
                </Link>
                <button 
                    onClick={deleteHandler}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: '#f44336',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default User;
