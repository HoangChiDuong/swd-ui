import React from "react";
import { BiLogoHtml5 } from "react-icons/bi";
import { FcBusinessman } from "react-icons/fc";
import { useSelector } from "react-redux";
import { FcShop } from "react-icons/fc";
import { FcSurvey } from "react-icons/fc";
const Card = () => {
    const users = useSelector((state) => state.staffList.users);
    const products = useSelector((state) => state.productList.listProduct);
    const request = useSelector((state) => state.listRequest.listReq);



    return (
        <div className="card--container">
            <div className="card">
                <div className="card--cover"><FcBusinessman /></div>
                <div className="card--title">
                    <h2>Nhân viên: {users ? users.length : 0}</h2>
                </div>
            </div>
            <div className="card">
                <div className="card--cover"><FcShop /></div>
                <div className="card--title">
                    <h2>Sản Phẩm :{products ? products.length : 0}</h2>
                </div>
            </div>
            <div className="card">
                <div className="card--cover"><FcSurvey /></div>
                <div className="card--title">
                    <h2>Y/c Báo Giá:{request ? request.length : 0}</h2>
                </div>
            </div>
        </div>

    )
}

export default Card;