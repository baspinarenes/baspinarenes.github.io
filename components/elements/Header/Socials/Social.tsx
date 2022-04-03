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
      className="bg-gray-200 w-9 h-9 rounded-lg flex items-center justify-center ring-2 ring-transparent hover:ring-gray-400 transition-all"
      rel="noreferrer"
    >
      <Image
        src={`/images/${name}.svg`}
        alt={`${name} icon`}
        height={20}
        width={20}
      />
    </a>
  );
};

export default Social;
