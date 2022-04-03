/* eslint-disable react/require-default-props */
import Image from "next/image";

interface CustomImageProps {
  src: string;
  alt?: string;
  height?: number;
  width?: number;
  reference?: string;
  position?: string;
}

const CustomImage = (props: CustomImageProps) => {
  const { src, alt, height, width, reference = "", position = "" } = props;

  const lastLayout = position ? "fixed" : "responsive";
  const marginLeftOrRight =
    position === "right" ? "float-right ml-4" : "float-left mr-4";
  const imageNo = src.match(/(?<no>[1-9]+).\w+$/)?.groups?.no;

  return (
    <div
      className={`${
        position ? `${marginLeftOrRight} mb-6 mt-0` : "border shadow-sm -mx-4"
      } ${reference ? "" : "overflow-hidden"} relative leading-none my-8`}
    >
      <Image
        src={src}
        alt={alt ?? ""}
        height={height}
        width={width}
        layout={lastLayout as any}
        className={`${position ? "rounded-lg" : ""} sm:rounded-lg`}
      />
      <a
        href={reference}
        className="absolute left-0 bottom-[-2.7rem] inline-block w-full text-center hover:border-none"
      >
        [{imageNo}]
      </a>
    </div>
  );
};

export default CustomImage;
