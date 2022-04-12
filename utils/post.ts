/* eslint-disable no-param-reassign */
import fs from "fs";
import path from "path";
import { bundleMDX } from "mdx-bundler";
import theme from "shiki/themes/nord.json";
import { remarkCodeHike } from "@code-hike/mdx";
import { BEAUTIFIED_POST_CATEGORY_NAMES } from "constants/post";
import { PostParams } from "models/post";
import siteData from "constants/site-data";
import axios from "axios";

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
  const slug = `/blog/${categoryName}/${postName}`;
  const viewsResponse = await axios(`${siteData.url}/api/views/${slug}/`);
  const views = viewsResponse.data.viewCount;

  return {
    ...frontmatter,
    date,
    slug,
    views,
    contentHtml,
    name: postName,
  };
};

const getPostForHome = (flatPosts: any) =>
  flatPosts.map((x: any) => getPostData(x[0], x[1]));

const getBlogPageData = () => {
  const postCategoryNames = getPostCategoryNames();

  const postCategories = postCategoryNames.map(async (postCategoryName) => {
    const categoryPostNames = getPostNamesByCategoryName(postCategoryName);
    const posts = categoryPostNames.map((postName) =>
      getPostData(postCategoryName, postName)
    );

    return {
      name: postCategoryName,
      beautifiedName: getBeautifiedPostCategoryName(postCategoryName),
      posts: (await Promise.allSettled(posts)).map((x: any) => x.value),
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
