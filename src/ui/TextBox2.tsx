import React from 'react';
import type { TrackingPurposeDetails } from 'src/@types/airgap.js';
import "./TextBox2.css";

interface Props {
  requiredDisclosuresHeader: string | undefined;
  RequiredByLaw: TrackingPurposeDetails;
  Parkinsons_Cursor_Tracking: TrackingPurposeDetails;
}

const TextBox2: React.FC<Props> = ({
  requiredDisclosuresHeader,
  RequiredByLaw,
  Parkinsons_Cursor_Tracking,
}) => {
  return (
    <div className="text">
      <p>{requiredDisclosuresHeader}</p>
      <p>
          <h3>
            <strong>{RequiredByLaw.name}</strong>{" "}{RequiredByLaw.description}
          </h3>
          <h3>
            <strong>{Parkinsons_Cursor_Tracking.name}</strong>{" "}{Parkinsons_Cursor_Tracking.description}
          </h3>
      </p>
    </div>
  );
};

export default TextBox2;
