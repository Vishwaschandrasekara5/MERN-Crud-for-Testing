import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AddUser from './components/Add User/Adduser';
import UserDetails from './components/UserDetails/Userdetail';

function App() {
  return (
    <div>
    
     <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/user" element={<UserDetails />} />
      </Routes>
     </React.Fragment>
    </div>
  );
}

export default App;
