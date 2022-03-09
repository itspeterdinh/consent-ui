import React, { useState } from "react";
import Switch from "./Switch";
import InfoButton from "./InfoButton";
import PopUp from "./PopUp";
import "./ConsentOptions.css";
import type { TrackingConsentDetails, TrackingPurposesTypes } from "src/@types/airgap.js";

interface Props {
  purposesTypes: TrackingPurposesTypes;
  consent: TrackingConsentDetails;
  setConsent: React.Dispatch<React.SetStateAction<TrackingConsentDetails>>;
}

const ConsentOptions: React.FC<Props> = ( {purposesTypes, consent, setConsent} ) => {

  
  var purpose: string[] = ["Functional", "Analytics", "Advertising"]; 
                                  // Hard codes to extract data
                                  // from purposesTypes and consent
                                  // Not the best practice. 
  const [showPopUp, setShowPopUp] = useState(false);
  const [detail, setDetail] = useState("");
  const [test, setTest] = useState(true); // Unresolved bug: I have to add this line to 
                                          // be able to toggle the switches.


  const popUp = (description: string) => {
    setDetail(description);
    setShowPopUp((prev) => !prev);
    console.log(showPopUp);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let tempConsent = consent;
    tempConsent.purposes[event.target.value] = !consent.purposes[event.target.value];
    setConsent(tempConsent);
    setTest((prev: boolean) => !prev);
  }

  return (
    <form className="options-container">
      <>
      {
        purpose?.map((el) => (
        <div className="option">
          <Switch value={el} checked={consent.purposes[el]} onChange={handleChange}/>
          <h2>{purposesTypes[el].name}</h2>
          <InfoButton onClick={()=> popUp(purposesTypes[el].description)} />
        </div>
        ))
        }
      </>
      <PopUp showPopUp={showPopUp} setShowPopUp={setShowPopUp} detail={detail} />
    </form>
  );
};

export default ConsentOptions;
