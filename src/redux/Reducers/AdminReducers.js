import { CARD_ADMIN_FAIL, CARD_ADMIN_REQUEST, CARD_ADMIN_RESET, CARD_ADMIN_SUCCESS, GET_CONTRACT_FAIL, GET_CONTRACT_REQUEST, GET_CONTRACT_RESET, GET_CONTRACT_SUCCESS, GET_MONTH_FAIL, GET_MONTH_REQUEST, GET_MONTH_RESET, GET_MONTH_SUCCESS } from "../Constants/AdminContants";

export const cardAdminReducer = (state = { card: {} }, action) => {
    switch (action.type) {
        case CARD_ADMIN_REQUEST:
            return { loading: true };
        case CARD_ADMIN_SUCCESS:
            return { loading: false, cardDetail: action.payload };
        case CARD_ADMIN_FAIL:
            return { loading: false, error: action.payload };
        case CARD_ADMIN_RESET:
            return { listProduct: [] };
        default:
            return state;
    }
};

export const getMonthReducer = (state = { month: [] }, action) => {
    switch (action.type) {
        case GET_MONTH_REQUEST:
            return { loading: true };
        case GET_MONTH_SUCCESS:
            return { loading: false, monthDetail: action.payload };
        case GET_MONTH_FAIL:
            return { loading: false, error: action.payload };
        case GET_MONTH_RESET:
            return { listProduct: [] };
        default:
            return state;
    }
};


export const getContractReducer = (state = { contract: [] }, action) => {
    switch (action.type) {
        case GET_CONTRACT_REQUEST:
            return { loading: true };
        case GET_CONTRACT_SUCCESS:
            return { loading: false, contractDetail: action.payload };
        case GET_CONTRACT_FAIL:
            return { loading: false, error: action.payload };
        case GET_CONTRACT_RESET:
            return { listProduct: [] };
        default:
            return state;
    }
};