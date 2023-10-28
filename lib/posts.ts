import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export const getPostsMetadata = async () => {
  const posts = await fs.readdir(path.join(process.cwd(), "posts"));
  const postsMetadata = await Promise.all(
    posts.map(async (post) => {
      const content = await fs.readFile(
        path.join(process.cwd(), "posts", post),
        null
      );
      const { data } = matter(content);
      return {
        title: data.title,
        date: data.date,
        subtitle: data.subtitle,
        slug: post.replace(".md", ""),
      };
    })
  );

  return postsMetadata;
};

export const getPostBySlug = async (slug: string) => {
  const content = await fs.readFile(
    path.join(process.cwd(), "posts", `${slug}.md`),
    null
  );
  const { data, content: markdownContent } = matter(content);
  return {
    title: data.title,
    date: data.date,
    subtitle: data.subtitle,
    content: markdownContent,
  };
};
