import { useState,useEffect } from "react";
import './AdminHome.css';
import Doc from "./Doc";
import { useNavigate } from "react-router-dom";
import pic from '../Assets/Admin1.jpg'


function AdminHome()
{
    const navigate = useNavigate();
    
    var logout=()=>{
        localStorage.clear();
        navigate('/');
    }

   
    

    return(
        
        <div>
            <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light b" id="parent">
    <a className="navbar-brand" href="#">
      <header >
        <h5 id="lotus"><b>Lotus Healthcare Organization</b></h5>
      </header>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#"></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><button onClick={()=>{
                navigate("/viewAll");
            }} className="btn btn-primary views" >All Doctors</button></a>
        </li>
        <li className="nav-item" >
          <a className="nav-link" href="#"><button onClick={()=>{
                navigate("/patients");
            }} className="btn btn-primary views" >All Patients</button></a>
        </li>
        <li className="nav-item" >
          <a className="nav-link" href="#"><button onClick={()=>{
                navigate("/admin");
            }} className="btn btn-primary views" >To Approve</button></a>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto" style={{ marginLeft: '500px' }}>
      <li className="nav-item" style={{ marginLeft: 'auto' }}>
        <a className="nav-link logout-btn" href="#">
        <button className='btn btn-Primary views' onClick={logout}> Logout</button>
        </a>
        </li>

      </ul>
    </div>
  </nav>
</div>
<section className="text-center text-lg-start ">
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
        <div className="row g-0 d-flex align-items-center">
          <div className="col-lg-4 d-none d-lg-flex home" style={{ height: '500px' }}>
            <img
              src={pic}
              alt="Trendy Pants and Shoes"
              className="w-80 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
            />
          </div>
          <div className="col-lg-8">
            <div className="card-body py-5 px-md-5 " id="lotus">
              <p>Welcome to Our Hospital! We are a leading medical institution committed to providing exceptional healthcare services to our community. Our team of dedicated healthcare professionals is equipped with the knowledge and expertise to deliver compassionate and personalized care to our patients. With a focus on patient-centered care, we strive to ensure the well-being and comfort of every individual who walks through our doors.</p>
               <p>At Our Hospital, we pride ourselves on our state-of-the-art facilities and advanced medical technologies. Our modern infrastructure allows us to offer a comprehensive range of medical services and treatments. From preventive care and routine check-ups to complex surgeries and specialized treatments, we cater to diverse healthcare needs.</p> 
            <p>As a community-focused institution, we actively engage in health awareness programs and community outreach initiatives. We believe in the importance of preventive care and strive to educate and empower individuals to make informed decisions about their health.</p>            
            <p>We are committed to promoting a patient-friendly environment that fosters trust, respect, and dignity. Our hospital is designed to ensure the comfort and convenience of our patients and their families. We provide amenities such as comfortable waiting areas, ample parking facilities, and easily accessible locations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>    
    )
}

export default AdminHome;