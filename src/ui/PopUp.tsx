import React from 'react';
import CloseButton from "./CloseButton";
import "./PopUp.css";

interface Props {
  showPopUp: boolean;
  setShowPopUp: any;
  detail: string;
}

const PopUp: React.FC<Props> = ({ showPopUp, detail, setShowPopUp }) => {
  return (
    <>
      {showPopUp ? (
        <div className="pop-up">
          <div className="head">
            <span
              className="detail"
              style={{ fontWeight: "bolder", fontSize: "17px" }}
            >
            Privacy Info
            </span>
            <CloseButton onClick={() => setShowPopUp((prev: boolean) => !prev)} />
          </div>
          <div className="description">
            <span className="detail">{detail}</span>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PopUp;
