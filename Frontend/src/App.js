import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AddUser from './components/Add User/Adduser';
import UserDetails from './components/UserDetails/Userdetail';
import UpdateUser from './components/UpdateUser/UpdateUser';

function App() {
  return (
    <div>
    
     <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/userdetails" element={<UserDetails />} />
        <Route path="/userdetails/:id" element={<UpdateUser />} />
      </Routes>
     </React.Fragment>
    </div>
  );
}

export default App;
