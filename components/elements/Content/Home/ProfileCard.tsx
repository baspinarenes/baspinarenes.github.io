import Image from "next/image";
import { siteData } from "constants/index";

const ProfileCard = () => {
  const { name, title, company, summary } = siteData.author;

  return (
    <div className="flex flex-col-reverse sm:flex-row gap-4 sm:gap-8">
      <div className="flex flex-col gap-2 flex-1">
        <h1 className="text-4xl sm:text-5xl text-center sm:text-left mb-1">
          {name}
        </h1>
        <h2 className="mb-3 mt-0 text-base text-center sm:text-left">
          {title} at <span className="font-semibold ">{company}</span>
        </h2>
        <p className="text-justify sm:text-left text-gray-600 dark:text-gray-400">
          {summary}
        </p>
      </div>
      <div className="w-24 h-24 sm:w-36 sm:h-36 order-2 mx-auto sm:mx-0 dark:animate-scream">
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
