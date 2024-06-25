import './Patient.css'
import { useState } from 'react';

function Patient(props) {
    const [patient,setPatient]=useState( props.patient);


    return (
      <div>
        
        <div className="card patientcard card-body card  mb-3 shadow p-3 mb-5 rounded">
                
                <h5 className="card-title name"><b>{patient.name}</b></h5>
                <p className="card-text"><b>DOB - {new Date(patient.dob).toLocaleDateString()}</b></p>
                <p className="card-text">
                    <b>Age - {patient.age}</b></p>
                <p className="card-text">
                    <b>Gender - {patient.gender}</b></p>
                <p className="card-text">
                <b>Phone - {patient.phoneNo}</b></p>   
                <p className="card-text">
                <b>Patient Id - {patient.patientId}</b></p>   
        </div>
      </div>
    );
  }
  
  export default Patient;
  