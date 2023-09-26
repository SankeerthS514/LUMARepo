import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Loanlist() {
  const [employees, setEmployees] = useState([]);
  const params = useParams();

  const getAll = async (empid) => {
    const response = await axios.get(`http://localhost:8080/api/v5/loan`);
    console.log("This is from get All", response.data);
    return response.data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAll(params.empid);
      // Initialize the action and status properties for each employee
      const employeesWithStatus = response.map((employee) => ({
        ...employee,
        action: '',
        status: 'Pending',
      }));
      setEmployees(employeesWithStatus);
      console.log("This is from useEffect", employeesWithStatus);
    };
    fetchData();
  }, [params.empid]);

  const handleActionChange = (event, employee) => {
    const newEmployees = [...employees];
    const index = newEmployees.findIndex((e) => e.id === employee.id);
    newEmployees[index].action = event.target.value;
    // Update the status based on the selected action
    newEmployees[index].status =
      event.target.value === 'Approve' ? 'Approved' : 'Rejected';
    setEmployees(newEmployees);
  };

  return (
    <div>
      <center>
        <div className='container' style={{ "paddingTop": "7%" }}>
          <div><h1>Loan Dashboard</h1></div>
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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.empid}</td>
                  <td>{employee.item_cat}</td>
                  <td>{employee.item_make}</td>
                  <td>{employee.item_desc}</td>
                  <td>{employee.duration_in_years}</td>
                  <td>{employee.item_value}</td>
                  <td>{employee.issue_date}</td>
                  <td>{employee.status}</td>
                  <td>
                    <select
                      value={employee.action || ''}
                      onChange={(e) => handleActionChange(e, employee)}
                      className="form-control"
                    >
                      <option value="">Select Action</option>
                      <option value="Approve">Approve</option>
                      <option value="Reject">Reject</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />
      </center>
    </div>
  );
}

export default Loanlist;
