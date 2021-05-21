import React from "react";

import { FaUndo } from "react-icons/fa";

import ReactAudioPlayer from "react-audio-player";

import PrimeiroEp from "../assets/podcast/firstep.mp3";

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
        <h1>PODCAST SEM DESCANSO</h1>
        <h2>1º EP - PLURALIDADE DOS FEMINISMOS</h2>
        <ReactAudioPlayer src={PrimeiroEp} controls className="player" />
      </div>
    </div>
  );
}
