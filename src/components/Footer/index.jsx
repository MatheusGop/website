import React from 'react';
import './styles.css'

import logoStar from "../../assets/logo-star.png"
import twitter from "../../assets/twitter.svg"
import instagram from "../../assets/instagram.svg"

const Footer = () => {
    return (
        <div className="row mr-0 ml-0">
            <div className="col-12 col-sm-12 col-md-12 pl-0 pr-0">
                <footer className="footer">
                    <div className="footer-container d-flex justify-content-around align-items-center">
                        <div className="footer-first-container">
                            <img src={logoStar} alt="" />
                        </div>
                        <div className="d-flex justify-content-around w-50">
                            <h4 className="text-white text-footer mb-0">Termos e condições</h4>
                            <h4 className="text-white text-footer mb-0">Politicas de privacidade</h4>
                            <h4 className="text-white text-footer mb-0">Seja afiliado</h4>
                        </div>
                        <div className="footer-third-container d-flex justify-content-around">
                            <img src={twitter} alt="twitter" />
                            <img src={instagram} alt="instagram" />
                        </div>
                    </div>
                    <div className="footer-text d-flex flex-column justify-content-center align-items-center w-100">
                        <h5 className="text-white mb-0 footer-title">Todos os direitos reservados por StarmaxTecnology</h5>
                        <h5 className="text-white mb-0 footer-title mt-3">© 2021 Starmax</h5>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer;