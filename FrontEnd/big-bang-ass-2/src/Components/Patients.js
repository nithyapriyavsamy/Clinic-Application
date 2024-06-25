import React from "react";
import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Patient from "./Patient";
import './Patients.css';


function Patients()
{
   const navigate=useNavigate();

    const [patients,setPatients]=useState([]);

    useEffect(() => {
        let ignore = false;
        
        if (!ignore)  Patients()
        return () => { ignore = true; }
        },[]);
    
    var logout=()=>{
        localStorage.clear();
        navigate('/');
    }

    var Patients=()=>
    {
        console.log("*");
        fetch("http://localhost:5182/api/User/action/AllPatients",
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
                setPatients(await data.json());
                console.log(patients);
            }
        })
        .catch((err)=>
        {
                console.log(err.error);
        })
    }


    

    return(
        <div className="patients">
            <div>
              <nav class="navbar navbar-expand-lg navbar-light bg-light" id="parent">
              <a class="navbar-brand" href="#">
              <header >
                <h5 id="lotus"><b>&nbsp;&nbsp;All Patients</b></h5>
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
                navigate("/viewAll");
            }} className="btn btn-primary views" >All Doctors</button></a>
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
            
            <div className="doctors">
                {
                    patients.map((patient,index)=>{
                        return(<Patient key={index} patient={patient}/>)
                    })
                }
            </div>
        </div>
    );
}

export default Patients;