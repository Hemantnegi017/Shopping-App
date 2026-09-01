import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {

  const cart = useSelector((state) => state.cart);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(
      cart.reduce((acc, curr) => acc + curr.price, 0)
    );
  }, [cart]);

  return (

    <div>

      {cart.length > 0 ? (

        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">

          {/* ================= CART ITEMS ================= */}

          <div
            className="
              w-full
              md:w-[60%]
              flex
              flex-col
              p-2
              h-[650px]
              overflow-y-auto
            "
          >

            {cart.map((item, index) => (

              <CartItem
                key={item.id}
                item={item}
                itemIndex={index}
              />

            ))}

          </div>


          {/* ================= CART SUMMARY ================= */}

          <div className="w-full md:w-[40%] mt-5">

            <div className="p-5 md:ml-5">

              {/* Heading */}

              <div className="flex flex-col gap-3">

                <div className="font-semibold text-xl text-green-800">
                  Your Cart
                </div>

                <div className="font-semibold text-5xl text-green-700 -mt-2">
                  Summary
                </div>

                <p className="text-xl">
                  <span className="text-gray-700 font-semibold">
                    Total Items: {cart.length}
                  </span>
                </p>

              </div>


              {/* Amount + Checkout */}

              <div className="mt-[400px]">

                <p className="text-xl font-bold">
                  <span className="text-gray-700 font-semibold">
                    Total Amount:
                  </span>{" "}
                  ${totalAmount.toFixed(2)}
                </p>

                <button
                  className="
                    w-full
                    bg-green-700
                    hover:bg-purple-50
                    rounded-lg
                    text-white
                    transition
                    duration-300
                    ease-linear
                    mt-5
                    border-2
                    border-green-600
                    font-bold
                    hover:text-green-700
                    p-3
                    text-xl
                  "
                >
                  CheckOut Now
                </button>

              </div>

            </div>

          </div>

        </div>

      ) : (

        /* ================= EMPTY CART ================= */

        <div className="min-h-[80vh] flex flex-col items-center justify-center">

          <h1 className="text-gray-700 font-semibold text-xl mb-2">
            Your cart is empty!
          </h1>

          <Link to={"/"}>

            <button
              className="
                uppercase
                bg-green-600
                hover:bg-purple-50
                rounded-lg
                text-white
                transition
                duration-300
                ease-linear
                mt-5
                border-2
                border-green-600
                font-semibold
                hover:text-green-700
                p-3
                px-10
                tracking-wider
              "
            >
              Shop Now
            </button>

          </Link>

        </div>

      )}

    </div>
  );
};

export default Cart;