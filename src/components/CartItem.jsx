import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { remove } from "../redux/Slices/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item removed");
  };

  return (
    <div className="border-b border-gray-300 py-5">
      
      <div className="flex items-center p-2 md:p-5 justify-between">
        
        <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center w-full">

          {/* Image */}
          <div className="w-[30%] flex justify-center">
            <img
              className="w-[120px] h-[150px] object-contain"
              src={item.image}
              alt="Item Image"
            />
          </div>

          {/* Details */}
          <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">

            <h1 className="text-xl text-slate-700 font-semibold">
              {item.title}
            </h1>

            <p className="text-base text-slate-700 font-medium line-clamp-3">
              {item.description}
            </p>

            <div className="flex items-center justify-between">

              <p className="font-bold text-lg text-green-600">
                ${item.price}
              </p>

              <button
                onClick={removeFromCart}
                className="text-red-800 bg-red-200
                           hover:bg-red-400
                           transition duration-300
                           cursor-pointer
                           rounded-full p-3 mr-3"
              >
                <MdDelete />
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CartItem;