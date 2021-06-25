import React from 'react'
import { Link } from 'react-router-dom'
function NavbarTwo(props) {
    return (
        <>
            <div className='container-fluid white d-flex justify-content-center flex-column align-items-center' style={{ background: "#124191", height: "10vh" }}>
                <Link to="/"><div className='nokia-logo'>{props.logo}</div></Link>
            </div>
        </>
    )
}
function Navbar(props) {
    return (
        <>
            <div className='container-fluid white position-relative' style={{ background: "#124191", height: "10vh" }}>
                <div className='d-flex justify-content-center flex-column h-100 px-4'>
                    <div className='d-flex justify-content-between'>
                        <Link to="/"><div className='d-flex align-items-end'><div className='nokia-logo'>{props.logo}</div><div className='pl-2' style={{ paddingBottom: "6px", fontFamily: "arial" }}>{props.subTitle}</div></div></Link>
                        <div className='nav-title my-auto'>{props.title}</div>
                        {/* <Link to="/dashboard"><img src={props.src} alt={props.alt} /></Link> */}
                    </div>
                </div>
            </div>
        </>
    )
}
export { Navbar, NavbarTwo }