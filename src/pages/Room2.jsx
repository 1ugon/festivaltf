import React, { useEffect } from "react";

import RoomImage from "../assets/marias.jpg";
import imageMapResize from "image-map-resizer";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "../styles/room2.css";

export default function Room2() {
  useEffect(() => {
    imageMapResize();
  });

  return (
    <div className="room2">
      {true && (
        <Carousel className="perf" showThumbs={false}>
          <div>
            <img
              alt="soon"
              src="https://www.youtube.com/watch?v=JcWdetJFWKI&ab_channel=ElaraMiller"
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
      <img
        className="homeimg"
        src={RoomImage}
        alt="Home Drawing"
        useMap="#image-map"
      />
      <map name="image-map">
        <area
          alt="room4"
          href="/room4"
          coords="1753,365,1646,536,1527,634,1531,1048,1811,1072,1882,615"
          shape="poly"
        />
        <area
          alt="home"
          href="/"
          coords="712,0,825,61,922,68,1024,53,1095,5"
          shape="poly"
        />
      </map>
      <h1 className="dev">
        Por favor entre por um computador para visualizar o site, obrigado!
      </h1>
    </div>
  );
}
