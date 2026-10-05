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
import Men from "./pages/Men";
import { menProductThunk } from "./store/slices/menProductSlice";
import Women from "./pages/Women";
import { womenProductThunk } from "./store/slices/womenProductSlice";
import ProductDetails from "./pages/ProductDetail";
import ScrollToTop from "./component/ScrollToTop";
import Wishlist from "./pages/WishList";
import Cart from "./pages/Card";

const App = () => {
  const dispatch = useDispatch();

  const getProducts = async () => {

    dispatch(womenProductThunk());
    dispatch(menProductThunk());
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
    <>
      <BrowserRouter>
        <ScrollToTop />
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
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route
              path="/product/:productID"
              element={
                  <ProductDetails />
              }
            />
            <Route
              path="/wishList"
              element={
                <ProtectedRoute>
                  <Wishlist />
                </ProtectedRoute>
              }
            />
            <Route
              path="cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
