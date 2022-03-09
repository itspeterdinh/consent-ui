import React, {useState, useEffect} from 'react';
import LinkAndClose from './LinkAndClose';
import ConsentOptions from './ConsentOptions';
import TextBox1 from './TextBox1';
import TextBox2 from "./TextBox2";
import { Button } from './Button';
import { config } from './config';
import "./ConsentManager.css";
import type { TrackingConsentDetails, AirgapAPI } from 'src/@types/airgap.js';

interface Props {
  airgap: AirgapAPI ;
  curConsent: TrackingConsentDetails;
}

const ConsentManager: React.FC<Props> = ( {airgap, curConsent} ) => {
    let purposesTypes = airgap.getPurposeTypes();

    const [newConsent, setNewConsent] = useState(curConsent);
    const modalRef = React.useRef<HTMLInputElement>(null);

    const closeModal = () => {
      const ui = document.getElementById('consentUI');
      ui?.setAttribute("class", "ConsentManager hidden");
    };


    const onClickHandler = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      airgap.setConsent(event.nativeEvent, newConsent.purposes);
      closeModal();
    };

    const onClickDenyAll = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      airgap.optOut(event.nativeEvent);
      closeModal();
    };

    const onClickAcceptAll = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      (console.log('Hello'));
      airgap.optIn(event.nativeEvent);
      closeModal();
    };
    
    const outClickClose = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      if (modalRef.current === e.target) {
        closeModal();
      }
    };
    
    useEffect(() => {
      setNewConsent(curConsent);
    });

    return (
      <>
        <div className="background" ref={modalRef} onClick={outClickClose}>
          <div className="consent-manager">
            <LinkAndClose 
              learnMoreLink={config.learnMoreLink}
              onClick={closeModal}
            />
            <div className="logo-container">
                <div className="transcend-logo"></div>
            </div>
            <TextBox1
              consentManagerTitle={config.consentManagerTitle}
              body={config.body}
            />
            <ConsentOptions purposesTypes={purposesTypes} consent={newConsent} setConsent={setNewConsent}/>
            <TextBox2
              requiredDisclosuresHeader={config.requiredDisclosuresHeader}
              RequiredByLaw={purposesTypes.RequiredByLaw}
              Parkinsons_Cursor_Tracking={purposesTypes.Parkinsons_Cursor_Tracking}
            />
            <div className="button-container">
              <Button onClick={onClickDenyAll} children={"Deny All"}></Button> 
              <Button onClick={onClickHandler} children={config.primaryButtonLabel}></Button>
              <Button onClick={onClickAcceptAll} children={"Accept All"}></Button>  
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default ConsentManager;