import React, { useEffect } from "react";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import { useDispatch, useSelector } from "react-redux";
import { galleryThunck } from "./store/slice/gallerySlice";

const App = () => {
  const dispatch = useDispatch();
  const { loading, getGallery, error } = useSelector((state) => state.gallery);
  useEffect(() => {
    dispatch(galleryThunck({ page: 1, limit: 10 }));
  }, [dispatch]);

  return (
    <>
      <div className="min-h-screen bg-[#0b1120]">
        {" "}
        {loading ? (
          <div className="flex items-center justify-center min-h-screen">
            <div class="relative">
              <div className="relative w-32 h-32">
                <div
                  className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-r-[#0ff] border-b-[#0ff] animate-spin"
                  // style="animation-duration: 3s;"
                ></div>

                <div
                  className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-t-[#0ff] animate-spin"
                  // style="animation-duration: 2s; animation-direction: reverse;"
                ></div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-tr from-[#0ff]/10 via-transparent to-[#0ff]/5 animate-pulse rounded-full blur-sm"></div>
            </div>
          </div>
        ) : (
          <>
            {" "}
            <Hero />{" "}
          </>
        )}
        <Footer />
      </div>
    </>
  );
};

export default App;
