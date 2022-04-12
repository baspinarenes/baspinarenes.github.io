import Link from "next/link";

const BlogPost = (props: BlogPostProps) => {
  const { title, summary, slug, views } = props;

  return (
    <Link href={slug}>
      <a className="py-2 px-7 border border-transparent hover:bg-gray-100 hover:border-gray-200 hover:dark:bg-gray-900 hover:dark:border-gray-600 -mx-4 sm:mx-0 sm:px-3 sm:rounded-lg ">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1 ">
          <h3 className="text-gray-500 font-bold order-2 sm:order-1 dark:text-gray-100">
            {title}
          </h3>
          <div className="order-1 sm:order-2 text-sm dark:text-gray-400">
            {views || "—"} okunma
          </div>
        </div>
        <p className="text-justify sm:text-left dark:text-gray-400">
          {summary}
        </p>
      </a>
    </Link>
  );
};

interface BlogPostProps {
  title: string;
  summary: string;
  slug: string;
  views?: number;
}

export default BlogPost;
