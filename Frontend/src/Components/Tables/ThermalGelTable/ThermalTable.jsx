import axios from 'axios'
import React, { Component } from 'react'
// import { Table } from 'reactstrap'
import { Table } from 'react-bootstrap'

export default class ThermalTable extends Component {
    constructor(props) {
        super()
        this.state = {
            thermal: null,
            from: null,
            to: null
        }
    }
    componentDidMount = () => {
        axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/thermal`).then((res) => {
            this.setState({
                thermal: res.data
            })
        })
    }
    shiftfilter = async (e) => {
        const shift = e.target.value
        const shiftdata = await axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/thermal`).then((res) => {
            return res.data
        })
        if (shift !== "none") {
            const filtershift = await shiftdata.filter((shifts, index) => { return shifts.shift === shift })            
            this.setState({
                thermal: filtershift
            })
        } else {
            this.setState({
                thermal: shiftdata
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
            const datedata = await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/thermal/datefilter`, {
                from: from,
                to: to
            }).then((res) => {
                return res.data
            })
            this.setState({
                thermal: datedata
            })
        }
    }
    Resetfilter = async () => {
        const resetdata = await axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/thermal`).then((res) => {
            return res.data
        })
        this.setState({
            thermal: resetdata
        })
    }
    exportdata = async () => {
        const exportthermal = await axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/thermal/export`).then((res) => {
            return res.data
        })
        window.open(exportthermal)
    }
    statusfilter=async(e)=>{
        const status = e.target.value
        const statusdata = await axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/thermal`).then((res) => {
            return res.data
        })
        if (status !== "none") {
            const filterstatus = await statusdata.filter((statuss, index) => { return statuss.status === status })            
            this.setState({
                thermal: filterstatus
            })
        } else {
            this.setState({
                thermal: statusdata
            })
        }
    }
    render() {
        const { thermal } = this.state
        return (
            <>
                <div className='p-3 container-fluid'>
                    <h3 className='text-center mb-4 text-dark' style={{ marginBottom: "10px !important" }}>Thermal Checklist </h3>

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
                                <th>Thermal1</th>
                                <th>Thermal2</th>
                                <th>Thermal3</th>
                                <th>Thermal4</th>
                                <th>Thermal5</th>
                                <th>Thermal6</th>
                                <th>Thermal7</th>
                                <th>Thermal8</th>
                                <th>Thermal9</th>
                                <th>Thermal10</th>
                                <th>Thermal11</th>
                                <th>Thermal12</th>
                                <th>Thermal13</th>
                                <th>Checked by</th>
                                <th>Remarks</th>
                                <th>Status</th>
                                <th>Average</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                thermal && thermal.map((thermalinfo, index) => (
                                    <tr key={index}>
                                        <td>{thermalinfo.date}</td>
                                        <td>{thermalinfo.shift}</td>
                                        <td>{thermalinfo.thermal1}</td>
                                        <td>{thermalinfo.thermal2}</td>
                                        <td>{thermalinfo.thermal3}</td>
                                        <td>{thermalinfo.thermal4}</td>
                                        <td>{thermalinfo.thermal5}</td>
                                        <td>{thermalinfo.thermal6}</td>
                                        <td>{thermalinfo.thermal7}</td>
                                        <td>{thermalinfo.thermal8}</td>
                                        <td>{thermalinfo.thermal9}</td>
                                        <td>{thermalinfo.thermal10}</td>
                                        <td>{thermalinfo.thermal11}</td>
                                        <td>{thermalinfo.thermal12}</td>
                                        <td>{thermalinfo.thermal13}</td>
                                        <td>{thermalinfo.checked_by}</td>
                                        <td>{thermalinfo.description}</td>
                                        <td>{thermalinfo.status}</td>
                                        <td>{thermalinfo.average}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                    {
                        thermal !== null ? thermal.length === 0 ? <div className="text-center">No data</div> : null : null
                    }

                </div>
            </>
        )
    }
}

