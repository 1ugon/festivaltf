import React, { useEffect, useState } from "react";

import RoomImage from "../assets/sorea.jpg";
import imageMapResize from "image-map-resizer";

import "../styles/room3.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaArrowRight } from "react-icons/fa";

import Loc1 from "../assets/expo/gaiola/locs/loc1.jpeg";
import Loc2 from "../assets/expo/gaiola/locs/loc2.jpeg";
import Loc3 from "../assets/expo/gaiola/locs/loc3.jpeg";
import Loc4 from "../assets/expo/gaiola/locs/loc4.jpeg";
import Loc5 from "../assets/expo/gaiola/locs/loc5.jpeg";
import Loc6 from "../assets/expo/gaiola/locs/loc6.jpeg";
import Loc7 from "../assets/expo/gaiola/locs/loc7.jpeg";
import Loc8 from "../assets/expo/gaiola/locs/loc8.jpeg";

import Juliana1 from "../assets/expo/gaiola/juliana/1.jpg";
import Juliana2 from "../assets/expo/gaiola/juliana/2.jpg";
import Juliana3 from "../assets/expo/gaiola/juliana/3.jpg";
import Juliana4 from "../assets/expo/gaiola/juliana/4.jpg";
import Juliana5 from "../assets/expo/gaiola/juliana/5.jpg";
import Juliana6 from "../assets/expo/gaiola/juliana/6.jpg";
import Juliana7 from "../assets/expo/gaiola/juliana/7.jpg";
import Juliana8 from "../assets/expo/gaiola/juliana/8.jpg";
import Juliana9 from "../assets/expo/gaiola/juliana/9.jpg";
import Juliana10 from "../assets/expo/gaiola/juliana/10.jpg";
import Juliana11 from "../assets/expo/gaiola/juliana/11.jpg";
import Juliana12 from "../assets/expo/gaiola/juliana/12.jpg";
import Juliana13 from "../assets/expo/gaiola/juliana/13.jpg";

import Rosa1 from "../assets/expo/gaiola/RosaMendes1.jpg";
import Rosa2 from "../assets/expo/gaiola/RosaMendes2.jpg";
import Rosa3 from "../assets/expo/gaiola/RosaMendes3.jpg";

import Xipipa1 from "../assets/expo/gaiola/xipipa/1.jpg";
import Xipipa2 from "../assets/expo/gaiola/xipipa/2.jpg";
import Xipipa3 from "../assets/expo/gaiola/xipipa/3.jpg";
import Xipipa4 from "../assets/expo/gaiola/xipipa/4.jpg";
import Xipipa5 from "../assets/expo/gaiola/xipipa/5.jpg";
import Xipipa6 from "../assets/expo/gaiola/xipipa/6.jpg";

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

import Kali1 from "../assets/expo/kali/kali.jpg";
import Kali2 from "../assets/expo/kali/kali2.jpg";
import Kali3 from "../assets/expo/kali/kali3.jpg";
import Kali4 from "../assets/expo/kali/kali4.jpg";
import Kali5 from "../assets/expo/kali/kali5.jpg";
import Kali6 from "../assets/expo/kali/kali6.jpg";
import Kali7 from "../assets/expo/kali/kali7.jpg";
import Kali8 from "../assets/expo/kali/kali8.jpg";

import Luis1 from "../assets/expo/luizsa/um.jpg";
import Luis2 from "../assets/expo/luizsa/dois.jpg";
import Luis3 from "../assets/expo/luizsa/tres.jpg";
import Luis4 from "../assets/expo/luizsa/quatro.jpg";
import Luis5 from "../assets/expo/luizsa/cinco.jpg";
import Luis6 from "../assets/expo/luizsa/seis.jpg";

import Nico1 from "../assets/expo/nico/1.JPG";
import Nico2 from "../assets/expo/nico/2.JPG";
import Nico3 from "../assets/expo/nico/3.JPG";
import Nico4 from "../assets/expo/nico/4.JPG";
import Nico5 from "../assets/expo/nico/5.JPG";
import Nico6 from "../assets/expo/nico/6.JPG";

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
        <Carousel
          className="arts"
          showThumbs={false}
          showIndicators={false}
          useKeyboardArrows={true}
          showArrows={false}
        >
          <div>
            <div className="firstdiv">
              <h2>
                Uma colet??nea de sentires pand??micos, rela????es conturbadas com o
                ser, o corpo e a solid??o.
              </h2>
              <br />
              <h2>
                Para caminhar e ver a exposi????o clique nessa tela e seta do
                teclado (<FaArrowRight />) e v?? passando!
              </h2>
            </div>
          </div>
          <div>
            <img alt="Kali" src={Kali1} />
            <p className="legend">
              Kali Mera, 22 anos, artista n??o-bin??rie, ilustradore e designer. O
              corpo, as viv??ncias e as emo????es s??o o foco do seu trabalho.
              Navegar o poder do pensar passado para o papel em formas, cores, e
              aceitando as metamorfoses, transformando-as em significado e em
              sentir.
            </p>
          </div>
          <div>
            <img alt="Kali" src={Kali2} />
          </div>
          <div>
            <img alt="Kali" src={Kali3} />
          </div>
          <div>
            <img alt="Kali" src={Kali4} />
          </div>
          <div>
            <img alt="Kali" src={Kali5} />
          </div>
          <div>
            <img alt="Kali" src={Kali6} />
          </div>
          <div>
            <img alt="Kali" src={Kali7} />
          </div>
          <div>
            <img alt="Kali" src={Kali8} />
          </div>
        </Carousel>
      )}
      {artsNico && (
        <Carousel
          className="arts"
          showThumbs={false}
          showIndicators={false}
          useKeyboardArrows={true}
          showArrows={false}
        >
          <div>
            <div className="firstdiv">
              <h2>
                Nessa obra de 3 partes faz alegoria a transi????o hormonal expondo
                sentimentos como de n??o pertencimento ao corpo, peso da
                interven????o m??dica ao corpo trans e a liberdade da corpa
                n??o-bin??ria.
              </h2>
              <br />
              <h2>
                Para caminhar e ver a exposi????o clique nessa tela e seta do
                teclado (<FaArrowRight />) e v?? passando!
              </h2>
            </div>
          </div>
          <div>
            <img alt="Nico" src={Nico1} />
            <p className="legend">
              Nicolas Motta, brasiliense, tem 21 anos, ?? um artista e designer
              transmasculino n??o-bin??rio.
            </p>
          </div>
          <div>
            <img alt="Nico" src={Nico2} />
          </div>
          <div>
            <img alt="Nico" src={Nico3} />
          </div>
          <div>
            <img alt="Nico" src={Nico4} />
          </div>
          <div>
            <img alt="Nico" src={Nico5} />
          </div>
          <div>
            <img alt="Nico" src={Nico6} />
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
            <h2>
              Sabe quantas gaiolas tem voando por Coimbra? Fizemos o mapa com
              algumas delas, mas quem sabe voc??s encontrem mais por a??.
            </h2>
            <br />
            <h2>
              Para caminhar e ver a exposi????o clique nessa tela e seta do
              teclado (<FaArrowRight />) e v?? passando!
            </h2>
          </div>
          <div>
            <img alt="location 1" src={Loc1} />
            <p className="legend">
              Est?? em Celas, um dos principais bairros de resist??ncia da cidade?
              Procure pelas fotos da Juliana Silva, que abordam uma outra forma
              de resist??ncia. E caso sobre tempo, passe no ninho e tome um
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
            <img alt="Juliana" src={Juliana11} />
          </div>
          <div>
            <img alt="Juliana" src={Juliana12} />
          </div>
          <div>
            <img alt="Juliana" src={Juliana13} />
          </div>
          <div>
            <img alt="location 2" src={Loc2} />
            <p className="legend">
              Descendo bem a rua, at?? demais, vamos para Conchada, perto do
              largo que tem ali, Rosa Mendes se faz presente dando voz aos que
              de t??o s??, parecem mortos.
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
              Na pra??a, entre um fino e outro, pode dar uma explorada e procurar
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
              Para um date, um jardim sempre ?? bem vindo n??? Ent??o, pode
              impressionar a/e/o crush com uma foto da Mag Rodrigues.
            </p>
          </div>
          <div>
            <img alt="Mag" src={Mag11} />
          </div>
          <div>
            <img alt="location 5" src={Loc5} />
            <p className="legend">
              Sabemos que a associa????o acad??mica ?? um espa??o muito importante
              para voz des estudantes, logo, Ana Loureiro, ocupa o espa??o
              mostrando outra realidade des estudantes em casas comunit??rias.
            </p>
          </div>
          <div>
            <img alt="Ana" src={Ana1} />
          </div>
          <div>
            <img alt="location 6" src={Loc6} />
            <p className="legend">
              Mas, quem sabe a foto dela te incentive a fazer um tour pelas
              rep??blicas da alta, e ap??s a grande subida da PAV d?? uma pausa no
              miradouro e deslumbre as fotos de In??s Marques.
            </p>
          </div>
          <div>
            <img alt="In??s" src={Ines1} />
          </div>
          <div>
            <img alt="In??s" src={Ines2} />
          </div>
          <div>
            <img alt="In??s" src={Ines3} />
          </div>
          <div>
            <img alt="In??s" src={Ines4} />
          </div>
          <div>
            <img alt="location 7" src={Loc7} />
            <p className="legend">
              Entre rep??blicas, bares e casas tamb??m h?? museus na alta. Se for
              para o Machado de Castro, de uma volta ao seu redor e veja onde a
              arte antiga se mistura com a contempor??nea, dando voz As Senhoras
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
              come??ou, e des??a um pouco mais da Torre do Anto e sinta tudo o que
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
        <Carousel
          className="arts"
          showThumbs={false}
          showIndicators={false}
          useKeyboardArrows={true}
          showArrows={false}
        >
          <div>
            <div className="firstdiv">
              <h2>
                Um desvio dos trabalhos anteriores, a exposi????o atual ?? formada
                exclusivamente por obras r??pidas e pessoais. Intimista, esses
                trabalhos n??o foram criados sob a finalidade de se tornar
                obras-prontas, mas, antes, de pontuar e escancarar flutua????es do
                sub-consciente, num esfor??o para que estas n??o fossem
                re-cobertas por uma eventual racionaliza????o do eu-artista. As
                obras escolhidas pela artista ??? destila????o dos questionamentos,
                medos e express??es ??? exploram tem??ticas de g??nero, solid??o,
                auto-imagem mediante reflex??es sobre o seu pr??prio eu-corpo.
              </h2>
              <br />
              <h2>
                Para caminhar e ver a exposi????o clique nessa tela e seta do
                teclado (<FaArrowRight />) e v?? passando!
              </h2>
            </div>
          </div>
          <div>
            <img alt="Luiz" src={Luis1} />
            <p className="legend">
              Luiz S?? ?? artista brasileire e n??o-bin??rie. Voltade para as artes
              c??nicas e pl??sticas, procura explorar di??logos com o ser-corpo,
              vivo, tridimensional e o corpo representado, subentendido. O
              produzir art??stico ?? fruto das corporeidades que a cria e agente
              nos sujeitos que sensibiliza; um mundo dentro do mundo com
              potencial transformativo quando acessado ??? e criado ??? por corpos
              dissidentes.
            </p>
          </div>
          <div>
            <img alt="Luis" src={Luis2} />
          </div>
          <div>
            <img alt="Luis" src={Luis3} />
          </div>
          <div>
            <img alt="Luis" src={Luis4} />
          </div>
          <div>
            <img alt="Luis" src={Luis5} />
          </div>
          <div>
            <img alt="Luis" src={Luis6} />
          </div>
        </Carousel>
      )}
      <nav className="navbar">
        <ul>
          <li onClick={() => handleGaiola()}>GAIOLA QUE VOA</li>
        </ul>
        <ul>
          <li onClick={() => handleKali()}>KALI MERA</li>
        </ul>
        <ul>
          <li onClick={() => handleNico()}>NICO</li>
        </ul>
        <ul>
          <li onClick={() => handleLuiz()}>LUIZ S??</li>
        </ul>
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
      <h3 className="descdev">
        S?? ?? possivel ver a galeria pelo computador, desculpe o incoveniente
      </h3>
    </div>
  );
}
