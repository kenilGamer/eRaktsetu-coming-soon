import React, { useEffect, useState, useCallback } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

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
        <img src="/imgs/logo.png" className="md:w-[16vw] w-[32vw]" alt="Logo" />
      </div>

      {/* Desktop Menu */}
      {!isMobile ? (
        <div className="flex items-center gap-4 mt-1">
          <a href="#" className="text-[#777777]">Home</a>
          <a href="#" className="text-[#777777]">About Us</a>
          <a href="#" className="text-[#777777]">Features</a>
          <a href="#" className="text-[#777777]">FAQ's</a>
        </div>
      ) : (
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl">
          {menuOpen ? <IoClose /> : <IoIosMenu />}
        </button>
      )}

      {/* Full-Screen Mobile Menu */}
      {isMobile && menuOpen && (
        <div className="fixed inset-0 w-full h-fit bg-white flex flex-col items-center p-20 gap-6 z-50">
          <button onClick={() => setMenuOpen(false)} className="absolute top-5 right-5 text-4xl">
            <IoClose />
          </button>
          <img src="/imgs/logo.png" width={200} alt="" />
          <a href="#" className="text-[#777777] text-2xl">Home</a>
          <a href="#" className="text-[#777777] text-2xl">About Us</a>
          <a href="#" className="text-[#777777] text-2xl">Features</a>
          <a href="#" className="text-[#777777] text-2xl">FAQ's</a>
          <button className="join-us-btn">Join Us</button>
          <button className="donate-now text-white">Donate Now</button>
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
