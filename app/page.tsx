import { getPostsMetadata } from "@/lib/posts";
import Link from "next/link";
import Card from "./components/Card";

export default async function HomePage() {
  const posts = await getPostsMetadata();

  if (!posts) {
    return <div>There are actually no posts.</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-2 px-4">
      {posts.map((post) => (
        <Card key={post.slug} {...post} />
      ))}
    </div>
  );
}
