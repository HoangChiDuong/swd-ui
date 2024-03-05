import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_RESET, LOGIN_SUCCESS } from "../Constants/UserConstants";



export const userListReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { loading: true };
        case LOGIN_SUCCESS:
            return { loading: false, users: action.payload };
        case LOGIN_FAIL:
            return { loading: false, error: action.payload };
        case LOGIN_RESET:
            return { users: [] };
        default:
            return state;
    }
};