import React, { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Avatar,
  Box,
  Divider,
  Tooltip,
} from "@mui/material";
import { setDoc } from "firebase/firestore";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../firebase/config";
import { toast, ToastContainer } from "react-toastify";
import EditBlogModal from "./EditModal";

const BlogCard = ({ data, allBlogs, getblogUser }) => {
  // Firestore Timestamp ko date mein convert karna
  const postTime = data.createdAt?.toDate ? data.createdAt.toDate() : null;
  const [user, setUser] = React.useState(null);
  const [editBlog, setEditBlog] = useState(null);
  const [open, setOpen] = useState(false);

  const formattedTime = postTime
    ? postTime.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "Just now";

  const getUser = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;

        console.log(user.uid);

        setUser(uid);
      } else {
        setUser(null);
      }
      //   setLoading(false);
    });
  };

  const blogEditHandler = (editBlog) => {
    setEditBlog(editBlog);
    setOpen(true);
  };
  const blogDeleteHandler = async (deleteBlogId) => {
    try {
      await deleteDoc(doc(db, "blogs", deleteBlogId));
      getblogUser();
      toast.success("Blog Delete SuccessFully");
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getUser();
    return () => getUser();
  }, []);
  return (
    <>
      <Card
        sx={{
          width: "100%",
          maxWidth: 380,
          borderRadius: 4,
          overflow: "hidden",
          backgroundColor: "#fff",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease",

          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.14)",
          },
        }}
      >
        {/* Blog Image */}
        {data.blogImgUrl && (
          <CardMedia
            component="img"
            height="220"
            image={data.blogImgUrl}
            alt={data.title}
            sx={{
              objectFit: "cover",
            }}
          />
        )}

        <CardContent sx={{ p: 2.5 }}>
          {/* Author Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.2,
              }}
            >
              <Avatar
                src={data.authorImgUrl || ""}
                alt={data.authorName}
                sx={{
                  width: 42,
                  height: 42,
                }}
              >
                {data.authorName?.charAt(0).toUpperCase()}
              </Avatar>

              <Box>
                <Typography variant="subtitle2" fontWeight={700}>
                  {data.authorName || "Anonymous"}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                  }}
                >
                  <AccessTimeIcon
                    sx={{
                      fontSize: 15,
                      color: "text.secondary",
                    }}
                  />

                  <Typography variant="caption" color="text.secondary">
                    {formattedTime}
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Edit & Delete */}
            {user == data.authorId ? (
              <Box>
                <Tooltip title="Edit">
                  <IconButton
                    size="small"
                    onClick={() => blogEditHandler(data)}
                    sx={{
                      color: "primary.main",
                    }}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Delete">
                  <IconButton
                    size="small"
                    onClick={() => blogDeleteHandler(data.id)}
                    sx={{
                      color: "error.main",
                    }}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Box>
            ) : (
              " "
            )}
          </Box>

          <Divider sx={{ mb: 2 }} />

          {/* Title */}
          <Typography
            variant="h5"
            fontWeight={700}
            sx={{
              mb: 1,
              lineHeight: 1.3,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {data.title}
          </Typography>

          {/* Description */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              lineHeight: 1.7,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              minHeight: 72,
            }}
          >
            {data.description}
          </Typography>
        </CardContent>
        <ToastContainer />
      </Card>
      {editBlog && (
        <EditBlogModal
          data={editBlog}
          open={open}
          handleClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default BlogCard;
