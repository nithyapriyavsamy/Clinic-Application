import { useState,useCallback } from "react";
import './Doc.css';

function Doc(props)
{

    const[doctor,setDoctor]=useState(props.object);

    return(
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
                                setDoctor(await data.json());
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
                        console.log("*");
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
                                setDoctor(await data.json());
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
}
export default Doc;