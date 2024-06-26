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
      <div className="w-auto mx-auto container d-flex justify-content-evenly justify-content-lg-between  justify-content-xl-evenly flex-wrap py-5">
        <div
          className="card m-2 pb-2"
          style={{ width: "16em", height: "30em" }}
        >
          <div className="img">
            <img
              className="object-fit-cover w-100 h-100"
              src="./images/binary-tree.jpg"
              alt=""
            />
          </div>
          <div className="card-body">
            {" "}
            <p>Blog</p>
            <p className="h5 fw-bold">Binary Search Tree: how to use?</p>
          </div>
          <button className="btn d-flex">
            <Link to="/blog-binary-search">
              <img
                className="arrow"
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/100/circled-right-2.png"
                alt="circled-right-2"
              />
            </Link>
          </button>
        </div>

        {/*
        <div
          className="card m-2  pb-2"
          style={{ width: "16em", height: "30em" }}
        >
          <div className="img">
            <img
              className="object-fit-cover w-100 h-100"
              src="./images/blog-insta.jpg"
              alt=""
            />
          </div>
        
          <div className="card-body">
            <p>Blog</p>
            <p className="h5 fw-bold">How to integrate an Instragram feed?</p>
          </div>
          <button className="btn d-flex">
            <a href="/blog-instagram-feed">
              <img
                className="arrow"
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/100/circled-right-2.png"
                alt="circled-right-2"
              />
            </a>
          </button>
        </div>
        */}
        <div
          className="card m-2  pb-2"
          style={{ width: "16em", height: "30em" }}
        >
          <div className="img">
            <img
              className="object-fit-cover w-100 h-100"
              src="./images/bubbles.jpg"
              alt=""
            />
          </div>
          <div className="card-body">
            <p>Blog</p>
            <p className="h5 fw-bold">Bubble Sort: simple and efficient!</p>
          </div>
          <button className="btn d-flex">
            <Link to="/blog-bubble-sort">
              <img
                className="arrow"
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/100/circled-right-2.png"
                alt="circled-right-2"
              />
            </Link>
          </button>
        </div>
        <div
          className="card m-2 pb-2"
          style={{ width: "16em", height: "30em" }}
        >
          <div className="img">
            <img
              className="object-fit-cover w-100 h-100"
              src="./images/ice-cream.jpg"
              alt=""
            />
          </div>
          <div className="card-body">
            <p>Blog</p>
            <p className="h5 fw-bold">
              Queue Data Structure: how to code an ice-cream shop?{" "}
            </p>
          </div>
          <button className="btn d-flex">
            <Link to="/blog-queue-structure">
              <img
                className="arrow"
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/100/circled-right-2.png"
                alt="circled-right-2"
              />
            </Link>
          </button>
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
