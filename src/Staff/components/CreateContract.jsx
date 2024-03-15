import { useEffect, useState } from "react";
import "../styles/CreateContract.scss";
import axios from "axios";
import { IoClose } from "react-icons/io5";

const CreateContract = ({ setShow, tasks, setLoadApi }) => {
  const [priceCon, setPriceCon] = useState(null);
  const [pricePro, setPricePro] = useState(null);
  const [contract, setContract] = useState(null);
  const [contractUrl, setContractUrl] = useState(null);
  const [showCon, setShowCon] = useState(false);

  useEffect(() => {
    if (contractUrl != null) {
      const lastElement = document.querySelector(
        ".create_con_item .view_contract"
      );
      if (lastElement) {
        lastElement.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      }
    }
  }, [showCon]);
  const changePricePro = (e) => {
    setPricePro(e.target.value);
  };
  const changePriceCon = (e) => {
    setPriceCon(e.target.value);
  };
  const handleViewContract = () => {
    setShowCon(true);
  };
  const handleDeleteContract = () => {
    setContractUrl(null);
    setContract(null);
    setShowCon(false);
  };
  const handleContractChange = (e) => {
    const selectedContract = e.target.files[0];
    setContract(selectedContract);

    const contractUrl = URL.createObjectURL(selectedContract);
    setContractUrl(contractUrl);
  };

  const handleCApi = async () => {
    const formData = new FormData();
    formData.append("RequestId", tasks.requestId);
    formData.append("taskId", tasks.taskId);
    formData.append("FinalPrice", pricePro);
    formData.append("ConPrice", priceCon);
    if (contract instanceof File) {
      formData.append("ContractFile", contract);
    }
    formData.append("Status", "1");
    try {
      const data = {
        RequestId: tasks.requestId,
        taskId: tasks.taskId,
        FinalPrice: pricePro,
        ConPrice: priceCon,
        ContractFile: contract,
        Status: "1",
      };
      console.log(data, formData);
      const response = await axios.post(
        "https://localhost:7058/api/Task/CreateContractStaff",
        formData
      );
      if (response.data != null) {
        setLoadApi(true);
        setShow(false);
      }
    } catch (error) {
      console.error("Error while making payment:", error);
      // Xử lý lỗi nếu cần
    }
  };
  return (
    <div className="confirmation-modal">
      <div className="create_con">
        <div className="close_contract">
          <div
            className="quote_view_close"
            onClick={() => {
              setShow(false);
            }}
          >
            <IoClose className="close_click" />
          </div>
        </div>
        <div className="create_con_status">Tạo Hợp Đồng</div>
        <div className="create_con_item">
          <div className="create_con_Price">
            <div className="create_con_iprice">
              <div className="create_con_priceTx">Giá Vật Tư</div>
              <input
                type="number"
                value={pricePro}
                className="create_con_PriceIn"
                placeholder="Nhập giá vật tư"
                onChange={(e) => {
                  changePricePro(e);
                }}
              />
            </div>
            <div className="create_con_iprice">
              <div className="create_con_priceTx">Giá Thi Công</div>
              <input
                type="number"
                value={priceCon}
                className="create_con_PriceIn"
                placeholder="Nhập giá thi công"
                onChange={(e) => {
                  changePriceCon(e);
                }}
              />
            </div>
          </div>

          <div className="create_con_Con">
            {contract === null && (
              <div className="create_con_Con">
                <label htmlFor="contractFile" className="create_con_btn">
                  Thêm file hợp đồng
                </label>
                <input
                  type="file"
                  id="contractFile"
                  accept=".pdf"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    handleContractChange(e);
                  }}
                />
              </div>
            )}
            {contract !== null && showCon !== true && (
              <div className="create_con_Con">
                <button
                  onClick={handleViewContract}
                  className="create_con_btn2"
                >
                  Xem lại file hợp đồng
                </button>
              </div>
            )}
            {showCon !== false && (
              <div className="create_con_Con">
                <button
                  onClick={handleDeleteContract}
                  className="create_con_btn3"
                >
                  Xóa file hợp đồng
                </button>
              </div>
            )}
          </div>
          {showCon === true && (
            <div
              className="view_contract"
              style={{ width: "100%", height: "500px" }}
            >
              <embed
                src={contractUrl}
                type="application/pdf"
                width="100%"
                height="500px"
              />
            </div>
          )}
        </div>
        <div className="create_con_Submit">
          <button onClick={handleCApi} className="btn_Push">
            Hoàn Tất
          </button>
        </div>
      </div>
    </div>
  );
};
export default CreateContract;
