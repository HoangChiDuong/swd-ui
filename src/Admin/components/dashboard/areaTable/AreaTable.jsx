import React from 'react';
import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";
import { useSelector } from "react-redux";
import numeral from 'numeral';

const TABLE_HEADS = [
    "Hợp đồng Id",
    "Báo giá Id",
    "Ngày",
    "Giá nội thất",
    "Giá thi công",
    "Trạng thái",
];

const AreaTable = () => {
    const contract = useSelector((state) => state.getContract.contractDetail);



    return (
        <section className="content-area-table">
            <div className="data-table-info">
                <h4 className="data-table-title">Hợp đồng gần đây</h4>
            </div>
            <div className="data-table-diagram">
                <table>
                    <thead>
                        <tr>
                            {TABLE_HEADS.map((th, index) => (
                                <th key={index}>{th}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {contract?.map((dataItem) => (
                            <tr key={dataItem.contractId}>
                                <td>{dataItem.contractId}</td>
                                <td>{dataItem.requestId}</td>
                                <td>{dataItem.date}</td>
                                <td>{numeral(dataItem.finalPrice != null ? dataItem.finalPrice : "0").format("0,0")} VNĐ</td>
                                <td >{numeral(dataItem.conPrice != null ? dataItem.conPrice : "0").format("0,0")} VNĐ</td>
                                <td style={{ textAlign: "center" }}>{dataItem.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AreaTable;
