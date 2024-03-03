import React, { useState } from "react";
import DataTable from "react-data-table-component";
import '../styles/Assignment.css';
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
const Assignment = () => {
    const [data, setData] = useState([
        {
            id: 1,
            Task: "Hen gap",
            email: "thanh123@gmail.com",
            phone: "123213",
            address: "Cafe",
            status: "In Progress",
        },
        {
            id: 2,
            Task: "gfsd gap",
            email: "thanh123@gmail.com",
            phone: "123213",
            address: "Cafe",
            status: "Completed",
        },
        {
            id: 3,
            Task: "sdf gap",
            email: "thanh123@gmail.com",
            phone: "123213",
            address: "Cafe",
            status: "In Progress",
        },
        {
            id: 4,
            Task: "gf gap",
            email: "thanh123@gmail.com",
            phone: "123213",
            address: "Cafe",
            status: "Pending",
        },
    ]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

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

    const statusOptions = ["In Progress", "Completed", "Pending"];

    const columns = [
        {
            name: "Id",
            selector: row => row.id,
        },
        {
            name: "Task",
            selector: row => row.Task,
            sortable: true,
        },
        {
            name: "Email",
            selector: row => row.email,
            sortable: true,
        },
        {
            name: "Phone",
            selector: row => row.phone,
            sortable: true,
        },
        {
            name: "Address",
            selector: row => row.address,
            sortable: true,
        },
        {
            name: "Status",
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

            {loading && <div className="loading-spinner">Loading...</div>}
            {error && <div className="error-message">{error}</div>}

            <DataTable
                columns={columns}
                data={data}
                selectableRows
                selectableRowsHighlight
                pagination
                paginationPerPage={10}
                paginationRowsPerPageOptions={[10, 15, 20, 50]}
            />
        </div>
    );
};

export default Assignment;
