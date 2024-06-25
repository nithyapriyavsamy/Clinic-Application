import { useState } from "react";

function SingleDoc(props)
{

    const[doctor,setDoctor]=useState(props.obj);

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
        </tr>       
    )
}
export default SingleDoc;