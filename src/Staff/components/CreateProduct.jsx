import React, { useEffect, useState } from "react";
import { IoIosCloseCircle, IoMdAddCircle } from "react-icons/io";
import { IoPushOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import { PRODUCT_CREATE_RESET } from "../../Redux/Constants/ProductConstants";
// import { createProduct } from "./../../Redux/Actions/ProductActions";
// import Toast from "../LoadingError/Toast";
// import Message from "../LoadingError/Error";
// import Loading from "../LoadingError/Loading";
// import { createProduct } from "../../pages/redux/Actions/ProductActions";
// import { PRODUCT_CREATE_RESET } from "../../pages/redux/Constants/ProductConstants";

// const ToastObjects = {
//     pauseOnFocusLoss: false,
//     draggable: false,
//     pauseOnHover: false,
//     autoClose: 2000,
// };
import "../styles/CreateProduct.css";
const CreateProduct = () => {
  const [ProductName, setProductName] = useState("");
  const [Price, setPrice] = useState("");
  const [DiscountPercent, setDiscountPercent] = useState("");
  const [Decription, setDescription] = useState("");
  const [CateId, setCateId] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [showInputDesImg, setShowInputDesImg] = useState(false);
  const [InputDesImg, setInputDesImg] = useState("");
  const [imgIndex, setImageIndex] = useState(null);
  const [ImageFile, setImageFile] = useState([]);
  const [dataOption, setDataOption] = useState([]);
  const [nameOption, setNameOption] = useState(null);
  const [quantityOption, setQuantityOption] = useState(null);
  const [inputOptionShow, setInputOptionShow] = useState(false);

  var count = 0;

  // const dispatch = useDispatch();

  // const productCreate = useSelector((state) => state.productCreate);
  // const { loading, error, product } = productCreate;

  // useEffect(() => {
  //     if (product) {
  //         toast.success("Product Added", ToastObjects);
  //         dispatch({ type: PRODUCT_CREATE_RESET });
  //         resetForm();
  //     }
  // }, [product, dispatch]);

  const validateForm = () => {
    const errors = {};

    if (!ProductName) {
      errors.ProductName = "Tên Sản Phẩm không được bỏ trống.";
    }

    if (!Price) {
      errors.Price = "Giá Tiền không được bỏ trống.";
    }

    if (!DiscountPercent) {
      errors.DiscountPercent = "Giảm Giá không được bỏ trống.";
    }

    if (!CateId) {
      errors.CateId = "Phân Loại không được bỏ trống.";
    }

    if (!Quantity) {
      errors.Quantity = "Số Lượng không được bỏ trống.";
    }

    if (isNaN(parseFloat(Price)) || parseFloat(Price) <= 0) {
      errors.Price = "Giá Tiền phải là một số dương.";
    }

    if (
      isNaN(parseFloat(DiscountPercent)) ||
      parseFloat(DiscountPercent) < 0 ||
      parseFloat(DiscountPercent) > 100
    ) {
      errors.DiscountPercent = "Giảm Giá phải là một số từ 0 đến 100.";
    }

    if (isNaN(parseInt(Quantity)) || parseInt(Quantity) <= 0) {
      errors.Quantity = "Số Lượng phải là một số nguyên dương.";
    }
    return errors;
  };

  const resetForm = () => {
    setProductName("");
    setPrice("");
    setDiscountPercent("");
    setDescription("");
    setCateId("");
    setQuantity("");
    setImageFile([]);
    setFormErrors({});
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };
  const handleDeleteImage = (index) => {
    const updatedImages = [...ImageFile];
    updatedImages.splice(index, 1);
    setImageFile(updatedImages);
    count--;
  };

  const changeDesImg = (e) => {
    setInputDesImg(e.target.value);
  };
  const ESCdown = () => {
    setNameOption(null);
    setQuantityOption(null);
    setInputOptionShow(false);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (imgIndex !== null) {
        const newImageFile = [...ImageFile];
        newImageFile.push({
          image: imgIndex,
          description: InputDesImg,
        });
        setImageFile(newImageFile);

        setInputDesImg("");
        setImageIndex(null);
        setShowInputDesImg(false);
      } else {
        console.error("Không có ảnh được chọn");
      }
    }
  };

  const handleFileChange = (event) => {
    console.log(ImageFile);
    setShowInputDesImg(true);
    setImageIndex(event.target.files[0]);
  };
  const pushOption = () => {
    if (nameOption && quantityOption !== null) {
      const newOptionFile = [...dataOption];
      newOptionFile.push({
        optionName: nameOption,
        optionQuantity: quantityOption,
      });
      setDataOption(newOptionFile);

      setNameOption(null);
      setQuantityOption(null);
      setInputOptionShow(false);
    } else {
      console.error("Chưa Điền Thông tin");
    }
    console.log(dataOption);
  };
  return (
    <>
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={submitHandler}>
          <div className="content-header">
            <Link to="/staff/product" className="btn btn-danger text-white">
              Quay Về
            </Link>
            <h2 className="content-title">Thêm Sản Phẩm</h2>
            <div>
              <button type="submit" className="btn btn-primary">
                Thêm Sản Phẩm
              </button>
            </div>
          </div>
          <div className="view_pro_add">
            <div className="pro_add">
              <div className="">
                <label htmlFor="product_title" className="form-label">
                  Tên Dự Án
                </label>
                <input
                  type="text"
                  placeholder="Nhập ở đây ..."
                  className="form-control"
                  id="product_title"
                  required
                  value={ProductName}
                  onChange={(e) => setProductName(e.target.value)}
                />
                {formErrors.ProductName && (
                  <div className="text-danger">{formErrors.ProductName}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="product_price" className="form-label">
                  Giá Tham Khảo
                </label>
                <input
                  type="text"
                  placeholder="Nhập ở đây ..."
                  className="form-control"
                  id="product_price"
                  required
                  value={Price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                {formErrors.Price && (
                  <div className="text-danger">{formErrors.Price}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="product_title" className="form-label">
                  Loại Dự Án
                </label>
                <select
                  className="form-control"
                  id="product_title"
                  required
                  value={CateId}
                  onChange={(e) => setCateId(e.target.value)}
                >
                  <option value="">Nhà Chung Cư</option>
                  <option value="chim">Nhà Phố</option>
                  <option value="do-an">Phòng Ngủ</option>
                  <option value="long-chim">Phòng Khách</option>
                  <option value="phu-kien">Phòng Bếp</option>
                </select>
                {formErrors.CateId && (
                  <div className="text-danger">{formErrors.CateId}</div>
                )}
              </div>
              <div className="mb-4">
                <label className="form-label">Mô Tả Chung</label>
                <textarea
                  placeholder="Nhập ở đây ..."
                  className="form-control"
                  rows="7"
                  required
                  value={Decription}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                {formErrors.Decription && (
                  <div className="text-danger">{formErrors.Decription}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="product_title" className="form-label">
                  Tạo Danh Mục Cho Dự Án
                </label>
                <div className="add_option_item">
                  {dataOption.length > 0 && (
                    <table className="option_table">
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th>Tên </th>
                          <th>Số lượng</th>
                          {/* <th>Giá</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {dataOption.map((option, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{option.optionName}</td>
                            <td>{option.optionQuantity}</td>
                            {/* <td>{numeral(option.price).format("0,0")} VNĐ</td> */}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                  {inputOptionShow === true && (
                    <div className="pob_add_option">
                      <div className="delete_pob_add" onClick={() => ESCdown()}>
                        <IoIosCloseCircle className="icon_delete_button" />
                      </div>
                      <input
                        type="text"
                        placeholder="Tên danh mục"
                        className="pob_add_name"
                        value={nameOption}
                        onChange={(e) => {
                          setNameOption(e.target.value);
                          console.log(e.target.value);
                        }}
                      />
                      <input
                        type="number"
                        placeholder="Số lượng"
                        value={quantityOption}
                        className="pob_add_quantity"
                        onChange={(e) => {
                          setQuantityOption(e.target.value);
                          console.log(e.target.value);
                        }}
                      />
                      <div className="push_option" onClick={pushOption}>
                        <IoPushOutline className="push_icon_option" />
                      </div>
                    </div>
                  )}
                  {inputOptionShow === false && (
                    <IoMdAddCircle
                      className="icon_add_option"
                      onClick={() => {
                        setInputOptionShow(true);
                      }}
                    />
                  )}
                </div>
                {formErrors.CateId && (
                  <div className="text-danger">{formErrors.CateId}</div>
                )}
              </div>
              <div className="mb-4">
                <label className="form-label mb-4">Thêm Ảnh Dự Án</label>
                <div className="addImage-feedback">
                  {showInputDesImg == true && (
                    <div className="detail_img">
                      <input
                        type="text"
                        placeholder="Nhập mô tả của ảnh"
                        className="form-control"
                        value={InputDesImg}
                        onChange={(e) => {
                          changeDesImg(e);
                        }}
                        onKeyDown={(e) => {
                          handleKeyDown(e);
                        }}
                      />
                    </div>
                  )}
                  {ImageFile.map((img, index) => (
                    <div key={index} className="image-container-feedback">
                      <img
                        src={URL.createObjectURL(img.image)}
                        alt=""
                        className="img_addImage"
                      />
                      <div
                        className="delete_button"
                        onClick={() => handleDeleteImage(index)}
                      >
                        <IoIosCloseCircle className="icon_delete_button" />
                      </div>
                    </div>
                  ))}
                  {ImageFile.length < 8 && (
                    <label
                      class="custom-file-upload"
                      style={{
                        width: "80px",
                        height: "80px",
                        margin: "5px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <input
                        type="file"
                        onChange={(e) => {
                          handleFileChange(e);
                        }}
                        style={{ display: "none" }}
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="icon-addImage-feedback"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </label>
                  )}
                </div>
                {formErrors.ImageFile && (
                  <div className="text-danger">{formErrors.ImageFile}</div>
                )}
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default CreateProduct;
