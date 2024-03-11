import { GET_ALL_REQUEST_FAIL, GET_ALL_REQUEST_REQUEST, GET_ALL_REQUEST_RESET, GET_ALL_REQUEST_SUCCESS } from "../Constants/RequestContants";

export const RequestListReducer = (state = { listRequest: [] }, action) => {
    switch (action.type) {
        case GET_ALL_REQUEST_REQUEST:
            return { loading: true };
        case GET_ALL_REQUEST_SUCCESS:
            return { loading: false, listReq: action.payload };
        case GET_ALL_REQUEST_FAIL:
            return { loading: false, error: action.payload };
        case GET_ALL_REQUEST_RESET:
            return { listRequest: [] };
        default:
            return state;
    }
};
