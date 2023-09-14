// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'
// import { Button } from 'react-bootstrap';
// export default function 
// () {
//     const url = "http://localhost:8080/api/v3/login"
//     const [username, setUsername] = useState('');
//     const [pass, setPass] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();
//     const handleSubmit = () => {
//         console.log(username);
//         console.log(pass);
//         axios.post(url,{id:username,password:pass})
//         .then(response => {
//           console.log(response);
//           if(response.data == 'sucess')
//             navigate("/");
//           else
//             setError(response.data);
//         })
//         .catch(error=>{console.log(error)});
//         console.log("sent");
//     }
//     const navigateRegister = () => {
//       navigate("/register");
//     }
//   return (
//     <form>
//   <div className="form-outline mb-4" style = {{"padding":"30px"}}>
//     <input onChange={(e)=>setUsername(e.target.value)} type="number" id="form2Example1" className="form-control"  />
//     <label className="form-label" for="form2Example1">Username</label>
//     {error == 'FailUser' && (
//       <div style={{"color":"red"}}>
//         User does not exist!
//       </div>
//     )}
//   </div>

//   <div className="form-outline mb-4" style = {{"padding":"30px"}}>
//     <input onChange={(e)=>setPass(e.target.value)} type="password" id="form2Example2" className="form-control"/>
//     <label className="form-label" for="form2Example2">Password</label>
//     {error == 'FailPass' && (
//       <div style={{"color":"red"}}>
//         Wrong Password!!!
//       </div>
//     )}
//   </div>

//   <div className="row mb-4">
//     <div className="col d-flex justify-content-center">
//       <div className="form-check">
//         <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
//         <label className="form-check-label" for="form2Example31"> Remember me </label>
//       </div>
//     </div>

//     <div className="col">
//       <a href="#!">Forgot password?</a>
//     </div>
//   </div>

//   <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleSubmit}>Sign in</button>

//   <div className="text-center">
//     <p>Not a member? <Button onClick={navigateRegister}>Register</Button></p>
//     <p>or sign up with:</p>
//     <button type="button" className="btn btn-link btn-floating mx-1">
//       <i className="fab fa-facebook-f"></i>
//     </button>

//     <button type="button" className="btn btn-link btn-floating mx-1">
//       <i className="fab fa-google"></i>
//     </button>

//     <button type="button" className="btn btn-link btn-floating mx-1">
//       <i className="fab fa-twitter"></i>
//     </button>

//     <button type="button" className="btn btn-link btn-floating mx-1">
//       <i className="fab fa-github"></i>
//     </button>
//   </div>
// </form>
//   )
// }

import PropTypes from 'prop-types'
import React, {useState, Component} from 'react'
import { useNavigate, route, withRouter } from 'react-router-dom'
import axios from "axios";
import { Card } from 'react-bootstrap';

const Login=()=>{

const url = "http://localhost:8080/api/v3/login"
const [username, setUsername] = useState('');
const [pass, setPass] = useState('');
const [error, setError] = useState('');
const navigate = useNavigate();

const handleSubmit = () => {
    console.log(username);
    console.log(pass);
    axios.post(url,{id:username,password:pass})
    .then(response => {
      console.log(response);
      if(response.data == 'sucess')
        navigate("/");
      else
        setError(response.data);
    })
    .catch(error=>{console.log(error)});
    console.log("sent");
}
    return (
        <div>
            <center>
              <div style={{"padding-top":"100px"}}>
                <h1>Loan Management Application</h1>
                <br/>
              </div>
            
            <form style={{"padding-left":"35%","padding-right":"35%", "padding-top":"2%"}}>
                <div style={{"border":"1px solid black", "padding":"5% 5% 5%"}}>
                <h3>User Login</h3>
                <br/>
                <div class="form-outline mb-4 form-group">
                  <input id="form2Example1" class="form-control" placeholder="Enter User-ID"onChange={(e)=>setUsername(e.target.value)} type="number" required/>
                  {error == 'FailUser' && (
                    <div style={{"color":"red"}}>
                      User does not exist!
                    </div>
                  )}
                </div>
                
                <div class="form-outline mb-4 form-group">
                <input type="password" id="form2Example2" class="form-control" placeholder="Enter Password" onChange={(e)=>setPass(e.target.value)} required/>
                {error == 'FailPass' && (
                  <div style={{"color":"red"}}>
                    Wrong Password!!!
                  </div>
                )}
                </div>
                <button type="button" class="btn btn-dark btn-block mb-4" onClick={handleSubmit}>Login</button>
                <div class="text-center">
                  <p>Not a member? <a href="/register">Register</a></p>
                </div></div>
            </form>
            </center>
        </div>
    )
}

export default Login