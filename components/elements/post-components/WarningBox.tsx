import React from "react";
import Image from "next/image";

const WarningBox = (props: WarningBoxProps) => {
  const { children } = props;

  return (
    <div className="-mx-4 warning-box grid grid-cols-1 justify-items-center items-center sm:grid-cols-10 p-5 gap-1 sm:gap-5 bg-gray-200 mb-8 sm:rounded-lg">
      <Image
        src="/images/warning.svg"
        width={30}
        height={30}
        alt="Warning icon"
        className="w-12 h-10 grid sm:col-span-1"
      />
      <p className="m-0 sm:col-span-9">{children}</p>
    </div>
  );
};

interface WarningBoxProps {
  children: React.ReactNode;
}

export default WarningBox;
