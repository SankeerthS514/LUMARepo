import React from 'react';
import { useEffect, useState } from "react";
import { getAll } from './api';
import { Link, useNavigate } from 'react-router-dom';


function EmployeeList(){
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        return async () => {
        const response = await getAll();
        setEmployees(response);
        console.log("This is from useEffect", response);
        };
    }, []);
    const handleDelete=(id)=>{
        navigate(`/admin/delete/${id}`);
    }
    const navigateUpdate=(id)=>{
        navigate(`/admin/update/${id}`);
    }
    return(
        <div>
            <center>
                <div className='container' style={{"padding-top":"7%"}}>
                    <div><h1>Admin Dashboard</h1></div>
                    <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Date of Joining</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
                <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.designation}</td>
              <td>{employee.deparment}</td>
              <td>{employee.emailId}</td>
              <td>{employee.dob}</td>
              <td>{employee.doj}</td>
              <td>
              <Link to={`../admin/update/${employee.id}`} className="btn btn-outline-warning">
                  Update
                </Link>
                &nbsp;&nbsp;
                <button style={{"padding":"10px"}}
                className='btn-btn-outline-danger' onClick={()=>handleDelete(employee.id)}>Delete</button>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>

                </div>
                <br/>


            </center>
        </div>
    )
}

export default EmployeeList;