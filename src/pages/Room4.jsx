import React, { useEffect } from "react";

import RoomImage from "../assets/baco.jpg";
import imageMapResize from "image-map-resizer";

import "../styles/room4.css";

export default function Room4() {
  useEffect(() => {
    imageMapResize();
  });

  return (
    <div className="room4">
      <iframe
        src="https://xat.com/embed/chat.php#id=220505682&gn=FestivalTransfeminista"
        width="650"
        height="486"
        frameborder="0"
        scrolling="no"
        className="chat"
        title="chat"
      ></iframe>
      <img
        className="homeimg"
        src={RoomImage}
        alt="Home Drawing"
        useMap="#image-map"
      />
      <map name="image-map">
        <area
          alt=""
          href="/room4/podcast"
          coords="1722,751,1478,648"
          shape="rect"
        />
        <area
          target=""
          alt=""
          href="/"
          coords="920,0,1019,59,1113,76,1163,64,1207,51,1249,27,1285,2"
          shape="poly"
        />
        <area
          target=""
          alt=""
          href="/room3"
          coords="3,453,496,293,481,3,-1,0"
          shape="poly"
        />
      </map>
    </div>
  );
}
