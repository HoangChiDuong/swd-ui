import "~/components/PopupConfirm/PopupConfirm.scss";
import { IoCheckmarkCircle } from "react-icons/io5";
import { IoIosCloudDone } from "react-icons/io";
const PopupConfirm = ({ setIsLoading, content,title }) => {
  return(
    <div className="popup-modal">
      <div className="popup_content_view"> 
        <div className="popup_item">
          <IoCheckmarkCircle  className="popup_icon_success"/>
        </div>
        <div className="popup_item">
         <div className="popup_content">{content}</div>
        </div>
        <div className="popup_item_button">
         <button className="button_Cancel" onClick={() => setIsLoading(false)}>OK</button>
        </div>
      </div>
    </div>
   
  )
};
export default PopupConfirm;
