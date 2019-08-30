import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Login.css';


import { login } from '../actions/actions';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        let { username, password } = this.state;
        this.setState({ submitted: true });
        if(username && password){
        this.props.login(username, password);
        }
    }



    render() {
        const {username, password, submitted} = this.state;
        const {isLoginPending, isLoginSuccess, loginError} = this.props;
        return (
           <div className="wrapper">`
 
            <form className="form-signin" onSubmit={this.handleSubmit}>
            <h2 class="form-signin-heading">Please login</h2>
            <input type="text" class="form-control" name="username" 
                  placeholder="user name" required="" 
                  autofocus="" onChange={e => this.setState({username: e.target.value})} 
                  value={username}/>
            {submitted && !username &&
                            <div className="help-block">username required</div>
                        }
            <input type="password" class="form-control" name="password" placeholder="Password" required="" onChange={e => this.setState({password: e.target.value})} value={password}/>      
            <label class="checkbox">
            {submitted && !password &&
                            <div className="help-block">password required</div>
                        }

            <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me
           </label>

           <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>   

            <div className="message">
            { isLoginPending && <div>Please wait...</div> }
            { isLoginSuccess && <div>Success.</div> }
            { loginError && <div className="message_error">{loginError.message}</div> }
            </div>
        </form>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      isLoginPending: state.isLoginPending,
      isLoginSuccess: state.isLoginSuccess,
      loginError: state.loginError
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      login: (email, password) => dispatch(login(email, password))
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Login);
