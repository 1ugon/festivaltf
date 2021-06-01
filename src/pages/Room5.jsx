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
        <area
          target="_blank"
          alt=""
          href="https://www.youtube.com/watch?v=8UQpVdQxaIs&amp;ab_channel=FestivalTransfeminista"
          coords="971,146,1103,120,1653,166,1633,1044,1607,1078,1519,1075,1310,1075,949,914"
          shape="poly"
        />
      </map>
    </div>
  );
}
