import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/layout/Navbar";

const Layout = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="max-w-304 mx-auto mb-10">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Outlet context={[searchQuery]} />
    </main>
  );
};
export default Layout;
