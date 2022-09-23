/* eslint-disable react/require-default-props */
import Image from "next/image";
import { useState } from "react";

interface CustomImageProps {
  src: string;
  fluid: boolean;
  alt?: string;
  height?: number;
  width?: number;
  reference?: string;
  position?: string;
  borderless?: boolean;
}

const CustomImage = (props: CustomImageProps) => {
  const {
    src,
    alt,
    height,
    width,
    fluid = false,
    reference = "",
    position = "",
    borderless = false,
  } = props;

  const [isLoading, setLoading] = useState(true);

  const lastLayout = position ? "fixed" : "responsive";
  const marginLeftOrRight =
    position === "right" ? "float-right ml-4" : "float-left mr-4";

  return (
    <div
      className={`${fluid ? "-mx-4 w-[auto]" : ""} ${
        !fluid && !position ? "w-96" : ""
      } ${
        position
          ? `${marginLeftOrRight} mb-6 mt-0`
          : `${!borderless ? "border-y sm:border dark:border-0" : ""} mx-auto`
      } ${
        reference ? "" : "overflow-hidden"
      } sm:rounded-lg relative leading-none my-8`}
    >
      <Image
        src={src}
        alt={alt ?? ""}
        height={height}
        width={width}
        layout={lastLayout as any}
        className={`${
          position ? "rounded-lg" : ""
        } sm:rounded-lg duration-500 ease-in-out group-hover:opacity-50 ${
          isLoading
            ? "scale-110 blur-lg grayscale"
            : "scale-100 blur-0 grayscale-0"
        }`}
        onLoadingComplete={() => setLoading(false)}
      />
      <a
        href={reference}
        className="absolute left-0 bottom-[-2.3rem] inline-block w-full text-center border-none"
      >
        kaynak
      </a>
    </div>
  );
};

export default CustomImage;
