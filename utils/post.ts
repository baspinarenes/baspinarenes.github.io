/* eslint-disable no-param-reassign */
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import theme from "shiki/themes/nord.json"; // kendi temani yedir
import { remarkCodeHike } from "@code-hike/mdx";
import { getBeautifiedPostCategoryName } from "constants/post";
import { PostParams } from "../models/post";

const postsDirectory = path.join(process.cwd(), "_posts");

const getLocaleDateString = (dateString: string) => {
  const date = new Date(dateString);

  if (!date) {
    return "";
  }

  return `0${date.toLocaleString("tr-TR", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })}`.replace(/^0(?=\d{2})/, "");
};

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

  return {
    ...frontmatter,
    date,
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

const getBlogPageData = () => {
  const postCategoryNames = getPostCategoryNames();

  const postCategories = postCategoryNames.map((postCategoryName) => {
    const categoryPostNames = getPostNamesByCategoryName(postCategoryName);
    const posts = categoryPostNames.map((postName) => {
      const { title, summary, date } = getPostMeta(postCategoryName, postName);

      return {
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
  getPostNamesByCategoryName,
  getAllPostNames,
  getBlogPageData,
};
