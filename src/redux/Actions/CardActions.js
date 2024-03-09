import { ADD_CARD_FAIL, ADD_CARD_REQUEST, ADD_CARD_SUCCESS } from "../Constants/CardContants";

export const addCart = (userid, productId) => async (dispatch) => {
    try {
        dispatch({ type: ADD_CARD_REQUEST });

        // const {
        //     userLogin: { userInfo },
        // } = getState();
        const accessToken = localStorage.getItem('jwtToken');

        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        };

        await axios.post(`https://localhost:7058/api/Cart/AddToCart?userId=${userid}&productId=${productId}`, config);

        dispatch({ type: ADD_CARD_SUCCESS });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            // dispatch(logout());
        }
        dispatch({
            type: ADD_CARD_FAIL,
            payload: message,
        });
    }
};