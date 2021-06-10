import React, { useContext } from 'react'
import './step.css'
import Vacuum from './Vaccume'
import { Slidercontext } from "../Context/Slidercontext"
function Steps(props) {
    const sliders = useContext(Slidercontext)    
    return (
        <>
            <div className='bg-primary d-flex justify-content-center flex-column h-100vh container-fluid px-5 position-fixed'>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: `${Number(sliders.enabled.length)-Number(1)}0%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{Number(sliders.enabled.length)-Number(1)}0%</div>
                </div>
                <div>
                    <div className=" d-flex" >
                        <div className="col-8 h-auto">
                            <h2 className="text-center mb-3 heading step-title">{props.stepTitle}</h2>
                            <div className="dd"><video muted autoPlay={true} loop src={props.videoSrc} type="video/mp4" width="100%" height="100%" className="position-relative" /></div>
                            {props.doNotTouch === "true" && <img className='dnt-sign-img' src='./images/dnt.jpg' alt='do-not-touch-signBoad' />}
                        </div>
                        <div className="col-md-4 ">
                            <div className="vacuum-menu-col"><Vacuum /></div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <button className="step-continue-btn" name={props.nameContinue} onClick={props.onClickContinue}>{props.ContinueBtnName}<i className='fa fa-thumbs-up fa-2x mx-2' /></button>
                        <button className="raise-issue-btn" name={props.nameIssue} onClick={props.onClickIssue}>{props.IssueBtnName}<i className='fa fa-thumbs-down fa-2x mx-2' /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Steps
