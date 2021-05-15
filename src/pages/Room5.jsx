import React from "react";

import RoomImage from "../assets/biblioteca.jpg";

export default function Room5() {
  return (
    <div className="room5">
      <img
        className="homeimg"
        src={RoomImage}
        alt="Home Drawing"
        useMap="#image-map"
      />
    </div>
  );
}
