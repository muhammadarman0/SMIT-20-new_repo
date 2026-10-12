import React, { useEffect } from "react";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import { useDispatch, useSelector } from "react-redux";
import { galleryThunck } from "./store/slice/gallerySlice";

const App = () => {
  const dispatch = useDispatch();
const {loading,getGallery,error} = useSelector((state)=> state.gallery)
  useEffect(() => {
    dispatch(galleryThunck({ page: 1, limit: 10 }));
  }, [dispatch]);

  return (
    <>
      <div className="min-h-screen bg-[#0b1120]">
        {" "}
        <Hero /> <Footer />{" "}
      </div>
    </>
  );
};

export default App;
