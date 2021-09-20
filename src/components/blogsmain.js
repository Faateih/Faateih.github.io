import React from "react";
import BlogsCard from "./blogscard";

const BlogsMain = () => {
  return (
    <div className="blogsmain">
      <div className="blogsmain__section-one">
        <h1 className="blogsmain__section-one-text">
          Check Out the Latest Articles
        </h1>
      </div>
      <div className="blogsmain__section-two">
        <div className="blogsmain__section-two-navigator">
          <div className="blogsmain__section-two-navigator-one">SORT BY:</div>
          <div className="blogsmain__section-two-navigator-two">
            {" "}
            <span className="blogsmain__section-two-navigator-two-span">
              DATE
            </span>{" "}
            / POPULAR
          </div>
        </div>
        <div className="blogsmain__section-two-cards">
          <BlogsCard />
          <BlogsCard />
          <BlogsCard />
          <BlogsCard />
          <BlogsCard />
          <BlogsCard />
          <BlogsCard />
          <BlogsCard />
          <BlogsCard />
          <BlogsCard />
          <BlogsCard />
        </div>
      </div>
    </div>
  );
};
export default BlogsMain;
