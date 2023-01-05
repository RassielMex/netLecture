import React, { useState } from "react";
import Grade from "../Grade/Grade";
import "./Greeting.css";
import avatar1 from "../../img/avatar1.png";
import avatar2 from "../../img/avatar2.png";
import avatar3 from "../../img/avatar3.png";
import netflixAudio from "../../sounds/Netflix-Intro-Sound.mp3";

const Greeting = () => {
  const firstTimeVisited = sessionStorage.getItem("firstTimeVisited")
    ? true
    : false;
  const [visible, setVisible] = useState(firstTimeVisited);

  const handleClick = () => {
    setVisible(true);
    const netflixSound = new Audio(netflixAudio);
    netflixSound.play();
    sessionStorage.setItem("firstTimeVisited", false);
  };

  return (
    <div className="greeting">
      <img
        src="https://fontmeme.com/permalink/220420/6c605ccb9e2cd1e78c1ca6ad0531970b.png"
        alt="netflix-font"
        className="greeting-img"
      />
      <h1 className="greeting-title">¿Quién está leyendo ahora?</h1>
      {!visible && (
        <button className="greeting-btn" onClick={handleClick}>
          Inicio
        </button>
      )}
      {visible && (
        <div className="grade-container">
          <Grade grade={"primero"} img={avatar1} title={"Primer Año"} />
          <Grade grade={"segundo"} img={avatar2} title={"Segundo año"} />
          <Grade grade={"tercero"} img={avatar3} title={"Tercer Año"} />
        </div>
      )}
    </div>
  );
};

export default Greeting;
