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
  SET_COMPANY_ID,
} from '../Constants';
import { removeCookie } from '../Utils/Cookies';
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
    const data = await resp.json();
    if (resp.status >= 300) {
      throw data;
    }

    dispatch(signupSuccess(data));
  } catch (err) {
    dispatch(signupFailure(err));
    throw err;
  }
};

function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    data,
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

    const data = await resp.json();
    console.log('data: ', data);
    dispatch(loginSuccess(data));
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

export const logoutUser = (): AppThunk<Promise<void>> => async (dispatch) => {
  try {
    dispatch(logoutRequest());
    await fetch(`${process.env.API_URL}auth/user/logout`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    removeCookie('token');
    dispatch(logoutSuccess());
  } catch (err) {
    dispatch(logoutFailure(err));
  }
};

function verifyRequest() {
  return {
    type: VERIFY_REQUEST,
  };
}

function verifySucess(sessionUserData) {
  return {
    type: VERIFY_SUCCESS,
    sessionUserData,
  };
}

function verifyFailure(error) {
  return {
    type: VERIFY_FAILURE,
    error,
  };
}

export const verifyAuth = (): AppThunk<Promise<void>> => async (dispatch) => {
  try {
    dispatch(verifyRequest());
    const resp = await fetch(`${process.env.API_URL}auth/user/refresh`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (resp.status !== 200) {
      throw Error(resp.statusText);
    }

    const sessionUserData = await resp.json();
    dispatch(verifySucess(sessionUserData));
  } catch (err) {
    dispatch(verifyFailure(err));
  }
};

export function setCompanyId(companyId: string): Record<string, string> {
  return {
    type: SET_COMPANY_ID,
    companyId,
  };
}

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

export const resetPassword = (email: string): AppThunk<Promise<void>> => async (dispatch) => {
  try {
    dispatch(resetPasswordRequest());
    const resp = await fetch(`${process.env.API_URL}auth/user/reset_password`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        email,
      }),
    });
    const user = resp.json();
    dispatch(resetPasswordSuccess(user));
  } catch (err) {
    dispatch(resetPasswordFailure(err));
  }
};
