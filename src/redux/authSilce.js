import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: "auth",
    initialState: {
        login: {
            currentUser: {
                Id: "",
                Email: "",
                UserName: "",
                Role: "",
                role: "",
                iss: "",

            },
            isFetching: false,
            error: false
        },
        register: {
            isFetching: false,
            error: false,
            success: false,
        },
        logout: {
            isFetching: false,
            error: false,
        },

    },
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.login.isFetching = false;
            console.log(action.payload)
            state.login.currentUser = action.payload;
            state.login.error = false;
        },
        loginFailed: (state) => {
            state.login.isFetching = false;
            state.login.error = true;
        },

        registerStart: (state) => {
            state.register.isFetching = true;
        },
        registerSuccess: (state) => {
            state.register.isFetching = false;
            state.register.success = true;
            state.register.error = false;

        },
        registerFailed: (state) => {
            state.register.isFetching = false;
            state.register.error = false;
            state.register.success = false;
        },

        logoutStart: (state) => {
            state.logout.isFetching = true;
        },
        logoutSuccess: (state) => {
            state.logout.isFetching = false;
            state.login.currentUser = {
                Id: "",
                Email: "",
                UserName: "",
                Role: "",
                role: "",
                iss: "",

            };
            state.logout.error = false;
        },
        logoutFailed: (state) => {
            state.logout.isFetching = false;
            state.logout.error = true;
        },


    }

})

export const {
    loginFailed,
    loginStart,
    loginSuccess,
    registerStart,
    registerFailed,
    registerSuccess,
    logoutFailed,
    logoutSuccess,
    logoutStart,

} = authSlice.actions;

export default authSlice.reducer;