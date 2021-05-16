import React, { useEffect } from "react";

import HomeImage from "../assets/homepage.jpg";
import imageMapResize from "image-map-resizer";

import "../styles/notfound.css";

export default function NotFound() {
  useEffect(() => {
    imageMapResize();
  });

  return (
    <div className="home">
      <img
        className="homeimg-inv"
        src={HomeImage}
        alt="Home Drawing"
        useMap="#image-map"
      />
      <map name="image-map">
        <area
          target=""
          alt=""
          href="/"
          coords="935,968,937,370,1329,93,1731,373,1733,970"
          shape="poly"
        />
      </map>
      <div className="desc-inv">
        <h1>ERROR 404</h1>
        <h1>Você saiu de casa, por favor volte!</h1>
        <br />
        <h1>Clique na casa rapido!</h1>
      </div>
    </div>
  );
}
