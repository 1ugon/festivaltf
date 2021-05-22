import React from "react";

import { FaUndo } from "react-icons/fa";

import "../styles/otherpages.css";

export default function Performances() {
  return (
    <div className="container">
      <div className="goback">
        <a href="/room4">
          <FaUndo size={50} />
          Voltar
        </a>
      </div>

      <div className="podcasts">
        <h1>PODCAST</h1>
        <iframe
          src="https://castbox.fm/app/castbox/player/id4133196?v=8.22.11&autoplay=0"
          frameborder="0"
          width="100%"
          height="500"
          title="podcast"
        ></iframe>
      </div>
    </div>
  );
}
