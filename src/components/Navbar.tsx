import  { useState, useEffect, useRef } from 'react';
import { FaBars, FaUser, FaShoppingCart,FaTimes, FaSignInAlt, FaUserPlus, FaInfoCircle, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      menuRef.current &&
      event.target instanceof Node &&
      !menuRef.current.contains(event.target) &&
      !menuRef.current.parentElement?.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    console.log('isMenuOpen', isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className='navbar'>
      <div className=" nav-header flex items-center justify-between px-4 py-2 bg-gray-900 text-white">
        {/* Logo */}
        <div className="flex items-center">
           <FaUser className="text-2xl mr-2" /> 
          <span className="text-lg font-semibold uppercase">Huyquanhoa</span>
        </div>

        {/* Menu chính */}
        <ul className="hidden md:flex space-x-4">
        <li>
            <Link to="/library" className=" text-white hover:text-gray-300 transition uppercase">Library</Link>
          </li> 
          <li>
            <Link to="/Login" className="text-white hover:text-gray-300 transition uppercase">Đăng nhập</Link>
          </li>
          <li>
            <Link to="#" className="text-white hover:text-gray-300 transition uppercase">Đăng ký</Link>
          </li>
          <li>
            <Link to="#" className="text-white hover:text-gray-300 transition">
              <FaShoppingCart />
            </Link>
          </li>
        </ul>

        {/* Nút mở rộng menu */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-white focus:outline-none p-2  rounded-lg"
            onClick={handleToggleMenu}
          >
            {isMenuOpen ? <FaTimes className="pointer-events-none"/> : <FaBars className="pointer-events-none"/>}
          </button>
        </div>
      </div>
      {isMenuOpen && (
       <ul
       ref={menuRef}
       className="mt-2 bg-white border rounded-lg w-48 absolute top-12 right-4 shadow-md"
     >
       <li className="py-2">
         <Link to="/login" className="flex items-center px-4 text-black hover:text-gray-500 transition uppercase">
           <FaSignInAlt className="mr-2 uppercase" />
           Login
         </Link>
       </li>
       <li className="py-2">
         <Link to="#" className="flex items-center px-4 text-black hover:text-gray-500 transition uppercase">
           <FaUserPlus className="mr-2 " />
           Register
         </Link>
       </li>
       <li className="py-2">
         <Link to="#" className=" flex items-center px-4 text-black hover:text-gray-500 transition uppercase">
           <FaInfoCircle className="mr-2 " />
           About
         </Link>
       </li>
       <li className="py-2">
         <Link to="#" className="flex items-center px-4 text-black hover:text-gray-500 transition uppercase">
           <FaHome className="mr-2  " />
           Home
         </Link>
       </li>
     </ul>  
      )}
    </div>
  );
};

export default Navbar;
