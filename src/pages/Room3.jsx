import React from "react";

import RoomImage from "../assets/sorea.jpg";

export default function Room3() {
  return (
    <div className="room3">
      <img
        className="homeimg"
        src={RoomImage}
        alt="Home Drawing"
        useMap="#image-map"
      />
    </div>
  );
}
