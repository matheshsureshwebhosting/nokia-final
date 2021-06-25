import React, { Component, Fragment } from 'react'
import { Slidercontext } from "../Context/Slidercontext"
import video1 from "../../assets/videos/vacclift/7.mp4"
import "./step.css"
import SweetAlert from "sweetalert2";
import Steps from "./Steps"


export default class Step7 extends Component {
    static contextType = Slidercontext
    constructor(props) {
        super()
        this.step7Ref = React.createRef()   // Create a ref object 
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
        this.step7Ref.current.scroll(0, 1600);
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
                updatestaus("prosses7_result", results,this.state.counterTime)
                localStorage.setItem("step7", "okay")
                sliderenable(this, "step8")
                this.props.history.push("/step8")
            }
            // })
            else if (name === "alert")
                SweetAlert.fire({
                    title: "OK Noted",
                    icon: "info",
                }).then((result) => {
                    if (result.isConfirmed) {
                        const { updatestaus } = this.context
                        updatestaus("prosses7_result", results,this.state.counterTime)
                        localStorage.setItem("step7", "okay")
                        sliderenable(this, "step8")
                        this.props.history.push("/step8")
                    }
                })


        }
        return (
            <Fragment>
                <Steps
                    disabled={buttonStatus}
                    timer={this.state.counterTime}
                    vacRef={this.step7Ref}
                    ContinueBtnName="OK To continue"
                    IssueBtnName="RAISE ISSUE"
                    nameContinue="alertSuccess"
                    nameIssue="alert"
                    stepTitle="Power on Switch Inspection"
                    videoSrc={video1}
                    onClickContinue={(e) => Displayalert(e.target.name, "Yes")}
                    onClickIssue={(e) => Displayalert(e.target.name, "No")}
                    doNotTouch="true"
                />
            </Fragment >
        )
    }
}

