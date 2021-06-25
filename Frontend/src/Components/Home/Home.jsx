import React from 'react'
import solderImg from "../../assets/img/home/Mask Group 10.png"
import vacuumImg from "../../assets/img/home/Mask Group 7.png"
import gel from '../../assets/img/home/Mask Group 11.png';
import packing from '../../assets/img/home/Mask Group 8.png';
import robot from '../../assets/img/home/Mask Group 9.png';
import testers from '../../assets/img/home/Mask Group 12.png';
import { Link } from 'react-router-dom'
import list from '../../assets/img/list.png'
import './Homes.css'
import { Navbar } from '../Navbar/Navbar'
import dashboardIcon from "../../assets/img/home/app-store.svg";
function Home(props) {

  return (
    <>
      <Navbar logo="NOKIA" subTitle="Digital WorkStation" title="Autonomous Maintenance" src={dashboardIcon} alt="" />
      <div className='h-90 d-flex flex-column justify-content-center align-content-center' id="homepage">
        <div className="d-flex justify-content-center">
          <div className="col-6 d-flex flex-column justify-content-center align-items-center align-content-center">

            <div className='d-flex justify-content-center'>
              <Link to="/VacuumForm" className='d-flex justify-content-end'><img src={vacuumImg} alt='vacuum-img' style={{ height: "25vh", width: "80%", marginBottom: "1.5rem" }} /></Link>
              <Link to="/SolderForm" className='d-flex justify-content-center'><img src={solderImg} alt='vacuum-img' style={{ height: "25vh", width: "80%", marginBottom: "1.5rem" }} /></Link>
            </div>

            <div className='d-flex justify-content-around'>
              <Link to="/Testers" className='d-flex justify-content-end'><img src={testers} alt='vacuum-img' style={{ height: "25vh", width: "80%", marginBottom: "1.5rem" }} /></Link>
              <Link to="/thermalmain" className='d-flex justify-content-center'><img src={gel} alt='vacuum-img' style={{ height: "25vh", width: "80%", marginBottom: "1.5rem" }} /></Link>
            </div>

            <div className='d-flex justify-content-around'>
              <Link to="/" className='d-flex justify-content-end'><img src={robot} alt='vacuum-img' style={{ height: "25vh", width: "80%", marginBottom: "1.5rem" }} /></Link>
              <Link to="/" className='d-flex justify-content-center'><img src={packing} alt='vacuum-img' style={{ height: "25vh", width: "80%", marginBottom: "1.5rem" }} /></Link>
            </div>
          </div>
          <div className="col-6 my-auto d-flex flex-column align-content-center align-items-center justify-content-center">
            <div className="col-7">
              <h4 style={{ textAlign: "justify", lineHeight: "1.6" }}>
                Autonomous maintenance Check points for Key Process Stages can be accessed by operators.
                The Check lists need to be filed and maintained at beginning of every shift to ensure
                process quality and efficiency of these equipment.
              </h4>
            </div>
            <img src={list} alt="" style={{ height: "200px" }} />
            <Link to='/dashboard'><h4 style={{ textAlign: "center", color: "#124191", fontWeight: "600" }}>Click Here to Go <br /> Reports</h4></Link>
          </div>
        </div>
      </div>
    </ >
  )
}

export default Home
//  <div className='d-flex justify-content-center flex-column align-items-center w-100 bg-primary overflow-hidden' style={{ height: "100vh" }}>
//         <h2 data-aos-duration="2000" data-aos="zoom-in" className="white p-3 heading">Digital WorkStation</h2>
//         <Link to='/dashboard'><i className="fa fa-database dashboard-icon"></i></Link>
//         <div style={{ height: "80vh", width: "75%" }}>
//           <div className='h-50 d-flex justify-content-around py-2'>

//             <div data-aos-duration="3000" data-aos="fade-down-right" className='glassCard d-flex flex-column justify-content-center align-items-center text-center zoom' style={{ height: "100%", width: "28%" }}>
//               <Link to='/SolderForm'>
//                 <img src={solderImg} alt='solderImg' className="" loading="lazy" style={{ height: "90%", width: "70%" }} />
//               </Link>
//               <span className='home-card-title'>Soldering Tip Temperature <br />Measurement</span>
//             </div>

//             <div data-aos-duration="3000" data-aos="fade-down" className='glassCard d-flex flex-column justify-content-center align-items-center text-center zoom' style={{ height: "100%", width: "28%" }}>
//               <Link to='/vacuumform'>
//                 <img src={vacuumImg} alt='solderImg' className="" loading="lazy" style={{ height: "90%", width: "70%" }} />
//               </Link>
//               <span className='home-card-title'>Vacuum Lifter Daily Maintenance Checklist</span>
//             </div>

//             <div data-aos-duration="3000" data-aos="fade-down-left" className='glassCard zoom text-center heading d-flex flex-column justify-content-center align-items-center' style={{ height: "100%", width: "28%" }}>
//               <span className='home-card-title p-3'> Checklist 3</span>
//             </div>
//           </div>

//           <div className='h-50 d-flex justify-content-around py-3'>

//             <div data-aos-duration="3000" data-aos="fade-up-right" className='glassCard zoom text-center heading d-flex flex-column justify-content-center align-items-center' style={{ height: "100%", width: "28%" }}>
//               <span className='home-card-title p-3'> Checklist 4</span>
//             </div>
//             <div data-aos-duration="3000" data-aos="fade-up" className='glassCard zoom text-center heading d-flex flex-column justify-content-center align-items-center' style={{ height: "100%", width: "28%" }}>
//               <span className='home-card-title p-3'> Checklist 5</span>
//             </div>
//             <div data-aos-duration="3000" data-aos="fade-up-left" className='glassCard zoom text-center heading d-flex flex-column justify-content-center align-items-center' style={{ height: "100%", width: "28%" }}>
//               <span className='home-card-title p-3'> Checklist 6</span>
//             </div>

//           </div>
//         </div>
//       </div> 


// {
//                 (data.map((value, index) => (
//                   <div key={index} className='home-menu-grid' data-aos-duration="3000" data-aos={value.animation}>
//                     <Link to={value.link}>
//                       <img style={{ height: "94%", width: "94%" }} src={value.img} alt={value.alt} />
//                     </Link>
//                   </div>
//                 )))
//               }