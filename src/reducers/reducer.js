const LOGIN_PENDING = 'LOGIN_PENDING';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';



export default function reducer(state = {
    isLoginSuccess: false,
    isLoginPending: false,
    loginError: null,
  }, action) {
    switch (action.type) {
      case LOGIN_PENDING:
        return Object.assign({}, state, {
          isLoginPending: action.isLoginPending
        });
  
      case LOGIN_SUCCESS:
        return Object.assign({}, state, {
          isLoginSuccess: action.isLoginSuccess
        });
  
      case LOGIN_ERROR:
        return Object.assign({}, state, {
          loginError: action.loginError
        });
       
      default:
        return state;
    }
  }


  
  