import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import BlogModal from "../component/BlogModal";
import { collection, getDocs } from "firebase/firestore";
import BlogCard from "../component/BlogCard";
import { db } from "../firebase/config";

const Blog = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  
  const blogUser = async () => {
    const querySnapshot = await getDocs(collection(db, "blogs"));
    let userblog = querySnapshot.docs.map((doc) => {
      //   console.log(`${doc.id} => ${doc.data()}`);
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setAllBlogs(userblog)
  };
  useEffect(() => {
    blogUser();
  }, []);
  console.log(allBlogs);

  return (
    <>
    <BlogModal />
    {allBlogs.length > 0 ? allBlogs.map((u)=> <BlogCard data={u} />) : "User Not Found"}
    </>
  );
};

export default Blog;
