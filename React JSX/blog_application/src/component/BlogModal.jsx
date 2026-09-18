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

  const saveDataintoDb = async (url, data) => {
    try {
      const docRef = await addDoc(collection(db, "blogs"), {
        title: data.title,
        description: data.description,
        blogImgUrl: url,
        authorId: user.uid,
        authorName: user.displayName || "Anonmyous",
        authorImgUrl:
          user.photoURL ||
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAACUCAMAAAD79nauAAAARVBMVEX6+vqPj4////+JiYmwsLCMjIyFhYWTk5Pz8/PW1tbb29v29vbf39/k5OSWlpbs7OzCwsK6urqjo6PNzc2dnZ2qqqp+fn4V/E9vAAAEI0lEQVR4nO2c25KjIBBAtbkoKqCi+f9PXXSyE3c2MUAU2inOw8xW7QtnmubaWBSZTCaTyWQymUwmgxH4JnVLArEtb6UwvcUI2V5QxDa5G6aqqkpmKe0/xl5ezAP0wLlt/AZGOOnr61i03cxJ+QTOqSyu4GH7ESVPFRYIGyR+C6j76qXCGg1lWuQaIGfC9hyW5KAatQWIaTcM9z41dYgtQJRvwnAPhsJrAYY7OVgL1iC1APEuHTYWJc5YgGTODkuPwpjd0CqHnH5ARowS1MvBThg9Ogs7MHmDbu5uR4+E+AJdh4Le26EsK4PLQo+eGbGGgtap270FTEAgbChQTXm179B0D8WQuuEbQIYo2Blv0qmbvkHwMAuOqT+F9SYrgag/1VVQXtv+NLap2/6NvoU5WAs0gyw0wRI3NEsP6APz2koINBJDYF7bzEaz8vBehT8gaNbjMIdLDFniQH5HdwpPbIInsfvw0QnPEBu6/kM12YUvOwiaZYddAAY6YFoABi/FSZ+65Q/ABG+KUjf9gd8x7ANc29PAgwI+IEqJ5VQ/JBAlpi32cngW0J+QHZ4FHmOima6/gNo/FGxO3eqfgPCXwHfj5b2pwLOV2ABu17/fDhNCB7sM9Lp4rDBNEQ9cr+LXOCg0a/CfGFcLonBNc/9g3A5lrUPqlu7RuMTC9qXU7dwF6vdX8nxEX/AEA9sbpex/ojml2QHkXL2qVGGkQl6x9RcoBK2eFQ0xrmhziULGBWi7fiJ8Gw9GOBv77jIKC1DozlDFbzdOyPJTUSP1pRRWbIPbWgphjBCybovrGfzl4vXumUzmosBxJHNotRnoIQyiTrKyhVqMy3R8DJzPTQKNbn791CMEQmjsbTcYv3pkJ40p7sYbmrALiTcWkct9Xd8Y+MFYRAkIqYJ1gdBoFtCc5GBjEW3zCvSUzrRKxDplhno6T2KM41BAp86TmCL1JxChBQQOErEOmsGcKRHp+ihLZIkjJU5N7FgSjTpPItoQK0+c7KZYlRK/YcYuYL7+2imsGsWRaHWy0J0nEe8eCU4bYyPWSnxQV71PzKpraIOrefe5xTwo+OCxwR5xn2iDPkOCRX7rBUNwjftroj8w0i5fGfGDzNFLoMTRZ4Csil8T+MHLj+ekedRy7GSR5nURtOHvoZ44JHoPbC2OGqJYuo94QDEcczqeuAbKsAO6FFFpi8btVvXjLsXn1E9BwO6QPpkxbCQNgvoVqGkVqsFINeD4NuDy0Tzl/n2qB4RMiD6oB4XsR+LnwTiZe1yfNoRCN0PFXT0Y52roNIJk+MHqoW5vRRjhN9XLGlUQNti/rF7KSZdqif9znbG1/kHRBq3AnbVkRoueTkpVX5Rfv5QaaS/0ZSoC79U/tZZd0wjRNJ3UdZG4JigUFAVNmUwmk8lkMplMJrPDHzzuNUeTOqcvAAAAAElFTkSuQmCC",
        createdAt: serverTimestamp(),
      });
      toast.success("Blog Create Successfully");
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error("FAILED CREATE YOUR BLOG");
    }
  };

  const postBlogHandler = async () => {
    try {
      const imgUrl = await uploadImageToCloudinary(blog.file);
      console.log(blog);
      await saveDataintoDb(imgUrl, blog);
      handleClose(false);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    const unsubscribe = getUser();

    return () => unsubscribe();
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
