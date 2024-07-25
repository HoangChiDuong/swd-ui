import axios from "axios";
import { CONFIRM_REQUEST_FAIL, CONFIRM_REQUEST_REQUEST, CONFIRM_REQUEST_SUCCESS, GET_ALL_REQUEST_FAIL, GET_ALL_REQUEST_REQUEST, GET_ALL_REQUEST_SUCCESS } from "../Constants/RequestContants";


export const listRequest = () => async (dispatch) => {
    try {

        dispatch({ type: GET_ALL_REQUEST_REQUEST });


        const accessToken = localStorage.getItem('jwtToken');

        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        };

        const { data } = await axios.get(`https://localhost:7058/api/requests`, config);

        dispatch({ type: GET_ALL_REQUEST_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            // dispatch(logout());
        }
        dispatch({
            type: GET_ALL_REQUEST_FAIL,
            payload: message,
        });
    }
};

export const confirmRequest = (requestId, staffId) => async (dispatch) => {

    try {
        dispatch({ type: CONFIRM_REQUEST_REQUEST });
        const accessToken = localStorage.getItem('jwtToken');
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        };

        await axios.post(`https://localhost:7058/api/requests/confirm-appointment?requestId=${requestId}&staffId=${staffId}`, config);

        dispatch({ type: CONFIRM_REQUEST_SUCCESS });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            // dispatch(logout());
        }
        dispatch({
            type: CONFIRM_REQUEST_FAIL,
            payload: message,
        });
    }
};

