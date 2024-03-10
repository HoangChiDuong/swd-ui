import axios from "axios";
import { LIST_STAFF_FAIL, LIST_STAFF_REQUEST, LIST_STAFF_SUCCESS, USER_INFO_FAIL, USER_INFO_REQUEST, USER_INFO_SUCCESS } from "../Constants/UserConstants";



export const listStaff = (userId) => async (dispatch) => {
    try {
        dispatch({ type: LIST_STAFF_REQUEST });
        console.log(userId)

        const accessToken = localStorage.getItem('jwtToken');

        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        };

        const { data } = await axios.get(`https://localhost:7058/api/User/GetAllStaffById/2`, config);

        dispatch({ type: LIST_STAFF_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            // dispatch(logout());
        }
        dispatch({
            type: LIST_STAFF_FAIL,
            payload: message,
        });
    }
};

export const infoUser = (userId) => async (dispatch) => {
    try {
        dispatch({ type: USER_INFO_REQUEST });
        console.log(userId)

        const accessToken = localStorage.getItem('jwtToken');

        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        };

        const { data } = await axios.get(`https://localhost:7058/api/User/UserInfo?userId=${userId}`, config);

        dispatch({ type: USER_INFO_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            // dispatch(logout());
        }
        dispatch({
            type: USER_INFO_FAIL,
            payload: message,
        });
    }
};