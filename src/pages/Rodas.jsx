import React from "react";

import { FaUndo } from "react-icons/fa";

import "../styles/otherpages.css";

export default function Rodas() {
  return (
    <div className="container">
      <div className="goback">
        <a href="/room5">
          <FaUndo size={50} />
          Voltar
        </a>
      </div>

      <div className="rodas">
        <h1>RODAS DE CONVERSA</h1>
        <h2>PESSOAS TRANS NAS PRISÕES EM PORTUGAL</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8UQpVdQxaIs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h2>FEMINISMO E O MOVIMENTO LGBTQIA+</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/u4IPiq08sDI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h2>AS TRABALHADORAS DO SEXO NA PANDEMIA</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/XYKGJ6BF5f8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h2>HABITAÇÃO</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/rRmQCuoK0yc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h2>MENSTRUAÇÃO</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3XrE6S26Wko"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h2>QUINTA-FEIRA</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/W21xArb86e4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h2>SAÚDE MENTAL NA PANDEMIA</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/JX8uSGt56OE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
