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
  const data = [
    {
      img: vacuumImg,
      link: "/VacuumForm",
      alt: "Vacuum-img",
      title: "Vaccume Lifter Maintenance",
      // animation:"fade-down-right"
    },
    {
      img: packing,
      alt: 'packaginf-img',
      title: "Strapping & Tapping Machine",
      // animation:"fade-down"
    },
    {
      img: robot,
      alt: "robot-img",
      title: "Robots",
      // animation:"fade-down-left"
    },
    {
      img: solderImg,
      alt: "solderImg",
      link: "/SolderForm",
      title: "Soldering Tip Temp Measurement",
      // animation:"fade-up-right"
    },
    {
      img: gel,
      alt: "gel-img",
      // animation:"fade-up",
      link: "/thermalmain",
      title: "Thermal Gel Machine",
    },
    {
      img: testers,
      alt: "testers-img",
      link: "/Testers",
      title: "Testers",
      // animation:"fade-up-left"
    }
  ]

  return (
    <>
      <Navbar logo="NOKIA" title="Digital Work Station Final Assembly" src={dashboardIcon} alt="" />
      <div className='h-90 d-flex flex-column' id="homepage">
        {/* <h1 className="title-button1 justify-text-center">Autonomous Maintenance Check List</h1> */}
        <div className="row">
          <div className="col-md-6 col-sm-8">
            <div className=" d-flex flex-wrap" style={{ maxWidth: "1000px", marginLeft: "20px",marginTop:"20px" }}>
              {
                (data.map((value, index) => (
                  <div key={index} className='grid-card' data-aos-duration="3000" data-aos={value.animation}>
                    {/* <div style={{textAlign:"center"}} >{value.title}</div>                 */}
                    <Link to={value.link}>
                      <img style={{width:"94%",height:"94%"}} src={value.img} alt={value.alt} />
                    </Link>
                  </div>
                )))
              }
            </div>
          </div>
          <div className="col-md-6 col-12">
            <h4 style={{ textAlign: "center", padding: "0px 83px 83px 83px", lineHeight: "1.6" }}>Autonomous maintenance Check points for Key Process Stages can be accessed by operators. The Check lists need to be filed and maintained at beginning of every shift to ensure process quality and efficiency of these equipment.</h4>
            <img src={list} alt="" style={{ height: "200px", float: "right" }} />
            <Link><h4 style={{ float: "right", marginTop: "179px", marginRight: '-238px', textAlign: "center", color: "white" }}>Click Here to Go <br /> Reports</h4></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
