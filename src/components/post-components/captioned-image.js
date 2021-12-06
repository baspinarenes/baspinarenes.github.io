import React from "react";
import LargeImage from "./large-image";
import useImageSharp from "../../hooks/useImageSharp";

const CaptionedImage = props => {
  const { position, fluid, src, caption, reference, width = "6rem" } = props;

  const imageSrc = useImageSharp(src);

  return (
    <div
      className="captioned-image"
      style={{
        float: position || "none",
        width: fluid ? "100%" : width,
        margin:
          position &&
          (position === "left" ? "0.3rem 1rem 0 0" : "0.3rem 0 0 1rem"),
      }}
    >
      <a href={reference}>
        {fluid ? <LargeImage src={imageSrc} /> : <img src={imageSrc} />}
      </a>
      <p
        style={{
          marginTop: "0.2rem",
          fontSize: "0.9rem",
          lineHeight: "1.2rem",
          textAlign: "center",
        }}
      >
        {caption}
      </p>
    </div>
  );
};

export default CaptionedImage;
