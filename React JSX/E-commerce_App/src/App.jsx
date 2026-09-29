import React, { Profiler, useEffect } from "react";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import { logout, setCurrentUser } from "./store/slices/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase/auth";
import { useDispatch } from "react-redux";
import Shop from "./pages/Shop";
import Layout from "./component/Layout";
import { asycThunsProduct } from "./store/slices/apiPorduct";

const App = () => {
  const dispatch = useDispatch();

  const getProducts = async () => {
    // try {
    //   const response = await fetch("https://dummyjson.com/products?limit=100");

    //   const data = await response.json();

    //   setProducts(data.products);
    // } catch (error) {
    //   console.log("Products Error:", error);
    // } finally {
    //   setLoading(false);
    // }
    dispatch(asycThunsProduct());
  };

  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setCurrentUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          }),
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Layout />}>
          {" "}
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
