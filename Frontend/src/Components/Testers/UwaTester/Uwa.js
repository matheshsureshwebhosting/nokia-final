import React, { useEffect, useRef, useState } from 'react'
import MasterCheckList from '../../../Pages/MasterCheckList/MasterCheckList'
import { useHistory,Redirect } from 'react-router'
import SweetAlert from "sweetalert2";
import axios from 'axios';
const uwastatus = {}
const uwatime = {}
var uwaform;
function Uwa(props) {
    const history = useHistory()
    const [timer, setTimer] = useState(0)
    function useInterval(callback, delay) {
        const savedCallback = useRef();
        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            let id = setInterval(() => {
                savedCallback.current();
            }, delay);
            return () => clearInterval(id);
        }, [delay]);
    }
    useInterval(() => { setTimer(timer + 1); }, 1000);
    const buttonStatus = timer > 5 ? false : true;
    const onClick = (form, status, nextPath) => {
        const { state } = props.location
        uwaform = state
        if (uwaform === undefined) {
            return history.push("/uwaform")
        }
        // if (status === "Yes") {
        //     SweetAlert.fire({
        //         title: "Data Submitted",
        //         icon: "success",
        //     }).then((result) => {
        if (status === "Yes") {
            uwastatus[form] = status
            uwatime[`${form}time`] = timer
            history.push(nextPath)
        }
        //     })
        // }
        if (status === "No") {
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    uwatime[`${form}time`] = timer
                    history.push(nextPath)
                }
            })
        }
    }
    return (
        <>
            <MasterCheckList progressCircle="true" TimeCounter={timer}
                disabled={buttonStatus}
                count="10"
                progressValue="10"
                progressText="1 0f 10"
                TypeOfMedia="Video"
                videosrc="./Images/Uwa/1.mp4"
                alt="Uwa"
                onClick={onClick}
                buttonName="Next"
                link="/Uwa2" />
        </>
    )
}
function Uwa2() {
    const history = useHistory()
    const [timer, setTimer] = useState(0)
    function useInterval(callback, delay) {
        const savedCallback = useRef();
        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            let id = setInterval(() => {
                savedCallback.current();
            }, delay);
            return () => clearInterval(id);
        }, [delay]);
    }
    useInterval(() => { setTimer(timer + 1); }, 1000);
    const buttonStatus = timer > 5 ? false : true;
    const onClick = (form, status, nextPath) => {
        if (uwaform === undefined) {
            return history.push("/uwaform")
        }
        // if (status === "Yes") {
        //     SweetAlert.fire({
        //         title: "Data Submitted",
        //         icon: "success",
        //     }).then((result) => {
        if (status === "Yes") {
            uwastatus[form] = status
            uwatime[`${form}time`] = timer
            history.push(nextPath)
        }
        //     })
        // }
        if (status === "No")
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    uwatime[`${form}time`] = timer
                    history.push(nextPath)
                }
            })

    }
    const data = uwaform
    if (uwaform === undefined) {        
        return <Redirect to="/uwaform" />
    }
    return (
        <>
            <MasterCheckList
                progressCircle="true"
                TimeCounter={timer}
                disabled={buttonStatus}
                count="10"
                name={data.operator_name}
                machineID={data.Station}
                progressValue="20"
                progressText="2 0f 10"
                TypeOfMedia="Video"
                videosrc="./Images/Uwa/2.mp4"
                onClick={onClick}
                alt="Uwa2"
                buttonName="Next"
                link="/Uwa3" />
        </>
    )

}
function Uwa3() {
    const history = useHistory()
    const [timer, setTimer] = useState(0)
    function useInterval(callback, delay) {
        const savedCallback = useRef();
        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            let id = setInterval(() => {
                savedCallback.current();
            }, delay);
            return () => clearInterval(id);
        }, [delay]);
    }
    useInterval(() => { setTimer(timer + 1); }, 1000);
    const buttonStatus = timer > 5 ? false : true;
    const onClick = (form, status, nextPath) => {
        if (uwaform === undefined) {
            return history.push("/uwaform")
        }
        // if (status === "Yes") {
        //     SweetAlert.fire({
        //         title: "Data Submitted",
        //         icon: "success",
        //     }).then((result) => {
        if (status === "Yes") {
            uwastatus[form] = status
            uwatime[`${form}time`] = timer
            history.push(nextPath)
        }
        //     })
        // }
        if (status === "No")
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    uwatime[`${form}time`] = timer
                    history.push(nextPath)
                }
            })
    }
    const data = uwaform
    if (uwaform === undefined) {
        return <Redirect to="/uwaform" />
    }
    return (

        <>
            <MasterCheckList
                progressCircle="true"
                TimeCounter={timer}
                disabled={buttonStatus}
                count="10"
                name={data.operator_name}
                machineID={data.Station}
                progressValue="30"
                progressText="3 0f 10"
                TypeOfMedia="Video"
                videosrc="./Images/Uwa/3.mp4"
                onClick={onClick}
                alt="Uwa3"
                buttonName="Next"
                link="/Uwa4" />
        </>
    )
}
function Uwa4() {
    const history = useHistory()
    const [timer, setTimer] = useState(0)
    function useInterval(callback, delay) {
        const savedCallback = useRef();
        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            let id = setInterval(() => {
                savedCallback.current();
            }, delay);
            return () => clearInterval(id);
        }, [delay]);
    }
    useInterval(() => { setTimer(timer + 1); }, 1000);
    const buttonStatus = timer > 5 ? false : true;
    const onClick = (form, status, nextPath) => {
        if (uwaform === undefined) {
            return history.push("/uwaform")
        }
        // if (status === "Yes") {
        //     SweetAlert.fire({
        //         title: "Data Submitted",
        //         icon: "success",
        //     }).then((result) => {
        if (status === "Yes") {
            uwastatus[form] = status
            uwatime[`${form}time`] = timer
            history.push(nextPath)
        }
        //     })
        // }
        if (status === "No")
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    uwatime[`${form}time`] = timer
                    history.push(nextPath)
                }
            })

    }
    const data = uwaform
    if (uwaform === undefined) {
        return <Redirect to="/uwaform" />
    }
    return (
        <>
            <MasterCheckList
                progressCircle="true"
                TimeCounter={timer}
                disabled={buttonStatus}
                count="10"
                name={data.operator_name}
                machineID={data.Station}
                progressValue="40"
                progressText="4 0f 10"
                TypeOfMedia="Video"
                videosrc="./Images/Uwa/4.mp4"
                onClick={onClick}
                alt="Uwa4"
                buttonName="Next"
                link="/Uwa5" />
        </>
    )

}
function Uwa5() {
    const history = useHistory()
    const [timer, setTimer] = useState(0)
    function useInterval(callback, delay) {
        const savedCallback = useRef();
        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            let id = setInterval(() => {
                savedCallback.current();
            }, delay);
            return () => clearInterval(id);
        }, [delay]);
    }
    useInterval(() => { setTimer(timer + 1); }, 1000);
    const buttonStatus = timer > 5 ? false : true;
    const onClick = (form, status, nextPath) => {
        if (uwaform === undefined) {
            return history.push("/uwaform")
        }
        // if (status === "Yes") {
        //     SweetAlert.fire({
        //         title: "Data Submitted",
        //         icon: "success",
        //     }).then((result) => {
        if (status === "Yes") {
            uwastatus[form] = status
            uwatime[`${form}time`] = timer
            history.push(nextPath)
        }
        //     })
        // }
        if (status === "No")
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    uwatime[`${form}time`] = timer
                    history.push(nextPath)
                }
            })

    }
    const data = uwaform
    if (uwaform === undefined) {
        return <Redirect to="/uwaform" />
    }
    return (
        <>
            <MasterCheckList
                progressCircle="true"
                TimeCounter={timer}
                disabled={buttonStatus}
                count="10"
                name={data.operator_name}
                machineID={data.Station}
                progressValue="50"
                progressText="5 0f 10"
                TypeOfMedia="Video"
                videosrc="./Images/Uwa/5.mp4"
                onClick={onClick}
                alt="Uwa5"
                buttonName="Next"
                link="/Uwa6" />
        </>
    )
}
function Uwa6() {
    const history = useHistory()
    const [timer, setTimer] = useState(0)
    function useInterval(callback, delay) {
        const savedCallback = useRef();
        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            let id = setInterval(() => {
                savedCallback.current();
            }, delay);
            return () => clearInterval(id);
        }, [delay]);
    }
    useInterval(() => { setTimer(timer + 1); }, 1000);
    const buttonStatus = timer > 5 ? false : true;
    const onClick = (form, status, nextPath) => {
        if (uwaform === undefined) {
            return history.push("/uwaform")
        }
        // if (status === "Yes") {
        //     SweetAlert.fire({
        //         title: "Data Submitted",
        //         icon: "success",
        //     }).then((result) => {
        if (status === "Yes") {
            uwastatus[form] = status
            uwatime[`${form}time`] = timer
            history.push(nextPath)
        }
        //     })
        // }
        if (status === "No")
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    uwatime[`${form}time`] = timer
                    history.push(nextPath)
                }
            })
    }
    const data = uwaform
    if (uwaform === undefined) {
        return <Redirect to="/uwaform" />
    }
    return (
        <>
            <MasterCheckList
                progressCircle="true"
                TimeCounter={timer}
                disabled={buttonStatus}
                count="10"
                name={data.operator_name}
                machineID={data.Station}
                progressValue="60"
                progressText="6 0f 10"
                TypeOfMedia="Video"
                videosrc="./Images/Uwa/6.mp4"
                onClick={onClick}
                alt="Uwa6"
                buttonName="Next"
                link="/Uwa7" />
        </>
    )
}
function Uwa7() {
    const history = useHistory()
    const [timer, setTimer] = useState(0)
    function useInterval(callback, delay) {
        const savedCallback = useRef();
        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            let id = setInterval(() => {
                savedCallback.current();
            }, delay);
            return () => clearInterval(id);
        }, [delay]);
    }
    useInterval(() => { setTimer(timer + 1); }, 1000);
    const buttonStatus = timer > 5 ? false : true;
    const onClick = (form, status, nextPath) => {
        if (uwaform === undefined) {
            return history.push("/uwaform")
        }
        // if (status === "Yes") {
        //     SweetAlert.fire({
        //         title: "Data Submitted",
        //         icon: "success",
        //     }).then((result) => {
        if (status === "Yes") {
            uwastatus[form] = status
            uwatime[`${form}time`] = timer
            history.push(nextPath)
        }
        //     })
        // }
        if (status === "No")
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    uwatime[`${form}time`] = timer
                    history.push(nextPath)
                }
            })

    }
    const data = uwaform
    if (uwaform === undefined) {
        return <Redirect to="/uwaform" />
    }
    return (
        <>
            <MasterCheckList
                progressCircle="true"
                TimeCounter={timer}
                disabled={buttonStatus}
                count="10"
                name={data.operator_name}
                machineID={data.Station}
                progressValue="70"
                progressText="7 0f 10"
                TypeOfMedia="Video"
                videosrc="./Images/Uwa/7.mp4"
                onClick={onClick}
                alt="Uwa7"
                buttonName="Next"
                link="/Uwa8" />
        </>
    )
}
function Uwa8() {
    const history = useHistory()
    const [timer, setTimer] = useState(0)
    function useInterval(callback, delay) {
        const savedCallback = useRef();
        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            let id = setInterval(() => {
                savedCallback.current();
            }, delay);
            return () => clearInterval(id);
        }, [delay]);
    }
    useInterval(() => { setTimer(timer + 1); }, 1000);
    const buttonStatus = timer > 5 ? false : true;
    const onClick = (form, status, nextPath) => {
        if (uwaform === undefined) {
            return history.push("/uwaform")
        }
        // if (status === "Yes") {
        //     SweetAlert.fire({
        //         title: "Data Submitted",
        //         icon: "success",
        //     }).then((result) => {
        if (status === "Yes") {
            uwastatus[form] = status
            uwatime[`${form}time`] = timer
            history.push(nextPath)
        }
        //     })
        // }
        if (status === "No")
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    uwatime[`${form}time`] = timer
                    history.push(nextPath)
                }
            })
    }
    const data = uwaform
    if (uwaform === undefined) {
        return <Redirect to="/uwaform" />
    }
    return (
        <>
            <MasterCheckList
                progressCircle="true"
                TimeCounter={timer}
                disabled={buttonStatus}
                count="10"
                name={data.operator_name}
                machineID={data.Station}
                progressValue="80"
                progressText="8 0f 10"
                TypeOfMedia="Video"
                videosrc="./Images/Uwa/8.mp4"
                onClick={onClick}
                alt="Uwa8"
                buttonName="Next"
                link="/Uwa9" />
        </>
    )
}
function Uwa9() {
    const history = useHistory()
    const [timer, setTimer] = useState(0)
    function useInterval(callback, delay) {
        const savedCallback = useRef();
        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            let id = setInterval(() => {
                savedCallback.current();
            }, delay);
            return () => clearInterval(id);
        }, [delay]);
    }
    useInterval(() => { setTimer(timer + 1); }, 1000);
    const buttonStatus = timer > 5 ? false : true;
    const onClick = (form, status, nextPath) => {
        if (uwaform === undefined) {
            return history.push("/uwaform")
        }
        // if (status === "Yes") {
        //     SweetAlert.fire({
        //         title: "Data Submitted",
        //         icon: "success",
        //     }).then((result) => {
        if (status === "Yes") {
            uwastatus[form] = status
            uwatime[`${form}time`] = timer
            history.push(nextPath)
        }
        //     })
        // }
        if (status === "No")
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    uwatime[`${form}time`] = timer
                    history.push(nextPath)
                }
            })
    }
    const data = uwaform
    if (uwaform === undefined) {
        return <Redirect to="/uwaform" />
    }
    return (
        <>
            <MasterCheckList
                progressCircle="true"
                TimeCounter={timer}
                disabled={buttonStatus}
                count="10"
                name={data.operator_name}
                machineID={data.Station}
                progressValue="90"
                progressText="9 0f 10"
                TypeOfMedia="Video"
                videosrc="./Images/Uwa/9.mp4"
                onClick={onClick}
                alt="Uwa9"
                buttonName="Next"
                link="/Uwa10" />
        </>
    )
}
function Uwa10(props) {
    const history = useHistory()
    const [timer, setTimer] = useState(0)
    function useInterval(callback, delay) {
        const savedCallback = useRef();
        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            let id = setInterval(() => {
                savedCallback.current();
            }, delay);
            return () => clearInterval(id);
        }, [delay]);
    }
    useInterval(() => { setTimer(timer + 1); }, 1000);
    const buttonStatus = timer > 5 ? false : true;
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
                        uwatime1: uwatime.Uwatime,
                        uwatime2: uwatime.Uwa2time,
                        uwatime3: uwatime.Uwa3time,
                        uwatime4: uwatime.Uwa4time,
                        uwatime5: uwatime.Uwa5time,
                        uwatime6: uwatime.Uwa6time,
                        uwatime7: uwatime.Uwa7time,
                        uwatime8: uwatime.Uwa8time,
                        uwatime9: uwatime.Uwa9time,
                        uwatime10: timer,
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
    const data = uwaform
    if (uwaform === undefined) {
        return <Redirect to="/uwaform" />
    }
    return (
        <>
            <MasterCheckList
                progressCircle="true"
                TimeCounter={timer}
                disabled={buttonStatus}
                count="10"
                name={data.operator_name}
                machineID={data.Station}
                progressValue="100"
                progressText="10 0f 10"
                okToComplete="true"
                TypeOfMedia="Video"
                videosrc="./Images/Uwa/10.mp4"
                onClick={onClick}
                alt="Uwa10"
                buttonName="Done"
                link="/" />
        </>
    )
}
export { Uwa, Uwa2, Uwa3, Uwa4, Uwa5, Uwa6, Uwa7, Uwa8, Uwa9, Uwa10 }
