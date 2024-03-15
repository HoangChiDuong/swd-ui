import axios from "axios";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { FcCheckmark, FcCancel } from "react-icons/fc";

const ListStaff = () => {
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [data, setData] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFileName, setImageFileName] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Nhân Viên");
  const [phone, setPhone] = useState("");
  const [nameHR, setNameHR] = useState();
  const [hrList, setHRList] = useState([]);
  const [password, setPassword] = useState("");

  useEffect(() => {
    axios
      .get(`https://localhost:7058/api/Admin/GetAllStaff`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [showAddEmployee]);

  useEffect(() => {
    axios
      .get(`https://localhost:7058/api/Admin/GetAllHR`)
      .then((response) => {
        console.log(response.data);
        setHRList(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  const generateStatus = (row, column) => {
    const statusIcon = row.isDelete ? <FcCancel /> : <FcCheckmark />;
    return <div style={{ textAlign: "center" }}>{statusIcon}</div>;
  };

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changePhone = (e) => {
    setPhone(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFileName(file);

    // Display image preview
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
    console.log(nameHR);
  };

  const handleHRSelection = (e) => {
    setNameHR(parseInt(e.target.value));
  };

  const handleFormSubmit = (e) => {
    const formData = new FormData();
    formData.append("UserName", name);
    formData.append("Email", email);
    formData.append("Phone", phone);
    formData.append("Position", role);
    formData.append("ManageId", nameHR);
    formData.append("Password", password);

    if (imageFileName instanceof File) {
      formData.append("Image", imageFileName);
    }

    e.preventDefault();
    console.log(nameHR);

    axios
      .put(`https://localhost:7058/api/Admin/AddStaff`, formData)
      .then((response) => {
        console.log(response.data);
        handleCloseFormAddStaff();
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  const handleCloseFormAddStaff = () => {
    setImagePreview(null);
    setShowAddEmployee(false);
    setName("");
    setEmail("");
    setPhone("");
    setRole("Nhân Viên");
    setNameHR(null);
    setPassword("");
    setImageFileName("");
    const input = document.getElementById("image");
    // Reset input file value
    if (input) input.value = "";
  };

  const columns = [
    {
      name: "STT",
      selector: (row) => row.index + 1,
      sortable: false,
    },
    {
      name: "Tên",
      selector: (row) => row.userName,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: false,
    },
    {
      name: "SĐT",
      selector: (row) => row.phone,
      sortable: false,
    },
    {
      name: "Trạng thái",
      selector: generateStatus,
      sortable: false,
    },
  ];

  return (
    <div
      className="main_table"
      style={{ position: "relative", marginTop: "50px" }}
    >
      <button
        style={{
          backgroundColor: "#475be8",
          color: "white",
          padding: "5px 10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          width: "150px",
          position: "absolute",
          top: "10px",
          right: "10px",
          zIndex: "1",
          textAlign: "center",
        }}
        onClick={() => setShowAddEmployee(true)}
      >
        Thêm nhân viên
      </button>
      <div
        className="form-container"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          height: "500px",
          background: "#fff",
          zIndex: 999,
          display: showAddEmployee ? "block" : "none",
          padding: "10px 50px 50px 50px",
          borderRadius: "5px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h2>Thêm nhân viên</h2>
        <form
          onSubmit={handleFormSubmit}
          style={{ display: "flex", marginTop: "50px" }}
        >
          <div style={{ flex: 1, marginRight: "20px" }}>
            <div>
              <label htmlFor="name">Tên:</label>
              <br />
              <input
                type="text"
                id="name"
                style={{
                  padding: "5px",
                  margin: "10px",
                  borderRadius: "5px",
                  width: "400px",
                }}
                name="name"
                value={name}
                onChange={changeName}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <br />
              <input
                style={{
                  padding: "5px",
                  margin: "10px",
                  borderRadius: "5px",
                  width: "400px",
                }}
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={changeEmail}
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Số điện thoại:</label>
              <br />
              <input
                style={{
                  padding: "5px",
                  margin: "10px",
                  borderRadius: "5px",
                  width: "400px",
                }}
                type="text"
                id="phone"
                name="phone"
                value={phone}
                onChange={changePhone}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Mật khẩu:</label>
              <br />
              <input
                style={{
                  padding: "5px",
                  margin: "10px",
                  borderRadius: "5px",
                  width: "400px",
                }}
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={changePassword}
                required
              />
            </div>

            <div>
              <label htmlFor="role">HR:</label>
              <br />
              <select
                id="role"
                name="role"
                onChange={(e) => handleHRSelection(e)}
                required
                style={{
                  padding: "5px",
                  margin: "10px",
                  borderRadius: "5px",
                  width: "400px",
                }}
              >
                <option disabled>Chọn HR</option>
                {hrList.map((hr) => (
                  <option key={hr.id} value={hr.id}>
                    {hr.userName}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ marginTop: "50px" }}>
              <button Click={handleFormSubmit} type="submit">
                Gửi
              </button>
              <button onClick={handleCloseFormAddStaff}>Đóng</button>
            </div>
          </div>
          <div style={{ flex: 1, marginLeft: "100px" }}>
            <div>
              <label htmlFor="image">Ảnh đại diện:</label>
              <br />
            </div>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                style={{
                  width: "200px", // Kích thước cố định cho ảnh
                  height: "200px", // Kích thước cố định cho ảnh
                  objectFit: "cover", // Đảm bảo ảnh không bị biến dạng
                  borderRadius: "50%",
                }}
              />
            )}
            <input
              style={{
                padding: "5px",
                margin: "10px",
                borderRadius: "5px",
                width: "400px",
              }}
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              accept="image/*"
              required
            />
          </div>
        </form>
      </div>
      <DataTable
        title="Danh sách nhân viên"
        className="table__admin"
        columns={columns}
        data={data.map((item, index) => ({ ...item, index }))}
        responsive={true}
        noDataComponent="No data available"
        fixedHeader
      />
    </div>
  );
};

export default ListStaff;
