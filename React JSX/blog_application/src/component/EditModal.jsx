import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Input from "../component/Input";
import Btns from "../component/Btns";
import { uploadImageToCloudinary } from "../File/file";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: 500 },
  maxHeight: "90vh",
  overflowY: "auto",
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};

const EditBlogModal = ({ data, open, handleClose, getblogUser }) => {
  const [blog, setBlog] = React.useState({
    id: data?.id || "",
    title: data?.title || "",
    description: data?.description || "",
    file: "",
    createdAt: data?.createdAt || null,
  });
  const [user, setUser] = React.useState(null);
  const getUser = () => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("User:", currentUser);
        console.log("UID:", currentUser.uid);
        console.log("Name:", currentUser.displayName);
        console.log("Photo:", currentUser.photoURL);

        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  };

  const blogHandlerValue = (field, value) => {
    setBlog((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const saveDataIntoDb = async (url, data) => {
    try {
      await setDoc(doc(db, "blogs", data.id), {
        title: data.title,
        description: data.description,
        blogImgUrl: url,

        authorId: user.uid,
        authorName: user.displayName || "Anonymous",
        authorImgUrl: user.photoURL || "",

        createdAt: data.createdAt,
      });

      console.log("Blog updated successfully");
      toast.success("Edit Blog SuccessFully");
    } catch (error) {
      console.log(error);
      toast.error("Failed To edit Blog");
    }
  };

  const postBlogHandler = async () => {
    try {
      let imgUrl = data.blogImgUrl;

      if (blog.file) {
        imgUrl = await uploadImageToCloudinary(blog.file);
      }

      await saveDataIntoDb(imgUrl, blog);
      getblogUser();
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    const unsubscribe = getUser();

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="edit-blog-title"
      >
        <Box sx={style}>
          <Typography
            id="edit-blog-title"
            variant="h5"
            fontWeight={700}
            sx={{ mb: 3 }}
          >
            Edit Your Blog
          </Typography>

          <Input
            handler={blogHandlerValue}
            label="Title"
            type="text"
            id="title"
            value={blog.title}
          />

          <Input
            handler={blogHandlerValue}
            label="Description"
            type="text"
            id="description"
            value={blog.description}
          />

          {/* Current Image */}
          {data?.blogImgUrl && (
            <Box sx={{ mt: 2, mb: 2 }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Current Image
              </Typography>

              <Box
                component="img"
                src={data.blogImgUrl}
                alt={data.title}
                sx={{
                  width: "100%",
                  height: 180,
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />
            </Box>
          )}

          <Input
            handler={blogHandlerValue}
            label="Change Image"
            type="file"
            id="file"
          />

          <Box
            sx={{
              display: "flex",
              gap: 2,
              mt: 3,
            }}
          >
            <Button
              fullWidth
              variant="outlined"
              color="inherit"
              onClick={handleClose}
            >
              Cancel
            </Button>

            <Button
              fullWidth
              variant="contained"
              onClick={() => postBlogHandler()}
            >
              Update Blog
            </Button>
          </Box>
        </Box>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default EditBlogModal;
