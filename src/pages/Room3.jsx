import React, { useEffect, useState } from "react";

import RoomImage from "../assets/sorea.jpg";
import imageMapResize from "image-map-resizer";

import "../styles/room3.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Room3() {
  const [artsKali, setArtsKali] = useState(false);
  const [artsNico, setArtsNico] = useState(false);
  const [artsGaiola, setArtsGaiola] = useState(false);
  const [artsLuiz, setArtsLuiz] = useState(false);

  useEffect(() => {
    imageMapResize();
  });

  function handleKali() {
    setArtsKali(true);
    setArtsNico(false);
    setArtsGaiola(false);
    setArtsLuiz(false);
  }

  function handleNico() {
    setArtsKali(false);
    setArtsNico(true);
    setArtsGaiola(false);
    setArtsLuiz(false);
  }

  function handleGaiola() {
    setArtsKali(false);
    setArtsNico(false);
    setArtsGaiola(true);
    setArtsLuiz(false);
  }

  function handleLuiz() {
    setArtsKali(false);
    setArtsNico(false);
    setArtsGaiola(false);
    setArtsLuiz(true);
  }

  return (
    <div className="room3">
      {artsKali && (
        <Carousel className="arts" showThumbs={false} showStatus={false}>
          <div>
            <img
              alt="soon"
              src="https://cdn.pixabay.com/photo/2016/08/04/09/05/coming-soon-1568623_960_720.jpg"
            />
            <p className="legend">
              Kali Mera, 22 anos, artista não-binárie, ilustradore e designer. O
              corpo, as vivências e as emoções são o foco do seu trabalho.
              Navegar o poder do pensar passado para o papel em formas, cores, e
              aceitando as metamorfoses, transformando-as em significado e em
              sentir.
            </p>
          </div>
        </Carousel>
      )}
      {artsNico && (
        <Carousel className="arts" showThumbs={false} showStatus={false}>
          <div>
            <img
              alt="soon"
              src="https://cdn.pixabay.com/photo/2016/08/04/09/05/coming-soon-1568623_960_720.jpg"
            />
            <p className="legend">Bio Nico</p>
          </div>
        </Carousel>
      )}
      {artsGaiola && (
        <Carousel className="arts" showThumbs={false} showStatus={false}>
          <div>
            <img
              alt="soon"
              src="https://cdn.pixabay.com/photo/2016/08/04/09/05/coming-soon-1568623_960_720.jpg"
            />
            <p className="legend">Bio Gaiola Que Voa</p>
          </div>
        </Carousel>
      )}
      {artsLuiz && (
        <Carousel className="arts" showThumbs={false} showStatus={false}>
          <div>
            <img
              alt="soon"
              src="https://cdn.pixabay.com/photo/2016/08/04/09/05/coming-soon-1568623_960_720.jpg"
            />
            <p className="legend">Bio Luiz Sá</p>
          </div>
        </Carousel>
      )}
      <nav className="navbar">
        <ul>
          <li onClick={() => handleKali()}>KALI MERA</li>
        </ul>
        <ul>
          <li onClick={() => handleNico()}>NICO</li>
        </ul>
        <ul>
          <li onClick={() => handleGaiola()}>GAIOLA QUE VOA</li>
        </ul>
        <ul>
          <li onClick={() => handleLuiz()}>LUIZ SÁ</li>
        </ul>
      </nav>
      <img
        className="homeimg"
        src={RoomImage}
        alt="Home Drawing"
        useMap="#image-map"
      />
      <map name="image-map">
        <area
          target=""
          alt=""
          href="/room1"
          coords="1659,718,1871,996"
          shape="rect"
        />
        <area
          target=""
          alt=""
          href="/"
          coords="661,0,747,53,842,78,937,68,985,49,1025,31,1058,3"
          shape="poly"
        />
      </map>
      <h1 className="dev">
        Por favor entre por um computador para visualizar o site, obrigado!
      </h1>
    </div>
  );
}
