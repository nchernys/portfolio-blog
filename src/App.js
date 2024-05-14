import BubbleSort from "./bubbleSort";
import BinaryTree from "./binaryTree";
import Blog from "./allBlog";
import Queue from "./queueDataStructure";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTopOnMount() {
  const { pathname } = useLocation();
  useEffect(() => {
    console.log("ScrollToTopOnMount rendered");
    window.scrollTo(0, 0);
  }, [pathname]); // Only runs once when the component mounts

  return null;
}

const App = () => {
  return (
    <Router>
      <ScrollToTopOnMount />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/blog-binary-search" element={<BinaryTree />} />
        <Route path="/blog-bubble-sort" element={<BubbleSort />} />
        <Route path="/blog-queue-structure" element={<Queue />} />
      </Routes>
    </Router>
  );
};

export default App;
