import axios from "axios";
import {
  ADD_CARD_FAIL,
  ADD_CARD_REQUEST,
  ADD_CARD_SUCCESS,
  DELETE_CARD_DETAIL_FAIL,
  DELETE_CARD_DETAIL_REQUEST,
  DELETE_CARD_DETAIL_SUCCESS,
  GET_CARD_DETAIL_FAIL,
  GET_CARD_DETAIL_REQUEST,
  GET_CARD_DETAIL_SUCCESS,
} from "../Constants/CardContants";

export const addCart = (userid) => async (dispatch) => {
  try {
    dispatch({ type: ADD_CARD_REQUEST });

    await axios.get(`https://localhost:7058/api/Cart/LoadAdd`);

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

export const getCard = (userid) => async (dispatch) => {
  try {
    dispatch({ type: GET_CARD_DETAIL_REQUEST });

    // const {
    //     userLogin: { userInfo },
    // } = getState();
    const accessToken = localStorage.getItem("jwtToken");

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    if (userid !== null) {
      const {data} = await axios.get(
        `https://localhost:7058/api/Cart/GetCartDetails?userId=${userid}`,
        config
      );
      console.log(data);
      dispatch({ type: GET_CARD_DETAIL_SUCCESS, payload: data });
    }
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      // dispatch(logout());
    }
    dispatch({
      type: GET_CARD_DETAIL_FAIL,
      payload: message,
    });
  }
};

export const deleteCart = (productId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_CARD_DETAIL_REQUEST });

    // const {
    //     userLogin: { userInfo },
    // } = getState();
    const accessToken = localStorage.getItem("jwtToken");

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    await axios.delete(
      `https://localhost:7058/api/Cart/DeleteCartDetail?cartDetailId=${productId}`,
      config
    );

    dispatch({ type: DELETE_CARD_DETAIL_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      // dispatch(logout());
    }
    dispatch({
      type: DELETE_CARD_DETAIL_FAIL,
      payload: message,
    });
  }
};
