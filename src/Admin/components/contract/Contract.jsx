import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import ContractDetail from "./ContractDetail";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Contract = () => {
    const [data, setData] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [contractID, setContractID] = useState(null);
    const [showContractDetail, setShowContractDetail] = useState(false);

    useEffect(() => {
        console.log("assss")
        axios.get(
            `https://localhost:7058/api/Admin/GetContractAdmin`
        )
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.error("There was an error!", error);
            });
    }, [])

    const handleButtonClick = (row) => {
        setSelectedFile(row.contractFile);
        setContractID(row.contractId);
        setShowContractDetail(true);
    };



    const columns = [
        {
            name: "Hợp đồng Id",
            selector: row => row.contractId,
        },
        {
            name: "Báo giá Id",
            selector: row => row.requestId,
            sortable: true,
        },
        {
            name: "Giá Vật Tư",
            selector: row => row.finalPrice,
            sortable: true,
        },
        {
            name: "Giá Thi Công",
            selector: row => row.conPrice,
            sortable: true,
        },
        {
            name: "Ngày",
            selector: row => row.date,
            sortable: true,
        },
        {
            name: "Trạng Thái",
            selector: row => {
                if (row.status == "1") {
                    return (
                        <p style={{ backgroundColor: "yellow", padding: "5px", borderRadius: "5px", color: "#fff" }}>Đang chờ xác nhận</p>
                    )
                } else if (row.status == "2") {
                    return (
                        <p style={{ backgroundColor: "blue", padding: "5px", borderRadius: "5px", color: "#fff" }}>Đã xác nhận</p>
                    )
                } else {
                    return (
                        <p style={{ backgroundColor: "green", padding: "5px", borderRadius: "5px", color: "#fff" }}>Hoàn Thành</p>
                    )
                }
            },
            sortable: true,
        },
        {
            name: "Xem Hợp Đồng",
            cell: row => <div onClick={() => handleButtonClick(row)}><MdOutlineRemoveRedEye style={{ fontSize: '25px' }} /></div>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    return (
        <div>
            <DataTable
                columns={columns}
                data={data}
            />
            {showContractDetail && <ContractDetail contractFile={selectedFile} contractId={contractID} onClose={setShowContractDetail} />}
        </div>
    );
}

export default Contract;
