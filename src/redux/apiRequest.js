import axios from "axios";
import { loginFailed, loginStart, loginSuccess, logoutFailed, logoutStart, logoutSuccess } from "./authSilce";
import jwt_decode from 'jwt-decode';

export const loginUser = async (user, dispatch, navigate, setShowLogin) => {
    dispatch(loginStart());

    try {
        const res = await axios.post("https://localhost:7058/api/users/login", user);


        if (res.status === 200) {
            if (res.data.message === "Email Or Password Incorrect :(") {

            } else if (res.data.message === "Success") {
                const token = jwt_decode(res.data.data);
                console.log(token);
                dispatch(loginSuccess(token));

                saveTokenToLocalStorage(res.data.data);
                console.log("sdsads");
                if (token.Role === 'AD') {
                    navigate("/admin/dashboard");
                } else if (token.Role === "ST") {
                    navigate("/staff/dashboard");
                } else {
                    setShowLogin(false);//navigate("/");
                }
            } else {
                // Handle other cases
            }
        }

    } catch (err) {
        console.log(err);
        dispatch(loginFailed());
        // Handle error
    }
};

function saveTokenToLocalStorage(token) {
    localStorage.setItem('jwtToken', token);
}


export const logOut = async (dispatch, navigate) => {
    dispatch(logoutStart());
    try {
        const accessToken = localStorage.getItem('jwtToken');

        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        };
        await axios.post("https://localhost:7058/api/users/logout", {}, config
        );
        dispatch(logoutSuccess());
        localStorage.removeItem('jwtToken');
        navigate("/home");
    } catch (err) {
        console.log("err")
        dispatch(logoutFailed());

    }

}
