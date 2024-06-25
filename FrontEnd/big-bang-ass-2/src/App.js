import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import RegisterDoctor from './Components/RegisterDoctor';
import Login from './Components/Login';
import RegisterPatient from './Components/RegisterPatient';
import { BrowserRouter,Route, Routes, useNavigate } from 'react-router-dom';
import Doctor from './Components/Doctor';
import Doctors from './Components/Doctors';
import Admin from './Components/Admin';
import ViewAll from './Components/ViewAll';
import DoctorProfile from './Components/DoctorProfile';
import Patients from './Components/Patients';
import Home from './Components/Home';
import AdminHome from './Components/AdminHome';
import AdminProtected from './Components/Protected/AdminProtected';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 var token;
  return (
    <div>
    <div>
    {/* Your component's content */}
    <ToastContainer />
  </div>
    <BrowserRouter>
    <div className="App">
    
    

  

        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='login' element={<Login/>} />
        <Route path='doctorreg' element={<RegisterDoctor/>} />
        <Route path='patientreg' element={<RegisterPatient/>} />
        {/* <Route path='doctors' element={<Doctors/>} /> */}
        <Route path='doctors' element={
          <AdminProtected token={token}>
            <Doctors/>
          </AdminProtected>
        } />
        <Route path='admin' element={
          <AdminProtected token={token}>
            <Admin/>
          </AdminProtected>
        } />
        <Route path='viewAll' element={<ViewAll/>} />
        <Route path='profile' element={<DoctorProfile/>} />
        <Route path='patients' element={<Patients/>} />
        <Route path='home' element={<Home/>} />
        <Route path='adminHome' element={
          <AdminProtected token={token}>
            <AdminHome/>
          </AdminProtected>
        } />
        </Routes>
        
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
