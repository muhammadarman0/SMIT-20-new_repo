import React, { useState } from "react";
import {
  Search,
  ShoppingBag,
  User,
  Menu,
  X,
  LogOut,
  Heart,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { clearCard } from "../store/slices/cartSlice";
import { clearWishList } from "../store/slices/wishListSlice";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Wishlist
  const wishListItems = useSelector((state) => state.wishList.wishListProduct);
  const dispatch = useDispatch();
  // Cart
  const cartItems = useSelector((state) => state.cart?.cartProduct || []);

  const logOutHandler = async () => {
    try {
      await signOut(auth);


      setMenuOpen(false);
      dispatch(clearCard())
      dispatch(clearWishList())
      navigate("/login");
    } catch (error) {
      console.error("An error happened during sign out", error);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e8e8e8] bg-white">
      <nav className="mx-auto flex h-[72px] w-full max-w-[1425px] items-center justify-between px-5 sm:px-8 lg:h-[82px] lg:px-10">
        {/* LOGO */}
        <Link
          to="/"
          className="text-[22px] font-medium tracking-[5px] text-[#17191b] sm:text-[25px] lg:text-[28px]"
        >
          LUXEWEAR
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden items-center gap-7 lg:flex xl:gap-10">
          <Link
            to="/"
            className="text-[14px] font-medium text-[#17191b] transition hover:text-[#666]"
          >
            Home
          </Link>

          <Link
            to="/shop"
            className="text-[14px] text-[#555] transition hover:text-[#17191b]"
          >
            Shop
          </Link>

          <Link
            to="/men"
            className="text-[14px] text-[#555] transition hover:text-[#17191b]"
          >
            Men
          </Link>

          <Link
            to="/women"
            className="text-[14px] text-[#555] transition hover:text-[#17191b]"
          >
            Women
          </Link>

          <Link
            to="/shop?category=new"
            className="text-[14px] text-[#555] transition hover:text-[#17191b]"
          >
            New Arrivals
          </Link>
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-5 lg:flex">
          {/* Search */}
          <button
            type="button"
            className="cursor-pointer text-[#25282a] transition hover:text-[#777]"
          >
            <Search size={20} strokeWidth={1.7} />
          </button>

          {/* Profile */}
          <Link
            to="/profile"
            className="text-[#25282a] transition hover:text-[#777]"
            title="Profile"
          >
            <User size={20} strokeWidth={1.7} />
          </Link>

          {/* Wishlist */}
          <Link
            to="/wishList"
            className="relative text-[#25282a] transition hover:text-[#777]"
            title="Wishlist"
          >
            <Heart size={21} strokeWidth={1.7} />

            {wishListItems.length > 0 && (
              <span className="absolute -right-2.5 -top-2 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-[#17191b] px-1 text-[9px] text-white">
                {wishListItems.length}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative text-[#25282a] transition hover:text-[#777]"
            title="Cart"
          >
            <ShoppingBag size={21} strokeWidth={1.7} />

            {cartItems.length > 0 && (
              <span className="absolute -right-2.5 -top-2 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-[#17191b] px-1 text-[9px] text-white">
                {cartItems.length}
              </span>
            )}
          </Link>

          {/* Logout */}
          <button
            type="button"
            onClick={logOutHandler}
            title="Logout"
            className="cursor-pointer text-[#25282a] transition hover:text-red-500"
          >
            <LogOut size={20} strokeWidth={1.7} />
          </button>
        </div>

        {/* MOBILE ACTIONS */}
        <div className="flex items-center gap-4 lg:hidden">
          {/* Wishlist */}
          <Link
            to="/wishList"
            className="relative text-[#25282a]"
            title="Wishlist"
          >
            <Heart size={20} strokeWidth={1.7} />

            {wishListItems.length > 0 && (
              <span className="absolute -right-2.5 -top-2 flex h-[16px] min-w-[16px] items-center justify-center rounded-full bg-[#17191b] px-1 text-[8px] text-white">
                {wishListItems.length}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative text-[#25282a]" title="Cart">
            <ShoppingBag size={20} strokeWidth={1.7} />

            {cartItems.length > 0 && (
              <span className="absolute -right-2.5 -top-2 flex h-[16px] min-w-[16px] items-center justify-center rounded-full bg-[#17191b] px-1 text-[8px] text-white">
                {cartItems.length}
              </span>
            )}
          </Link>

          {/* Menu */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer text-[#25282a]"
          >
            {menuOpen ? (
              <X size={23} strokeWidth={1.7} />
            ) : (
              <Menu size={23} strokeWidth={1.7} />
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="border-t border-[#e8e8e8] bg-white lg:hidden">
          <div className="mx-auto flex w-full max-w-[1425px] flex-col px-5 py-5 sm:px-8">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#eeeeee] py-4 text-[15px] font-medium text-[#17191b]"
            >
              Home
            </Link>

            <Link
              to="/shop"
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#eeeeee] py-4 text-[15px] text-[#555]"
            >
              Shop
            </Link>

            <Link
              to="/men"
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#eeeeee] py-4 text-[15px] text-[#555]"
            >
              Men
            </Link>

            <Link
              to="/women"
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#eeeeee] py-4 text-[15px] text-[#555]"
            >
              Women
            </Link>

            <Link
              to="/shop?category=new"
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#eeeeee] py-4 text-[15px] text-[#555]"
            >
              New Arrivals
            </Link>

            <Link
              to="/wishList"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between border-b border-[#eeeeee] py-4 text-[15px] text-[#555]"
            >
              <span className="flex items-center gap-3">
                <Heart size={18} strokeWidth={1.7} />
                Wishlist
              </span>

              {wishListItems.length > 0 && (
                <span className="text-xs text-gray-400">
                  {wishListItems.length}
                </span>
              )}
            </Link>

            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between border-b border-[#eeeeee] py-4 text-[15px] text-[#555]"
            >
              <span className="flex items-center gap-3">
                <ShoppingBag size={18} strokeWidth={1.7} />
                Cart
              </span>

              {cartItems.length > 0 && (
                <span className="text-xs text-gray-400">
                  {cartItems.length}
                </span>
              )}
            </Link>

            <Link
              to="/profile"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 border-b border-[#eeeeee] py-4 text-[15px] text-[#555]"
            >
              <User size={18} strokeWidth={1.7} />
              Profile
            </Link>

            <button
              type="button"
              onClick={logOutHandler}
              className="flex cursor-pointer items-center gap-3 py-4 text-left text-[15px] text-red-500"
            >
              <LogOut size={18} strokeWidth={1.7} />
              Logout
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
