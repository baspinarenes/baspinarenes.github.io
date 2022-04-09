import Link from "next/link";

const BlogPost = (props: BlogPostProps) => {
  const { name, title, date, summary, category } = props;

  return (
    <Link href={`/blog/${category}/${name}`}>
      <a className="py-4 px-7 border border-transparent hover:bg-gray-100 hover:border-gray-200 hover:dark:bg-gray-900 hover:dark:border-gray-600 -mx-4 sm:mx-0 sm:px-3 sm:rounded-lg ">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1">
          <h3 className="text-gray-500 font-bold order-2 sm:order-1 dark:text-yellow-500">
            {title}
          </h3>
          <time className="text-sm order-1 sm:order-2">{date}</time>
        </div>
        <p className="text-justify sm:text-left">{summary}</p>
      </a>
    </Link>
  );
};

interface BlogPostProps {
  name: string;
  title: string;
  date: string;
  summary: string;
  category: string;
}

export default BlogPost;
