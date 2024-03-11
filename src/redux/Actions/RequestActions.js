import axios from "axios";
import { GET_ALL_REQUEST_FAIL, GET_ALL_REQUEST_REQUEST, GET_ALL_REQUEST_SUCCESS } from "../Constants/RequestContants";


export const listRequest = () => async (dispatch) => {

    try {
        dispatch({ type: GET_ALL_REQUEST_REQUEST });


        const accessToken = localStorage.getItem('jwtToken');

        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        };

        const { data } = await axios.get(`https://localhost:7058/api/Request/GetAllRequest`, config);

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
