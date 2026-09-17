import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Input from "../component/Input";
import { uploadImageToCloudinary } from "../File/file.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config.js";
import Btns from "../component/Btns";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
// import { data } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [blog, setBlog] = React.useState({
    title: "",
    description: "",
    file: "",
  });
  const [user, setUser] = React.useState(null);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const blogHandlerValue = (field, value) => {
    setBlog((prev) => ({ ...prev, [field]: value }));
  };

  const getUser = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(uid);
      } else {
        setUser(null);
      }
      //   setLoading(false);
    });
  };

  console.log(user);

  const saveDataintoDb = async (url, data) => {
    try {
      const docRef = await addDoc(collection(db, "blogs"), {
        title: data.title,
        description: data.description,
        file: url,
        authorId: user,
        createdAt: serverTimestamp(),
      });
        toast.success("Blog Create Successfully");
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error("FAILED CREATE YOUR BLOG")
    }
  };

  const postBlogHandler = async () => {
    try {
      const imgUrl = await uploadImageToCloudinary(blog.file);
      console.log(blog);
      saveDataintoDb(imgUrl, blog);
      handleClose(false);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getUser();
    return () => getUser();
  }, []);
  return (
    <div>
      <Button onClick={handleOpen}>Create A blog</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create Your Blog
          </Typography>
          <Input
            handler={blogHandlerValue}
            label={"Title"}
            type={"text"}
            id={"title"}
          />
          <Input
            handler={blogHandlerValue}
            label={"Description"}
            type={"text"}
            id={"description"}
          />
          <Input
            handler={blogHandlerValue}
            label={"Chose File"}
            type={"file"}
            id={"file"}
          />
          <Btns handler={postBlogHandler} btnTitle={"Create blog"} />
        </Box>
      </Modal>
      <ToastContainer />
    </div>
  );
}
