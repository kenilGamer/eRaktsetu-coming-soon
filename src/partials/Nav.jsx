import React, { useEffect, useState, useCallback } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <nav className="w-full h-[10vh] nav flex items-center justify-between px-6">
      <div className="mt-2">
        <img src="/imgs/logo.png" className="md:w-[16vw] w-[40vw]" alt="Logo" />
      </div>

      {/* Desktop Menu */}
      {!isMobile ? (
        <div className="flex items-center gap-4 mt-1">
          <Link to="/"  className="text-[#777777]">
            Home
          </Link>
          <Link to="/about"  className="text-[#777777]">
            About Us
          </Link>
          <Link to="#"  className="text-[#777777]">
            Features
          </Link>
          <Link to="#"  className="text-[#777777]">
            FAQ's
          </Link>
        </div>
      ) : (
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl">
          {menuOpen ? <IoClose /> : <IoIosMenu />}
        </button>
      )}

      {/* Full-Screen Mobile Menu */}
      {isMobile && menuOpen && (
        <div className="fixed inset-0 w-full h-fit bg-white flex flex-col items-center p-20 gap-6 z-50">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-5 text-4xl"
          >
            <IoClose />
          </button>
          <img src="/imgs/logo.png" width={200} alt="" />

          <button className="rounded-xl bg-[#AB1419] text-white px-5 py-2">Join Us</button>
          <Link to="#"  className="text-[#777777] text-2xl">
            Home
          </Link>
          <Link to="/about"  className="text-[#777777] text-2xl">
            About Us
          </Link>
          <Link to="#"  className="text-[#777777] text-2xl">
            Features
          </Link>
          <Link to="#"  className="text-[#777777] text-2xl">
            FAQ's
          </Link>
          <div className="w-full  flex items-center justify-center">
            <div className="text-2xl font-bold flex items-center gap-4">
              <img src="/imgs/facebook.svg" className="w-5" alt="" />
              <img src="/imgs/ig.svg" alt="" />
              <img src="/imgs/twitter.svg" alt="" />
              <img src="/imgs/linkedin.svg" alt="" />
            </div>
          </div>
        </div>
      )}

      {/* CTA Buttons */}
      {!isMobile && (
        <div className="flex items-center gap-6">
          <button className="join-us-btn">Join Us</button>
          <button className="donate-now text-white">Donate Now</button>
        </div>
      )}
    </nav>
  );
}

export default Nav;
