import React from 'react';

import firstClient from '../../assets/firstClient.png';

import Card from '../Card';
import "./styles.css"

const Clients = () => {
    return (
        <div>
            <div className="row mb-4">
                <div className="col-12 col-sm-12 col-md-12">
                    <h1 className="section-title-clientes text-left mb-0">Feedback de clientes</h1>
                </div>
            </div>
            <div className="row mb-5">
                {/* <div className="col-12 col-sm-12 col-md-12 col-clientes"> */}
                {/* <div className="row row-clientes"> */}
                <div className="col-12 col-sm-12 col-md-4 d-flex justify-content-center">
                    <Card id="first-client-card" width={400} height={286} backgroundColor="white">
                        <div className="d-flex flex-column justify-content-around align-items-center div-content">
                            <div className="picture-cliente"><img src={firstClient} alt="" /></div>
                            <p className="client-description">A Starmax pode me proporcionar um <br />grande negocio; Atendimento maravilhoso, <br />linguagem limpa e correta.</p>
                            <h1 className="client-description">Severn Clark, England</h1>
                        </div>
                    </Card>
                </div>
                <div className="col-12 col-sm-12 col-md-4 d-flex justify-content-center">
                    <Card id="second-client-card" width={400} height={286} backgroundColor="white">
                        <div className="d-flex flex-column justify-content-around align-items-center div-content">
                            <div className="picture-cliente"><img src={firstClient} alt="" /></div>
                            <p className="client-description">A Starmax pode me proporcionar um <br />grande negocio; Atendimento maravilhoso, <br />linguagem limpa e correta.</p>
                            <h1 className="client-description">Severn Clark, England</h1>
                        </div>
                    </Card>
                </div>
                <div className="col-12 col-sm-12 col-md-4 d-flex justify-content-center">
                    <Card id="third-client-card" width={400} height={286} backgroundColor="white">
                        <div className="d-flex flex-column justify-content-around align-items-center div-content">
                            <div className="picture-cliente"><img src={firstClient} alt="" /></div>
                            <p className="client-description">A Starmax pode me proporcionar um <br />grande negocio; Atendimento maravilhoso, <br />linguagem limpa e correta.</p>
                            <h1 className="client-description">Severn Clark, England</h1>
                        </div>
                    </Card>
                </div>
            </div>
            {/* </div> */}
            {/* </div> */}
        </div>
    );
}

export default Clients;