import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "~/components/CreateQuote/CreateQuote.scss";
import SelectAddress from "../SelectAddress";
import axios from "axios";
import LoadingFive from "../Loading";
const CreateQuote = ({
  setShowAddNewAddress,
  productId,
  setIsLoading,
  setContent,
}) => {
  const userAuth = useSelector((state) => state.auth.login.currentUser);
  const accessToken = localStorage.getItem("jwtToken");
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [City, setCity] = useState(null);
  const [District, setDistrict] = useState(null);
  const [Ward, setWard] = useState(null);
  const [addressDetails, setAddressDetails] = useState();
  const [Province, setProvince] = useState([]);
  const [DistrictData, setDistrictData] = useState([]);
  const [WardData, setWardData] = useState([]);
  const [IdCity, setidCity] = useState();
  const [IdDistrict, setidDistrict] = useState();
  const [Districtag, setDistrictag] = useState(1);
  const [Wardag, setWardag] = useState(1);
  const [MsFullName, setMsFullName] = useState(false);
  const [MsPhone, setMsPhone] = useState(false);
  const [MsAddress, setMsAddress] = useState(false);
  const [MsAddressDetails, setMsAddressDetails] = useState(false);
  const [MsAllNull, setMsAllNull] = useState(false);
  const [showLoad, setShowLoad] = useState(false);

  useEffect(() => {
    const apiProvince = () => {
      axios.get("https://vapi.vnappmob.com/api/province").then((response) => {
        const result = response.data.results;
        setProvince(result);
      });
    };
    if (City === null) {
      apiProvince();
    }
  }, [City]);

  useEffect(() => {
    const apiDistrict = () => {
      axios
        .get(`https://vapi.vnappmob.com/api/province/district/${IdCity}`)
        .then((response) => {
          const result = response.data.results;
          setDistrictData(result);
        });
    };
    if (Districtag === 2) {
      apiDistrict();
      setDistrictag(1);
    }
  }, [Districtag]);

  useEffect(() => {
    const apiWard = () => {
      axios
        .get(`https://vapi.vnappmob.com/api/province/ward/${IdDistrict}`)
        .then((response) => {
          const result = response.data.results;
          setWardData(result);
        });
    };
    if (Wardag === 2) {
      apiWard();
      setWardag(1);
    }
  }, [Wardag]);

  const handleInfo = (e) => {
    if (e.target.id === "myInputFullName") {
      setMsFullName(false);
      setFullName(e.target.value);
    } else if (e.target.id === "myInputPhone") {
      setPhone(e.target.value);
      setMsPhone(false);
    }
    if (e.target.id === "myInputDate") {
      setDate(e.target.value);
      setMsPhone(false);
    } else if (e.target.id === "myInputEmail") {
      setEmail(e.target.value);
      setMsPhone(false);
    }
  };
  const handleAddDetail = (value) => {
    setAddressDetails(value);
    setMsAddressDetails(false);
  };
  const handleCancelAdd = () => {
    setShowAddNewAddress(false);
    //setShowNotification(true);
  };
  const CreateRequestModel = {
    Address: `${addressDetails}/ ${Ward}/ ${District}/${City}`,
    Email: email,
    ProductId: productId,
    Status: "1",
    UserId: userAuth.Id,
    Phone: phone,
    UserName: fullName,
    Date: date.toString(),
  };
  const handleSubmit = () => {
    switch (true) {
      case !fullName || /\d/.test(fullName):
        setMsFullName(true);
        break;
      case !/^\d+$/.test(phone) || phone.length !== 10:
        setMsPhone(true);
        break;
      case !(City, District, Ward):
        setMsAddress(true);
        break;
      case !addressDetails:
        setMsAddressDetails(true);
        break;
      default:
        setShowLoad(true)
        axios
          .post(
            "https://localhost:7058/api/Request/CreateRequest",
            CreateRequestModel,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          )
          .then((response) => {
            if (response.data == "Success") {
              setContent("Bạn Đã Gửi Yêu Cầu Thành Công");
              setShowAddNewAddress(false);
              setIsLoading(true);
            }
          });
        break;
    }
  };
  return (
    <div className="confirmation-modal">
      {showLoad === true &&<LoadingFive/>}
      <div className="log-add-newAddress">
        <div className="log-add-newAddress-tiltel"> Thông Tin</div>
        <div className="add-FullName-PhoneNumber">
          <div className="FullName-logAdd">
            <input
              type="text"
              className="InputFullName"
              id="myInputFullName"
              value={fullName}
              onChange={handleInfo}
              required
            />
            <label htmlFor="myInputFullName">Họ và Tên</label>
            {MsFullName && (
              <div id="massage-er-input">
                Bạn vui lòng điền đầy đủ Họ và Tên !
              </div>
            )}
          </div>
          <div className="FullName-logAdd">
            <input
              type="text"
              className="InputFullName"
              id="myInputPhone"
              value={phone}
              onChange={handleInfo}
              required
            />
            <label htmlFor="myInputPhone">Số Điện Thoại</label>
            {MsPhone && (
              <div id="massage-er-input">Bạn vui lòng điền số Điện Thoại !</div>
            )}
          </div>
        </div>
        <div className="add-FullName-PhoneNumber">
          <div className="FullName-logAdd">
            <input
              type="text"
              className="InputFullName"
              id="myInputEmail"
              value={email}
              onChange={handleInfo}
              required
            />
            <label htmlFor="myInputEmail">Email</label>
            {MsFullName && (
              <div id="massage-er-input">Bạn vui lòng điền Email!</div>
            )}
          </div>
        </div>
        <div className="Address-log-add ">
          <SelectAddress
            label="Tỉnh/Thành Phố"
            setCity={setCity}
            setidCity={setidCity}
            Province={Province}
            setDistrictag={setDistrictag}
            setWardag={setWardag}
            setDistrict={setDistrict}
            setidDistrict={setidDistrict}
            setMsAddress={setMsAddress}
          />
          <SelectAddress
            label="Huyện/Quận"
            setDistrict={setDistrict}
            setidDistrict={setidDistrict}
            DistrictData={DistrictData}
            setWardag={setWardag}
            setWard={setWard}
            setMsAddress={setMsAddress}
          />
          <SelectAddress
            label="Xã/Phường"
            setWard={setWard}
            WardData={WardData}
            setMsAddress={setMsAddress}
          />
        </div>
        {MsAddress && (
          <div id="massage-er-input">Hãy chọn Địa Chỉ của bạn!</div>
        )}
        <div className="addDetail-logAdd">
          <input
            className="InputFullAdd"
            id="myInputAdd"
            type="text"
            value={addressDetails}
            onChange={(e) => handleAddDetail(e.target.value)}
            required
          />
          <label className="myInputAdd_L" htmlFor="myInputAdd">
            Số Nhà và Đường
          </label>
        </div>
        {MsAddressDetails && (
          <div id="massage-er-input">Bạn vui lòng điền số Nhà và Đường ! </div>
        )}
        <div className="height-log">
          <div className="date_quote">Ngày hẹn khảo sát</div>
          <div className="FullName-logAdd">
            <input
              type="date"
              className="InputFullName"
              id="myInputDate"
              value={date}
              onChange={handleInfo}
              required
            />
            {MsFullName && (
              <div id="massage-er-input">Bạn vui lòng chọn ngày hẹn nhé !</div>
            )}
          </div>
        </div>
        {MsAllNull && <h5>Bạn Chưa cung cấp thông tin của mình !</h5>}

        <div className="cf-ad-bt-bottom">
          <button className="button_Cancel" onClick={handleCancelAdd}>
            Hủy
          </button>
          <button className="button_Submit" onClick={handleSubmit}>
            Gửi
          </button>
        </div>
      </div>
    </div>
  );
};
export default CreateQuote;
