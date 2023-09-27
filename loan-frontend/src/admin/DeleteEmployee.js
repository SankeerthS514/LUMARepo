import {useEffect, useRef, useState} from "react";
import {deleteEmployee, getById} from "./api";
import {useNavigate, useParams} from "react-router-dom";

const DeleteEmployee=()=>{

    const navigate = useNavigate();

    const [employee, setEmployee] = useState({})
    const params=useParams();
    const flag = useRef(true);
    useEffect(() => {
            if(flag.current){
                return async ()=>{
                    flag.current=false;
                    const emp=await getById(params.id);
                    setEmployee(emp);
                }
            }

    }, []);

    const onCancel=()=>{
        navigate("/admin/list")
    }
    const onDelete=async ()=>{
        await deleteEmployee(employee.id)
        navigate("/admin/list")
    }

    return (
        <div className="container" style={{"padding":"10%"}}><center>
            <h3 className="text-danger">Do you want to delete employee {employee.firstName}</h3>
            <div className="col-4">

                <table className="table table-striped table-bordered">
                    <tbody>
                        <tr>
                            <td>Employee Id</td>
                            <td>{employee .id}</td>
                        </tr>
                        <tr>
                            <td>First Name</td>
                            <td>{employee .firstName}</td>
                        </tr>
                        <tr>
                            <td>Last Name</td>
                            <td>{employee .lastName}</td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <button onClick={onCancel} className="btn btn-warning">Cancel</button>
                &nbsp;&nbsp;
                <button onClick={onDelete} className="btn btn-danger">Delete</button>

            </div></center>
        </div>
    )
}
export default DeleteEmployee;