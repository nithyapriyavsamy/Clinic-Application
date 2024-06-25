import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const navigate=useNavigate();
    const [user,setUser] = useState({
        "UserId": 0,
        "email":"qq@gmail.com",
        "password":"*****",
        "Role": "",
        "status":"",
        "token": ""
    });

    var login = ()=>{
        fetch("http://localhost:5182/api/User/action/Login",{
          "method":"POST",
          headers:{
              "accept": "text/plain",
              "Content-Type": 'application/json'
          },
          "body":JSON.stringify({...user,"user":{} })})
        .then(async (data)=>{
          if(data.status == 201)
          { 
              var myData = await data.json();
              console.log(myData); 
              localStorage.setItem("token" , myData.token.toString()); 
              localStorage.setItem("status",myData.status);
              toast.success('Login Successful!');       
              if(myData.role=="Patient")
              {
                navigate("/doctors") ;             
              }          
              else if(myData.role=="Admin")
              {
                navigate("/adminHome") ; 
              } 
              else if(myData.role=="Doctor")
              {
                localStorage.setItem("id",myData.userId);
                navigate("/profile") ; 
              }          
          }
          if(data.status == 400){
            toast.error('Check your credentials!');
          }
        }).catch((err)=>{
          alert("Check your credentials");
          console.log(err.error)
        })
      }
      var doctor=()=>{
            navigate("/doctorreg");
      }
      var patient=()=>{
        navigate("/patientreg");
      }
      
      var back=()=>{
        navigate("/");
      }

    return (
   <div className='Login' >
    <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light" id="parent">
    <a className="navbar-brand" href="#">
      <header id="lotus">
        <h5><b>Lotus Healthcare Organization</b></h5>
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
          <a className="nav-link" href="#"></a>
        </li>
        <li className="nav-item" >
          <a className="nav-link" href="#"></a>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto" style={{ marginLeft: '980px' }}>
      <li className="nav-item" style={{ marginLeft: 'auto' }}>
        <a className="nav-link logout-btn" href="#">
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
                <header>Login to your account</header>
                
                &nbsp;
                <div className="form-group">
                  <i className="fas fa-envelope"></i>
                  <input
                    className="myInput"
                    placeholder="Email"
                    type="text"
                    id="email"
                    required
                    onBlur={(event)=>{
                        setUser({...user, "email":event.target.value})
                      }
                    }
                  />
                  {
                      !user.email.includes('@gmail.com')?(<p className="passwords">*Email should be in the format of *****@gmail.com</p>):(<div></div>)
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
                        setUser({...user, "password":event.target.value})
                      }}
                  />
                  {
                     user.password===''|| user.password.length<4?(<p className="passwords">*password should be minimum of 4 characters</p>):(<div></div>)
                  }
                </div>
                &nbsp;
              
                &nbsp;<br/>
                <input type="submit" className="butt" value="LOGIN" onClick={login} /><br/><br/>
                <p className='middle'>If you don't have account, Register As</p>
                <input type="submit" className="butt" value="Doctor" onClick={doctor} /><br/><br/>
                <input type="submit" className="butt" value="Patient" onClick={patient} />
              </div>
            </div>
          </div>
          <div className="col-md-6 rightDiv">
            <div className="myRightCtn">
              <div className="box">
                <br/><br/>
                <header id="lotus"><b>Lotus Healthcare</b></header><br/>
                <p>
                Lotus Healthcare: Exceptional care, compassion, expertise, 
                healing environment, skilled professionals, advanced technology, 
                comprehensive services, patient-centric approach, personalized attention, 
                holistic healing, community outreach, health education, medical research, 
                excellence, well-being, tranquility, nurturing, commitment, highest standards.
                Our esteemed doctors bring expertise, empathy, and healing to every patient.
                Experience the trust and quality of care delivered by our exceptional team of doctors.
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
  
  export default Login;

