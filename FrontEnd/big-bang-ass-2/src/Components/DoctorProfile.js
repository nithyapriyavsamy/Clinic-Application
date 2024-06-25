import { useState,useEffect } from "react";
import './DoctorProfile.css';
import { useNavigate } from "react-router-dom";
import pic from '../Assets/doctors.png'


function DoctorProfile()
{
    const navigate = useNavigate();
    const [doctor,setDoctor]=useState({});

    var logout=()=>{
        localStorage.clear();
        navigate('/');
    }

    useEffect(() => {
        let ignore = false;
        
        if (!ignore)  Doctor()
        return () => { ignore = true; }
        },[]);

    var Doctor=()=>
    {
        console.log("*");
        const requestBody={
            "userId":Number(localStorage.getItem("id"))
        }
        fetch("http://localhost:5182/api/User/action/Get Doctor",
        {
            "method":"POST",
            headers:{
                "accept": "text/plain",
                "Content-Type": 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            "body":JSON.stringify({...requestBody,"requestBody":{} })
        })
        .then(async (data)=>
        {
            console.log("**");
            if(data.status == 201)
            {
                console.log("***");
                setDoctor(await data.json());
                console.log(doctor);
                localStorage.setItem("status",data.users.status);
            }
        })
        .catch((err)=>
        {
                console.log(err.error);
        })
    }

 
    

    return(
        <div className="pro">
            <div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light b" id="parent">
    <a class="navbar-brand" href="#">
      <header >
        <h5 id="lotus"><b>Lotus Healthcare Organization</b></h5>
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
      <ul class="navbar-nav ml-auto" style={{ marginLeft: '980px' }}>
      <li class="nav-item" style={{ marginLeft: 'auto' }}>
        <a class="nav-link logout-btn" href="#">
        <button className='btn btn-Primary views' onClick={logout}> Logout</button>
        </a>
        </li>

      </ul>
    </div>
  </nav>
</div>
    <div className="main-container">
            <div className="card doctorcard card-body card  mb-3 shadow p-3 mb-5 rounded sub-container">
                <p className="card-text"><b>Name - {doctor.name}</b></p>
                <p className="card-text"><b>DOB - {new Date(doctor.dob).toLocaleDateString()}</b></p>
                <p className="card-text">
                    <b>Age - {doctor.age}</b></p>
                <p className="card-text">
                    <b>Gender - {doctor.gender}</b></p>
                <p className="card-text">
                
                <b>Phone - {doctor.phoneNo}</b></p>
                <p className="card-text">
                <b>Specialization - {doctor.specialization}</b></p>
                <p className="card-text">
                <b>Experience - {doctor.experience} Years</b></p>  <br/> <br/> <br/>
                <h4 id="sta"><b>Your are {localStorage.getItem("status")}</b></h4>     
        </div>
    </div>
{/* <section className="text-center text-lg-start ">
      <style>
        {`
           .rounded-t-5 {
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
          }
      
          @media (min-width: 992px) {
            .rounded-tr-lg-0 {
              border-top-right-radius: 0;
            }
      
            .rounded-bl-lg-5 {
              border-bottom-left-radius: 1rem;
            }
          }
      
          .form-outline {
            height: 120px; 
          }
        `}
      </style>
      
      <div className="card mb-3">
        <div className="row g-0 d-flex align-items-center con">
        <div className="card doctorcard card-body card  mb-3 shadow p-3 mb-5 rounded">
                <p className="card-text"><b>Name - {doctor.name}</b></p>
                <p className="card-text"><b>DOB - {new Date(doctor.dob).toLocaleDateString()}</b></p>
                <p className="card-text">
                    <b>Age - {doctor.age}</b></p>
                <p className="card-text">
                    <b>Gender - {doctor.gender}</b></p>
                <p className="card-text">
                
                <b>Phone - {doctor.phoneNo}</b></p>
                <p className="card-text">
                <b>Specialization - {doctor.specialization}</b></p>
                <p className="card-text">
                <b>Experience - {doctor.experience} Years</b></p>  <br/> <br/> <br/>
                <h4 id="sta"><b>Your are {localStorage.getItem("status")}</b></h4>     
        </div>
          
          <div className="col-lg-8">
            <div className="card-body py-5 px-md-0">
            <div className="row g-0 d-flex align-items-center">
            <div className="col-lg-4 d-none d-lg-flex home" style={{ height: '500px' }}>
            <img
              src={pic}
              alt="Trendy Pants and Shoes"
              className="w-80 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
            />
          </div>
        </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    </div>
        
    )
}

export default DoctorProfile;