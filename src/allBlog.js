import "./allBlog.css";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <div className="blog-heading">
        <div className="blog-circle">
          <img
            className="avatar"
            src="./images/chernysheva_photo_12.jpg"
            alt=""
          />
          <h1>blog: </h1>
          <h2> challenge, solve, repeat!</h2>
          <h4>natalia chernysheva</h4>
          <div className="contacts">
            <a href="https://nchernysheva.com">
              <img
                src="https://img.icons8.com/ios/FFB200/100/domain--v1.png"
                alt="domain--v1"
              />
            </a>
            <a href="mailto:chernysn@gmail.com">
              <img
                src="https://img.icons8.com/ios-filled/FFB200/100/new-post.png"
                alt="new-post"
              />
            </a>
            <a href="https://www.linkedin.com/in/natalia-chernysheva-a24a4a229/">
              <img
                src="https://img.icons8.com/ios-filled/FFB200/100/linkedin.png"
                alt="linkedin"
              />
            </a>
            <a href="https://github.com/nchernys">
              <img
                src="https://img.icons8.com/ios-filled/FFB200/100/github.png"
                alt="github"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="blog-entry">
          <p>Blog</p>
          <h4>Binary Search Tree: how to use?</h4>
          <div className="img">
            <img src="./images/binary-tree.jpg" alt="" />
          </div>
          <a href="/blog-binary-search">
            <img
              className="arrow"
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/100/circled-right-2.png"
              alt="circled-right-2"
            />
          </a>
        </div>
        <div className="blog-entry">
          <p>Blog</p>
          <h4>Bubble Sort: simple and efficient!</h4>
          <div className="img">
            <img src="./images/bubbles.jpg" alt="" />
          </div>
          <a href="/blog-bubble-sort">
            <img
              className="arrow"
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/100/circled-right-2.png"
              alt="circled-right-2"
            />
          </a>
        </div>
        <div className="blog-entry">
          <p>Blog</p>
          <h4>Queue Data Structure: how to code an ice-cream shop? </h4>
          <div className="img">
            <img src="./images/ice-cream.jpg" alt="" />
          </div>
          <a href="/blog-queue-structure">
            <img
              className="arrow"
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/100/circled-right-2.png"
              alt="circled-right-2"
            />
          </a>
        </div>
        <div className="blog-entry">
          <p>Blog</p>
          <h4>To be continued...</h4>
          <div className="img">
            <img src="./images/coding.jpg" alt="" />
          </div>
          <p>
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/100/CCCDCF/circled-right-2.png"
              alt="circled-right-2"
            />
          </p>
        </div>
      </div>
      <footer className="py-3 px-3 bg-black text-right d-flex justify-content-end">
        <a
          className="text-light text-decoration-none"
          href="https://nchernysheva.com"
        >
          Portfolio
        </a>
      </footer>
    </>
  );
};

export default Blog;
