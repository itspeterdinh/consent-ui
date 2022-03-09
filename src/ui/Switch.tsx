import React from 'react'
import "./Switch.css";

interface Props {
  value: string;
  checked: boolean | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Switch: React.FC<Props> = ({ value, checked, onChange }) => {
  return (
    <label className="switch">
      <input value={value} type="checkbox" checked={checked} onChange={onChange}/>
      <span className="slider" />
    </label>
  );
};

export default Switch;
