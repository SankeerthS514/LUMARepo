import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
export default function 
() {
    const url = "http://localhost:8080/api/v3/login"
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        console.log(username);
        console.log(pass);
        axios.post(url,{id:username,password:pass})
        .then(response => {
          console.log(response);
          if(response.data == 'sucess')
            navigate("/");
        })
        .catch(error=>{console.log(error)});
        console.log("sent");
    }
  return (
    <form>
  <div className="form-outline mb-4" style = {{"padding":"30px"}}>
    <input onChange={(e)=>setUsername(e.target.value)} type="number" id="form2Example1" className="form-control"  />
    <label className="form-label" for="form2Example1">Username</label>
  </div>

  <div className="form-outline mb-4" style = {{"padding":"30px"}}>
    <input onChange={(e)=>setPass(e.target.value)} type="password" id="form2Example2" className="form-control"/>
    <label className="form-label" for="form2Example2">Password</label>
  </div>

  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label className="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div className="col">
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleSubmit}>Sign in</button>

  <div className="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
    <p>or sign up with:</p>
    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-facebook-f"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-google"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-twitter"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-github"></i>
    </button>
  </div>
</form>
  )
}
