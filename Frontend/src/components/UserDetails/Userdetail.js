import { useEffect, useState } from 'react'
import Nav from '../Navbar/Navbar'
import axios from 'axios';
import User from '../User/User';

const URL = "http://localhost:5000/";

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
}

function Userdetail() {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        fetchHandler().then((data) => setUsers(data.users));
    }, []);

    return (
        <div>
            <Nav/>
            <h1>User Details Display Page</h1>
            <div className="users-container">
                {users && users.map((user, i) => (
                    <div key={i}>
                        <User user={user} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Userdetail
