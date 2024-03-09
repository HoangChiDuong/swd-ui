import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import { useSelector } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";
// import { listProducts } from "../../Redux/Actions/ProductActions";
// import { listProducts } from "../../pages/redux/Actions/ProductActions";
// import Loading from "../LoadingError/Loading";
// import Message from "../LoadingError/Error";

const MainProducts = () => {
    // const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const Data = [
        {
            productId: 1,
            productName: "Product 1",
            thumbnail: "https://noithatlongthanh.vn/upload1/images/Phong-khach-hien-dai-dep-nhe-nhang.jpg",
            price: 500000,
            status: "In Progress",
        },
        {
            productId: 2,
            productName: "Product 2",
            thumbnail: "https://noithatlongthanh.vn/upload1/images/Phong-khach-hien-dai-dep-nhe-nhang.jpg",
            price: 800000,
            status: "Completed",
        },
        {
            productId: 3,
            productName: "Product 3",
            thumbnail: "https://noithatlongthanh.vn/upload1/images/Phong-khach-hien-dai-dep-nhe-nhang.jpg",
            price: 1200000,
            status: "Pending",
        },
        {
            productId: 4,
            productName: "Product 3",
            thumbnail: "https://noithatlongthanh.vn/upload1/images/Phong-khach-hien-dai-dep-nhe-nhang.jpg",
            price: 1200000,
            status: "Pending",
        },
        {
            productId: 5,
            productName: "Product 3",
            thumbnail: "https://noithatlongthanh.vn/upload1/images/Phong-khach-hien-dai-dep-nhe-nhang.jpg",
            price: 1200000,
            status: "Pending",
        },
        {
            productId: 6,
            productName: "Product 3",
            thumbnail: "https://noithatlongthanh.vn/upload1/images/Phong-khach-hien-dai-dep-nhe-nhang.jpg",
            price: 1200000,
            status: "Pending",
        },
        {
            productId: 7,
            productName: "Product 3",
            thumbnail: "https://noithatlongthanh.vn/upload1/images/Phong-khach-hien-dai-dep-nhe-nhang.jpg",
            price: 1200000,
            status: "Pending",
        },

        // Add more products as needed
    ];


    const productList = useSelector((state) => state.productList.listProduct);
    const recordsPerPage = 8;
    // const Data = useSelector((state) => state.productList.products);
    const totalPages = Math.ceil(Data.length / recordsPerPage);
    const firstIndex = (currentPage - 1) * recordsPerPage;
    const lastIndex = currentPage * recordsPerPage;
    const slicedProducts = productList?.slice(firstIndex, lastIndex);


    // const { loading, error, products } = productList;

    // const productDelete = useSelector((state) => state.productDelete);
    // const { error: errorDelete, success: successDelete } = productDelete;

    // useEffect(() => {
    //     dispatch(listProducts());
    // }, [dispatch, successDelete]);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <section className="content-main">
            <div className="content-header">
                <h2 className="content-title">Sản Phẩm</h2>
                <div>
                    <Link to="/staff/product/create" className="btn-add">
                        Tạo Mới
                    </Link>
                </div>
            </div>

            <div className="product--container">

                <div className="product--container-detail">
                    {/* {errorDelete && (
                        <Message variant="alert-danger">{errorDelete}</Message>
                    )}
                    {loading ? (
                        <Loading />
                    ) : error ? (
                        <Message variant="alert-danger">{error}</Message>
                    ) : ( */}

                    {/* Products */}
                    {slicedProducts?.map((product) => (
                        <Product product={product} key={product.productId} />
                    ))}

                    {/* )} */}

                </div>

            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </section>
    );
};
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <nav className="pagination-navigation" aria-label="Page navigation">
            <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <Link className="page-link" to="#" onClick={() => onPageChange(currentPage - 1)}>
                        Sau
                    </Link>
                </li>
                {pageNumbers.map(pageNumber => (
                    <li className={`page-item ${pageNumber === currentPage ? 'active' : ''}`} key={pageNumber}>
                        <Link className="page-link" to="#" onClick={() => onPageChange(pageNumber)}>
                            {pageNumber}
                        </Link>
                    </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <Link className="page-link" to="#" onClick={() => onPageChange(currentPage + 1)}>
                        Trước
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
export default MainProducts;