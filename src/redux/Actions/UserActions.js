// import axios from "axios";
// import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../Constants/UserConstants";

// import { Navigate } from "react-router-dom";


// export const loginUser = () => async (newUser, dispatch) => {
//     try {
//         dispatch({ type: LOGIN_REQUEST });
//         console.log(newUser)
//         const res = await axios.post("https://localhost:7058/api/User/login", newUser);

//         if (res.status = 200) {
//             if (res.data.message === "Email Or Password Incorrect :(") {
//                 // toast.error(res.data.message, {
//                 //     autoClose: 1000,
//                 // });
//             } else if (res.data.message === "Login Success") {
//                 const token = res.data.data.accessToken;
//                 dispatch({ type: LOGIN_SUCCESS, payload: token });
//                 localStorage.setItem('jwtToken', res.data.data.accessToken);


//                 if (token.role === 'AD') {
//                     Navigate("/dashboard");
//                 } else {
//                     Navigate(-1);
//                 }
//             }
//             else {
//                 // toast.error(res.data.message, {
//                 //     autoClose: 1500,
//                 // })
//             }
//         }
//     }

//     catch (error) {
//         const message =
//             error.response && error.response.data.message
//                 ? error.response.data.message
//                 : error.message;
//         if (message === "Not authorized, token failed") {
//             // dispatch(logout());
//         }
//         dispatch({
//             type: LOGIN_FAIL,
//             payload: message,
//         });
//     }
// };
