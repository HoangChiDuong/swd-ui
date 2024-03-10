import { ADD_CARD_FAIL, ADD_CARD_REQUEST, ADD_CARD_RESET, ADD_CARD_SUCCESS, DELETE_CARD_DETAIL_FAIL, DELETE_CARD_DETAIL_REQUEST, DELETE_CARD_DETAIL_RESET, DELETE_CARD_DETAIL_SUCCESS, GET_CARD_DETAIL_FAIL, GET_CARD_DETAIL_REQUEST, GET_CARD_DETAIL_RESET, GET_CARD_DETAIL_SUCCESS } from "../Constants/CardContants";

export const addCardReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_CARD_REQUEST:
            return { loading: true };
        case ADD_CARD_SUCCESS:
            return { loading: false, success: true };
        case ADD_CARD_FAIL:
            return { loading: false, error: action.payload };
        case ADD_CARD_RESET:
            return {};
        default:
            return state;
    }
};

export const getCardDeatilReducer = (state = { card: [] }, action) => {
    switch (action.type) {
        case GET_CARD_DETAIL_REQUEST:
            return { loading: true };
        case GET_CARD_DETAIL_SUCCESS:
            return { loading: false, card: action.payload };
        case GET_CARD_DETAIL_FAIL:
            return { loading: false, error: action.payload };
        case GET_CARD_DETAIL_RESET:
            return {};
        default:
            return state;
    }
};


export const deleteCardReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_CARD_DETAIL_REQUEST:
            return { loading: true };
        case DELETE_CARD_DETAIL_SUCCESS:
            return { loading: false, success: true };
        case DELETE_CARD_DETAIL_FAIL:
            return { loading: false, error: action.payload };
        case DELETE_CARD_DETAIL_RESET:
            return {};
        default:
            return state;
    }
};
