import { ADD_CARD_FAIL, ADD_CARD_REQUEST, ADD_CARD_RESET, ADD_CARD_SUCCESS } from "../Constants/CardContants";

export const addCardReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_CARD_REQUEST:
            return { loading: true };
        case ADD_CARD_SUCCESS:
            return { loading: false, success: true, card: action.payload };
        case ADD_CARD_FAIL:
            return { loading: false, error: action.payload };
        case ADD_CARD_RESET:
            return {};
        default:
            return state;
    }
};