import React from "react";
import { ExclamationIcon } from "@heroicons/react/outline";

const WarningBox = props => {
  const { children } = props;
  
  return (
    <div className="warning-box">
      <ExclamationIcon />
      <p>{children}</p>
    </div>
  );
};

export default WarningBox;
