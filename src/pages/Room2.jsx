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
          alt="perfomances"
          href="/room2/perf"
          coords="722,1077,986,1078,993,944,1017,861,1010,781,988,759,996,719,1061,683,1069,622,1015,669,1030,624,1015,563,1020,485,996,627,964,641,978,614,990,580,966,597,927,614,905,621,917,587,927,546,937,498,915,514,896,548,886,524,895,485,867,514,861,468,874,432,842,483,842,536,845,561,844,592,828,602,813,583,818,554,810,524,812,490,795,519,791,571,771,556,776,530,784,496,788,481,761,513,751,563,771,609,759,631,749,615,747,587,735,578,725,571,730,605,732,636,712,663,710,682,713,700,739,731,759,732,739,746,727,771,718,817,715,927"
          shape="poly"
        />
        <area
          target="_blank"
          href="https://meet.google.com/kgs-ieiq-xwf"
          coords="184,649,77"
          shape="circle"
        />
        <area
          alt="home"
          href="/"
          coords="712,0,825,61,922,68,1024,53,1095,5"
          shape="poly"
        />
      </map>
      <h1 className="dev">
        Por favor entre por um computador para visualizar o site, obrigado!
      </h1>
    </div>
  );
}
