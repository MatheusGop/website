import React from "react";
import logo from "../../assets/logo.png";
import TopHeader from "../TopHeader";
import "./styles.css"

function Header() {
    return (
        <header className="position-fixed">
            <TopHeader />
            <nav className="navbar navbar-expand-lg navbar-light border-bottom pt-0 pb-0">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img className="logo" src={logo} alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 justify-content-center w-100">
                            <li className="nav-item">
                                <a className="nav-link" href="#">PRODUTOS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">SERVIÇOS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">PORTIFÓLIO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CLIENTES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CONTATO</a>
                            </li>
                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
