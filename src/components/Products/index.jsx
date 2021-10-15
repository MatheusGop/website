import React from 'react';
import servicos from '../../assets/servicos.svg';
import Retangulo from '../../svgs/retangulo.svg';
import secondImage from '../../assets/secondimage.png';
import vectorpaint from '../../assets/vectorpaint.svg';
import productTwo from '../../assets/product-two.svg';
import productThree from '../../assets/product-three.svg';
import SvgComponent from "../SVG/"
import "./styles.css"

function Products() {
    return (
        <section>
            <div className="row">
                <div className="col-12 mt-2">
                    <h1 className="font-weight-bold h1-title">PROGRAME SEU NEGOCIO ONLINE</h1>
                    <h6 className="mt-3 mb-4">Peça a programação do seu site ou app</h6>
                    <button className="btn btn-primary services mb-1 font-weight-bold">Solicitar Serviço</button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h1 className="h1-title-section mb-3 text-left">PROGRAME SEU NEGOCIO ONLINE</h1>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-8 pr-0">
                            <div className="div-container-mobile">
                                <img className="img-servicos-mobile" src={servicos} alt="" />
                            </div>
                            <div className="gradient d-flex">
                                <div className="first-image">
                                    <SvgComponent file={Retangulo} />
                                </div>
                                <div className="second-image">
                                    <img className="img-second-image" src={secondImage} alt="" />
                                </div>
                                <div className="align-self-end div-container-image-text">
                                    <h1 className="text-white text-left ml-5 h1-title-image mb-0">NOVOS PROJETOS</h1>
                                    <h6 className="text-white text-left ml-5 mb-4 h1-subtitle-image">Starmax também faz modelagem 3D para jogos e brinquedos</h6>
                                    <div className="d-flex justify-content-start ml-5 mb-5">
                                        <button className="btn btn-primary justify-content-start btn-image">Saiba mais</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-0 col-md-0 col-lg-4 pl-0">
                            <div className="gradient-2 d-flex justify-content-center align-items-center">
                                <h1 className="h1-image-title">NOVOS<br />PROJETOS<br /> VINDO POR AI</h1>
                            </div>
                        </div>
                        {/* <SVGComponent file={projects}/> */}
                        {/* <img src={projetos} alt="" /> */}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12">
                    <h1 className="font-weight-bold h1-section-project">Conheçam alguns projetos</h1>
                </div>
                <div className="col-12 col-sm-12 col-md-12">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-4 col-projects">
                            <div className="">
                                <img className="project-image" src={vectorpaint} alt="" />
                            </div>
                            <div className="d-flex flex-column align-items-start mt-1">
                                <h1 className="title-first-project mb-1">Programas para Desktop</h1>
                                <h1 className="subtitle-first-project mb-0">Controle de estoque, ERP, entre outros</h1>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-projects">
                            <div>
                                <img className="project-image" src={productTwo} alt="" />
                            </div>
                            <div className="d-flex flex-column align-items-start mt-1">
                                <h1 className="title-first-project mb-1">Aplicativos para play store e apple store</h1>
                                <h1 className="subtitle-first-project mb-0">Apps estilo iFood, Get Ninjas, entre outros</h1>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-projects">
                            <div>
                                <img className="project-image" src={productThree} alt="" />
                            </div>
                            <div className="d-flex flex-column align-items-start mt-1">
                                <h1 className="title-first-project mb-1">Websites Responsivos</h1>
                                <h1 className="subtitle-first-project mb-0">BD Robusto, programas de streaming, portifólio e etc</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h1 className="font-weight-bold h1-our-projects">CONHEÇA NOSSOS PROJETOS</h1>
                    <h6 className="mt-3 mb-4">Você pode clicar no botão abaixo para ir para o link dos principais projetos concluidos</h6>
                    <button className="btn btn-primary services font-weight-bold">Clique para ver</button>
                </div>
            </div>
        </section>
    )
}

export default Products