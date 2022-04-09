import Image from "next/image";

interface SocialProps {
  name: string;
  url: string;
}

const Social = (props: SocialProps) => {
  const { name, url } = props;

  return (
    <a
      href={url}
      target="_blank"
      className="bg-gray-200 dark:bg-[#444] w-8 h-8 rounded-lg flex items-center justify-center ring-2 ring-transparent hover:ring-gray-400"
      rel="noreferrer"
    >
      <Image
        src={`/icons/${name}.svg`}
        alt={`${name} icon`}
        height={17}
        width={17}
        className="dark:brightness-0 dark:invert"
      />
    </a>
  );
};

export default Social;
