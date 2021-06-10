import React from 'react'
import { useHistory } from 'react-router'
import MasterCheckList from '../../../Pages/MasterCheckList/MasterCheckList'
import SweetAlert from "sweetalert2";
import axios from 'axios';
const otastatus = {}
var otaform;
function Ota(props) {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        const { state } = props.location
        otaform = state
        if (otaform === undefined) {
            return history.push("/otaform")
        }
        if (status === "Yes")
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        otastatus[form] = status
                        history.push(nextPath)
                    }
                })
        if (status === "No")
            SweetAlert.fire({
                title: "OK Noted",
                text: "Please Inform Technician!",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    otastatus[form] = status
                    history.push(nextPath)
                }
            })

    }
    return (
        <>
            <MasterCheckList bar="0%" TypeOfMedia="Video" videosrc="./Images/OTA/1.mp4" onClick={onClick} alt="Ota" buttonName="Next" link="/Ota2" />
        </>
    )
}
function Ota2() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (otaform === undefined) {
            return history.push("/otaform")
        }
        if (status === "Yes")
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        otastatus[form] = status
                        history.push(nextPath)
                    }
                })
        if (status === "No")
            SweetAlert.fire({
                title: "OK Noted",
                text: "Please Inform Technician!",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    otastatus[form] = status
                    history.push(nextPath)
                }
            })
    }
    return (

        <>
            <MasterCheckList bar="10%" TypeOfMedia="Video" videosrc="./Images/OTA/2.mp4" onClick={onClick} alt="Ota2" buttonName="Next" link="/Ota3" />
        </>
    )

}
function Ota3() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (otaform === undefined) {
            return history.push("/otaform")
        }
        if (status === "Yes")
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        otastatus[form] = status
                        history.push(nextPath)
                    }
                })
        if (status === "No")
            SweetAlert.fire({
                title: "OK Noted",
                text: "Please Inform Technician!",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    otastatus[form] = status
                    history.push(nextPath)
                }
            })
    }
    return (
        <>
            <MasterCheckList bar="20%" TypeOfMedia="Video" videosrc="./Images/OTA/3.mp4" onClick={onClick} alt="Ota3" buttonName="Next" link="/Ota4" />
        </>
    )
}
function Ota4() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (otaform === undefined) {
            return history.push("/otaform")
        }
        if (status === "Yes")
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        otastatus[form] = status
                        history.push(nextPath)
                    }
                })
        if (status === "No")
            SweetAlert.fire({
                title: "OK Noted",
                text: "Please Inform Technician!",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    otastatus[form] = status
                    history.push(nextPath)
                }
            })
    }
    return (
        <>
            <MasterCheckList bar="30%" TypeOfMedia="Video" videosrc="./Images/OTA/4.mp4" onClick={onClick} alt="Ota4" buttonName="Next" link="/Ota5" />
        </>
    )

}
function Ota5() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (otaform === undefined) {
            return history.push("/otaform")
        }
        if (status === "Yes")
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        otastatus[form] = status
                        history.push(nextPath)
                    }
                })
        if (status === "No")
            SweetAlert.fire({
                title: "OK Noted",
                text: "Please Inform Technician!",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    otastatus[form] = status
                    history.push(nextPath)
                }
            })
    }
    return (
        <>
            <MasterCheckList bar="40%" TypeOfMedia="Video" videosrc="./Images/OTA/5.mp4" onClick={onClick} alt="Ota5" buttonName="Next" link="/Ota6" />
        </>
    )
}
function Ota6() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (otaform === undefined) {
            return history.push("/otaform")
        }
        if (status === "Yes")
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        otastatus[form] = status
                        history.push(nextPath)
                    }
                })
        if (status === "No")
            SweetAlert.fire({
                title: "OK Noted",
                text: "Please Inform Technician!",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    otastatus[form] = status
                    history.push(nextPath)
                }
            })
    }
    return (
        <>
            <MasterCheckList bar="50%" TypeOfMedia="Video" videosrc="./Images/OTA/6.mp4" onClick={onClick} alt="Ota6" buttonName="Next" link="/Ota7" />
        </>
    )
}
function Ota7() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (otaform === undefined) {
            return history.push("/otaform")
        }
        if (status === "Yes")
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        otastatus[form] = status
                        history.push(nextPath)
                    }
                })
        if (status === "No")
            SweetAlert.fire({
                title: "OK Noted",
                text: "Please Inform Technician!",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    otastatus[form] = status
                    history.push(nextPath)
                }
            })
    }
    return (

        <>
            <MasterCheckList bar="60%" TypeOfMedia="Video" videosrc="./Images/OTA/7.mp4" onClick={onClick} alt="Ota7" buttonName="Next" link="/Ota8" />
        </>
    )
}
function Ota8() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (otaform === undefined) {
            return history.push("/otaform")
        }
        if (status === "Yes")
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        otastatus[form] = status
                        history.push(nextPath)
                    }
                })
        if (status === "No")
            SweetAlert.fire({
                title: "OK Noted",
                text: "Please Inform Technician!",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    otastatus[form] = status
                    history.push(nextPath)
                }
            })
    }
    return (
        <>
            <MasterCheckList bar="70%" TypeOfMedia="Video" videosrc="./Images/OTA/8.mp4" onClick={onClick} alt="Ota8" buttonName="Next" link="/Ota9" />
        </>
    )
}
function Ota9() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (otaform === undefined) {
            return history.push("/otaform")
        }
        if (status === "Yes")
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        otastatus[form] = status
                        history.push(nextPath)
                    }
                })
        if (status === "No")
            SweetAlert.fire({
                title: "OK Noted",
                text: "Please Inform Technician!",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    otastatus[form] = status
                    history.push(nextPath)
                }
            })
    }
    return (
        <>
            <MasterCheckList bar="80%" TypeOfMedia="Video" videosrc="./Images/OTA/9.mp4" onClick={onClick} alt="Ota9" buttonName="Next" link="/Ota10" />
        </>
    )
}
function Ota10() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (otaform === undefined) {
            return history.push("/otaform")
        }
        SweetAlert.fire({
            title: 'Provide Following Details',
            html: "<textarea style='margin-top:10px;border-radius: 0px !important;width: 100%; ' id='des' type='text' className='form-control' placeholder='Remarks'></textarea>",
            showDenyButton: false,
            showCancelButton: false,
            confirmButtonText: `Save`,
        }).then((result) => {
            if (result.isConfirmed) {
                const description = document.getElementById("des").value
                if (description.length === 0) {
                    SweetAlert.fire('Enter description', '', 'error')
                    return false
                } else {                    
                    otastatus["ota10"] = status
                    const newotastatus = Object.values(otastatus)
                    var finalstatus;
                    if (newotastatus.includes("No")) {
                        finalstatus = "In Complete"
                    } else {
                        finalstatus = "Complete"
                    }
                    const avg = newotastatus.filter(status => { return status === "No" })
                    var finalavg
                    if (avg.length === 0) {
                        finalavg = '10 / 10'
                    } else {
                        finalavg = `${Number(10) - Number(avg.length)}/10`
                    }
                    const statuslists = []
                    for (var i = 0; i < Object.keys(otastatus).length; i++) {
                        if (Object.values(otastatus)[i] === "No") {
                            statuslists.push(Object.keys(otastatus)[i])
                        }
                    }
                    const datas = {
                        date: otaform.date,
                        station: otaform.Station,
                        operator_name: otaform.operator_name,
                        shift: otaform.shift,
                        ota1: otastatus.Ota,
                        ota2: otastatus.Ota2,
                        ota3: otastatus.Ota3,
                        ota4: otastatus.Ota4,
                        ota5: otastatus.Ota5,
                        ota6: otastatus.Ota6,
                        ota7: otastatus.Ota7,
                        ota8: otastatus.Ota8,
                        ota9: otastatus.Ota9,
                        ota10: status,
                        description: description,
                        status: finalstatus,
                        avg: finalavg,
                        statuslists:statuslists
                    }                    
                    axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/ota/send`, datas).then((res) => {
                        if (res.data === true) {
                            history.push(nextPath)
                        }
                    }).catch((error) => {
                        console.log(error)
                    })

                }
            }
        })
    }
    return (

        <>
            <MasterCheckList bar="90%" okToComplete="true" TypeOfMedia="Video" videosrc="./Images/OTA/10.mp4" onClick={onClick} alt="Ota10" buttonName="Done" link="/" />
        </>
    )
}
export { Ota, Ota2, Ota3, Ota4, Ota5, Ota6, Ota7, Ota8, Ota9, Ota10 }
