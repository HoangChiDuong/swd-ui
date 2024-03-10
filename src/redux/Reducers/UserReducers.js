import { LIST_STAFF_FAIL, LIST_STAFF_REQUEST, LIST_STAFF_RESET, LIST_STAFF_SUCCESS, USER_INFO_FAIL, USER_INFO_REQUEST, USER_INFO_RESET, USER_INFO_SUCCESS } from "../Constants/UserConstants";




export const staffListReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case LIST_STAFF_REQUEST:
            return { loading: true };
        case LIST_STAFF_SUCCESS:
            return { loading: false, users: action.payload };
        case LIST_STAFF_FAIL:
            return { loading: false, error: action.payload };
        case LIST_STAFF_RESET:
            return { users: [] };
        default:
            return state;
    }
};


export const userInfoReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_INFO_REQUEST:
            return { loading: true };
        case USER_INFO_SUCCESS:
            return { loading: false, success: true, user: action.payload };
        case USER_INFO_FAIL:
            return { loading: false, error: action.payload };
        case USER_INFO_RESET:
            return { product: {} };
        default:
            return state;
    }
};