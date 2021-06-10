import axios from 'axios'
import React, { Component } from 'react'
// import { Table } from 'reactstrap'
import { Table } from 'react-bootstrap'

export default class UwaTable extends Component {
    constructor(props) {
        super()
        this.state = {
            uwa: null,
            from: null,
            to: null
        }
    }
    componentDidMount = () => {
        axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/uwa`).then((res) => {
            this.setState({
                uwa: res.data
            })
        })
    }
    shiftfilter = async (e) => {
        const shift = e.target.value
        const shiftdata = await axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/uwa`).then((res) => {
            return res.data
        })
        if (shift !== "none") {
            const filtershift = await shiftdata.filter((shifts, index) => { return shifts.shift === shift })            
            this.setState({
                uwa: filtershift
            })
        } else {
            this.setState({
                uwa: shiftdata
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
            const datedata = await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/uwa/datefilter`, {
                from: from,
                to: to
            }).then((res) => {
                return res.data
            })
            this.setState({
                uwa: datedata
            })
        }
    }
    Resetfilter = async () => {
        const resetdata = await axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/uwa`).then((res) => {
            return res.data
        })
        this.setState({
            uwa: resetdata
        })
    }
    exportdata = async () => {
        const exportuwa = await axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/uwa/export`).then((res) => {
            return res.data
        })
        window.open(exportuwa)
    }

    statusfilter=async(e)=>{
        const status = e.target.value
        const statusdata = await axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/uwa`).then((res) => {
            return res.data
        })
        if (status !== "none") {
            const filterstatus = await statusdata.filter((statuss, index) => { return statuss.status === status })        
            this.setState({
                uwa: filterstatus
            })
        } else {
            this.setState({
                uwa: statusdata
            })
        }
    }

    render() {
        const { uwa } = this.state
        return (
            <>
                <div className='p-3 container-fluid'>
                    <h3 className='text-center mb-4 text-dark' style={{ marginBottom: "10px !important" }}>Testers Checklist UWA</h3>

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
                                <th>UWA1</th>
                                <th>UWA2</th>
                                <th>UWA3</th>
                                <th>UWA4</th>
                                <th>UWA5</th>
                                <th>UWA6</th>
                                <th>UWA7</th>
                                <th>UWA8</th>
                                <th>UWA9</th>
                                <th>UWA10</th>
                                <th>Checked by</th>
                                <th>Remarks</th>
                                <th>Status</th>
                                <th>Average</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                uwa && uwa.map((uwainfo, index) => (
                                    <tr key={index}>
                                        <td>{uwainfo.date}</td>
                                        <td>{uwainfo.shift}</td>
                                       <td>{uwainfo.uwa1}</td>
                                       <td>{uwainfo.uwa2}</td>
                                       <td>{uwainfo.uwa3}</td>
                                       <td>{uwainfo.uwa4}</td>
                                       <td>{uwainfo.uwa5}</td>
                                       <td>{uwainfo.uwa6}</td>
                                       <td>{uwainfo.uwa7}</td>
                                       <td>{uwainfo.uwa8}</td>
                                       <td>{uwainfo.uwa9}</td>
                                       <td>{uwainfo.uwa10}</td>
                                        <td>{uwainfo.checked_by}</td>
                                        <td>{uwainfo.description}</td>
                                        <td>{uwainfo.status}</td>
                                        <td>{uwainfo.average}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                    {
                        uwa !== null ? uwa.length === 0 ? <div className="text-center">No data</div> : null : null
                    }

                </div>
            </>
        )
    }
}

