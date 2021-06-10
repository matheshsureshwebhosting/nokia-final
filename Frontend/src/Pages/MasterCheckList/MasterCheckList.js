import React from 'react'
import '../Styles/Pages.css'

function MasterCheckList(props) {

    const playVideo = () => {
        document.getElementById("vidRef").play();
        document.getElementById("play").style.background = "green"
        document.getElementById("restart").style.background = "darkblue"
        document.getElementById("pause").style.background = "darkblue"
    };

    const pauseVideo = () => {

        document.getElementById("vidRef").pause();
        document.getElementById("play").style.background = "darkblue"
        document.getElementById("restart").style.background = "darkblue"
        document.getElementById("pause").style.background = "green"
    };
    const restartVideo = () => {
        document.getElementById("vidRef").currentTime = 0;
        document.getElementById("play").style.background = "darkblue"
        document.getElementById("pause").style.background = "darkblue"
    };

    return (

        <>
            <div className="position-relative" style={{ height: "100vh", width: "100vw" }}>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: `${props.bar}` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{props.bar}</div>
                </div>
                {props.TypeOfMedia === "Video" ? <video id="vidRef" muted autoPlay={true} src={props.videosrc} type="video/mp4" width="100%" height="100%" className="position-relative" /> :
                    <img src={props.src} alt={props.alt} style={{ height: "95vh" }} className="w-100 position-relative" />
                }


                <div className="d-flex justify-content-center master-checklist-btn">
                    <div className="videobtndiv">
                        <button className="videobtn" id="play" onClick={playVideo} type="button"> <i className='fa fa-play fa-2x mx-2' /></button>
                        <button className="videobtn" id="pause" onClick={pauseVideo} type="button"> <i className='fa fa-pause fa-2x mx-1' /></button>
                        <button className="videobtn" id="restart" onClick={restartVideo} type="button"> <i className='fa fa-retweet fa-2x mx-0' /></button>

                    </div>
                    <button className="step-continue-btn" name={props.nameContinue} onClick={(e) => props.onClick(props.alt, "Yes", props.link)} >{props.okToComplete ? "Ok To Complete" : "Ok To Continue"}  <i className='fa fa-thumbs-up fa-2x mx-2' /></button>
                    <button className="raise-issue-btn" name={props.nameIsssue} onClick={(e) => props.onClick(props.alt, "No", props.link)} >Raise Issue<i className='fa fa-thumbs-down fa-2x mx-2' /></button>
                </div>
            </div>
        </>
    )
}

export default MasterCheckList
