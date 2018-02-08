import React, { Component } from 'react';
import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm';
import BannerLogin from '../components/BannerLogin';
import LoginAPI from '../api/LoginAPI'
import '../../style/login.css';

class Login extends Component {
    
    render() {
        const props = this.props;
        return (
            <div id="content">
                <div className="login-content">
                    <div className="banner-container">
                        <BannerLogin />
                    </div>
                    <div className="login-container">
                        <LoginForm doLogin={props.doLogin} />
                    </div>             
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      doLogin: (user, password) => {
        dispatch(LoginAPI.doLogin(user, password));
      }
    }
}

export default connect(null, mapDispatchToProps)(Login);