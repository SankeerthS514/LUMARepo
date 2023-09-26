import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

const AdminDashboard = ()=>{
    const navigate = useNavigate();
    const navigatetoEmployee=()=>{
        navigate('/admin/list');
    }
    const navigateAddCat=()=>{
        navigate("/admin/addcat");
    }
    const navigateEmployeeloan=()=>{
        navigate('/admin/loanlist');
    }
    const navigateUserRegistration=()=>{
        navigate('/register');
    }
        return (
        <div>
            <center>
                <div className='container' style={{"padding-top":"7%"}}>
                    <div><h1>Admin Dashboard</h1></div>
                    <div><p>Only for Admin Usage</p></div>
                    <br/>
                    
                </div>
                <br/>
                <div className='container'>
                    <div className='card-deck mb-3 text-center row'>
                        <div className='col' style={{"padding":"2%"}}>
                        <div className='card mb-4 box-shadow'>
                            <div className='card-header'>
                                <h4 className='font-bold'>Employee Details</h4>
                            </div>
                            <div className='card-body'>
                                <ul className='list-unstyled mt-3 mb-4'>
                                    <li>Add Employee</li>
                                    <li>Delete Employee</li>
                                    <li>Edit Employee Details</li>
                                </ul>
                                <button type="button" class="btn btn-lg btn-block btn-outline-dark"
                                 onClick={navigatetoEmployee}>View Here</button>
                            </div>
                        </div></div>
                        <div className='col' style={{"padding":"2%"}}>
                        <div className='card mb-4 box-shadow'>
                            <div className='card-header'>
                                <h4 className='font-bold'>User Loan Details</h4>
                            </div>
                            <div className='card-body'>
                                <ul className='list-unstyled mt-3 mb-4'>
                                    <li>See all the Users Loans</li>
                                    <li>Their transactions</li>
                                    <li style={{"font-color":"red"}}>User Specific</li>
                                </ul>
                                <button type="button" class="btn btn-lg btn-block btn-outline-dark" onClick={navigateEmployeeloan}
                               >View Here</button>
                            </div>
                        </div></div>
                        <div className='col' style={{"padding":"2%"}}>
                        <div className='card mb-4 box-shadow'>
                            <div className='card-header'>
                                <h4 className='font-bold'>User Registration</h4>
                            </div>
                            <div className='card-body'>
                                <ul className='list-unstyled mt-3 mb-4'>
                                    <li>Register the users</li>
                                    <li>Admin made accont</li>
                                    <li style={{"font-color":"red"}}>User Specific</li>
                                </ul>
                                <button type="button" class="btn btn-lg btn-block btn-outline-dark"
                                onClick={navigateUserRegistration}
                               >Add Here</button>
                            </div>
                        </div></div>
                        <div className='col' style={{"padding":"2%"}}>
                        <div className='card mb-4 box-shadow'>
                            <div className='card-header'>
                                <h4 className='font-bold'>Add Loan Category</h4>
                            </div>
                            <div className='card-body'>
                                <ul className='list-unstyled mt-3 mb-4'>
                                    <li>Add some new loan items and categories</li>
                                    <li>Admin made accont</li>
                                    
                                </ul>
                                <button type="button" class="btn btn-lg btn-block btn-outline-dark"
                                onClick={navigateAddCat}
                               >Apply Here</button>
                            </div>
                        </div></div>

                    </div>
                </div>
            </center>
        </div>
    )
}

export default AdminDashboard;