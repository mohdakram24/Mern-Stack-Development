import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const UserManager = () => {

    //For holding user data to update
    const [userformData, setUserformData] = useState(null);


    //To show or hide update form
    const [showform, setShowform] = useState(false);

    const [userList, setUserList] = useState([]);

    // This will fetch user data from backend
    const getDataFromBackend = async () => {
        const response = await fetch('http://localhost:5000/user/getall');

        //Json here also an asynchronous function
        const data = await response.json();
        console.log(data);
        setUserList(data);
    }

    const deleteUser = async (id) => {
        console.log(id);
        const response = await fetch('http://localhost:5000/user/delete/' + id, { method: 'DELETE' })
        if (response.status === 200) {
            console.log('user Deleted');
            toast.success('user Deleted');
            getDataFromBackend();
        }
    }

    const updateUser = (userdata) => {
        setShowform(true);
        setUserformData(userdata);

    }

    //Effect Hook
    // This will tell react what to do when component opens
    useEffect(() => {
        getDataFromBackend();
    }, [])

    const displayUsers = () => {
        return <table className='table bg-white'>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Age</td>
                </tr>
            </thead>
            <tbody>
                {
                    userList.map((user) => (

                        <tr>
                            <td>{user._id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>
                                <button className='btn btn-outline-danger' onClick={() => { deleteUser(user._id) }}><i class="fa fa-trash" aria-hidden="true"></i></button>
                            </td>
                            <td>
                                <button className='btn btn-outline-primary' onClick={()=>{updateUser(user)}}><i class="fas fa-pen    "></i></button>
                            </td>
                        </tr>

                    ))
                }

            </tbody>
        </table>
    }

    return (
        <div>UserManager
            {displayUsers()}

            


        </div>

    )
}

export default UserManager