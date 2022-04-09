import Image from "next/image";
import { Icons } from "components/elements/common";

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
      className="-mx-4 border-y -mb-[1px] rounded-none flex flex-col sm:border border-gray-300 dark:border-gray-600 p-4 sm:mx-0 sm:rounded-xl hover:bg-gray-100 hover:dark:bg-gray-800"
    >
      <div className="flex gap-1 font-bold">
        <div className="font-bold text-yellow-500 mr-auto">
          {fork ? "CONTRIBUTER" : "OWNER"}
        </div>
        {forkCount > 0 && (
          <div className="flex">
            <Image
              src={Icons.Fork}
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
              src={Icons.Star}
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
