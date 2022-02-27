import {
  LOGIN_START,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
} from "./actionTypes";
import { getFormBody } from "../utils/helpers";
export function startLogin() {
  return {
    type: LOGIN_START,
  };
}
export function LoginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}
export function LoginFail(errorMessage) {
  return {
    type: LOGIN_FAIL,
    error: errorMessage,
  };
}
export function login(email, password) {
  return (dispatch) => {
    dispatch(startLogin());
    const url = "http://codeial.codingninjas.com:8000/api/v2/users/login";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        if (data.success) {
          localStorage.setItem("token", data.data.token);
          dispatch(LoginSuccess(data.data.user));
          return;
        }
        dispatch(LoginFail(data.message));
      });
  };
}
export function signup(name, email, password, confirmPassword) {
  return (dispatch) => {
    const url = "http://codeial.codingninjas.com:8000/api/v2/users/signup";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({
        email,
        password,
        confirm_password: confirmPassword,
        name,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log('data', data);
        if (data.success) {
          // do something
          localStorage.setItem("token", data.data.token);
          dispatch(signupSuccessful(data.data.user));
          return;
        }
        dispatch(signupFailed(data.message));
      });
  };
}
export function signupFailed(error) {
  return {
    type: SIGNUP_FAILED,
    error,
  };
}

export function signupSuccessful(user) {
  return {
    type: SIGNUP_SUCCESS,
    user,
  };
}
