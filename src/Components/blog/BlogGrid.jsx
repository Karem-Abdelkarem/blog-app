import BlogCard from "./BlogCard";

const BlogGrid = ({ posts }) => {
  if (posts.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-semibold text-heading">No posts found</h2>
        <p className="text-text mt-2">Try searching with a different keyword</p>
      </div>
    );
  }

  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 px-3 mt-0 sm:mt-12 mb-8">
      {posts.map((post) => {
        return <BlogCard key={post.id} post={post} />;
      })}
    </section>
  );
};
export default BlogGrid;
