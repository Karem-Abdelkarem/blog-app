import { useState } from "react";
import BlogGrid from "../Components/blog/BlogGrid";
import Navbar from "../Components/layout/Navbar";
import { posts } from "../data/posts.js";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <main className="max-w-304 mx-auto">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <BlogGrid posts={filteredPosts} />
    </main>
  );
};
export default Home;
