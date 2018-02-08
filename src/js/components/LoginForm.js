import React, {Component} from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import Error from './Error';
import '../../style/login-form.css';

const USER_FIELD = 'user';
const PASSWORD_FIELD = 'password';
const ERRORS = 'errors';

class LoginForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: '',
            password: '',
            errors: this.errors('','')
        }
    }

    componentDidMount() {
        this.listenerSubmitLogin(this.submitLogin);
    }

    listenerSubmitLogin = (actionLogin) => {
        let txtPassword = document.getElementById('txtPassword');
        txtPassword.addEventListener('keypress', function(e) {
            if(e.key === 'Enter') {
                actionLogin();
            }
        });
    }

    handleChange = (event, value) => {
        let state = this.state;
        let errors = state.errors;
        let eventName = event ? 
                            event.target ? event.target.name : event 
                        : '';
        let userValue = eventName === USER_FIELD ? value : state.user;
        let passwordValue = eventName === PASSWORD_FIELD ? value : state.password;
        
        let userError = userValue ? '' : errors.user;
        let passwordError = passwordValue ? '' : errors.password;
        let newErrors = eventName === ERRORS ? value : this.errors(userError, passwordError)

        this.setState({
            user: userValue,
            password: passwordValue,
            errors: newErrors,
            logged: this.props.isLogged
        });
    }

    submitLogin = () => {
        if(!this.validLoginFields()) {
            return;
        }
        this.props.doLogin(this.state.user, this.state.password);
    }

    validLoginFields = () => {
        let userError = !this.state.user ? 'Campo Obrigatório' : '';
        let passwordError = !this.state.password ? 'Campo Obrigatório' : '';
        
        let errors = this.errors(userError, passwordError);
        this.handleChange(ERRORS, errors);

        return !userError && !passwordError;
    }

    errors = (userMsgError, passwordMsgError) => {
        return {
            user: userMsgError,
            password: passwordMsgError
        }
    }

    redirect(path) {
        this.props.history.push(path);
    }

    render() {
        if(this.props.token) {
            this.redirect('/home');
        }

        const props = this.props;
        const errors = this.state.errors;
        return (
            <MuiThemeProvider>
                <div>
                    {
                        props.error ? <Error error={ props.error } /> : <div/>
                    }
                    <h1 className="login-title"> Login </h1>
                    <div className="login-form-items">
                        <TextField
                            name={USER_FIELD}
                            hintText="Ex: facility"
                            floatingLabelText="Usuário"
                            fullWidth={true}
                            onChange={this.handleChange}
                            errorText={errors.user}
                        />
                    </div>
                    <div className="login-form-items">
                        <TextField
                            name={PASSWORD_FIELD}
                            id='txtPassword'
                            hintText="Ex: f@cility123"
                            floatingLabelText="Senha"
                            type="password"
                            fullWidth={true}
                            onChange={this.handleChange}
                            errorText={errors.password}
                        />
                    </div>
                    <div className="login-form-items" style={{marginTop:'10px'}}>
                        <a href="http://127.0.0.1:3000" className="forgot-password"> Esqueceu a Senha ? </a>
                    </div>
                    <div className="login-form-items" style={{marginTop:'15px'}}>
                        <RaisedButton
                            id="btnLogin"
                            onClick={this.submitLogin}
                            label="Login"
                            labelPosition="before"
                            style={{float:'right'}}
                        />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

LoginForm.propTypes = {
    error: PropTypes.string,
    token: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
      error: state.error,
      token: state.login ? state.login.token : ''
    }
}

export default withRouter(connect(mapStateToProps)(LoginForm));