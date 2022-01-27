import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Userlist() {

    const [Users, setUsers] = useState([])

    useEffect(() => {
        getData()
    }, [])


    let getData = async () => {
        try {
            let userDetail = await fetch("https://61c1f80d9dbcca0017c82272.mockapi.io/Users")
            let userData = await userDetail.json()
            setUsers(userData)
        } catch (error) {
            console.log(error)
        }
    }
    var deleteUser = (async (id) => {
        let result = await fetch(`https://61c1f80d9dbcca0017c82272.mockapi.io/Users/${id}`, {
            method: 'DELETE',
        });
        console.warn(result)
        getData()
    })


    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800" style={{ fontWeight: "700" }}>User list</h1>
                <Link to="/userform" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i>
                </i> Create User</Link>
            </div>
            <div className="container-fluid">


                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">DataTables</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr style={{ color: "black", opacity: "85%" }}>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Position</th>
                                        <th>Office</th>
                                        <th>Age</th>
                                        <th>Start date</th>
                                        <th>Salary</th>
                                        <th>Customize</th>

                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        Users.map((user, index) => {
                                            return <tr key={index}>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.position}</td>
                                                <td>{user.office}</td>
                                                <td>{user.age}</td>
                                                <td>{user.startdate}</td>
                                                <td>{user.salary}</td>
                                                <th>
                                                    <Link to={`/user-edit/${user.id}`}><button className='btn btn-primary btn-sm'>Edit</button></Link>
                                                    <button onClick={() => deleteUser(user.id)} className='btn btn-danger btn-sm ml-2'>Delete</button>
                                                </th>

                                            </tr>
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Userlist