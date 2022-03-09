import React from 'react';
import "./InfoButton.css";

interface Props {
  onClick: () => void;
}

const InfoButton: React.FC<Props> = ({ onClick }) => {
  return <label className="icon" onClick={onClick}></label>;
};

export default InfoButton;
