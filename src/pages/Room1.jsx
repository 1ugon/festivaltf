import React, { useEffect } from "react";

import RoomImage from "../assets/rosas.jpg";
import imageMapResize from "image-map-resizer";

export default function Room1() {
  useEffect(() => {
    imageMapResize();
  });

  return (
    <div className="room1">
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
          href="https://meet.google.com/det-iior-pcu"
          coords="1432,578,1916,665,1917,1075,1141,1070,1136,1039,1120,1031,1107,932,1159,829,1353,773"
          shape="poly"
        />
        <area
          target=""
          alt=""
          href="/room2"
          coords="1003,134,1241,505"
          shape="rect"
        />
        <area
          target=""
          alt=""
          href="/"
          coords="742,2,832,41,905,49,978,44,1037,24,1073,2"
          shape="poly"
        />
      </map>
      <h1 className="dev">
        Por favor entre por um computador para visualizar o site, obrigado!
      </h1>
    </div>
  );
}
