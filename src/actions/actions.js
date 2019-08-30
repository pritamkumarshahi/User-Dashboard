import { history } from '../helper/history';

const LOGIN_PENDING = 'LOGIN_PENDING';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';


function loginPending(isLoginPending) {
  return {
    type: LOGIN_PENDING,
    isLoginPending
  };
}

function loginSuccess(isLoginSuccess) {
  return {
    type: LOGIN_SUCCESS,
    isLoginSuccess
  };
}

function loginError(loginError) {
  return {
    type: LOGIN_ERROR,
    loginError
  }
}

function loginApi (username, password, callback) {
  setTimeout(() => {
    if (username === 'hruday@gmail.com' && password === 'hruday123') {
      return callback(null);
    } else {
      return callback(new Error('Invalid username and password'));
    }
  }, 1000);
}


export function login(username, password) {
  return dispatch => {
    dispatch(loginPending(true));
    dispatch(loginSuccess(false));
    dispatch(loginError(null));

    loginApi(username, password, error => {
      dispatch(loginPending(false));
      if (!error) {
        dispatch(loginSuccess(true));
        window.location.href = "/dashboard"
      } else {
        dispatch(loginError(error));
      }
    });
  }
}




