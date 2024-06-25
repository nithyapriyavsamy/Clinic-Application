import { useState,useEffect } from "react";
import './ViewAll.css';
import SingleDoc from "./SingleDoc";
import { useNavigate } from "react-router-dom";


function ViewAll()
{
    const navigate=useNavigate();
    const [doctors,setDoctors]=useState([]);
    var [statusDTO,setStatusDTO]=useState({
        "state": "Denied"
    });
   var logout=()=>{
    localStorage.clear();
    navigate('/');
   }
    useEffect(() => {
        let ignore = false;
        
        if (!ignore)  Doctors()
        return () => { ignore = true; }
        },[]);

    var Doctors=()=>
    {
        console.log("*");
        fetch("http://localhost:5182/api/User/action/AllDoctors",
        {
            "method":"POST",
            headers:{
                "accept": "text/plain",
                "Content-Type": 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
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



   
    

    return(
        <div>
             <div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" id="parent">
    <a class="navbar-brand" href="#">
      <header >
        <h5 id="lotus"><b>&nbsp;&nbsp;All Doctors</b></h5>
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
                navigate("/admin");
            }} className="btn btn-primary views" >To Approve</button></a>
        </li>
        <li class="nav-item" >
          <a class="nav-link" href="#"><button onClick={()=>{
                navigate("/patients");
            }} className="btn btn-primary views" >All Patients</button></a>
        </li>
       
      </ul>
      <ul class="navbar-nav ml-auto" style={{ marginLeft: '800px' }}>
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
                </thead>
                <tbody>
                {
                    doctors.map((doctor,index)=>{
                        return(
                            <SingleDoc  key={index} obj={doctor}/>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default ViewAll;