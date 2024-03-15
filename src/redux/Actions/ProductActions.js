import axios from "axios";
import { DELETE_PRODUCT_FAIL, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, LIST_PRODUCT_FAIL, LIST_PRODUCT_REQUEST, LIST_PRODUCT_SUCCESS } from "../Constants/ProductConstants";





export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: LIST_PRODUCT_REQUEST });


        const accessToken = localStorage.getItem('jwtToken');
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        };

        const { data } = await axios.get(`https://localhost:7058/GetAllProduct`, config);


        dispatch({ type: LIST_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            // dispatch(logout());
        }
        dispatch({
            type: LIST_PRODUCT_FAIL,
            payload: message,
        });
    }
}



export const deleteProduct = (productId) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_PRODUCT_REQUEST });

        // const {
        //     userLogin: { userInfo },
        // } = getState();
        const accessToken = localStorage.getItem('jwtToken');

        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        };

        await axios.delete(`https://localhost:7058/Delete_Product?productId=${productId}`, config);

        dispatch({ type: DELETE_PRODUCT_SUCCESS });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            // dispatch(logout());
        }
        dispatch({
            type: DELETE_PRODUCT_FAIL,
            payload: message,
        });
    }
};

