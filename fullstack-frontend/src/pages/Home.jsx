import React, {useEffect} from 'react';
import axios from "axios";

export default function Home() {
    //create object for storing user info
    const [users, setUsers] = React.useState([]);
    useEffect(() => {
        console.log("Loads every time the page loads");
        loadUsers();
    }, []) //makes it run once and puts it into an array

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users")
        setUsers(result.data);
    }


    return (
        <div className={'container'}>
            <div className="py-4">
                <table className="table border shadow">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">username</th>
                        <th scope="col">email</th>
                        <th scope="col">action</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        users.map((user, index) => (
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className="btn btn-outline-primary mx-2">View</button>
                                    <button className="btn btn-outline-secondary mx-2">Edit</button>
                                    <button className="btn btn-outline-danger mx-2">Delete</button>
                                </td>
                            </tr>
                        ))

                    }

                    </tbody>
                </table>
            </div>

        </div>
    )
}