import React from "react";
const BlogCard = ({ data }) => {
    console.log(data.title);
  return (<h1>{data.title}</h1>);
};

export default BlogCard;
