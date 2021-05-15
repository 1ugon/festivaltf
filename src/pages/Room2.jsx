import React from "react";

import RoomImage from "../assets/marias.jpg";

export default function Room2() {
  return (
    <div className="room2">
      <img
        className="homeimg"
        src={RoomImage}
        alt="Home Drawing"
        useMap="#image-map"
      />
    </div>
  );
}
