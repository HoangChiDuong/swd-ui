import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import '../styles/Assignment.css';
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useSelector } from "react-redux";
import Loading from "~/Loading/Loading";
import Message from "~/Loading/Error";
const Assignment = () => {
    const reqList = useSelector((state) => state.listRequest);
    const { loading, error, listReq } = reqList;

    const staffList = useSelector((state) => state.listStaffStatus);
    const { loadingstaffList, errorstaffList, listST } = staffList;

    const [data, setData] = useState(listReq);


    console.log(data)
    const [loadingss, setLoading] = useState(false);
    const [errorss, setError] = useState(null);

    const handleFilter = (event) => {
        setLoading(true);
        try {
            const newData = data.filter(row => row.Task.toLowerCase().includes(event.target.value.toLowerCase()));
            setData(newData);
        } catch (error) {
            setError("An error occurred while filtering data.");
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (row) => {
        // Implement edit functionality
        console.log("Edit row:", row);
    };

    const handleDelete = (row) => {
        // Implement delete functionality
        console.log("Delete row:", row);
    };

    const statusOptions = listST;

    const columns = [
        {
            name: "Id",
            selector: row => row.requestId,
        },
        {
            name: "Tên",
            selector: row => row.userName,
            sortable: true,
        },
        {
            name: "email",
            selector: row => row.email,
            sortable: true,
        },
        {
            name: "Ngày khảo sát",
            selector: row => row.date,
            sortable: true,
        },
        {
            name: "Địa chỉ",
            selector: row => row.address,
            sortable: true,
        },
        {
            name: "SĐT",
            selector: row => row.phone,
            sortable: true,
        },
        {
            name: "Sắp xếp",
            cell: row => (
                <select
                    value={row.status}
                    onChange={(e) => {
                        // Implement status change functionality
                        console.log("Status changed to:", e.target.value);
                    }}
                >
                    {statusOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            ),
        },
        {
            name: "Actions",
            cell: row => (
                <div className="action-buttons">
                    <button onClick={() => handleEdit(row)}><MdDeleteOutline /></button>
                    <button onClick={() => handleDelete(row)}><CiEdit /></button>
                </div>
            ),
        },
    ];

    return (
        <div className="assignment-container">
            <div className="content--header">
                <h1>Task</h1>
                <input type="text" className="searchTask" placeholder="Search Task" onChange={handleFilter} />
            </div>
            {loadingss && <div className="loading-spinner">Loading...</div>}
            {errorss && <div className="error-message">{errorss}</div>}
            {loading ? (
                <Loading />
            ) : error ? (
                <Message variant="alert-danger">{error}</Message>
            ) : (
                <DataTable
                    columns={columns}
                    data={data}
                    selectableRows
                    selectableRowsHighlight
                    pagination
                    paginationPerPage={10}
                    paginationRowsPerPageOptions={[10, 15, 20, 50]}
                />
            )
            }
        </div>
    );
};

export default Assignment;
