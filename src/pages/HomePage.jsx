import React, { useEffect, useState } from "react";

import HomeImage from "../assets/homepage.jpg";
import imageMapResize from "image-map-resizer";

import "../styles/homepage.css";

const prog = [
  "12h20 – 12h50: The Hu.",
  "13h45 – 14h30: Idles.",
  "15h40 – 16h40: Perry Farrell's Kind Heaven Orchestra.",
  "17h50 – 18h50: Cage The Elephant.",
  "20h15 – 22h45: Guns N' Roses.",
];

export default function HomePage() {
  const [showProg, setShowProg] = useState(false);

  useEffect(() => {
    imageMapResize();
  });

  /*   const door = document.getElementsByClassName("door");
  door.addEventListener("mouseover", function hover() {
    setShowProg(true);
  }); */

  /*   window.addEventListener("load", function (event) {
      = function () {
      setShowProg(true);
      console.log(showProg);
    };
  }); */

  return (
    <div className="home">
      <div className="prog">{showProg && <h2>{prog}</h2>}</div>
      <img
        className="homeimg"
        src={HomeImage}
        alt="Home Drawing"
        useMap="#image-map"
      />
      <map name="image-map">
        <area
          target=""
          alt="room1"
          href="/room1"
          coords="1013,614,1010,897,1253,894,1254,700,1326,697,1322,614"
          shape="poly"
        />
        <area
          target=""
          alt="room2"
          href="/room2"
          coords="1339,614,1653,614,1653,892,1414,894,1412,695,1344,695"
          shape="poly"
        />
        <area
          target=""
          alt="room3"
          href="/room3"
          coords="1012,593,1446,410"
          shape="rect"
        />
        <area
          target=""
          alt="room4"
          href="/room4"
          coords="1470,409,1653,595"
          shape="rect"
        />
        <area
          target=""
          alt="room5"
          href="/room5"
          coords="1037,387,1329,190,1610,387"
          shape="poly"
        />
        <area
          target="_blank  "
          alt="room6"
          href="https://www.facebook.com/festivaltransfeminista/"
          coords="1532,219,1578,222,1580,336,1532,298"
          shape="poly"
        />
        <area
          className="door"
          target=""
          alt="door"
          coords="1270,715,1393,931"
          shape="rect"
        />
      </map>
      <div className="desc">
        <h1>Bem vinde a nossa casa!</h1>
        <h2>Clique em um cômodo para explorar esse espaço.</h2>
        <br />
        <h3>
          O festival transfeminsita teve sua 1º Edição em março de 2020 com
          organização de algumas repúblicas de Coimbra.
        </h3>
        <br />
        <h3>
          Ao longo de uma semana acontecem várias atividades como performances,
          rodas de conversa, filmes, instalações, concertos, etc.
        </h3>
        <br />
        <h3>
          Tem como objetivo dar visibilidade a pessoas trans, não-binárias,
          intersexo e mulheres cis.
        </h3>
      </div>
    </div>
  );
}
