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

const initialState = {
  isSigningUp: false,
  signupError: false,
  signupMessage: "",
  isAuthenticated: false,
  isLoggingIn: true,
  loginError: false,
  errorMessage: "",
  isLoggingOut: false,
  logoutError: false,
  isVerifying: false,
  verifyError: false,
  userID: "",
  firstname: "",
  lastname: "",
  email: ""
};

export default function Auth(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        isSigningUp: true,
        signupError: false,
        signupMessage: ""
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isSigningUp: false,
        signupError: false,
        signupMessage: "signup success"
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isSigningUp: false,
        signupError: true,
        signupMessage: action.error
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        loginError: false,
        isAuthenticated: false,
        errorMessage: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: true,
        firstname: action.user.Firstname,
        lastname: action.user.Lastname,
        email: action.user.Email,
        userID: action.user.ID
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        loginError: true,
        errorMessage:
          "Either the user does not exists or the password is incorrect"
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLoggingOut: true,
        logoutError: false,
        errorMessage: ""
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLogginOut: false,
        isAuthenticated: false,
        firstname: "",
        lastname: "",
        email: "",
        userID: ""
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        isLoggingOut: false,
        isAuthenticated: false,
        logoutError: true,
        errorMessage: action.error.message,
        firstname: "",
        lastname: "",
        email: "",
        userID: ""
      };
    case VERIFY_REQUEST:
      return {
        ...state,
        isVerifying: true,
        verifyError: false
      };
    case VERIFY_SUCCESS:
      return {
        ...state,
        isVerifying: false,
        isAuthenticated: true,
        firstname: action.user.Firstname,
        lastname: action.user.Lastname,
        email: action.user.Email,
        userID: action.user.UserID
      };
    case VERIFY_FAILURE:
      return {
        ...state,
        isVerifying: false,
        verifyError: true,
        errorMessage: action.error,
        firstname: "",
        lastname: "",
        email: "",
        userID: ""
      };
    default:
      return state;
  }
}
