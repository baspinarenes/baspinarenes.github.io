export interface PostParams {
  params: {
    categoryName: string;
    postName: string;
  };
}

export interface PostCategory {
  name: string;
  beautifiedName: string;
  posts: Post[];
}

export interface Post {
  name: string;
  title: string;
  date: string;
  summary: string;
  slug: string;
  views?: number;
  readTime: number;
}

export interface PostData extends Post {
  category: string;
  contentHtml: string;
}

export interface BeautifiedPostCategoryNamesByName {
  [key: string]: string;
}
