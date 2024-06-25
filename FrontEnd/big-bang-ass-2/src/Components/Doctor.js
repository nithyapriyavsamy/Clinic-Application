import './Doctor.css'
import { useState } from 'react';

function Doctor(props) {
    const [doctor,setDoctor]=useState( props.doctor);


    return (
      <div>
        
        <div className="card doctorcard card-body card  mb-3 shadow p-3 mb-5 rounded">
                <h5 className="card-title "><b>{doctor.name}</b></h5>
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
                <b>Experience - {doctor.experience} Years</b></p>            
        </div>
      </div>
    );
  }
  
  export default Doctor;
  