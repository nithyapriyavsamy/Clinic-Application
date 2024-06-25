import './RegisterPatient.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegisterPatient() {
    const navigate=useNavigate();

    const [patient,setPatient]=useState({
      "users":{
        "email":"ss@gmail.com"
      },
      "name": "nithya",
      "dob": new Date(),
      "gender": "female",
      "age": 0,
      "phoneNo": "1234567890",
      "password": "**********"
    })

    var assignEmail=(event)=>
    {
        setPatient((patient)=>{
            return ({
                ...patient, "users": { ...patient.users,"email":event.target.value },
            });
        })
      }

    var register = ()=>{
      console.log("**************");
      console.log(patient);
        fetch("http://localhost:5182/api/User/action/Patient Register",{
          "method":"POST",
          headers:{
              "accept": "text/plain",
              "Content-Type": 'application/json'
          },
          "body":JSON.stringify({...patient,"patient":{} })})
        .then(async (data)=>{
          if(data.status == 201)
          { 
              var myData = await data.json();
              console.log(myData); 
              toast.success('Register Successful!');       
              navigate("/login");   
          }
          if(data.status == 400){
            toast.error('Mail Id not available!');
          }
        }).catch((err)=>{
          console.log(err.error)
        })
      }
      var back=()=>{
        navigate("/login");  
      }


    return (
   <div className='Register'>
    <div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" id="parent">
    <a class="navbar-brand" href="#">
      <header id="lotus">
        <h5><b>Lotus Healthcare Organization</b></h5>
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
        <li class="nav-item">
          <a class="nav-link" href="#"></a>
        </li>
        <li class="nav-item" >
          <a class="nav-link" href="#"></a>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto" style={{ marginLeft: '980px' }}>
      <li class="nav-item" style={{ marginLeft: 'auto' }}>
        <a class="nav-link logout-btn" href="#">
         <button className='btn btn-primary' onClick={back}> Back</button>
        </a>
        </li>

      </ul>
    </div>
  </nav>
</div>
    <div className="container">
      <div className="myCard">
        <div className="row">
          <div className="col-md-6 leftDiv">
            <div className="myLeftCtn">
              <div className="myForm text-center">
                <header>Create Patient Account</header>
                <div className="form-group">
                  <i className="fas fa-envelope"></i>
                  <input
                    className="myInput"
                    placeholder="Email"
                    type="text"
                    id="email"
                    required
                    onBlur={assignEmail} 
                  />
                  {
                      !patient.users.email.includes('@gmail.com')?(<p className="passwords">*Email should be in the format of *****@gmail.com</p>):(<div></div>)
                  }
                </div>
                &nbsp;
                <div className="form-group">
                  <i className="fas fa-lock"></i>
                  <input
                    className="myInput"
                    type="password"
                    id="password"
                    placeholder="Password"
                    required
                    onBlur={(event)=>{
                        setPatient({...patient, "password":event.target.value})
                      }}
                  />
                  {
                     patient.password===''|| patient.password.length<4?(<p className="passwords">*password should be minimum of 4 characters</p>):(<div></div>)
                  }
                </div>
                &nbsp;
                <div className="form-group">
                  <i className="fas fa-envelope"></i>
                  <input
                    className="myInput"
                    placeholder="Name"
                    type="text"
                    id="email"
                    required
                    onBlur={(event)=>{
                        setPatient({...patient, "name":event.target.value})
                    }}
                  />
                  {
                     patient.name===''|| patient.name.length<4?(<p className="passwords">*Name should be minimum of 4 characters</p>):(<div></div>)
                  }
                </div>
                &nbsp;
                <div className="form-group">
                  <i className="fas fa-envelope"></i>
                  <input
                    className="myInput"
                    placeholder="Name"
                    type="datetime-local"
                    id="email"
                    required
                    onChange={(event)=>{
                        setPatient({...patient, "dob":event.target.value})
                    }}
                  />
                </div>
                &nbsp;
                <div className="form-group">
                  <i className="fas fa-envelope"></i>
                  <input
                    className="myInput"
                    placeholder="Phone Number"
                    type="number"
                    id="email"
                    required
                    onBlur={(event)=>{
                        setPatient({...patient, "phoneNo":event.target.value})
                    }}
                  />
                  {
                     patient.phoneNo.length<10|| patient.phoneNo.length>10?(<p className="passwords">*Phone No should be 10 characters</p>):(<div></div>)
                  }
                </div>
               
                
                &nbsp;
                <div className="form-group">
                  <i className="fas fa-envelope"></i>
                  <select  className="myInput bg-light" id="email" onBlur={(event)=>{
                setPatient({...patient, "gender":event.target.value})
              }}>
                <option value="" disabled selected >Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>             
             </select>
              {
                     patient.gender!="male"&&patient.gender!="female"?(<p className="passwords">*Gender Should not be empty</p>):(<div></div>)
                  }
                </div>

                &nbsp;<br/>
                <input type="submit" className="butt" value="REGISTER" onClick={register} />
              </div>
            </div>
          </div>
          <div className="col-md-6 rightDiv">
            <div className="myRightCtn">
              <div className="box">
              <header id="lotus"><b>Lotus Healthcare</b></header><br/>
                <p>
                Lotus Healthcare: Exceptional care, compassion, expertise, 
                healing environment, skilled professionals, advanced technology, 
                comprehensive services, patient-centric approach, personalized attention, 
                holistic healing, community outreach, health education, medical research, 
                excellence, well-being, tranquility, nurturing, commitment, highest standards.
                Our esteemed doctors bring expertise, empathy, and healing to every patient.
                Experience the trust and quality of care delivered by our exceptional team of doctors.
                Exceptional doctors providing compassionate care and life-changing expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
</div>
    );
  }
  
  export default RegisterPatient;

