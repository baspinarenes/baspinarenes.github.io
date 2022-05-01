import usePostViewCount from "hooks/usePostViewCount";
import Link from "next/link";

const BlogPost = (props: BlogPostProps) => {
  const { title, summary, slug } = props;

  const views = usePostViewCount(slug, false);

  return (
    <Link href={slug}>
      <a className="
        py-2 px-7 -mx-4 sm:mx-0 sm:px-3
        border border-transparent sm:rounded-lg
        hover:bg-gray-100 hover:dark:bg-gray-800
        hover:border-gray-200 hover:dark:border-gray-600
      ">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1">
          <h4 className="order-2 sm:order-1 mb-0">{title}</h4>
          <div className="order-1 sm:order-2 text-sm dark:text-gray-400">
            {views > 0 ? views.toLocaleString() : "–––"} views
          </div>
        </div>
        <p className="mb-0 text-justify sm:text-left dark:text-gray-400">
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
}

export default BlogPost;
