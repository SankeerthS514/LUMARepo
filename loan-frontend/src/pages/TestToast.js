import React from 'react'

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TestToast() {
  const notify = () =>{
    toast("Toast");
  }
  return (
    <>
    <div><br/><br/><br/>TestToast
    <button  onClick = {notify}>Test</button>
    </div>
    <ToastContainer
position="top-center"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </>
  )
}

export default TestToast;