import Image from "next/image";
import { Icons } from "components/common";

const PostCard = (props: PostCardProps) => {
  const { title, views, summary, type, slug } = props;

  return (
    <a
      href={slug}
      className="-mx-4 border-y -mb-[1px] rounded-none flex flex-col sm:border border-gray-300 dark:border-gray-600 p-4 sm:mx-0 sm:rounded-xl hover:bg-gray-100 hover:dark:bg-gray-800"
    >
      <div className="flex gap-1">
        <div className="text-yellow-500 mr-auto">
          {type === "translate" ? "TRANSLATER" : "WRITER"}
        </div>
        <div className="flex">
          <Image
            src={Icons.User}
            alt="Post viewer icon"
            height={20}
            width={20}
          />
          <span className="text-yellow-500 ml-[2px]">{views}</span>
        </div>
      </div>
      <h3 className="font-bold">{title}</h3>
      <p className="dark:text-gray-400">{summary.slice(0, 75)}...</p>
    </a>
  );
};

interface PostCardProps {
  title: string;
  views: number;
  summary: string;
  type: string;
  slug: string;
}

export default PostCard;
