import BlogGrid from "../Components/blog/BlogGrid";
import Navbar from "../Components/layout/Navbar";

const Home = () => {
  return (
    <main className="max-w-304 mx-auto">
      <Navbar />
      <BlogGrid />
    </main>
  );
};
export default Home;
