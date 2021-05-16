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
          target=""
          alt=""
          title=""
          href="/"
          coords="684,2,791,59,901,64,978,37,1046,3"
          shape="poly"
        />
      </map>
    </div>
  );
}
