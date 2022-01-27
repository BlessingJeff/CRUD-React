import React from 'react'
import { useFormik } from 'formik';

function Usercreate() {
    
    const formik = useFormik({
        initialValues: {
            Name: '',
            Position: '',
            Office: '',
            Age: 0,
            StartDate: '',
            Salary: ''


        },
        onSubmit: async values => {
            try {
                await fetch("https://61c3dc4af1af4a0017d990ce.mockapi.io/users", {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                alert("data saved")
            }
            catch (error) {
                console.log(error);
            }
        }
    })

    return (
        <>


            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Usercreate</h1>
            </div>
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Form</h6>
                </div>
            </div>
            <div className='container'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <label>Name</label>
                            <input type="text" name="Name" className='form-control'
                                onChange={formik.handleChange}
                                value={formik.values.Name}>
                            </input>
                        </div>

                        <div className='col-lg-6'>
                            <label>Position</label>

                            <input type="text" name="Position" className='form-control'
                                onChange={formik.handleChange}
                                value={formik.values.Position}>
                            </input>
                        </div>

                        <div className='col-lg-6'>
                            <label>Office</label>

                            <input type="text" name="Office" className='form-control'
                                onChange={formik.handleChange}
                                value={formik.values.Office}>
                            </input>
                        </div>

                        <div className='col-lg-3'>
                            <label>Age</label>

                            <input type="number" name="Age" className='form-control'
                                onChange={formik.handleChange}
                                value={formik.values.Age}>
                            </input>
                        </div>

                        <div className='col-lg-3'>
                            <label>Start date</label>

                            <input type="date" name="StartDate" className='form-control'
                                onChange={formik.handleChange}
                                value={formik.values.StartDate}>
                            </input>
                        </div>

                        <div className='col-lg-6'>
                            <label>Salary</label>
                            <input type="text" name="Salary" className='form-control'
                                onChange={formik.handleChange}
                                value={formik.values.Salary}>
                            </input>
                        </div>
                        <div className='col-lg-3'>
                            <input type="submit" className='btn btn-primary'/>
                        </div>
                    </div>
                </form>
            </div>




        </>
    )
}

export default Usercreate