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
  VERIFY_FAILURE,
  RESET_PWD_REQUEST,
  RESET_PWD_SUCCESS,
  RESET_PWD_FAILURE,
} from '../Constants';
import { getFeedback } from './Feedback';
import { setCookie, removeCookie } from '../Utils/Cookies';
import { AppThunk } from 'store';

interface SignupForm {}

function signupRequest() {
  return {
    type: SIGNUP_REQUEST,
  };
}

function signupSuccess(user) {
  return {
    type: SIGNUP_SUCCESS,
    user,
  };
}

function signupFailure(error) {
  return {
    type: SIGNUP_FAILURE,
    error,
  };
}

function loginRequest() {
  return {
    type: LOGIN_REQUEST,
  };
}

export const signupUser = (signupForm: SignupForm): AppThunk<Promise<void>> => async (dispatch) => {
  try {
    dispatch(signupRequest());
    const resp = await fetch(`${process.env.API_URL}auth/user/signup`, {
      method: 'POST',
      body: JSON.stringify(signupForm),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    dispatch(signupSuccess(resp.json()));
  } catch (err) {
    dispatch(signupFailure(err));
  }
};

function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error,
  };
}

export const loginUser = (email: string, password: string): AppThunk<Promise<void>> => async (
  dispatch,
) => {
  try {
    dispatch(loginRequest());
    const resp = await fetch(`${process.env.API_URL}auth/user/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const user = resp.json();
    setCookie('token', user.Token, user.ExpiresAt);
    dispatch(loginSuccess(user));
    dispatch(getFeedback());
  } catch (err) {
    dispatch(loginFailure(err));
  }
};

function logoutRequest() {
  return {
    type: LOGOUT_REQUEST,
  };
}

function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

function logoutFailure(error) {
  return {
    type: LOGOUT_FAILURE,
    error,
  };
}

export const logoutUser = () => {
  return (dispatch) => {
    dispatch(logoutRequest());
    fetch(`${process.env.API_URL}auth/user/logout`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then(() => {
        removeCookie('token');
        dispatch(logoutSuccess());
      })
      .catch((err) => {
        dispatch(logoutFailure(err));
      });
  };
};

function verifyRequest() {
  return {
    type: VERIFY_REQUEST,
  };
}

function verifySucess(user) {
  return {
    type: VERIFY_SUCCESS,
    user,
  };
}

function verifyFailure(error) {
  return {
    type: VERIFY_FAILURE,
    error,
  };
}

export const verifyAuth = () => {
  return (dispatch) => {
    dispatch(verifyRequest());
    fetch(`${process.env.API_URL}auth/user/refresh`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((res) => {
        if (res.status !== 200) {
          throw Error(response.statusText);
        }
        return res.json();
      })
      .then((res) => {
        dispatch(verifySucess(res.User));
        dispatch(getFeedback());
      })
      .catch((error) => {
        dispatch(verifyFailure(error));
      });
  };
};

function resetPasswordRequest() {
  return {
    type: RESET_PWD_REQUEST,
  };
}

function resetPasswordSuccess(success) {
  return {
    type: RESET_PWD_SUCCESS,
    success,
  };
}

function resetPasswordFailure(error) {
  return {
    type: RESET_PWD_FAILURE,
    error,
  };
}

export const resetPassword = (email) => {
  return (dispatch) =>
    new Promise(function (resolve, reject) {
      dispatch(resetPasswordRequest());
      fetch(`${process.env.API_URL}auth/user/reset_password`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          email,
        }),
      })
        .then((resp) => {
          return resp.json();
        })
        .then((user) => {
          dispatch(resetPasswordSuccess(user));
          resolve(user);
        })
        .catch((err) => {
          dispatch(resetPasswordFailure(err));
          reject(err);
        });
    });
};
