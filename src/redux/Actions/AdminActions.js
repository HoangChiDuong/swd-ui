import axios from "axios";
import { CARD_ADMIN_FAIL, CARD_ADMIN_REQUEST, CARD_ADMIN_SUCCESS, GET_CONTRACT_FAIL, GET_CONTRACT_REQUEST, GET_CONTRACT_SUCCESS, GET_MONTH_FAIL, GET_MONTH_REQUEST, GET_MONTH_SUCCESS } from "../Constants/AdminContants";



export const getCardAdmin = () => async (dispatch) => {
    try {
        dispatch({ type: CARD_ADMIN_REQUEST });
        const accessToken = localStorage.getItem("jwtToken");
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        };
        const { data } = await axios.get(
            `https://localhost:7058/api/Admin/GetTotalMoney`,
            config
        );
        dispatch({ type: CARD_ADMIN_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            // dispatch(logout());
        }
        dispatch({
            type: CARD_ADMIN_FAIL,
            payload: message,
        });
    }
};

export const getMonthAdmin = () => async (dispatch) => {
    try {
        dispatch({ type: GET_MONTH_REQUEST });
        const accessToken = localStorage.getItem("jwtToken");
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        };
        const { data } = await axios.get(
            `https://localhost:7058/api/Admin/GetRervenueByYear`,
            config
        );
        dispatch({ type: GET_MONTH_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            // dispatch(logout());
        }
        dispatch({
            type: GET_MONTH_FAIL,
            payload: message,
        });
    }
};


export const getNewContract = () => async (dispatch) => {
    try {
        dispatch({ type: GET_CONTRACT_REQUEST });
        const accessToken = localStorage.getItem("jwtToken");
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        };
        const { data } = await axios.get(
            `https://localhost:7058/api/Admin/Get5Contract`,
            config
        );
        dispatch({ type: GET_CONTRACT_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            // dispatch(logout());
        }
        dispatch({
            type: GET_CONTRACT_FAIL,
            payload: message,
        });
    }
};