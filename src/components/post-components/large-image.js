import React from "react";
import useImageSharp from "../../hooks/useImageSharp";

const LargeImage = props => {
  const { src } = props;

  const imageSrc = useImageSharp(src);

  return (
    <div className="large-image">
      <img src={imageSrc} alt="" />
    </div>
  );
};

export default LargeImage;
