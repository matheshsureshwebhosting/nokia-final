import axios from 'axios'
import React, { Component } from 'react'
// import { Table } from 'reactstrap'
import { Table } from 'react-bootstrap'

export default class OtaTable extends Component {
    constructor(props) {
        super()
        this.state = {
            ota: null,
            from: null,
            to: null
        }
    }
    componentDidMount = () => {
        axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/ota`).then((res) => {
            this.setState({
                ota: res.data
            })
        })
    }
    shiftfilter = async (e) => {
        const shift = e.target.value
        const shiftdata = await axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/ota`).then((res) => {
            return res.data
        })
        if (shift !== "none") {
            const filtershift = await shiftdata.filter((shifts, index) => { return shifts.shift === shift })            
            this.setState({
                ota: filtershift
            })
        } else {
            this.setState({
                ota: shiftdata
            })
        }
    }
    hanlechange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    datefilter = async () => {
        const { from, to } = this.state
        if (from == null) {
            alert("From Date Requires")
            return false
        } else if (to == null) {
            alert("To Date Requires")
            return false
        } else {
            const datedata = await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/ota/datefilter`, {
                from: from,
                to: to
            }).then((res) => {
                return res.data
            })
            this.setState({
                ota: datedata
            })
        }
    }
    Resetfilter = async () => {
        const resetdata = await axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/ota`).then((res) => {
            return res.data
        })
        this.setState({
            ota: resetdata
        })
    }
    exportdata = async () => {
        const exportota = await axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/ota/export`).then((res) => {
            return res.data
        })
        window.open(exportota)
    }
    statusfilter=async(e)=>{
        const status = e.target.value
        const statusdata = await axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/ota`).then((res) => {
            return res.data
        })
        if (status !== "none") {
            const filterstatus = await statusdata.filter((statuss, index) => { return statuss.status === status })            
            this.setState({
                ota: filterstatus
            })
        } else {
            this.setState({
                ota: statusdata
            })
        }
    }
    render() {
        const { ota } = this.state
        return (
            <>
                <div className='p-3 container-fluid'>
                    <h3 className='text-center mb-4 text-dark' style={{ marginBottom: "10px !important" }}>Testers Checklist OTA</h3>

                    <div className='d-flex justify-content-between my-2'>
                        <div className="d-flex">
                            <div className="pt-1">
                                <label htmlFor="from" className='mr-2'>From</label>
                                <input type="date" id="from" name="from" onChange={e => this.hanlechange(e)} />
                            </div>
                            <div className="pt-1 px-3">
                                <label htmlFor="to" className='mr-2'>To</label>
                                <input type="date" id="to" name="to" onChange={e => this.hanlechange(e)} />
                            </div>
                            <div className="search">
                                <button className="btn btn-info mr-2" onClick={this.datefilter}>Filter</button>
                                <button className="btn btn-info" onClick={this.Resetfilter}>Reset</button>
                            </div>
                        </div>
                        <div >
                            <button className="btn btn-info mr-2" onClick={this.exportdata}>Export</button>
                            <select className="form-select" onChange={e => this.shiftfilter(e)}>
                                <option value="none">Filter By Shift</option>
                                <option value="Shift A">Shift A</option>
                                <option value="Shift B" >Shift B</option>
                                <option value="Shift C">Shift C</option>
                            </select>
                            <select className="form-select mr-1" onChange={e => this.statusfilter(e)}>
                                <option value="none">Filter By Status</option>
                                <option value="Complete" >Complete</option>
                                <option value="In Complete">In Complete</option>                                
                            </select>
                        </div>
                    </div>
                    <Table striped bordered hover size="sm" responsive="sm">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Shift </th>
                                <th>OTA1</th>
                                <th>OTA2</th>
                                <th>OTA3</th>
                                <th>OTA4</th>
                                <th>OTA5</th>
                                <th>OTA6</th>
                                <th>OTA7</th>
                                <th>OTA8</th>
                                <th>OTA9</th>
                                <th>OTA10</th>
                                <th>Checked by</th>
                                <th>Remarks</th>
                                <th>Status</th>
                                <th>Average</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ota && ota.map((otainfo, index) => (
                                    <tr key={index}>
                                        <td>{otainfo.date}</td>
                                        <td>{otainfo.shift}</td>
                                       <td>{otainfo.ota1}</td>
                                       <td>{otainfo.ota2}</td>
                                       <td>{otainfo.ota3}</td>
                                       <td>{otainfo.ota4}</td>
                                       <td>{otainfo.ota5}</td>
                                       <td>{otainfo.ota6}</td>
                                       <td>{otainfo.ota7}</td>
                                       <td>{otainfo.ota8}</td>
                                       <td>{otainfo.ota9}</td>
                                       <td>{otainfo.ota10}</td>
                                        <td>{otainfo.checked_by}</td>
                                        <td>{otainfo.description}</td>
                                        <td>{otainfo.status}</td>
                                        <td>{otainfo.average}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                    {
                        ota !== null ? ota.length === 0 ? <div className="text-center">No data</div> : null : null
                    }

                </div>
            </>
        )
    }
}

