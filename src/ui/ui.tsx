import React from 'react';
import ReactDOM from 'react-dom';
import { config } from './config';
import { getAirgap } from './init';
import ConsentManager from './ConsentManager';
import './ui.css';
import ConsentOptions from './ConsentOptions';

let initialized = false;
// UI root node in DOM
let root: Element | undefined;

const setupConsentManagerUI = async (): Promise<void> => {
  console.log('Initializing Consent Manager UI...');

  const airgap = await getAirgap();
  console.log('Purpose types config:', airgap.getPurposeTypes());
  console.log('Consent Manager UI config:', config);

  // TODO: Setup your consent manager UI DOM here
  const App: React.FC = () => {
    return (
      <>
        <ConsentManager airgap={airgap} curConsent={airgap.getConsent()} />
      </>
    );
  };
  
  root = document.createElement('div');
  root.className = 'ConsentManager hidden';
  root.id = 'consentUI';
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    root
  );
  document.body.firstElementChild?.before(root);
  // END: TODO: Setup your consent manager UI DOM here
  
  initialized = true;
  console.log('Consent Manager UI initialized');
};

const showConsentManagerUI = async () => {
  const airgap = await getAirgap();
  const consent = airgap.getConsent()
  console.log('Current consent:', consent);
  const ui = document.getElementById('consentUI');
  ReactDOM.render(<ConsentManager airgap={airgap} curConsent={consent} /> , ui);
  ui?.setAttribute("class", "ConsentManager");
};

export const showConsentManager = async () => {
  console.log('transcend.showConsentManager() called');
  if (!initialized) {
    await setupConsentManagerUI();
  }
  await showConsentManagerUI();
};
