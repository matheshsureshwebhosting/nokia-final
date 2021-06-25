import React, { Component, Fragment } from 'react'
import { Slidercontext } from "../Context/Slidercontext"
import video1 from "../../assets/videos/vacclift/3.mp4"
import "./step.css"
import SweetAlert from "sweetalert2";
import Steps from "./Steps"

export default class Step3 extends Component {
    static contextType = Slidercontext
    constructor(props) {
        super()
        this.step3Ref = React.createRef()   // Create a ref object 
        this.state = {
            date: "",
            machine_name: "",
            machine_Sl_No: "",
            operator_name: "",
            shift: "",
            paymentType: "",
            counterTime: 0

        }
    }
    componentDidMount() {
        this.step3Ref.current.scroll(0, 550);
        this.interval = setInterval(() => this.setState({ counterTime: this.state.counterTime + 1 }), 1000);
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    componentWillUnmount = () => {
        clearInterval(this.interval);
    }
    render() {
        const buttonStatus = this.state.counterTime > 5 ? false : true;
        const { sliderenable } = this.context
        const Displayalert = (name, results) => {
            const { operator_name } = this.context
            if (operator_name === null) return window.location.replace("/VacuumForm") 
            // if (name === "alertSuccess")
            //     SweetAlert.fire({
            //         title: "Data Submitted",
            //         icon: "success",
            //     }).then((result) => {
            if (name === "alertSuccess") {
                const { updatestaus } = this.context
                updatestaus("prosses3_result", results,this.state.counterTime)
                localStorage.setItem("step3", "okay")
                sliderenable(this, "step4")
                this.props.history.push("/step4")
            }
            // })
            else if (name === "alert")
                SweetAlert.fire({
                    title: "OK Noted",
                    icon: "info",
                }).then((result) => {
                    if (result.isConfirmed) {
                        const { updatestaus } = this.context
                        updatestaus("prosses3_result", results,this.state.counterTime)
                        localStorage.setItem("step3", "okay")
                        sliderenable(this, "step4")
                        this.props.history.push("/step4")
                    }
                })

        }
        return (
            <Fragment>
                {/* <div className='h-100vh d-flex justify-content-center flex-column bg-primary container-fluid px-5'>
                    <div>
                        <div className="content justify-content-between d-flex">
                            <div className="col-md-9">
                                <h2 className="text-center step-title heading">Vacuum Barrel and Joints Cleaning And Inspection</h2>
                                <video muted autoPlay={true} loop src={video1} type="video/mp4" width="100%" height="100%" />
                            </div>

                            <div className="col-md-3">
                                <div className='vacuum-menu-col'><Vacuum /></div>
                                <div className="card-body formCard w-100">
                                    <h4 className="process text-uppercase white">Complete ?</h4>
                                    <div className="text-center  mt-4">
                                        <SubmitButton  name="alertSuccess" buttonName="Submit"
                                            onClick={(e) => Displayalert(e.target.name, "Yes")}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                < Steps
                    disabled={buttonStatus}
                    timer={this.state.counterTime}
                    vacRef={this.step3Ref}
                    ContinueBtnName="OK To continue"
                    IssueBtnName="RAISE ISSUE"
                    nameContinue="alertSuccess"
                    nameIssue="alert"
                    stepTitle="Vacuum Barrel and Joints Cleaning And Inspection"
                    videoSrc={video1}
                    onClickContinue={(e) => Displayalert(e.target.name, "Yes")}
                    onClickIssue={(e) => Displayalert(e.target.name, "No")}
                />
            </Fragment >
        )
    }
}