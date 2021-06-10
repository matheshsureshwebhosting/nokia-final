import React from 'react'
import MasterCheckList from '../../../Pages/MasterCheckList/MasterCheckList'
import { useHistory } from 'react-router'
import SweetAlert from "sweetalert2";
import axios from 'axios';
const uwastatus = {}
var uwaform;
function Uwa(props) {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        const { state } = props.location
        uwaform = state
        if (uwaform === undefined) {
            return history.push("/uwaform")
        }
        if (status === "Yes") {
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    history.push(nextPath)
                }
            })
        }
        if (status === "No") {
            SweetAlert.fire({
                title: "OK Noted",
                text: "Please Inform Technician!",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    history.push(nextPath)
                }
            })
        }
    }
    return (
        <>
            <MasterCheckList bar="0%" TypeOfMedia="Video" videosrc="./Images/Uwa/1.mp4" alt="Uwa" onClick={onClick} buttonName="Next" link="/Uwa2" />
        </>
    )
}
function Uwa2() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (uwaform === undefined) {
            return history.push("/uwaform")
        }
        if (status === "Yes")
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
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
                    uwastatus[form] = status
                    history.push(nextPath)
                }
            })

    }
    return (
        <>
            <MasterCheckList bar="10%" TypeOfMedia="Video" videosrc="./Images/Uwa/2.mp4" onClick={onClick} alt="Uwa2" buttonName="Next" link="/Uwa3" />
        </>
    )

}
function Uwa3() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (uwaform === undefined) {
            return history.push("/uwaform")
        }
        if (status === "Yes")
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
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
                    uwastatus[form] = status
                    history.push(nextPath)
                }
            })

    }
    return (

        <>
            <MasterCheckList bar="20%" TypeOfMedia="Video" videosrc="./Images/Uwa/3.mp4" onClick={onClick} alt="Uwa3" buttonName="Next" link="/Uwa4" />
        </>
    )
}
function Uwa4() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (uwaform === undefined) {
            return history.push("/uwaform")
        }
        if (status === "Yes")
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
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
                    uwastatus[form] = status
                    history.push(nextPath)
                }
            })

    }
    return (
        <>
            <MasterCheckList bar="30%" TypeOfMedia="Video" videosrc="./Images/Uwa/4.mp4" onClick={onClick} alt="Uwa4" buttonName="Next" link="/Uwa5" />
        </>
    )

}
function Uwa5() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (uwaform === undefined) {
            return history.push("/uwaform")
        }
        if (status === "Yes")
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
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
                    uwastatus[form] = status
                    history.push(nextPath)
                }
            })

    }
    return (
        <>
            <MasterCheckList bar="40%" TypeOfMedia="Video" videosrc="./Images/Uwa/5.mp4" onClick={onClick} alt="Uwa5" buttonName="Next" link="/Uwa6" />
        </>
    )
}
function Uwa6() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (uwaform === undefined) {
            return history.push("/uwaform")
        }
        if (status === "Yes")
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
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
                    uwastatus[form] = status
                    history.push(nextPath)
                }
            })
    }
    return (
        <>
            <MasterCheckList bar="50%" TypeOfMedia="Video" videosrc="./Images/Uwa/6.mp4" onClick={onClick} alt="Uwa6" buttonName="Next" link="/Uwa7" />
        </>
    )
}
function Uwa7() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (uwaform === undefined) {
            return history.push("/uwaform")
        }
        if (status === "Yes")
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
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
                    uwastatus[form] = status
                    history.push(nextPath)
                }
            })

    }
    return (
        <>
            <MasterCheckList bar="60%" TypeOfMedia="Video" videosrc="./Images/Uwa/7.mp4" onClick={onClick} alt="Uwa7" buttonName="Next" link="/Uwa8" />
        </>
    )
}
function Uwa8() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (uwaform === undefined) {
            return history.push("/uwaform")
        }
        if (status === "Yes")
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
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
                    uwastatus[form] = status
                    history.push(nextPath)
                }
            })
    }
    return (
        <>
            <MasterCheckList bar="70%" TypeOfMedia="Video" videosrc="./Images/Uwa/8.mp4" onClick={onClick} alt="Uwa8" buttonName="Next" link="/Uwa9" />
        </>
    )
}
function Uwa9() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (uwaform === undefined) {
            return history.push("/uwaform")
        }
        if (status === "Yes")
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
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
                    uwastatus[form] = status
                    history.push(nextPath)
                }
            })
    }
    return (
        <>
            <MasterCheckList bar="80%" TypeOfMedia="Video" videosrc="./Images/Uwa/9.mp4" onClick={onClick} alt="Uwa9" buttonName="Next" link="/Uwa10" />
        </>
    )
}
function Uwa10(props) {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (uwaform === undefined) {
            return history.push("/uwaform")
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
                    uwastatus["uwa10"] = status
                    const newotastatus = Object.values(uwastatus)
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
                    for (var i = 0; i < Object.keys(uwastatus).length; i++) {
                        if (Object.values(uwastatus)[i] === "No") {
                            statuslists.push(Object.keys(uwastatus)[i])
                        }
                    }
                    const datas = {
                        date: uwaform.date,
                        station: uwaform.Station,
                        operator_name: uwaform.operator_name,
                        shift: uwaform.shift,
                        uwa1: uwastatus.Uwa,
                        uwa2: uwastatus.Uwa2,
                        uwa3: uwastatus.Uwa3,
                        uwa4: uwastatus.Uwa4,
                        uwa5: uwastatus.Uwa5,
                        uwa6: uwastatus.Uwa6,
                        uwa7: uwastatus.Uwa7,
                        uwa8: uwastatus.Uwa8,
                        uwa9: uwastatus.Uwa9,
                        uwa10: status,
                        description: description,
                        status: finalstatus,
                        avg: finalavg,
                        statuslists: statuslists
                    }                    
                    axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/uwa/send`, datas).then((res) => {
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
            <MasterCheckList bar="90%" okToComplete="true" TypeOfMedia="Video" videosrc="./Images/Uwa/10.mp4" onClick={onClick} alt="Uwa10" buttonName="Done" link="/" />
        </>
    )
}
export { Uwa, Uwa2, Uwa3, Uwa4, Uwa5, Uwa6, Uwa7, Uwa8, Uwa9, Uwa10 }
