import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import BlogDetails from "./pages/BlogDetails";
import BlogCreate from "./pages/BlogCreate";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/create" element={<BlogCreate />} />
      </Routes>
    </>
  )
}

export default App
