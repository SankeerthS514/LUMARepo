import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Navbar from './layout/Navbar';
import Login from './pages/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/home';
import LoanApply from './pages/LoanApply';
import AdminDashboard from './admin/AdminDasboard';
import Loanlist from './admin/LoanList'
import UserRegistar from './user/UserRegistar';
import EmployeeList from './admin/EmployeeList';
import DeleteEmployee from './admin/DeleteEmployee';
import EditEmployee from './admin/EditEmployee';
import UserLoan from './pages/UserLoan';
import AddCategory from './admin/AddCategory';
import TestToast from './pages/TestToast';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/user-register' element={<UserRegistar/>}/>
        <Route exact path='/admin'element={<AdminDashboard/>}/>
        <Route exact path='/admin/list' element={<EmployeeList/>}/>
        <Route exact path='/admin/loanlist' element={<Loanlist/>}/>
        <Route exact path='/admin/addcat' element={<AddCategory/>}/>
        <Route exact path='/admin/delete/:id' element={<DeleteEmployee/>}/>
        <Route exact path='/admin/update/:id' element={<EditEmployee/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path='/loan-apply' element={<LoanApply/>}/>
        <Route exact path='/loan-card/:empid' element={<UserLoan/>}/>
        <Route exact path='/test-toast' element = {<TestToast/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
