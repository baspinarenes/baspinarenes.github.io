import Image from "next/image";
import React from "react";
import { siteData } from "../../../../constants";

const ProfileCard = () => {
  const { name, title, summary } = siteData.author;

  return (
    <div className="flex flex-col-reverse sm:flex-row gap-4 sm:gap-8">
      <div className="flex flex-col gap-2 flex-1">
        <h1 className="font-bold text-4xl sm:text-5xl text-center sm:text-left">
          {name}
        </h1>
        <h4 className="font-semibold text-center sm:text-left">{title}</h4>
        <p className="text-justify sm:text-left">{summary}</p>
      </div>
      <div className="w-24 h-24 sm:w-36 sm:h-36 order-2 mx-auto sm:mx-0">
        <Image
          src="/images/icon.webp"
          alt="Scream tablo"
          height={144}
          width={144}
        />
      </div>
    </div>
  );
};

export default ProfileCard;
