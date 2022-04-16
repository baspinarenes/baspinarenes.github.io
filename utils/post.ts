/* eslint-disable no-param-reassign */
import fs from "fs";
import path from "path";
import { bundleMDX } from "mdx-bundler";
import theme from "shiki/themes/nord.json";
import { remarkCodeHike } from "@code-hike/mdx";
import { BEAUTIFIED_POST_CATEGORY_NAMES } from "constants/post";
import { PostParams } from "models/post";
import readingTime from "reading-time";
import matter from "gray-matter";
import { getLocaleDateString, getPreviousDay } from "./date";

const postsDirectory = path.join(process.cwd(), "_posts");

const getPostCategoryNames = (): string[] => {
  const categoryFolderNames = fs.readdirSync(postsDirectory);

  return categoryFolderNames;
};

const getPostNamesByCategoryName = (categoryName: string): string[] => {
  const postNames = fs
    .readdirSync(path.join(postsDirectory, categoryName))
    .map((fileName) => fileName.replace(".mdx", ""));

  return postNames;
};

const getBeautifiedPostCategoryName = (rawCategoryName: string): string =>
  BEAUTIFIED_POST_CATEGORY_NAMES[rawCategoryName];

const getAllPostNames = () => {
  const postParams: PostParams[] = [];

  const postCategoryNames = getPostCategoryNames();

  postCategoryNames.forEach((categoryName: string) => {
    const postFileNames = getPostNamesByCategoryName(categoryName);

    postParams.push(
      ...postFileNames.map((name: string) => ({
        params: { categoryName, postName: name },
      }))
    );
  });

  return postParams;
};

const getPostData = async (categoryName: string, postName: string) => {
  const fullPath = path.join(postsDirectory, categoryName, postName);
  const source = fs.readFileSync(`${fullPath}.mdx`, "utf8");

  if (process.platform === "win32") {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      "node_modules",
      "esbuild",
      "esbuild.exe"
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      "node_modules",
      "esbuild",
      "bin",
      "esbuild"
    );
  }

  const { code: contentHtml, frontmatter } = await bundleMDX({
    source,
    cwd: postsDirectory,
    mdxOptions(options) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        [remarkCodeHike, { theme, lineNumbers: true }],
      ];
      options.rehypePlugins = [...(options.rehypePlugins ?? [])];

      return options;
    },
  });

  const date = getLocaleDateString(frontmatter.date);
  const isToday = date === getLocaleDateString(new Date().toLocaleDateString());
  const isYesterday = date === getPreviousDay();
  const slug = `/blog/${categoryName}/${postName}`;
  const readTime = Math.round(readingTime(source).minutes) + 5;

  return {
    ...frontmatter,
    // eslint-disable-next-line no-nested-ternary
    date: isToday ? "Bugün" : isYesterday ? "Dün" : date,
    slug,
    readTime,
    contentHtml,
    name: postName,
  };
};

const getPostMeta = (categoryName: string, postName: string) => {
  const fullPath = path.join(postsDirectory, categoryName, postName);
  const fileContent = fs.readFileSync(`${fullPath}.mdx`, "utf8");
  const matterResult = matter(fileContent);

  return {
    ...matterResult.data,
  };
};

const getPostForHome = (flatPosts: any) =>
  flatPosts.map((x: any) => getPostData(x[0], x[1]));

const getBlogPageData = () => {
  const postCategoryNames = getPostCategoryNames();

  const postCategories = postCategoryNames.map((postCategoryName) => {
    const categoryPostNames = getPostNamesByCategoryName(postCategoryName);
    const posts = categoryPostNames.map((postName) => {
      const { title, summary, date } = getPostMeta(postCategoryName, postName);
      const slug = `/blog/${postCategoryName}/${postName}`;

      return {
        slug,
        title,
        summary,
        name: postName,
        date: getLocaleDateString(date),
      };
    });

    return {
      name: postCategoryName,
      beautifiedName: getBeautifiedPostCategoryName(postCategoryName),
      posts,
    };
  });

  return postCategories;
};

export {
  getPostData,
  getPostForHome,
  getAllPostNames,
  getBlogPageData,
  getPostNamesByCategoryName,
  getBeautifiedPostCategoryName,
};
