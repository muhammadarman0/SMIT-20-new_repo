import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import BlogModal from "../component/BlogModal";
import { collection, getDocs } from "firebase/firestore";
import BlogCard from "../component/BlogCard";
import { db } from "../firebase/config";

const Blog = () => {
return(<BlogModal />)
};

export default Blog;
// 