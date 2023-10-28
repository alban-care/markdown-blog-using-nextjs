import Markdown from "@/app/components/Markdown";
import { getPostBySlug, getPostsMetadata } from "@/lib/posts";

export const generateStaticParams = async () => {
  const posts = await getPostsMetadata();
  return posts.map((post: { slug: any }) => ({
    params: { slug: post.slug },
  }));
};

const PostPage = async (props: any) => {
  const slug = props.params.slug;
  const { title, subtitle, date, content } = await getPostBySlug(slug);

  return (
    <article
      className="max-w-screen-lg relative container mx-auto px-4 py-2"
      id="post"
    >
      <header className="w-full">
        <time
          dateTime={props.date}
          className="absolute right-4 top-0 text-sm prose text-right"
        >
          {date}
        </time>
        <h1 className="text-4xl py-4 font-semibold">{title}</h1>
        <h2 className="text-lg prose italic">{subtitle}</h2>
        <hr className="border-gray-300 dark:border-gray-700 my-4" />
      </header>
      <Markdown markdown={content} />
    </article>
  );
};

export default PostPage;
