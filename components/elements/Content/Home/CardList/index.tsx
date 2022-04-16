import { MappedRepository } from "models/github";
import PostCard from "./PostCard";
import RepositoryCard from "./RepositoryCard";

interface CardListProps {
  type: string;
  data: any[];
}

const CardList = (props: CardListProps) => {
  const { type, data } = props;

  const slicedData = data.slice(0, 4);

  let cardComponents;

  switch (type) {
    case "repository":
      cardComponents = slicedData.map((x: MappedRepository) => (
        <RepositoryCard key={x.name} {...x} />
      ));
      break;
    case "post":
      cardComponents = slicedData.map((x) => <PostCard key={x.name} {...x} />);
      break;
    default:
      break;
  }

  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-bold text-black dark:text-white text-3xl sm:text-4xl">
        {type === "repository"
          ? "Popüler Repolarım"
          : "En Çok Okunan Yazılarım"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 sm:gap-y-2">
        {cardComponents}
      </div>
    </div>
  );
};

export default CardList;
