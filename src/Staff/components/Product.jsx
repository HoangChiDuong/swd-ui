import React from "react";
import { Link } from "react-router-dom";

import numeral from "numeral";
import { useState } from "react";
import '../styles/Product.css';
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const Product = (props) => {
    const { product } = props;

    const [showConfirmation, setShowConfirmation] = useState(false);


    const deletehandler = (productId) => {


        setShowConfirmation(false);

    };
    const tooglehandler = () => {
        setShowConfirmation(true);
    }

    return (
        <>
            <div className="product-container">
                <div className="product-container-detail">
                    <Link to="#" className="product-container-detail-img">
                        <img src={product.thumbnail} alt="Product" style={{ width: '100%' }} />
                    </Link>
                    <div className="info-wrap">
                        <Link to="#" className="product-container-detail-title">
                            {product.productName}
                        </Link>
                        <div className="btn">


                            <Link
                                to="#"
                                onClick={() => tooglehandler()}
                                className="btn-delete"
                            >
                                <MdDeleteOutline />

                            </Link>
                            <Link
                                to={`/product/${product.productId}/edit`}
                                className="btn--edit"
                            >
                                <CiEdit />
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
            {
                showConfirmation && (
                    <div className="delete-modal">
                        <div className="delete-modal-content">
                            <div className="text-delete">Bạn có chắc chắn xóa không?</div>
                            <div className="productName-delete"> {product.productName}</div>
                            <div className="button-delete" >
                                <button className="button-yes-delete" onClick={() => deletehandler(product.productId)}>Có</button>
                                <button onClick={() => setShowConfirmation(false)}>Không</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default Product;