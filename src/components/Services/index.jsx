import React from 'react';
import { ReactComponent as CheckIcon } from '../../svgs/checkIcon.svg';
import servicesImage from '../../assets/servicesImage.png'
import ourServices from '../../assets/ourservicos.svg';
import ourServicesSecondImage from '../../assets/ourservicos2.svg';
import Card from "../Card"
import "./styles.css"

function Services() {
    return (
        <section className="section-services">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12">
                    <h1 className="font-weight-bold h1-our-services">Nossos serviços</h1>
                </div>
            </div>
            <div className="row row-service-image">
                <div className="col-12 col-sm-12 col-md-6 pr-0">
                    <div className="d-flex">
                        <img className="services-image" src={servicesImage} alt="" />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 pl-0">
                    <div className="service-second-image d-flex justify-content-center align-items-center">
                        <h1 className="service-title">Website é <br />o nosso <br />care</h1>
                    </div>
                </div>
            </div>
            <div className="row row-services-mobile">
                <div className="col-12 col-sm-12 col-md-12">
                    <img className="img-services-mobile" src={ourServices} alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-services">
                    <h1 className="font-weight-bold h1-section-services mb-5"><span className="span-services">Serviços e</span> diferenciais</h1>
                    <div className="d-flex align-items-center mt-3">
                        <CheckIcon />
                        <h4 className="h4-services mb-0">Criamos a arte e a programação das aplicações</h4>
                    </div>
                    <div className="d-flex align-items-center mt-2">
                        <CheckIcon />
                        <h4 className="h4-services mb-0">Qualidade com 100% de satisfação</h4>
                    </div>
                    <div className="d-flex align-items-center mt-2">
                        <CheckIcon />
                        <h4 className="h4-services mb-0">3 meses de manutenção gratuita</h4>
                    </div>
                    <div className="d-flex align-items-center mt-2">
                        <CheckIcon />
                        <h4 className="h4-services mb-0">Pacote com preços diferenciados</h4>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                    <div className="row row-services">
                        <div className="col-12 col-sm-12 col-md-4">
                            <div className="first-service">
                                <h1 className="mb-0">Websites</h1>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4">
                            <div className="second-service">
                                <h1 className="mb-0">Aplicativos</h1>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4">
                            <div className="third-service">
                                <h1 className="mb-0">Outros</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12">
                            <p className="description text-left">Apesar da nossa empresa prestar varios tipos de serviço<br /> relacionados a <b>programação</b>, o nosso <b>core</b> é <b>desenvolvimento de<br /> websites</b>, portanto é indiscutivel que a qualidade da nossa equipe<br /> nesta area é muito superior, já que o foco é este.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5 mb-5">
                <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 d-flex flex-column justify-content-center align-items-start mt-2">
                    <Card id="firstCard" width="100%" height={282} backgroundColor="#343434" display="flex" justifyContent="center" flexDirection="column">
                        <h1 className="h1-card">10</h1>
                        <h1 className="h1-card-description">Projetos</h1>
                    </Card>
                </div>
                <div className="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 d-flex flex-column justify-content-center align-items-center mt-2">
                    <Card id="secondCard" width="100%" height={282} backgroundColor="#FFB800" display="flex" justifyContent="center" flexDirection="column">
                        <h1 className="h1-card">+15</h1>
                        <h1 className="h1-card-description">linguagens</h1>
                    </Card>
                </div>
                <div className="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 d-flex flex-column justify-content-center align-items-end mt-2">
                    <Card id="thirdCard" width="100%" height={282} display="flex" justifyContent="center" flexDirection="column">
                        <h1 className="h1-card">projetos <br />Blockchain</h1>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default Services;