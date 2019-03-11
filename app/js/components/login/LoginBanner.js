import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import '../../../styles/login/login-banner.css';

class LoginBanner extends Component {
    
    render() {
        return (
            <div className="banner-container">
                <div className="banner-content">
                    <span className="banner-text"> Facilidade na ponta dos dedos. </span>
                    <span className="singup-text"> Não Possui Uma Conta? <Link to="/cadastro" className="singup-text-link"> Cadastre-se Aqui </Link></span>        
                </div>
            </div>
        );
    }
}

export default LoginBanner;