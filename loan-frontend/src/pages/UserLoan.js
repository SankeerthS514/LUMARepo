import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UserLoan(){
    const [employees, setEmployees] = useState([]);
    const params=useParams();
    const getAll = async (empid) => {
        const response = await axios.get(`http://localhost:8080/api/v5/loan/${empid}`);
        console.log("This is from get All", response.data);
        return response.data;
      };

    useEffect(() => {
        return async () => {
        const response = await getAll(params.empid);
        setEmployees(response);
        console.log("This is from useEffect", response);
        };
    }, []);
    return(
        <div>
            <center>
                <div className='container' style={{"padding-top":"7%"}}>
                    <div><h1>Loan Details</h1></div>
                    <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Loan-Id</th>
            <th>Employee-Id</th>
            <th>Item Catagory</th>
            <th>Item Description</th>
            <th>Item Made of</th>
            <th>Duration in years</th>
            <th>Value</th>
            <th>Issue Date</th>
            <th>Status</th>
            
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.empid}>
                <td>{employee.id}</td>
              <td>{employee.empid}</td>
              
              <td>{employee.item_cat}</td>
              <td>{employee.item_make}</td>
              <td>{employee.item_desc}</td>
              <td>{employee.duration_in_years}</td>
              <td>{employee.item_value}</td>
              <td>{employee.issue_date}</td>
              <td>{employee.status}</td>
              
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

export default UserLoan;