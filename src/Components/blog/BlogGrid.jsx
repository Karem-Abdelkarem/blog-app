import { posts } from "../../data/posts.js";
import BlogCard from "./BlogCard";

const BlogGrid = () => {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-304 mx-auto px-3 mt-12 mb-8">
      {posts.map((post) => {
        return <BlogCard key={post.id} post={post} />;
      })}
    </section>
  );
};
export default BlogGrid;
