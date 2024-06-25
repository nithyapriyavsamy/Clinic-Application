import { Link } from 'react-router-dom';
import React from 'react';
import pic from '../Assets/pic1.jpg';
import doc2 from '../Assets/doctor2.jpeg';
import doc3 from '../Assets/doctor5.jpg';
import building from '../Assets/building.jpg';
import pic1 from '../Assets/pic3.jpg';
import pic2 from '../Assets/doc.png';
import pic3 from '../Assets/docs.jpg';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Home (){
    const navigate=useNavigate();
    var join=()=>{
        navigate('/login');
    }
  return (
    
    <div className='homePage'>
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
      <div>
  <nav className="navbar navbar-expand-lg navbar-light back" id="parent">
    <a className="navbar-brand" href="#">
      <header >
        <h5 id='lotus'><b>&nbsp;&nbsp;Lotus Healthcare Organization</b></h5>
      </header>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav" style={{ marginLeft: '840px' }}>
        <li className="nav-item">
          <a className="nav-link" href="#about" id='lotus'>About</a>
        </li>
        <li className="nav-item" style={{ marginLeft: '10px' }}>
          <a className="nav-link" href="#healers" id='lotus'>Doctors</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"></a>
        </li>
        <li className="nav-item" >
          <a className="nav-link" href="#"></a>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto" style={{ marginLeft: '0px' }}>
      <li className="nav-item" style={{ marginLeft: 'auto' }}>
        <a className="nav-link logout-btn" href="#">
        <Link  to="/login"> Join Us</Link>
        </a>
        </li>

      </ul>
    </div>
  </nav>
</div>
<div className="caro">
<Carousel 
        autoPlay
        infiniteLoop
        interval={1200}>
                <div>
                    <img src={pic1} />
                    
                </div>
                <div>
                    <img src={pic2} />
                    
                </div>
                <div>
                    <img src={pic3} />
                    
                </div>
            </Carousel>

            </div>

    </section>
    <section className="text-center text-lg-start" id='about'>
    <div className="card mb-3">
        <div className="row g-0 d-flex align-items-center">
          <div className="col-lg-4 d-none d-lg-flex home" style={{ height: '500px' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;<img
              src={building}
              alt="Trendy Pants and Shoes"
              className="w-80 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
            />
          </div>
          <div className="col-lg-8">
            <div className="card-body py-5 px-md-5 homePage">
              <p>Welcome to Our Hospital! We are a leading medical institution committed to providing exceptional healthcare services to our community. Our team of dedicated healthcare professionals is equipped with the knowledge and expertise to deliver compassionate and personalized care to our patients. With a focus on patient-centered care, we strive to ensure the well-being and comfort of every individual who walks through our doors.</p>
               <p>At Our Hospital, we pride ourselves on our state-of-the-art facilities and advanced medical technologies. Our modern infrastructure allows us to offer a comprehensive range of medical services and treatments. From preventive care and routine check-ups to complex surgeries and specialized treatments, we cater to diverse healthcare needs.</p> 
            <p>As a community-focused institution, we actively engage in health awareness programs and community outreach initiatives. We believe in the importance of preventive care and strive to educate and empower individuals to make informed decisions about their health.</p>            
            <p>We are committed to promoting a patient-friendly environment that fosters trust, respect, and dignity. Our hospital is designed to ensure the comfort and convenience of our patients and their families. We provide amenities such as comfortable waiting areas, ample parking facilities, and easily accessible locations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="text-center text-lg-start " id='about'>
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
      
      <div className="card mb-3" id='healers'>
        <div className="row g-0 d-flex align-items-center">
        <div className="card-body py-5 px-md-5 homePage align-items-center textuh">
              <p>"The doctors at this hospital are highly skilled and knowledgeable, ensuring the best medical care for their patients."</p>
               <p>"The doctors demonstrate great empathy and compassion, making patients feel comfortable and well-cared for during their treatment."</p> 
               <p>"The dedication and commitment of the doctors in this hospital are truly admirable, as they go above and beyond to ensure the well-being of their patients."</p>
            <p>As a community-focused institution, we actively engage in health awareness programs and community outreach initiatives.</p>            
            </div>
          <div className="col-lg-4 d-none d-lg-flex home">
            
            <div className="col-lg-8 d-flex " style={{ height: '350px', width:' 250px'}}>
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<img 
              src={pic}
              alt="Trendy Pants and Shoes"
              className="w-80 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
            /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img 
              src={doc2 }
              alt="Trendy Pants and Shoes"
              className="w-80 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
            />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img
              src={doc3}
              alt="Trendy Pants and Shoes"
              className="w-80 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
            />
          </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Home;