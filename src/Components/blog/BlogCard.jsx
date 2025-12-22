const BlogCard = ({ post }) => {
  return (
    <article className="font-work border border-border rounded-xl p-4">
      <div className="mb-4">
        <img src={post.image} alt={post.title} className="rounded-md" />
      </div>
      <div className="p-2">
        <div className="inline-block text-blue text-[14px] font-medium bg-light-blue rounded-md px-2.5 py-1 mb-4">
          {post.category}
        </div>
        <h2 className="text-heading font-semibold text-2xl">{post.title}</h2>
        <div className="flex items-center mt-5">
          <img className="mr-3" src={post.author.avatar} alt="author photo" />
          <span className="text-text font-medium text-[16px] mr-5">
            {post.author.name}
          </span>
          <span className="text-text text-[16px] font-medium">
            {post.publishedAt}
          </span>
        </div>
      </div>
    </article>
  );
};
export default BlogCard;
