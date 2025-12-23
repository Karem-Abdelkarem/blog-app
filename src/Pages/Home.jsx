import { useEffect, useState } from "react";
import BlogGrid from "../Components/blog/BlogGrid";
import { posts } from "../data/posts.js";
import Button from "../Components/ui/Button.jsx";
import { useOutletContext } from "react-router-dom";

const POSTS_STEP = 6;

const Home = () => {
  const [searchQuery] = useOutletContext();
  const [visibleCount, setVisibleCount] = useState(POSTS_STEP);

  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const visibleposts = filteredPosts.slice(0, visibleCount);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisibleCount(POSTS_STEP);
  }, [searchQuery]);

  const loadMoreHandler = () => {
    setVisibleCount((prev) => prev + POSTS_STEP);
  };

  return (
    <>
      <BlogGrid posts={visibleposts} />
      {visibleCount < filteredPosts.length && (
        <Button loadMoreHandler={loadMoreHandler} />
      )}
    </>
  );
};
export default Home;
