import React from 'react'
import CloseButton from "./CloseButton";

import "./LinkAndClose.css";

interface Props {
  learnMoreLink: string | undefined;
  onClick: () => void;
}

const LinkAndClose: React.FC<Props> = ({ learnMoreLink, onClick }) => {

  return (
    <div className="top-bar">
      <div>
        <a href={"https://www.google.com/"}>
          <label className="chevron-left"></label>
          <span className="link">{learnMoreLink}</span>
        </a>
      </div>
      <CloseButton onClick={onClick} />
    </div>
  );
};

export default LinkAndClose;
