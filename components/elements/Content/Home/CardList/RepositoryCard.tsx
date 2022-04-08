import Image from "next/image";

interface RepositoryCardProps {
  name: string;
  htmlUrl: string;
  description: string;
  starCount: number;
  forkCount: number;
  fork: boolean;
}

const RepositoryCard = (props: RepositoryCardProps) => {
  const { name, htmlUrl, description, fork, starCount, forkCount } = props;

  return (
    <a
      href={htmlUrl}
      className="flex flex-col border border-gray-300 p-4 rounded-xl hover:bg-gray-100"
    >
      <div className="flex gap-2 font-bold">
        <div className="font-bold text-yellow-500 mr-auto">
          {fork ? "CONTRIBUTER" : "OWNER"}
        </div>
        {forkCount > 0 && (
          <div className="flex">
            <Image
              src="/images/fork.svg"
              alt="Repository star icon"
              height={12}
              width={12}
            />
            <span className="text-yellow-500 ml-[2px]">{forkCount}</span>
          </div>
        )}
        {starCount > 0 && (
          <div className="flex">
            <Image
              src="/images/star.svg"
              alt="Repository star icon"
              height={20}
              width={20}
            />
            <span className="text-yellow-500">{starCount}</span>
          </div>
        )}
      </div>
      <h3 className="font-bold">{name}</h3>
      <p>{description}</p>
    </a>
  );
};

export default RepositoryCard;
