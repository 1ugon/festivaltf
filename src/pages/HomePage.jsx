import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import ImageMapper from "react-image-mapper";

import HomeImage from "../assets/Home.png";

import "../styles/homepage.css";

const MAP = {
  name: "my-map",
  areas: [
    {
      name: "1",
      shape: "rect",
      coords: [880, 850, 650, 580],
      fillColor: "rgba(255, 0, 0, 0.1)",
    },
    {
      name: "2",
      shape: "rect",
      coords: [1260, 850, 1030, 580],
      fillColor: "rgba(255, 0, 0, 0.1)",
    },
    {
      name: "",
      shape: "rect",
      coords: [890, 900, 1020, 670],
      preFillColor: "green",
    },
  ],
};

export default function HomePage() {
  const history = useHistory();
  const handleOnClick = useCallback(
    (area) => history.push(`/room${area}`),
    [history]
  );

  return (
    <div className="home">
      <ImageMapper
        src={HomeImage}
        map={MAP}
        onClick={(area) => handleOnClick(area.name)}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
        onImageClick={() => {}}
      />
    </div>
  );
}
