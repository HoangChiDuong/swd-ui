import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../styles/Task.css";
import CreateContract from "./CreateContract";
const ViewTask = () => {
  const [show, setShow] = useState(false);
  const [tasks, setTask] = useState();
  const [loadApi, setLoadApi] = useState(false);
  const [tasksData, setTaskData] = useState();
  const useAuth = useSelector((state) => state.auth.login.currentUser.Id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7058/api/Task/AllTaskByStaffId?staffId=${useAuth}`
        );
        console.log(response.data);
        setTask(response.data); 
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchData();
  }, [loadApi]);
  const truncateAddress = (address, maxLength) => {
    if (address.length <= maxLength) {
      return address;
    } else {
      return address.slice(0, maxLength) + "...";
    }
  };
  const handleShow = (task) => {
    setTaskData(task)
    setShow(true);
  };
  return (
    <div className="task_view">
      {show === true && (<CreateContract setShow={setShow} tasks={tasksData} setLoadApi={setLoadApi}/>)}

      <div className="task_item">
        <div className="task_index">
          <div className="task_stt">Mã Công Việc</div>
          <div className="task_date">Lịch Hẹn </div>
          <div className="task_nameUser">Tên </div>
          <div className="task_email">Email</div>
          <div className="task_phone">Số điện thoại </div>
          <div className="task_address">Địa Chỉ</div>
          <div className="task_action">Thao Tác</div>
        </div>
        {tasks?.map((task, index) => (
          <div className="task_index" key={index}>
            <div className="task_stt">T#{task.taskId}</div>
            <div className="task_date">{task.date} </div>
            <div className="task_nameUser">{task.userName} </div>
            <div className="task_email">{truncateAddress(task.email, 14)} </div>
            <div className="task_phone">{task.phone} </div>
            <div className="task_address">
              {truncateAddress(task.address, 38)}
            </div>
            <div className="task_action">
              {task.status === "1" && (
                <button onClick={()=>{handleShow(task)}} className="ac_tionClick1">
                  Tạo hợp đồng
                </button>
              )}
              {task.status === "2" && (
                <div className="ac_tionClick"> Hoàn Thành</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ViewTask;
