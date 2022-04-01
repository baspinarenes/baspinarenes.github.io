import Image from "next/image";

interface RepositoryCardProps {
  name: string;
  htmlUrl: string;
  description: string;
  stargazersCount: number;
  fork: boolean;
}

const RepositoryCard = (props: RepositoryCardProps) => {
  const { name, htmlUrl, description, fork, stargazersCount } = props;

  return (
    <a
      href={htmlUrl}
      className="flex flex-col border border-gray-300 p-4 rounded-xl hover:bg-gray-100"
    >
      <div className="flex justify-between">
        <div className="font-bold text-yellow-500">
          {fork ? "CONTRIBUTER" : "OWNER"}
        </div>
        {stargazersCount > 0 && (
          <div className="flex">
            <span className="text-yellow-500">{stargazersCount}</span>
            <Image
              src="/images/star.svg"
              alt="Repository star icon"
              height={20}
              width={20}
            />
          </div>
        )}
      </div>
      <h3 className="font-bold">{name}</h3>
      <p>{description}</p>
    </a>
  );
};

export default RepositoryCard;
