import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


  const Navbar = () => {

    const cart = useSelector((state) => state.cart);

  return(
    <div className="">
      <div className="flex justify-between items-center h-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <NavLink to="/"> 
        <div>
        <img src="/logo.png" alt="logo" width={100}/>
        </div>
        </NavLink>



        <div className="flex items-center font-medium text-slate-100 mr-2 sm:mr-5 space-x-4 sm:space-x-6">
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
