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
              alt="dog"
              src="https://cdn.pixabay.com/photo/2014/03/14/20/13/dog-287420_960_720.jpg"
            />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img
              alt="dog"
              src="https://cdn.pixabay.com/photo/2018/10/16/17/24/dog-3751980_960_720.jpg"
            />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img
              alt="dog"
              src="https://cdn.pixabay.com/photo/2017/09/01/11/59/white-2704022_960_720.jpg"
            />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      )}
      {artsNico && (
        <Carousel className="arts" showThumbs={false} showStatus={false}>
          <div>
            <img
              alt="dog"
              src="https://cdn.pixabay.com/photo/2019/04/27/16/32/dog-4160445_960_720.jpg"
            />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img
              alt="dog"
              src="https://cdn.pixabay.com/photo/2020/01/14/17/55/dog-4765784_960_720.jpg"
            />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img
              alt="dog"
              src="https://cdn.pixabay.com/photo/2017/08/07/06/34/weimaraner-2600694_960_720.jpg"
            />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      )}
      {artsGaiola && (
        <Carousel className="arts" showThumbs={false} showStatus={false}>
          <div>
            <img
              alt="dog"
              src="https://cdn.pixabay.com/photo/2021/02/21/22/18/french-bulldog-6038122_960_720.jpg"
            />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img
              alt="dog"
              src="https://cdn.pixabay.com/photo/2019/01/11/02/49/dog-3926409_960_720.jpg"
            />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img
              alt="dog"
              src="https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_960_720.jpg"
            />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      )}
      {artsLuiz && (
        <Carousel className="arts" showThumbs={false} showStatus={false}>
          <div>
            <img
              alt="dog"
              src="https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_960_720.jpg"
            />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img
              alt="dog"
              src="https://cdn.pixabay.com/photo/2019/01/11/02/49/dog-3926409_960_720.jpg"
            />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img
              alt="dog"
              src="https://cdn.pixabay.com/photo/2021/02/21/22/18/french-bulldog-6038122_960_720.jpg"
            />
            <p className="legend">Legend 3</p>
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
          title=""
          href="/room1"
          coords="1659,718,1871,996"
          shape="rect"
        />
        <area
          target=""
          alt=""
          title=""
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
