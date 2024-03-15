import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import '../styles/Assignment.css';
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import Loading from "~/Loading/Loading";
import Message from "~/Loading/Error";
import { confirmRequest, listRequest } from "~/redux/Actions/RequestActions";
import { CgSandClock } from "react-icons/cg";
import { listStaff, listStaffStatus } from "~/redux/Actions/UserActions";
import { FaFileContract } from "react-icons/fa";
import { LuCircleDollarSign } from "react-icons/lu";
const Assignment = () => {

    const dispatch = useDispatch();
    const reqList = useSelector((state) => state.listRequest);
    const { loading, error, listReq } = reqList;


    const ListST = useSelector((state) => state.listStaffStatus);
    const { loadingstaffList, errorstaffList, staffs } = ListST;
    const createTask = useSelector((state) => state.confirmRequest);

    const { error: errorCreate, success: successCreate } = createTask;

    const [data, setData] = useState();

    const userAuth = useSelector((state) => state.auth.login.currentUser);

    useEffect(() => {
        dispatch(listRequest());
        dispatch(listStaffStatus(userAuth.Id));
    }, [dispatch, successCreate, errorCreate])




    useEffect(() => {
        setData(listReq);
    }, [listReq])
    const [loadingss, setLoading] = useState(false);
    const [errorss, setError] = useState(null);

    const handleFilter = (event, row) => {
        setLoading(true);
        try {
            const selectedStaffId = event.target.value;
            const newData = data.map((rowData) =>
                rowData.requestId === row.requestId
                    ? { ...rowData, assignedStaffId: selectedStaffId }
                    : rowData
            );

            // Update the state with the new data
            setData(newData);
        } catch (error) {
            setError("An error occurred while filtering data.");
        } finally {
            setLoading(false);
        }
    };


    const handleConfirm = (requestId) => {
        const updatedRow = data.find((row) => row.requestId === requestId);
        const assignedStaffId = updatedRow ? Number(updatedRow.assignedStaffId) : null;
        dispatch(confirmRequest(requestId, assignedStaffId));
    };


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
            cell: row => {
                if (row.status === "1") {
                    return (
                        <select
                            value={row.assignedStaffId}
                            onChange={(e) => handleFilter(e, row)}
                        >
                            <option value="" className="staff--list">Xếp</option>
                            {staffs?.map(option => (
                                <option key={option.userId} value={option.userId} className="staff--list">{option.userName}</option>
                            ))}
                        </select>
                    )
                }
            }
        },
        {
            name: "Trạng Thái",
            cell: (row) => {
                if (row.status === "1") {
                    return (
                        <div className="action-buttons">
                            <button onClick={() => handleConfirm(row.requestId)}><CiEdit /></button>
                        </div>
                    );
                } else if (row.status === "2") {
                    return (
                        <div className="assign__await" >
                            <div ><CgSandClock className="assign--icon" /></div>
                        </div>
                    );
                } else if (row.status === "3") {
                    return (
                        <div className="" >
                            <div ><FaFileContract style={{ fontSize: "35px", background: "blue", borderRadius: "50%", color: "#fff", padding: "5px" }} /></div>
                        </div>
                    );
                }
                else if (row.status === "4") {
                    return (
                        <div  >
                            <div ><LuCircleDollarSign style={{ fontSize: "35px", background: "green", borderRadius: "50%", color: "#fff" }} /></div>
                        </div>
                    );
                }
                else {
                    return null; // No action buttons for other statuses
                }
            },
        }
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
