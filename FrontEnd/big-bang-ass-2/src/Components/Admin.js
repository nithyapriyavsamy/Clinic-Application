import { useState,useEffect } from "react";
import './Admin.css';
import Doc from "./Doc";
import { useNavigate } from "react-router-dom";


function Admin()
{
    const navigate = useNavigate();
    const[doctor,setDoctor]=useState();
    var [statusDTO,setStatusDTO]=useState({
        "state": "Requested"
    });

    const [doctors,setDoctors]=useState([]);

    useEffect(() => {
        let ignore = false;
        
        if (!ignore)  Doctors()
        return () => { ignore = true; }
        },[]);

    var Doctors=()=>
    {
        console.log("*");
        fetch("http://localhost:5182/api/User/action/Doctors",
        {
            "method":"POST",
            headers:{
                "accept": "text/plain",
                "Content-Type": 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            "body":JSON.stringify({...statusDTO,"statusDTO":{} })
        })
        .then(async (data)=>
        {
            console.log("**");
            if(data.status == 201)
            {
                console.log("***");
                setDoctors(await data.json());
                console.log(doctors);
            }
        })
        .catch((err)=>
        {
                console.log(err.error);
        })
    }

    var logout=()=>{
        localStorage.clear();
        navigate('/');
    }

   
    

    return(
        <div>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light" id="parent">
                    <a class="navbar-brand" href="#">
                    <header >
                        <h5 id="lotus"><b>Requested Doctors</b></h5>
                    </header>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link" href="#"></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#"></a>
                        </li>
                        <li class="nav-item" >
                        <a class="nav-link" href="#"><button onClick={()=>{
                                navigate("/adminHome");
                            }} className="btn btn-primary views" >Admin</button></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#"><button onClick={()=>{
                                navigate("/viewAll");
                            }} className="btn btn-primary views" >All Doctors</button></a>
                        </li>
                        <li class="nav-item" >
                        <a class="nav-link" href="#"><button onClick={()=>{
                                navigate("/patients");
                            }} className="btn btn-primary views" >All Patients</button></a>
                        </li>
                    
                    </ul>
                    <ul class="navbar-nav ml-auto" style={{ marginLeft: '700px' }}>
                    <li class="nav-item" style={{ marginLeft: 'auto' }}>
                        <a class="nav-link logout-btn" href="#">
                        <button className='btn btn-primary views' onClick={logout}> Logout</button>
                        </a>
                        </li>

                    </ul>
                    </div>
                </nav>
            </div>
            
            <table>
                <thead>
                    <th>Doctor ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>DOB</th>
                    <th>Age</th>
                    <th>Phone No</th>
                    <th>Specialization</th>
                    <th>Experience</th>
                    <th>Status</th>
                    <th>Approve</th>
                    <th>Deny</th>
                </thead>
                <tbody>
                {
                    doctors.map((doctor,index)=>{
                        return(
                            // <>
                            // <Doc  key={index} object={doctor}/>
                            
                            // </>
                            <tr>
            <td>{doctor.doctorId}</td>
            <td>{doctor.name}</td>
            <td>{doctor.gender}</td>
            <td>{doctor.dob}</td>
            <td>{doctor.age}</td>
            <td>{doctor.phoneNo}</td>
            <td>{doctor.specialization}</td>
            <td>{doctor.experience}</td>
            <td>{doctor.users.status}</td>
            <td>
                <button className="btn btn-success" onClick={()=>{
                        console.log("*");
                        Doctors()
                        const requestBody={
                            "userId":doctor.doctorId
                        }
                        console.log("**");
                        setDoctor({...doctor,"users":{...doctor.users,"status":"Approved"}})
                        console.log("***");
                        console.log(requestBody);
                        console.log(doctor);
                        fetch("http://localhost:5182/api/User/action/Approve Doctor",
                        {
                            "method":"POST",
                            headers:{
                                "accept": "text/plain",
                                "Content-Type": "application/json",
                                'Authorization': 'Bearer ' + localStorage.getItem('token')
                            },
                            "body":JSON.stringify({...requestBody,"requestBody":{} })
                        })
                        .then(async (data)=>
                        {
                            if(data.status == 201)
                            {
                                Doctors()
                                console.log(doctor);
                            }
                        })
                        .catch((err)=>
                        {
                                console.log(err.error)
                        })
                }}>Approve</button>
            </td>
            <td>
                <button className="btn btn-danger" onClick={()=>{
                         Doctors()
                        const requestBody={
                            "userId":doctor.doctorId
                        }
                        console.log("**");
                        setDoctor({...doctor,"users":{...doctor.users,"status":"Denied"}})
                        console.log("***");
                        console.log(requestBody);
                        console.log(doctor);
                        fetch("http://localhost:5182/api/User/action/Deny Doctor",
                        {
                            "method":"POST",
                            headers:{
                                "accept": "text/plain",
                                "Content-Type": "application/json",
                                'Authorization': 'Bearer ' + localStorage.getItem('token')
                            },
                            "body":JSON.stringify({...requestBody,"requestBody":{} })
                        })
                        .then(async (data)=>
                        {
                            if(data.status == 201)
                            {
                                Doctors()
                                console.log(doctor);
                            }
                        })
                        .catch((err)=>
                        {
                                console.log(err.error)
                        })
                    }}>Deny</button>
            </td>
            </tr>       
                        )
                    })
                }
                </tbody>
            </table>
    </div>
    )
}

export default Admin;