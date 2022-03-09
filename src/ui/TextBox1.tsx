import React from 'react';
import "./TextBox1.css";

interface Props {
  consentManagerTitle: string | undefined;
  body: string | undefined;
}

const TextBox1: React.FC<Props> = ({ consentManagerTitle, body }) => {
  function splitLines(p: string | undefined) {
    if (p)
      return p.split(/\r\n|\r|\n/);
  }
  return (
    <div className="text">
      <h1>{consentManagerTitle}</h1>
      <>
        {splitLines(body)?.map((line) => (
          <p>{line}</p>
        ))}
      </>
    </div>
  );
};

export default TextBox1;
