import React, { useEffect, useState } from "react";

import HomeImage from "../assets/homepage.jpg";
import imageMapResize from "image-map-resizer";
import ProgImage from "../assets/prog.jpeg";

import "../styles/homepage.css";

export default function HomePage() {
  const [showProg, setShowProg] = useState(false);

  useEffect(() => {
    imageMapResize();
  });

  window.addEventListener("load", () => {
    document.querySelector(".door").addEventListener("mouseenter", () => {
      setShowProg(true);
    });

    document.querySelector(".door").addEventListener("mouseleave", () => {
      setShowProg(false);
    });
  });

  return (
    <div className="home">
      {showProg && (
        <div className="prog">
          <img src={ProgImage} alt="Festival Schedule" />
        </div>
      )}
      <img
        className="homeimg"
        src={HomeImage}
        alt="Home Drawing"
        useMap="#image-map"
      />
      <map name="image-map">
        <area
          alt="room1"
          href="/room1"
          coords="1013,614,1010,897,1253,894,1254,700,1326,697,1322,614"
          shape="poly"
        />
        <area
          alt="room2"
          href="/room2"
          coords="1339,614,1653,614,1653,892,1414,894,1412,695,1344,695"
          shape="poly"
        />
        <area
          alt="room3"
          href="/room3"
          coords="1012,593,1446,410"
          shape="rect"
        />
        <area
          alt="room4"
          href="/room4"
          coords="1470,409,1653,595"
          shape="rect"
        />
        <area
          alt="room5"
          href="/room5"
          coords="1037,387,1329,190,1610,387"
          shape="poly"
        />
        <area
          target="_blank"
          alt="room6"
          href="https://www.facebook.com/festivaltransfeminista/"
          coords="1532,219,1578,222,1580,336,1532,298"
          shape="poly"
        />
        <area
          className="door"
          alt="door"
          coords="1270,715,1393,931"
          shape="rect"
        />
      </map>
      <div className="desc">
        <h1>Sejam bem-vindes ?? nossa casa!</h1>
        <h2>O Festival Transfeminista est?? no ar!</h2>
        <br />
        <h2 className="dev">
          As rodas de conversas, voc??s podem acessar na sala 1; performances,
          concertos e festa, na sala 2; exposi????es, na sala 3.
        </h2>
        <br />
        <h2 className="dev">
          Se voc?? perdeu algo que gostaria muito te der participado, n??o se
          preocupe! Todas as atividades ficar??o salvas no arquivo.
        </h2>
        <br />
        <h2 className="dev">
          Se quiserem conversar entre si, confiram a casa de banho :)
        </h2>
        <br />
        <h2 className="dev">Fiquem ?? vontade e n??o reparem a bagun??a!</h2>
        <h3 className="descdev">
          Essa ?? uma vers??o simplificada do site, por favor entre por um
          computador para ver tudo do jeito que planejamos!
        </h3>
      </div>
    </div>
  );
}
