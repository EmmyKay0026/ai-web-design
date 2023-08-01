import React from "react";
import Dyen from "../../../assets/dyen.png";
import Amplity from "../../../assets/amplity.png";
import Lerrys from "../../../assets/Leerys.png";
import Mozacademy from "../../../assets/Mozacademy.png";
import Charisfolks from "../../../assets/charisfolklogo.webp";

export const ScrollingImg = () => {
  return (
    <>
      <div className="scroll-container">
        <div className="scrolling-div">
          <div className="scroll-item">
            <div className="img-div amp">
              <img src={Amplity} />
            </div>
            <div className="img-div moz">
              <img src={Mozacademy} />
            </div>
            <div className="img-div ler">
              <img src={Lerrys} />{" "}
            </div>
            <div className="img-div charis">
              <img src={Charisfolks} />
            </div>
            <div className="img-div dyen">
              <img src={Dyen} />
            </div>
          </div>
          <div className="scroll-item">
            <div className="img-div amp">
              <img src={Amplity} />
            </div>
            <div className="img-div moz">
              <img src={Mozacademy} />
            </div>
            <div className="img-div ler">
              <img src={Lerrys} />{" "}
            </div>
            <div className="img-div charis">
              <img src={Charisfolks} />
            </div>
            <div className="img-div dyen">
              <img src={Dyen} />
            </div>
          </div>
           
          <div className="scroll-item">
            <div className="img-div amp">
              <img src={Amplity} />
            </div>
            <div className="img-div moz">
              <img src={Mozacademy} />
            </div>
            <div className="img-div ler">
              <img src={Lerrys} />{" "}
            </div>
            <div className="img-div charis">
              <img src={Charisfolks} />
            </div>
            <div className="img-div dyen">
              <img src={Dyen} />
            </div>
          </div>
           
          <div className="scroll-item">
            <div className="img-div amp">
              <img src={Amplity} />
            </div>
            <div className="img-div moz">
              <img src={Mozacademy} />
            </div>
            <div className="img-div ler">
              <img src={Lerrys} />{" "}
            </div>
            <div className="img-div charis">
              <img src={Charisfolks} />
            </div>
            <div className="img-div dyen">
              <img src={Dyen} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
