import React from 'react';
import './CloseButton.css';

interface Props {
  onClick: () => void;
}

const CloseButton: React.FC<Props> = ({ onClick }) => {
  return (<label className="close" onClick={onClick}></label>);
};

export default CloseButton;
