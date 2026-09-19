import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import BlogModal from "../component/BlogModal";
import { collection, getDocs } from "firebase/firestore";
import BlogCard from "../component/BlogCard";
import { db } from "../firebase/config";
import EditBlogModal from "../component/EditModal";

const Blog = () => {
  const [allBlogs, setAllBlogs] = useState([]);

  const getblogUser = async () => {
    const querySnapshot = await getDocs(collection(db, "blogs"));
    let userblog = querySnapshot.docs.map((doc) => {
      //   console.log(`${doc.id} => ${doc.data()}`);
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    setAllBlogs(userblog);
  };

  useEffect(() => {
    getblogUser();
  }, []);

  console.log(allBlogs);
  return (
    <>
      <div className="flex flex-wrap p-5 gap-10 justify-around mt-10">
        {" "}
        {allBlogs.length > 0
          ? allBlogs.map((u) => (
              <BlogCard
                allBlogs={allBlogs}
                getblogUser={getblogUser}
                key={allBlogs.id}
                data={u}
              />
            ))
          : "User Not Found"}
        <EditBlogModal getblogUser={getblogUser} data={allBlogs} />
      </div>
    </>
  );
};

export default Blog;
