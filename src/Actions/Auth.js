import {
  SIGNUP_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
  VERIFY_FAILURE
} from "../Constants";
import { getFeedback } from "./Feedback";
import { getCookie, setCookie, removeCookie } from "../Utils/Cookies";
function signupRequest() {
  return {
    type: SIGNUP_REQUEST
  };
}

function signupSuccess(user) {
  return {
    type: SIGNUP_SUCCESS,
    user
  };
}

function signupFailure(error) {
  return {
    type: SIGNUP_FAILURE,
    error
  };
}

function loginRequest() {
  return {
    type: LOGIN_REQUEST
  };
}

export const signupUser = signupForm => {
  return dispatch =>
    new Promise(function(resolve, reject) {
      dispatch(signupRequest());
      fetch(process.env.API_URL + "auth/user/signup", {
        method: "post",
        body: JSON.stringify(signupForm)
      })
        .then(resp => resp.json())
        .then(user => {
          dispatch(signupSuccess(user));
          resolve(user);
        })
        .catch(err => {
          dispatch(signupFailure(err));
          reject(err);
        });
    });
};

function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user
  };
}

function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error
  };
}

export const loginUser = (email, password) => {
  return dispatch =>
    new Promise(function(resolve, reject) {
      dispatch(loginRequest());
      fetch(process.env.API_URL + "auth/user/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({
          email,
          password
        })
      })
        .then(resp => {
          return resp.json();
        })
        .then(user => {
          setCookie("token", user.Token, user.ExpiresAt);
          dispatch(loginSuccess(user));
          dispatch(getFeedback());
          resolve(user);
        })
        .catch(err => {
          dispatch(loginFailure(err));
          reject(err);
        });
    });
};

function logoutRequest() {
  return {
    type: LOGOUT_REQUEST
  };
}

function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS
  };
}

function logoutFailure(error) {
  return {
    type: LOGOUT_FAILURE,
    error
  };
}

export const logoutUser = () => {
  return dispatch => {
    dispatch(logoutRequest());
    fetch(process.env.API_URL + "auth/user/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(() => {
        console.log("remove cookie");
        removeCookie("token");
        dispatch(logoutSuccess());
      })
      .catch(err => {
        dispatch(logoutFailure(err));
      });
  };
};

function verifyRequest() {
  return {
    type: VERIFY_REQUEST
  };
}

function verifySucess(user) {
  return {
    type: VERIFY_SUCCESS,
    user
  };
}

function verifyFailure(error) {
  return {
    type: VERIFY_FAILURE,
    error
  };
}

export const verifyAuth = () => {
  return dispatch => {
    dispatch(verifyRequest());
    fetch(process.env.API_URL + "auth/user/refresh", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(res => res.json())
      .then(res => {
        dispatch(verifySucess(res.User));
        dispatch(getFeedback());
      })
      .catch(error => {
        dispatch(verifyFailure(error));
      });
  };
};
