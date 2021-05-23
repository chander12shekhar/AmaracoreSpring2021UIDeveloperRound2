import React from 'react';
import { Table } from 'react-bootstrap';
import './table.css';

const Tables = (props) => {
    const tableHeader = props.columns;
    const userData = props.data;

    return (
        <div className="container">
            <div className="tableData ver m-b-110">
                <Table responsive>
                    <thead className="tableData-head">
                        <tr className="row100 head">
                            {
                                tableHeader.map(function (header, index) {
                                    return <th>{header}</th>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody className="tableData-body">
                        {
                            userData.map(function (user) {
                                return (
                                    <tr className="row100 body">
                                        <td className="cell100">{user.id}</td>
                                        <td className="cell100">
                                            <img src={user.avatar} alt={user.avatar} />
                                        </td>
                                        <td className="cell100">{user.first_name}</td>
                                        <td className="cell100">{user.last_name}</td>
                                        <td className="cell100">{user.phone}</td>
                                        <td className="cell100">{user.email}</td>
                                        <td className="cell100">{user.company}</td>
                                        <td className="cell100">{user.job_title}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}


export default Tables;