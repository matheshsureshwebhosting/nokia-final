import React, { Component } from 'react'
import { Slidercontext } from "../Context/Slidercontext"
import video1 from "../../assets/videos/vacclift/9.mp4"
import "./step.css"
import SweetAlert from "sweetalert2";
import axios from 'axios'
import Steps from "./Steps"


export default class Step9 extends Component {
    static contextType = Slidercontext
    constructor(props) {
        super()
        this.state = {
            date: "",
            machine_name: "",
            machine_Sl_No: "",
            operator_name: "",
            shift: "",
            paymentType: ""
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const Displayalert = (name, results) => {
            if (name === "alert")
                SweetAlert.fire({
                    // text: "Please Inform Technician!",
                    icon: "info",
                    title: 'OK Noted! Provide Following Details',
                    html: "<textarea style='margin-top:10px;border-radius: 0px !important;width: 100%; ' id='des' type='text' className='form-control' placeholder='Remarks'></textarea>",
                    showDenyButton: false,
                    showCancelButton: false,
                    confirmButtonText: `Save`,
                })
                    .then((result) => {
                        if (result.isConfirmed) {
                            const description = document.getElementById("des").value
                            if (description.length === 0) {
                                SweetAlert.fire('Enter description', '', 'error')
                                return false
                            } else {
                                SweetAlert.fire('Saved!', '', 'success')
                                const { date, machine_Sl_No, shift, operator_name, prosses1_result, prosses2_result, prosses3_result, prosses4_result, prosses5_result, prosses6_result, prosses7_result, prosses8_result } = this.context
                                const prosses = {
                                    "step1": prosses1_result,
                                    "step2": prosses2_result,
                                    "step3": prosses3_result,
                                    "step4": prosses4_result,
                                    "step5": prosses5_result,
                                    "step6": prosses6_result,
                                    "step7": prosses7_result,
                                    "step8": prosses8_result,
                                }
                                prosses["step9"] = results
                                const newotastatus = Object.values(prosses)
                                var finalstatus;
                                if (newotastatus.includes("No")) {
                                    finalstatus = "In Complete"
                                } else {
                                    finalstatus = "Complete"
                                }
                                const avg = newotastatus.filter(status => { return status === "No" })
                                var finalavg
                                if (avg.length === 0) {
                                    finalavg = '9 / 9'
                                } else {
                                    finalavg = `${Number(9) - Number(avg.length)}/9`
                                }
                                const statuslists = []
                                for (var i = 0; i < Object.keys(prosses).length; i++) {
                                    if (Object.values(prosses)[i] === "No") {
                                        statuslists.push(Object.keys(prosses)[i])
                                    }
                                }
                                const datas = {
                                    date: date,
                                    shift: shift,
                                    machine_Sl_No: machine_Sl_No,
                                    checked_by: operator_name,
                                    process1_result: prosses.step1,
                                    process2_result: prosses.step2,
                                    process3_result: prosses.step3,
                                    process4_result: prosses.step4,
                                    process5_result: prosses.step5,
                                    process6_result: prosses.step6,
                                    process7_result: prosses.step7,
                                    process8_result: prosses.step8,
                                    process9_result: results,
                                    description: description,
                                    status: finalstatus,
                                    avg: finalavg,
                                    statuslists:statuslists
                                }                                
                                axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/vaccume/send`, datas).then((res) => {
                                    if (res.data === true) {                                   
                                        localStorage.removeItem("step1")
                                        localStorage.removeItem("step2")
                                        localStorage.removeItem("step3")
                                        localStorage.removeItem("step4")
                                        localStorage.removeItem("step5")
                                        localStorage.removeItem("step6")
                                        localStorage.removeItem("step7")
                                        localStorage.removeItem("step8")                                    
                                    }
                                    this.props.history.push("/")
                                })
                            }
                        } else if (result.isDenied) {
                            SweetAlert.fire('Changes are not saved', '', 'info')
                        }
                    })
            if (name === "alertSuccess")
                SweetAlert.fire({
                    title: 'Provide Following Details',
                    html: "<textarea style='margin-top:10px;border-radius: 0px !important;width: 100%; ' id='des' type='text' className='form-control' placeholder='Remarks'></textarea>",
                    showDenyButton: false,
                    showCancelButton: false,
                    confirmButtonText: `Save`,
                })
                    .then((result) => {
                        if (result.isConfirmed) {
                            const description = document.getElementById("des").value
                            if (description.length === 0) {
                                SweetAlert.fire('Enter description', '', 'error')
                                return false
                            } else {
                                SweetAlert.fire('Saved!', '', 'success')
                                const { date, machine_Sl_No, shift, operator_name, prosses1_result, prosses2_result, prosses3_result, prosses4_result, prosses5_result, prosses6_result, prosses7_result, prosses8_result } = this.context
                                const prosses = {
                                    "step1": prosses1_result,
                                    "step2": prosses2_result,
                                    "step3": prosses3_result,
                                    "step4": prosses4_result,
                                    "step5": prosses5_result,
                                    "step6": prosses6_result,
                                    "step7": prosses7_result,
                                    "step8": prosses8_result,
                                }
                                prosses["step9"] = results
                                const newotastatus = Object.values(prosses)
                                var finalstatus;
                                if (newotastatus.includes("No")) {
                                    finalstatus = "In Complete"
                                } else {
                                    finalstatus = "Complete"
                                }
                                const avg = newotastatus.filter(status => { return status === "No" })
                                var finalavg
                                if (avg.length === 0) {
                                    finalavg = '9 / 9'
                                } else {
                                    finalavg = `${Number(9) - Number(avg.length)}/9`
                                }
                                const statuslists = []
                                for (var i = 0; i < Object.keys(prosses).length; i++) {
                                    if (Object.values(prosses)[i] === "No") {
                                        statuslists.push(Object.keys(prosses)[i])
                                    }
                                }
                                const datas = {
                                    date: date,
                                    shift: shift,
                                    machine_Sl_No: machine_Sl_No,
                                    checked_by: operator_name,
                                    process1_result: prosses.step1,
                                    process2_result: prosses.step2,
                                    process3_result: prosses.step3,
                                    process4_result: prosses.step4,
                                    process5_result: prosses.step5,
                                    process6_result: prosses.step6,
                                    process7_result: prosses.step7,
                                    process8_result: prosses.step8,
                                    process9_result: results,
                                    description: description,
                                    status: finalstatus,
                                    avg: finalavg,
                                    statuslists:statuslists
                                }                                
                                axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/vaccume/send`, datas).then((res) => {
                                    if (res.data === true) {
                                        localStorage.removeItem("step1")
                                        localStorage.removeItem("step2")
                                        localStorage.removeItem("step3")
                                        localStorage.removeItem("step4")
                                        localStorage.removeItem("step5")
                                        localStorage.removeItem("step6")
                                        localStorage.removeItem("step7")
                                        localStorage.removeItem("step8")
                                    }
                                    this.props.history.push("/")
                                })
                            }
                        } else if (result.isDenied) {
                            SweetAlert.fire('Changes are not saved', '', 'info')
                        }
                    })

        }
        return (
            <>
                <Steps
                    nameContinue="alertSuccess"
                    ContinueBtnName="OK To complete"
                    IssueBtnName="RAISE ISSUE"
                    nameIssue="alert"
                    stepTitle="Vacuum Pressure Gauge"
                    videoSrc={video1}
                    onClickContinue={(e) => Displayalert(e.target.name, "Yes")}
                    onClickIssue={(e) => Displayalert(e.target.name, "No")}
                />
            </>
        )
    }
}