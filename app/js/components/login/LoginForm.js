import React, {Component} from 'react';
import { withRouter } from "react-router-dom";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import '../../../styles/login/login-form.css';


class LoginForm extends Component {

    doLogin() {
        this.props.history.push("/home");
    }

    render() {
        return (
            <div>
                <h1 className='login-title'> Login </h1>
                <div className="login-form-items">
                    <TextField
                        id="standard-name"
                        label="Usuário"
                        margin="normal"
                        error={false}
                        helperText=''
                    />
                </div>
                <div className="login-form-items">
                    <TextField
                        id="standard-password-input"
                        label="Senha"
                        type="password"
                        autoComplete="current-password"
                        error={false}
                        helperText=''
                        margin="normal"
                    />
                </div>
                <div className="login-form-items" style={{marginTop:'10px'}}>
                    <a href="http://127.0.0.1:3000" className="forgot-password"> Esqueceu a Senha ? </a>
                </div>
                <div className="login-form-items">
                    <Button id="button-login" variant="contained" onClick={() => this.doLogin()}> Entrar </Button>
                </div>
            </div>
        );
    }
}

export default withRouter(LoginForm);