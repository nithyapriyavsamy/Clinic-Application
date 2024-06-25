import React from "react";
import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Doctors.css'
import Doctor from "./Doctor";


function Doctors()
{
    var statusDTO={
        "state": "Approved"
    }
    var navigate=useNavigate();

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
        <div className="pros">
            <div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" id="parent">
    <a class="navbar-brand" href="#">
      <header >
        <h3 id="lotus"><b>Our Healers</b></h3>
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
        
       
      </ul>
      <ul class="navbar-nav ml-auto" style={{ marginLeft: '1150px' }}>
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
                    doctors.map((doctor,index)=>{
                        return(<Doctor key={index} doctor={doctor}/>)
                    })
                }
            </div>
        </div>
    );
}

export default Doctors;