import { Link } from "react-router-dom";

const ComponentBlogReadMore = () => {
  return (
    <div className="other-links my-5 py-5">
      <h3> Read more ... </h3>
      <ul className="my-3">
        <li className="my-3">
          <a href="/blog-binary-search" className="text-secondary">
            Data Structures and Algorithms: What is a Binary Search Tree?
          </a>
        </li>
        <li className="my-3">
          <a href="/blog-bubble-sort" className="text-secondary">
            Data Structures and Algorithms: Bubble Sort and how to use it?
          </a>
        </li>
        <li>
          <a href="/blog-queue-structure" className="text-secondary">
            Queue Data Structure: how to code an ice-cream shop?
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ComponentBlogReadMore;
