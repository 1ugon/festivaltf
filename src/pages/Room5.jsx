import React, { useEffect } from "react";

import RoomImage from "../assets/biblioteca.jpg";
import imageMapResize from "image-map-resizer";

export default function Room5() {
  useEffect(() => {
    imageMapResize();
  });

  return (
    <div className="room5">
      <img
        className="homeimg"
        src={RoomImage}
        alt="Home Drawing"
        useMap="#image-map"
      />
      <map name="image-map">
        <area
          target="_blank"
          alt=""
          href="https://drive.google.com/drive/folders/1W01nh1XE-puAQP-ESGUcIakcbRGGMfwL?usp=sharing"
          coords="350,739,349,797,501,860,644,807,639,770,505,712"
          shape="poly"
        />
        <area
          target=""
          alt=""
          href="/"
          coords="684,2,791,59,901,64,978,37,1046,3"
          shape="poly"
        />
      </map>
      <h1 className="dev">
        Por favor entre por um computador para visualizar o site, obrigado!
      </h1>
    </div>
  );
}
