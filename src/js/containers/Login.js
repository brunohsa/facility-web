import React, { Component } from 'react';
import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm';
import BannerLogin from '../components/BannerLogin';
import loginAPI from '../api/loginAPI'
import '../../style/login.css';

class Login extends Component {
    
    render() {
        return (
            <div id="content">
                <div className="login-content">
                    <div className="banner-container">
                        <BannerLogin />
                    </div>
                    <div className="login-container">
                        <LoginForm doLogin={this.props.doLogin} />
                    </div>             
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      doLogin: (user, password) => {
        dispatch(loginAPI.doLogin(user, password));
      }
    }
}

export default connect(null, mapDispatchToProps)(Login);