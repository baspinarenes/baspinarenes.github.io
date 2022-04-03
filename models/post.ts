export interface PostParams {
  params: {
    categoryName: string;
    postName: string;
  };
}

export interface PostCategory {
  name: string;
  posts: Post[];
}

export interface Post {
  name: string;
  title: string;
  date: string;
  summary: string;
}

export interface PostData extends Post {
  category: "Genel Programlama";
  contentHtml: string;
}
