/* eslint-disable react/require-default-props */
import React from "react";
import Image from "next/image";

interface CustomImageProps {
  src: string;
  alt?: string;
  height?: number;
  width?: number;
  layout?: string;
}

const CustomImage = (props: CustomImageProps) => {
  const { src, alt, height, width, layout } = props;

  return (
    <div className="border -mx-5 rounded-lg overflow-hidden shadow-sm">
      <Image
        src={src}
        alt={alt ?? ""}
        height={167}
        width={718}
        layout="responsive"
      />
    </div>
  );
};

export default CustomImage;
