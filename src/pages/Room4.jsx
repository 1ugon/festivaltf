import React from "react";

import RoomImage from "../assets/baco.jpg";

export default function Room4() {
  return (
    <div className="room4">
      <img
        className="homeimg"
        src={RoomImage}
        alt="Home Drawing"
        useMap="#image-map"
      />
    </div>
  );
}
