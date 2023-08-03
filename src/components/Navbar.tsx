import React, { useState } from 'react';
import { FaBars, FaUser, FaShoppingCart } from 'react-icons/fa';



const Navbar = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
 

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-gray-900 text-white">
      {/* Logo */}
      <div className="flex items-center">
        <img className="w-8 h-8 mr-2" src="/path/to/logo.png" alt="Logo" />
        <span className="text-lg font-semibold">Tên ứng dụng</span>
      </div>

      {/* Menu chính */}
      <ul className="hidden md:flex space-x-4">
        <li>
          <a href="/Login">Đăng nhập</a>
        </li>
        <li>
          <a href="">Đăng ký</a>
        </li>
        <li>
          <a href="#">
            <FaShoppingCart />
          </a>
        </li>
      </ul>

      {/* Nút mở rộng menu */}
      <div className="md:hidden">
        <button
          type="button"
          className="text-white focus:outline-none"
          onClick={handleToggleMenu}
        >
          <FaBars />
        </button>
         {/* Menu */}
      {isMenuOpen && (
        <ul className="mt-2">
          <li className="text-white py-2">
            <a href="/login" className="hover:black hover:bg-gray-200 hover:text-black">login</a>
          </li>
          <li className="text-white py-2">About</li>
        </ul>
      )}
      </div>
    </nav>
  );
};

export default Navbar;
