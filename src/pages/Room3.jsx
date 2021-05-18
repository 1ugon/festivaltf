import React, { useEffect, useState } from "react";

import RoomImage from "../assets/sorea.jpg";
import imageMapResize from "image-map-resizer";

import "../styles/room3.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Loc1 from "../assets/expo/gaiola/locs/loc1.jpeg";
import Loc2 from "../assets/expo/gaiola/locs/loc2.jpeg";
import Loc3 from "../assets/expo/gaiola/locs/loc3.jpeg";
import Loc4 from "../assets/expo/gaiola/locs/loc4.jpeg";
import Loc5 from "../assets/expo/gaiola/locs/loc5.jpeg";
import Loc6 from "../assets/expo/gaiola/locs/loc6.jpeg";
import Loc7 from "../assets/expo/gaiola/locs/loc7.jpeg";
import Loc8 from "../assets/expo/gaiola/locs/loc8.jpeg";

import Juliana1 from "../assets/expo/gaiola/JulianaSilva1.jpg";
import Juliana2 from "../assets/expo/gaiola/JulianaSilva2.jpg";
import Juliana3 from "../assets/expo/gaiola/JulianaSilva3.jpg";
import Juliana4 from "../assets/expo/gaiola/JulianaSilva4.jpg";
import Juliana5 from "../assets/expo/gaiola/JulianaSilva5.jpg";
import Juliana6 from "../assets/expo/gaiola/JulianaSilva6.jpg";
import Juliana7 from "../assets/expo/gaiola/JulianaSilva7.jpg";
import Juliana8 from "../assets/expo/gaiola/JulianaSilva8.jpg";
import Juliana9 from "../assets/expo/gaiola/JulianaSilva9.jpg";
import Juliana10 from "../assets/expo/gaiola/JulianaSilva10.jpg";

import Rosa1 from "../assets/expo/gaiola/RosaMendes1.jpg";
import Rosa2 from "../assets/expo/gaiola/RosaMendes2.jpg";
import Rosa3 from "../assets/expo/gaiola/RosaMendes3.jpg";

import Xipipa1 from "../assets/expo/gaiola/Xipipa1.jpg";
import Xipipa2 from "../assets/expo/gaiola/Xipipa2.jpg";
import Xipipa3 from "../assets/expo/gaiola/Xipipa3.jpg";
import Xipipa4 from "../assets/expo/gaiola/Xipipa4.jpg";
import Xipipa5 from "../assets/expo/gaiola/Xipipa5.jpg";
import Xipipa6 from "../assets/expo/gaiola/Xipipa6.jpg";

import Mag11 from "../assets/expo/gaiola/MagRodrigues11.jpg";

import Ana1 from "../assets/expo/gaiola/AnaLoureiro1.jpg";

import Ines1 from "../assets/expo/gaiola/Ines1.jpg";
import Ines2 from "../assets/expo/gaiola/Ines2.jpg";
import Ines3 from "../assets/expo/gaiola/Ines3.jpg";
import Ines4 from "../assets/expo/gaiola/Ines4.jpg";

import Mag1 from "../assets/expo/gaiola/MagRodrigues1.jpg";
import Mag2 from "../assets/expo/gaiola/MagRodrigues2.jpg";
import Mag3 from "../assets/expo/gaiola/MagRodrigues3.jpg";
import Mag4 from "../assets/expo/gaiola/MagRodrigues4.jpg";
import Mag5 from "../assets/expo/gaiola/MagRodrigues5.jpg";
import Mag6 from "../assets/expo/gaiola/MagRodrigues6.jpg";
import Mag7 from "../assets/expo/gaiola/MagRodrigues7.jpg";
import Mag8 from "../assets/expo/gaiola/MagRodrigues8.jpg";
import Mag9 from "../assets/expo/gaiola/MagRodrigues9.jpg";
import Mag10 from "../assets/expo/gaiola/MagRodrigues10.jpg";

import Catarina1 from "../assets/expo/gaiola/CatarinaCasaca1.jpg";
import Catarina2 from "../assets/expo/gaiola/CatarinaCasaca2.jpg";
import Catarina3 from "../assets/expo/gaiola/CatarinaCasaca3.jpg";
import Catarina4 from "../assets/expo/gaiola/CatarinaCasaca4.jpg";

export default function Room3() {
  const [artsKali, setArtsKali] = useState(false);
  const [artsNico, setArtsNico] = useState(false);
  const [artsGaiola, setArtsGaiola] = useState(false);
  const [artsLuiz, setArtsLuiz] = useState(false);

  useEffect(() => {
    imageMapResize();
  });

  function handleKali() {
    setArtsKali(true);
    setArtsNico(false);
    setArtsGaiola(false);
    setArtsLuiz(false);
  }

  function handleNico() {
    setArtsKali(false);
    setArtsNico(true);
    setArtsGaiola(false);
    setArtsLuiz(false);
  }

  function handleGaiola() {
    setArtsKali(false);
    setArtsNico(false);
    setArtsGaiola(true);
    setArtsLuiz(false);
  }

  function handleLuiz() {
    setArtsKali(false);
    setArtsNico(false);
    setArtsGaiola(false);
    setArtsLuiz(true);
  }

  return (
    <div className="room3">
      {artsKali && (
        <Carousel className="arts" showThumbs={false}>
          <div>
            <img
              alt="soon"
              src="https://cdn.pixabay.com/photo/2016/08/04/09/05/coming-soon-1568623_960_720.jpg"
            />
            <p className="legend">
              Kali Mera, 22 anos, artista não-binárie, ilustradore e designer. O
              corpo, as vivências e as emoções são o foco do seu trabalho.
              Navegar o poder do pensar passado para o papel em formas, cores, e
              aceitando as metamorfoses, transformando-as em significado e em
              sentir.
            </p>
          </div>
        </Carousel>
      )}
      {artsNico && (
        <Carousel className="arts" showThumbs={false}>
          <div>
            <img
              alt="soon"
              src="https://cdn.pixabay.com/photo/2016/08/04/09/05/coming-soon-1568623_960_720.jpg"
            />
            <p className="legend">Bio Nico</p>
          </div>
        </Carousel>
      )}
      {artsGaiola && (
        <Carousel
          className="arts"
          showThumbs={false}
          showIndicators={false}
          useKeyboardArrows={true}
          showArrows={false}
        >
          <div className="firstdiv">
            <h1>
              Sabe quantas gaiolas tem voando por Coimbra? Fizemos o mapa com
              algumas delas, mas quem sabe vocês encontrem mais por aí.
            </h1>
            <br />
            <h2>
              Para caminhar e ver as Gaiolas Que Voam clique nessa tela e seta
              do teclado (->) e vá passando, caso deseja dar zoom deixe o mouse
              sobre!
            </h2>
          </div>
          <div>
            <img alt="location 1" src={Loc1} />
            <p className="legend">
              Está em Celas, um dos principais bairros de resistência da cidade?
              Procure pelas fotos da Juliana Silva, que abordam uma outra forma
              de resistência. E caso sobre tempo, passe no ninho e tome um
              cafezinho com elus
            </p>
          </div>
          <div>
            <img alt="Juliana" src={Juliana1} />
          </div>
          <div>
            <img alt="Juliana" src={Juliana2} />
          </div>
          <div>
            <img alt="Juliana" src={Juliana3} />
          </div>
          <div>
            <img alt="Juliana" src={Juliana4} />
          </div>
          <div>
            <img alt="Juliana" src={Juliana5} />
          </div>
          <div>
            <img alt="Juliana" src={Juliana6} />
          </div>
          <div>
            <img alt="Juliana" src={Juliana7} />
          </div>
          <div>
            <img alt="Juliana" src={Juliana8} />
          </div>
          <div>
            <img alt="Juliana" src={Juliana9} />
          </div>
          <div>
            <img alt="Juliana" src={Juliana10} />
          </div>
          <div>
            <img alt="location 2" src={Loc2} />
            <p className="legend">
              Descendo bem a rua, até demais, vamos para Conchada, perto do
              largo que tem ali, Rosa Mendes se faz presente dando voz aos que
              de tão só, parecem mortos.
            </p>
          </div>
          <div>
            <img alt="Rosa" src={Rosa1} />
          </div>
          <div>
            <img alt="Rosa" src={Rosa2} />
          </div>
          <div>
            <img alt="Rosa" src={Rosa3} />
          </div>
          <div>
            <img alt="location 3" src={Loc3} />
            <p className="legend">
              Na praça, entre um fino e outro, pode dar uma explorada e procurar
              as fotos de Xipipa, quem sabe encontre uma fada bem parecida com
              Odete.
            </p>
          </div>
          <div>
            <img alt="Xipipa" src={Xipipa1} />
          </div>
          <div>
            <img alt="Xipipa" src={Xipipa2} />
          </div>
          <div>
            <img alt="Xipipa" src={Xipipa3} />
          </div>
          <div>
            <img alt="Xipipa" src={Xipipa4} />
          </div>
          <div>
            <img alt="Xipipa" src={Xipipa5} />
          </div>
          <div>
            <img alt="Xipipa" src={Xipipa6} />
          </div>
          <div>
            <img alt="location 4" src={Loc4} />
            <p className="legend">
              Para um date, um jardim sempre é bem vindo né? Então, pode
              impressionar a/e/o crush com uma foto da Mag Rodrigues.
            </p>
          </div>
          <div>
            <img alt="Mag" src={Mag11} />
          </div>
          <div>
            <img alt="location 5" src={Loc5} />
            <p className="legend">
              Sabemos que a associação académica é um espaço muito importante
              para voz des estudantes, logo, Ana Loureiro, ocupa o espaço
              mostrando outra realidade des estudantes em casas comunitárias.
            </p>
          </div>
          <div>
            <img alt="Ana" src={Ana1} />
          </div>
          <div>
            <img alt="location 6" src={Loc6} />
            <p className="legend">
              Mas, quem sabe a foto dela te incentive a fazer um tour pelas
              repúblicas da alta, e após a grande subida da PAV dê uma pausa no
              miradouro e deslumbre as fotos de Inês Marques.
            </p>
          </div>
          <div>
            <img alt="Inês" src={Ines1} />
          </div>
          <div>
            <img alt="Inês" src={Ines2} />
          </div>
          <div>
            <img alt="Inês" src={Ines3} />
          </div>
          <div>
            <img alt="Inês" src={Ines4} />
          </div>
          <div>
            <img alt="location 7" src={Loc7} />
            <p className="legend">
              Entre repúblicas, bares e casas também há museus na alta. Se for
              para o Machado de Castro, de uma volta ao seu redor e veja onde a
              arte antiga se mistura com a contemporânea, dando voz As Senhoras
              de Mag Rodrigues.
            </p>
          </div>
          <div>
            <img alt="Mag" src={Mag1} />
          </div>
          <div>
            <img alt="Mag" src={Mag2} />
          </div>
          <div>
            <img alt="Mag" src={Mag3} />
          </div>
          <div>
            <img alt="Mag" src={Mag4} />
          </div>
          <div>
            <img alt="Mag" src={Mag5} />
          </div>
          <div>
            <img alt="Mag" src={Mag6} />
          </div>
          <div>
            <img alt="Mag" src={Mag7} />
          </div>
          <div>
            <img alt="Mag" src={Mag8} />
          </div>
          <div>
            <img alt="Mag" src={Mag9} />
          </div>
          <div>
            <img alt="Mag" src={Mag10} />
          </div>
          <div>
            <img alt="location 8" src={Loc8} />
            <p className="legend">
              E para finalizar, siga as margens da muralha onde a cidade
              começou, e desça um pouco mais da Torre do Anto e sinta tudo o que
              Catarina Casaca traz pra sentir.
            </p>
          </div>
          <div>
            <img alt="Catarina" src={Catarina1} />
          </div>
          <div>
            <img alt="Catarina" src={Catarina2} />
          </div>
          <div>
            <img alt="Catarina" src={Catarina3} />
          </div>
          <div>
            <img alt="Catarina" src={Catarina4} />
          </div>
        </Carousel>
      )}
      {artsLuiz && (
        <Carousel className="arts" showThumbs={false} showStatus={false}>
          <div>
            <img
              alt="soon"
              src="https://cdn.pixabay.com/photo/2016/08/04/09/05/coming-soon-1568623_960_720.jpg"
            />
            <p className="legend">Bio Luiz Sá</p>
          </div>
        </Carousel>
      )}
      <nav className="navbar">
        <ul>
          <li onClick={() => handleGaiola()}>GAIOLA QUE VOA</li>
        </ul>
        {/*         <ul>
          <li onClick={() => handleKali()}>KALI MERA</li>
        </ul>
        <ul>
          <li onClick={() => handleNico()}>NICO</li>
        </ul>
        <ul>
          <li onClick={() => handleLuiz()}>LUIZ SÁ</li>
        </ul> */}
      </nav>
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
          href="/room1"
          coords="1659,718,1871,996"
          shape="rect"
        />
        <area
          target=""
          alt=""
          href="/"
          coords="661,0,747,53,842,78,937,68,985,49,1025,31,1058,3"
          shape="poly"
        />
      </map>
      <h1 className="dev">
        Por favor entre por um computador para visualizar o site, obrigado!
      </h1>
    </div>
  );
}
