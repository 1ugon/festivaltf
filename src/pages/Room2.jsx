import React, { useEffect } from "react";

import RoomImage from "../assets/marias.jpg";
import imageMapResize from "image-map-resizer";

export default function Room2() {
  useEffect(() => {
    imageMapResize();
  });

  return (
    <div className="room2">
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
    </div>
  );
}
