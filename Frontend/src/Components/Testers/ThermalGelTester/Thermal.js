import React from 'react'
import MasterCheckList from '../../../Pages/MasterCheckList/MasterCheckList'
import video1 from '../../../assets/videos/PVA/PVA 1_4_1_1.mp4'
import video2 from '../../../assets/videos/PVA/PVA 2_3_1.mp4'
import video3 from '../../../assets/videos/PVA/PVA 3_4_1.mp4'
import video4 from '../../../assets/videos/PVA/PVA 4_2_1.mp4'
import video5 from '../../../assets/videos/PVA/PVA 5_2_1.mp4'
import video6 from '../../../assets/videos/PVA/PVA 6_2_1.mp4'
import video7 from '../../../assets/videos/PVA/PVA 7_3_1.mp4'
import video8 from '../../../assets/videos/PVA/PVA 8_3_1.mp4'
import video9 from '../../../assets/videos/PVA/PVA 9_4_1.mp4'
import video10 from '../../../assets/videos/PVA/PVA 10_4_1.mp4'
import video11 from '../../../assets/videos/PVA/PVA 11_3_1.mp4'
import video12 from '../../../assets/videos/PVA/PVA 12_4_1.mp4'
import video13 from '../../../assets/videos/PVA/PVA 13_3_1.mp4'


import { useHistory } from 'react-router'
import SweetAlert from "sweetalert2";
import axios from 'axios';

const thermalstatus = {}
var thermalforms;
export function Thermal(props) {    
    const history = useHistory()

    const onClick = (form, status, nextPath) => {        
        const { state } = props.location
        thermalforms = {
            Station: state.Station,
            date: state.date,
            operator_name: state.operator_name,
            shift: state.shift,
        }
        if (thermalforms === undefined) {
            return history.push("/thermalform")
        }
        if (status === 'Yes')
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        thermalstatus[form] = status
                        history.push(nextPath)
                    }
                })
        if (status === 'No')
            SweetAlert.fire({
                title: "OK Noted",
                text: "Please Inform Technician!",
                icon: "info",
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        thermalstatus[form] = status
                        history.push(nextPath)
                    }
                })
    }
    return (
        <>
            <MasterCheckList bar="0%" nameContinue='success' nameIssue='alert' TypeOfMedia="Video" videosrc={video1} onClick={onClick} alt="thermal1" link='/thermal/step2' />
        </>
    )
}
export function Thermal2() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (thermalforms === undefined) {
            return history.push("/thermalform")
        }
        if (status === 'Yes')
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        thermalstatus[form] = status
                        history.push(nextPath)
                    }
                })
        if (status === 'No')
            SweetAlert.fire({
                title: "OK Noted",
                text: "Please Inform Technician!",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    thermalstatus[form] = status
                    history.push(nextPath)
                }
            })
    }
    return (
        <>
            <MasterCheckList bar="8%" TypeOfMedia="Video" videosrc={video2} onClick={onClick} alt="thermal2" link='/thermal/step3' />
        </>
    )
}
export function Thermal3() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (thermalforms === undefined) {
            return history.push("/thermalform")
        }
        if (status === 'Yes')
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        thermalstatus[form] = status
                        history.push(nextPath)
                    }
                })
        if (status === 'No')
            SweetAlert.fire({
                title: "OK Noted",
                text: "Please Inform Technician!",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    thermalstatus[form] = status
                    history.push(nextPath)
                }
            })
    }
    return (
        <>
            <MasterCheckList bar="16%" TypeOfMedia="Video" videosrc={video3} onClick={onClick} alt="thermal3" link='/thermal/step4' />
        </>
    )
}
export function Thermal4() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (thermalforms === undefined) {
            return history.push("/thermalform")
        }
        if (status === 'Yes')
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        thermalstatus[form] = status
                        history.push(nextPath)
                    }
                })
        if (status === 'No')
            SweetAlert.fire({
                title: "OK Noted",
                text: "Please Inform Technician!",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    thermalstatus[form] = status
                    history.push(nextPath)
                }
            })
    }
    return (
        <>
            <MasterCheckList bar="24%" TypeOfMedia="Video" videosrc={video4} onClick={onClick} alt="thermal4" link='/thermal/step5' />
        </>
    )
}
export function Thermal5() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (thermalforms === undefined) {
            return history.push("/thermalform")
        }
        if (status === 'Yes')
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            }).then((result) => {
                if (result.isConfirmed) {
                    thermalstatus[form] = status
                    history.push(nextPath)
                }
            })
        if (status === 'No')
            SweetAlert.fire({
                title: "OK Noted",
                text: "Please Inform Technician!",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    thermalstatus[form] = status
                    history.push(nextPath)
                }
            })
    }
    return (
        <>
            <MasterCheckList bar="32%" TypeOfMedia="Video" videosrc={video5} onClick={onClick} alt="thermal5" link='/thermal/step6' />
        </>
    )
}
export function Thermal6() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (thermalforms === undefined) {
            return history.push("/thermalform")
        }
        if (status === 'Yes')
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            }).then((result) => {
                if (result.isConfirmed) {
                    thermalstatus[form] = status
                    history.push(nextPath)
                }
            })
        if (status === 'No')
            SweetAlert.fire({
                title: "OK Noted",
                text: "Please Inform Technician!",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    thermalstatus[form] = status
                    history.push(nextPath)
                }
            })
    }
    return (
        <>
            <MasterCheckList bar="40%" TypeOfMedia="Video" videosrc={video6} onClick={onClick} alt="thermal6" link='/thermal/step7' />
        </>
    )
}
export function Thermal7() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (thermalforms === undefined) {
            return history.push("/thermalform")
        }
        if (status === 'Yes')
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            }).then((result) => {
                if (result.isConfirmed) {
                    thermalstatus[form] = status
                    history.push(nextPath)
                }
            })
        if (status === 'No')
            SweetAlert.fire({
                title: "OK Noted",
                text: "Please Inform Technician!",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    thermalstatus[form] = status
                    history.push(nextPath)
                }
            })
    }
    return (
        <>
            <MasterCheckList bar="48%" TypeOfMedia="Video" videosrc={video7} onClick={onClick} alt="thermal7" link='/thermal/step8' />
        </>
    )
}
export function Thermal8() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (thermalforms === undefined) {
            return history.push("/thermalform")
        }
        if (status === 'Yes')
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            }).then((result) => {
                if (result.isConfirmed) {
                    thermalstatus[form] = status
                    history.push(nextPath)
                }
            })
        if (status === 'No')
            SweetAlert.fire({
                title: "OK Noted",
                text: "Please Inform Technician!",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    thermalstatus[form] = status
                    history.push(nextPath)
                }
            })
    }
    return (
        <>
            <MasterCheckList bar="56%" TypeOfMedia="Video" videosrc={video8} onClick={onClick} alt="thermal8" link='/thermal/step9' />
        </>
    )
}
export function Thermal9() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (thermalforms === undefined) {
            return history.push("/thermalform")
        }
        if (status === 'Yes')
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            }).then((result) => {
                if (result.isConfirmed) {
                    thermalstatus[form] = status
                    history.push(nextPath)
                }
            })
        if (status === 'No')
            SweetAlert.fire({
                title: "OK Noted",
                text: "Please Inform Technician!",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    thermalstatus[form] = status
                    history.push(nextPath)
                }
            })
    }
    return (
        <>
            <MasterCheckList bar="64%" TypeOfMedia="Video" videosrc={video9} onClick={onClick} alt="thermal9" link='/thermal/step10' />
        </>
    )
}
export function Thermal10() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (thermalforms === undefined) {
            return history.push("/thermalform")
        }
        if (status === 'Yes')
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            }).then((result) => {
                if (result.isConfirmed) {
                    thermalstatus[form] = status
                    history.push(nextPath)
                }
            })
        if (status === 'No')
            SweetAlert.fire({
                title: "OK Noted",
                text: "Please Inform Technician!",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    thermalstatus[form] = status
                    history.push(nextPath)
                }
            })
    }
    return (
        <>
            <MasterCheckList bar="72%" TypeOfMedia="Video" videosrc={video10} onClick={onClick} alt="thermal10" link='/thermal/step11' />
        </>
    )
}
export function Thermal11() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (thermalforms === undefined) {
            return history.push("/thermalform")
        }
        if (status === 'Yes')
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            }).then((result) => {
                if (result.isConfirmed) {
                    thermalstatus[form] = status
                    history.push(nextPath)
                }
            })
        if (status === 'No')
            SweetAlert.fire({
                title: "OK Noted",
                text: "Please Inform Technician!",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    thermalstatus[form] = status
                    history.push(nextPath)
                }
            })
    }
    return (
        <>
            <MasterCheckList bar="80%" TypeOfMedia="Video" videosrc={video11} onClick={onClick} alt="thermal11" link='/thermal/step12' />
        </>
    )
}
export function Thermal12() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (thermalforms === undefined) {
            return history.push("/thermalform")
        }
        if (status === 'Yes')
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        thermalstatus[form] = status
                        history.push(nextPath)
                    }
                })
        if (status === 'No')
            SweetAlert.fire({
                title: "OK Noted",
                text: "Please Inform Technician!",
                icon: "info",
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        thermalstatus[form] = status
                        history.push(nextPath)
                    }
                })
    }
    return (
        <>
            <MasterCheckList bar="88%" TypeOfMedia="Video" videosrc={video12} onClick={onClick} alt="thermal12" link='/thermal/step13' />
        </>
    )
}
export function Thermal13() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (thermalforms === undefined) {
            return history.push("/thermalform")
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
                    thermalstatus["thermal13"] = status
                    const newotastatus = Object.values(thermalstatus)
                    var finalstatus;
                    if (newotastatus.includes("No")) {
                        finalstatus = "In Complete"
                    } else {
                        finalstatus = "Complete"
                    }
                    const avg = newotastatus.filter(status => { return status === "No" })
                    var finalavg
                    if (avg.length === 0) {
                        finalavg = '13 / 13'
                    } else {
                        finalavg = `${Number(13) - Number(avg.length)}/13`
                    }
                    const statuslists = []
                    for (var i = 0; i < Object.keys(thermalstatus).length; i++) {
                        if (Object.values(thermalstatus)[i] === "No") {
                            statuslists.push(Object.keys(thermalstatus)[i])
                        }
                    }
                    const datas = {
                        date: thermalforms.date,
                        station: thermalforms.Station,
                        operator_name: thermalforms.operator_name,
                        shift: thermalforms.shift,
                        thermal1: thermalstatus.thermal1,
                        thermal2: thermalstatus.thermal2,
                        thermal3: thermalstatus.thermal3,
                        thermal4: thermalstatus.thermal4,
                        thermal5: thermalstatus.thermal5,
                        thermal6: thermalstatus.thermal6,
                        thermal7: thermalstatus.thermal7,
                        thermal8: thermalstatus.thermal8,
                        thermal9: thermalstatus.thermal9,
                        thermal10: thermalstatus.thermal10,
                        thermal11: thermalstatus.thermal11,
                        thermal12: thermalstatus.thermal12,
                        thermal13: status,
                        description: description,
                        status: finalstatus,
                        avg:finalavg,
                        statuslists:statuslists
                    }
                    axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/thermal/send`, datas).then((res) => {
                        if (res.data === true) {
                            history.push("/")
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
            <MasterCheckList bar="96%" okToComplete="true" TypeOfMedia="Video" videosrc={video13} onClick={onClick} alt="thermal13" link='/' />
        </>
    )
}
