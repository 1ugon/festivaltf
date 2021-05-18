import React from "react";

import { FaArrowRight, FaUndo } from "react-icons/fa";

import "../styles/performances.css";

export default function Performances() {
  return (
    <div className="perfcontainer">
      <a href="/room2">
        <FaUndo size={50} />
        Voltar
      </a>
      <div className="performances">
        <h1 className="dev">
          Por favor entre por um computador para visualizar o site, obrigado!
        </h1>
        <div className="performance">
          <h1>PERFORMANCES</h1>
          <h1>18 DE MAIO</h1>
          <a
            href="https://www.youtube.com/watch?v=JcWdetJFWKI&ab_channel=ElaraMiller"
            target="_blank"
            rel="noreferrer"
          >
            <FaArrowRight className="icon" />
            <h2>"HUMANA" DE ELARA MILLER</h2>
          </a>
          <a
            href="https://drive.google.com/file/d/13rmw4m8v78Cc1DTbYA8khoGYkSKjJMdw/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <FaArrowRight className="icon" />
            <h2>"OS OLHOS DE VÉSPER" DE SABRINA CARILO</h2>
          </a>
          <a
            href="https://drive.google.com/file/d/167ZvMgjo5QvN2BMieS4254yzwafx0GVX/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <FaArrowRight className="icon" />
            <h2>"GO OUT(SIDE) AND SMELL THE SUN" DE A. VAS</h2>
          </a>
        </div>
      </div>
    </div>
  );
}
