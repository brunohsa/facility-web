import React, { Component } from 'react';
import bannerImage from '../../images/facility.png';
import '../../style/banner-login.css';

class BannerLogin extends Component {

    render() {
        return (
            <div className="content">
                <img id="imgLogo" alt='Facility' src={bannerImage}/>
                <span className="banner-text"> Facilidade na ponta dos dedos. </span>
                <span className="singup-text"> Não Possui Uma Conta? <a className="singup-text-link" href=""> Cadastre-se Aqui </a></span>        
            </div>
        );
    }
}

export default BannerLogin;