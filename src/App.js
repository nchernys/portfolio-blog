import BubbleSort from "./bubbleSort";
import BinaryTree from "./binaryTree";
import Blog from "./allBlog";
import Queue from "./queueDataStructure";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InstagramFeed from "./instagramFeedAPI";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/blog-binary-search" element={<BinaryTree />} />
        <Route path="/blog-bubble-sort" element={<BubbleSort />} />
        <Route path="/blog-queue-structure" element={<Queue />} />
        <Route path="/blog-instagram-feed" element={<InstagramFeed />} />
      </Routes>
    </Router>
  );
};

export default App;
