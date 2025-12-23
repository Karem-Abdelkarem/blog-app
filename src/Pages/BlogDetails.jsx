import { useParams } from "react-router-dom";
import { posts } from "../data/posts.js";

const BlogDetails = () => {
  const { id } = useParams();

  const post = posts.find((post) => post.id === Number(id));

  return (
    <article className="max-w-200 mx-auto mt-8">
      <div className="inline-block text-white text-[14px] font-medium bg-blue rounded-md px-2.5 py-1 mb-4">
        {post.category}
      </div>
      <h1 className="mt-4 text-4xl text-heading font-semibold">{post.title}</h1>
      <div className="flex items-center mt-5">
        <img className="mr-3" src={post.author.avatar} alt="author photo" />
        <span className="text-text font-medium text-[16px] mr-5">
          {post.author.name}
        </span>
        <span className="text-text text-[16px] font-medium">
          {post.publishedAt}
        </span>
      </div>
      <div className="flex justify-center my-8">
        <img src={post.image} alt={post.title} className="rounded-md" />
      </div>
      <p className="text-[20px] text-content leading-8">{post.content}</p>
    </article>
  );
};
export default BlogDetails;
