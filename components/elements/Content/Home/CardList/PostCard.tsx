import Image from "next/image";

interface PostCardProps {
  name: string;
  viewerCount: number;
  description: string;
  type: string;
  postUrl: string;
}

const PostCard = (props: PostCardProps) => {
  const { name, viewerCount, description, type, postUrl } = props;

  return (
    <a
      href={postUrl}
      className="flex flex-col border border-gray-300 p-4 rounded-xl hover:bg-gray-100"
    >
      <div className="flex justify-between">
        <div className="font-bold text-yellow-500">
          {type === "translate" ? "TRANSLATER" : "WRITER"}
        </div>
        <div className="flex">
          <span>{viewerCount}</span>
          <Image
            src="/images/users.svg"
            alt="Post viewer icon"
            height={20}
            width={20}
          />
        </div>
      </div>
      <h3 className="font-bold">{name}</h3>
      <p>{description}</p>
    </a>
  );
};

export default PostCard;
