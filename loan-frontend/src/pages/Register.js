import React, {useState} from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

// const [error,setError] = useState({})


function Register(){
    const navigate = useNavigate();
    const navigateLogin=()=>{navigate("/login");}
    const url = "http://localhost:8080/api/v1/employees"
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [desig, setDesig] = useState('');
    const [department, setDepartment] = useState('');
    const [mail, setMail] = useState('');
    const [dob, setDob] = useState('');
    const [doj, setDoj] = useState('');


    const handleSubmit = () => {
        console.log(firstname);
        console.log(lastname);
        //validate
        
        axios.post(url,{firstName:firstname,lastName:lastname,designation:desig,
        deparment:department,emailId:mail,dob:dob,doj:doj})
        .then(response => {
            console.log(response);
            if(response.data == 'sucess')
                navigate("/login");
        })
        .catch(error=>{console.log(error)});
        console.log("sent");
    }

        
    return(
    <div>
        <center>
            <Card>
                <Card.Title><h1>User Registration Form</h1></Card.Title><br/><br/>
                <form style={{"padding-left":"35%","padding-right":"35%", "padding-top":"2%"}}>
                    <div style={{"border":"1px solid black", "padding":"5% 5% 5%"}}>
                    <h3>User Registration</h3>
                    <br/>
                    <div class="form-outline mb-4 form-group">
                        <input type="text" id="fname" class="form-control"
                        onChange={(e)=>setFirstName(e.target.value)}
                         placeholder="Enter First Name" required/>
                    </div> 
                    <div class="form-outline mb-4 form-group">
                        <input type="text" id="lname" class="form-control" 
                        onChange={(e)=>setLastName(e.target.value)}
                        placeholder="Enter Last Name" required/>
                    </div>
                     {/* {<div class="form-outline mb-4 form-group">
                        <input type="text" id="uid" class="form-control" 
                        onChange={(e)=>setUsername(e.target.value)}
                        placeholder="Enter User-ID" required/>
                    </div>}  */}
                    <div class="form-outline mb-4 form-group">
                        <input type="email" id="mail" class="form-control" 
                        onChange={(e)=>setMail(e.target.value)}
                        placeholder="Enter Email ID" required/>
                    </div>
                    {/* <div class="form-outline mb-4 form-group">
                        <input type="password" name="password" id="password" 
                         class="form-control" placeholder="Enter Password" required/>
                    </div>
                    <div class="form-outline mb-4 form-group">
                        <input type="text" id="confirm_password" class="form-control" 
                        placeholder="Repeat Password" name="confirm_password" required/>
                    </div> */}
                    <div class="form-outline mb-4 form-group">
                        <input type="date" id="dob" class="form-control" 
                        onChange={(e)=>setDob(e.target.value)}
                        placeholder="Enter Date of Birth(YYYY/MM/DD)" onfocus="(this.type='date')"required/>
                    </div>
                    {/* <div class="form-outline mb-4 form-group">
                        <select type="text" id="gender" class="form-control" required>
                            <option selected>Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="trans">Transgender</option>
                        </select>
                    </div> */}
                    <div class="form-outline mb-4 form-group">
                        <input type="text" id="desig" class="form-control" 
                        onChange={(e)=>setDesig(e.target.value)}
                        placeholder="Enter Designation" required/>
                    </div>
                    <div class="form-outline mb-4 form-group">
                        <input type="text" id="dept" class="form-control" 
                        onChange={(e)=>setDepartment(e.target.value)}
                        placeholder="Enter Department" required/>
                    </div>
                    <div class="form-outline mb-4 form-group">
                        <input type="date" id="jod" class="form-control" 
                        onChange={(e)=>setDoj(e.target.value)}
                        placeholder="Enter Date of Joining(YYYY/MM/DD)" onfocus="(this.type='date')" required/>
                    </div>
                    <button type="button" class="btn btn-dark btn-block mb-4" onClick={handleSubmit} >Submit</button>
                    <div class="text-center">
                    <p>Already a member? <a href="/login">Login</a></p>
                    </div></div>
                </form>
            </Card>
            <br/>
        <br/>
        </center>
        
    </div>
    )
}

export default Register;