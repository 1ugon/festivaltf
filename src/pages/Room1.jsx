import React from "react";

import RoomImage from "../assets/rosas.jpg";

export default function Room1() {
  return (
    <div className="room1">
      <img
        className="homeimg"
        src={RoomImage}
        alt="Home Drawing"
        useMap="#image-map"
      />
    </div>
  );
}
