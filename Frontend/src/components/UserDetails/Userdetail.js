import { useEffect, useState, useRef } from 'react'
import Nav from '../Navbar/Navbar'
import axios from 'axios';
import User from '../User/User';
import { useReactToPrint } from 'react-to-print';

const URL = "http://localhost:5000/";

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
}

function Userdetail() {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        fetchHandler().then((data) => setUsers(data.users));
    }, []);

    const componentsRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentsRef.current,
        documentTitle: 'User Report',
        onAfterPrint: () => alert('Users Report Successfully Downloaded')
    });

    const [searchQuery, setSearchQuery] = useState("");
    const [noResults, setNoResults] = useState(false);

    const handleSearch = () => {
        fetchHandler().then((data) => {
            const filteredUsers = data.users.filter(user =>
                user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                user.email.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setUsers(filteredUsers);
            setNoResults(filteredUsers.length === 0);
        });
    }

    return (
        <div>
            <Nav/>
            <h1>User Details Display Page</h1>
            <input onChange={(e)=> setSearchQuery(e.target.value)} type="text" name='search' placeholder='Search by name or email'></input>
            <button onClick={handleSearch}>Search</button>

            {noResults ? (
                <div>
                    <p>No users found</p>
                </div>
            ):(
                 <div className="users-container" ref={componentsRef}>
                {users && users.map((user, i) => (
                    <div key={i}>
                        <User user={user} />
                    </div>
                ))}
            </div>
            )}
           
            <button onClick={handlePrint}>Download Report</button>
        </div>
    )
}

export default Userdetail
