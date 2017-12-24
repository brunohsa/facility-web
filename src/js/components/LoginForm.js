import React, {Component} from 'react';
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
            if(e.key === 'Enter'){
                actionLogin();
            }
        });
    }

    handleChange = (event, value) => {
        let state = this.state;
        let errors = state.errors;
        let eventName = event ? 
                            event.target ? event.target.name 
                            : event 
                        : '';
        
        let userValue = eventName === USER_FIELD ? value : state.user;
        let passwordValue = eventName === PASSWORD_FIELD ? value : state.password;
        
        let userError = userValue ? '' : errors.user;
        let passwordError = passwordValue ? '' : errors.password;
        let newErrors = eventName === ERRORS ? value : this.errors(userError, passwordError)

        this.setState({
            user: userValue,
            password: passwordValue,
            errors: newErrors
        });
    }

    submitLogin = () => {
        let isValid = this.validateLoginFields();
        if(isValid) {
            let state = this.state;
            this.props.doLogin(state.user, state.password);
        }
    }

    validateLoginFields = () => {
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

    render() {
        const props = this.props;
        const state = this.state;
        const errors = state.errors;
        return (
            <MuiThemeProvider>
                <div className = "content-login-form">
                    {
                        props.error ?
                            <span id="error"> 
                                { props.error.cause } 
                            </span> 
                        : <span></span>
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

const mapStateToProps = state => {
    return {
      error: state ? state.error : null,
      token: state ? state.token : null
    }
}

export default connect(mapStateToProps)(LoginForm);