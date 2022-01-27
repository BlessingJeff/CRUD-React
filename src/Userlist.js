import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
function Userlist() {
    const [users, setuser] = useState([])
    useEffect(async () => {
        
        try {
            let userda = await fetch("https://61c3dc4af1af4a0017d990ce.mockapi.io/users");
            let userData = await userda.json()
            setuser(userData)
        } catch (error) {
            console.log(error);
        }
    }, [])

    let deletelist = (async (id) => {
        await fetch(`https://61c3dc4af1af4a0017d990ce.mockapi.io/users/${id}`, {
            method: "DELETE"
        });
        let data = await fetch("https://61c3dc4af1af4a0017d990ce.mockapi.io/users");
        let userData = await data.json()
        setuser(userData)
    })
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Userlist</h1>
                <Link to="/usercreate" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> CreateUser</Link>
            </div>
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    users.map((user, index) => {
                                        return <tr key={index} >
                                            <td>{user.id}</td>
                                            <td>{user.Name}</td>
                                            <td>{user.Position}</td>
                                            <td>{user.Office}</td>
                                            <td>{user.Age}</td>
                                            <td>{user.StartDate}</td>
                                            <td>{user.Salary}</td>
                                            <td>

                                                <Link to={`/useredit/${user.id}`} ><button class="btn btn-primary">Edit </button></Link> 
                                               <button className='btn btn-danger' onClick={() => deletelist(user.id)}>Delete</button></td> 

                                           
                                        </tr>
                                    })
                                }



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Userlist