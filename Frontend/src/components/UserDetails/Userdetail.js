import { useEffect, useState } from 'react'
import Nav from '../Navbar/Navbar'
import axios from 'axios';

const URL = "http://localhost:5000/";

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
}

function Userdetail() {

    const [user, setUser] = useState([]);
    useEffect(() => {
        fetchHandler().then((data)=>setUser(data.user))
    })
  return (
    <div>
      <Nav/>
    </div>
  )
}

export default Userdetail
