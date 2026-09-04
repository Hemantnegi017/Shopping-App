import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { Navigate,useNavigate } from "react-router-dom";


  const Navbar = () => {

    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);
    const[search,setSearch] = useState("");

    const handelSearch = (e) => {

      const value = e.target.value;

      setSearch(value);
      
     
      navigate(`/?search=${value}`);
      
    };

  return(
    <div className="">
      <div className="flex justify-between items-center h-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <NavLink to="/"> 
        <div>
        <img src="/logo.png" alt="logo" width={100}/>
        </div>
        </NavLink>



        <div className="flex items-center font-medium text-slate-100 mr-2 sm:mr-5 space-x-4 sm:space-x-6">

        <div className="relative hidden sm:block">
          <input type="text"
          placeholder="Search products..."
          value={search}
          onChange={handelSearch}
          className="w-48 md:w-64 py-2 pl-4 pr-10 rounded-md "
           />
          
          
          <IoSearch onClick={handelSearch}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl cursor-pointer"
          />
        </div>

          <NavLink to="/">
          <p className="text-white">Home</p>
          </NavLink>

          <NavLink to="/cart">
          <div className="text-white relative">
            <FaShoppingCart className="text-2xl"/>
              {
                cart.length >0 ?
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex
                justify-center items-center animate-bounce rounded-full text-white
                ">{cart.length}</span>
                :null
                
              }
          </div>
          </NavLink>
        </div>

      </div>
    </div>
  )
  
};

export default Navbar
