import React from 'react';

import simbolo from "../../assets/simbolo.svg"

import "./styles.css";

const TopHeader = () => {
  return (
      <div className="w-100 bg-light top-navbar">
          <div className="d-flex align-items-center div-left-content">
            <div className="div-join-us">Junte-se a nós</div>
            <div className="div-cc">
              <img src={simbolo} alt="" />
            </div>
            <div className="div-company">
              <h1 className="company-name mb-0">Starmax</h1>
            </div>
          </div>
      </div>
  );
}

export default TopHeader;