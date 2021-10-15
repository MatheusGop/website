import React from 'react';


import logocircle from "../../assets/logo-circle.png";
import car from '../../assets/car.png'
import arrowRight from "../../assets/arrow-right.svg";
import arrowLeft from '../../assets/arrow-left.svg';

import "./styles.css"

const Contact = () => {
    return (
        <div className="row ml-0 mr-0">
            <div className="col-12 col-sm-12 col-md-12 pl-0 pr-0">
                <div className="div-content-contact pb-5">
                    <div className="row ml-0 mr-0">
                        <div className="col-12 col-sm-12 col-md-6 col-contact">
                            <div className="first-container d-flex flex-column justify-content-start align-items-end position-relative">
                                <div className="d-flex">
                                    <div className="gradient-contact d-flex justify-content-around">
                                        <img className="arrow-contact" src={arrowLeft} alt="" />
                                        <img className="arrow-contact" src={arrowRight} alt="" />
                                    </div>
                                    <img className="img-car-contact" src={car} alt="" />
                                </div>
                                <div className="position-absolute logocircle">
                                    <img src={logocircle} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <div className="second-container d-flex flex-column justify-content-start align-items-start">
                                <h1 className="text-white">Escreva para nós</h1>
                                <h5 className="text-white">Precisa de ajuda? Mande uma mensagem</h5>
                                <input className="input-contact" placeholder="Nome" type="text" />
                                <input className="input-contact" placeholder="Email" type="email" />
                                <textarea className="input-contact" placeholder="Mensagem" name="" id="" cols="30" rows="5" />
                                <button className="btn btn-primary btn-image mt-3">Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;