import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";


const ProductDetails = () => {

  const submitReview = (e) => {
  e.preventDefault();

  console.log("SUBMIT CLICKED");

  const newReview = {
    id: Date.now(),
    name: reviewName,
    rating: reviewRating,
    comment: reviewComment,
  };

  console.log("NEW REVIEW:", newReview);

  setReviews((prevReviews) => {
    return [...prevReviews, newReview];
  });

  setReviewName("");
  setReviewRating(5);
  setReviewComment("");
};

    const [reviewName, setReviewName] = useState("");
    const [reviewRating, setReviewRating] = useState(5);
    const [reviewComment, setReviewComment] = useState("");


  const [reviews, setReviews] = useState([
  { id: 1, name: "Rahul", rating: 5, comment: "Amazing product!" },
  { id: 2, name: "Aman", rating: 4, comment: "Good product!" },
  { id: 3, name: "Priya", rating: 5, comment: "Worth the price!" }
  ]);

  const { id } = useParams();


  const cart = useSelector((state) => state.cart);
  const dispath = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    async function fetchProduct() {

      setLoading(true);

      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/${id}`
        );

        const data = await res.json();

        setProduct(data);
      }
      catch (error) {
        console.log("Error fetching product", error);
      }

      setLoading(false);
    }

    fetchProduct();

  }, [id]);


  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!product) {
    return <h1>Product not found</h1>;
  }


  const addToCart = () => {
    dispath(add(product));
    toast.success("Item added to Cart");
  }

  const removeFromCart = () => {
    dispath(remove(product));
    toast.error("Item remove from Cart!")
  }

  return (
  <div className="min-h-screen bg-gray-50 py-10">

    <div className="max-w-6xl mx-auto px-6">

      {/* Main Product Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT - IMAGE */}
          <div className="flex justify-center items-center bg-gray-50 rounded-xl p-10">

            <img
              src={product.image}
              alt={product.title}
              className="w-[300px] h-[400px] object-contain hover:scale-105 transition duration-300"
            />

          </div>


          {/* RIGHT - PRODUCT INFORMATION */}
          <div className="flex flex-col justify-center">

            {/* Category */}
            <p className="text-sm text-blue-600 font-semibold uppercase tracking-wider mb-3">
              {product.category}
            </p>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              {product.title}
            </h1>


            {/* Rating */}
            <div className="flex items-center gap-3 mt-5">

              <div className="flex items-center">
                <span className="text-yellow-400 text-xl">
                  ★
                </span>

                <span className="ml-1 font-semibold text-gray-700">
                  {product.rating.rate}
                </span>
              </div>

              <span className="text-gray-400">
                ({product.rating.count} reviews)
              </span>

            </div>


            {/* Price */}
            <div className="mt-6">
              <p className="text-3xl font-bold text-green-600">
                ${product.price}
              </p>
            </div>


            {/* Description */}
            <div className="mt-6">

              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Product Description
              </h2>

              <p className="text-gray-600 leading-7">
                {product.description}
              </p>

            </div>


            {/* Divider */}
            <div className="border-t border-gray-200 my-7"></div>


            {/* Add To Cart */}
            <button
              onClick={addToCart}
              className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold
              hover:bg-gray-700 transition duration-300"
            >
              Add to Cart
            </button>


            {/* Small information */}
            <div className="grid grid-cols-3 gap-3 mt-6">

              <div className="text-center border rounded-lg p-3">
                <p className="text-lg">🚚</p>
                <p className="text-xs text-gray-500 mt-1">
                  Fast Delivery
                </p>
              </div>

              <div className="text-center border rounded-lg p-3">
                <p className="text-lg">🔒</p>
                <p className="text-xs text-gray-500 mt-1">
                  Secure Payment
                </p>
              </div>

              <div className="text-center border rounded-lg p-3">
                <p className="text-lg">↩️</p>
                <p className="text-xs text-gray-500 mt-1">
                  Easy Returns
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* REVIEWS SECTION - WE WILL BUILD THIS NEXT */}

      <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">

        <h2 className="text-2xl font-bold text-gray-800">
          Customer Reviews
        </h2>

        <div className="border-t mt-5 pt-5">

        {
         reviews.map((review) => (

        <div
        key={review.id}
        className="border-b border-gray-200 py-5"
        >

        <div className="flex justify-between items-center">

          <h3 className="font-semibold text-gray-800">
            {review.name}
          </h3>

          <div className="text-yellow-400">
            {"★".repeat(review.rating)}
          </div>

        </div>

        <p className="text-gray-600 mt-2">
          {review.comment}
        </p>


      </div>

      ))

      
      }

<form onSubmit={submitReview}>
  <div className="mt-8 border-t pt-8" >

  <h2 className="text-xl font-bold text-gray-800 mb-5">
    Write a Review
  </h2>

  {/* Name */}
  <input
    type="text"
    placeholder="Your Name"
    value={reviewName}
    onChange={(e) => setReviewName(e.target.value)}
    className="w-full border border-gray-300 rounded-lg p-3 mb-4 outline-none focus:ring-2 focus:ring-gray-400"
  />

  {/* Rating */}
  <div className="mb-4">

    <label className="block font-semibold text-gray-700 mb-2">
      Rating
    </label>

    <select
      value={reviewRating}
      onChange={(e) => setReviewRating(Number(e.target.value))}
      className="border border-gray-300 rounded-lg p-2"
    >
      <option value="5">★★★★★ - 5</option>
      <option value="4">★★★★ - 4</option>
      <option value="3">★★★ - 3</option>
      <option value="2">★★ - 2</option>
      <option value="1">★ - 1</option>
    </select>

  </div>

  {/* Comment */}
  <textarea
    placeholder="Write your review..."
    value={reviewComment}
    onChange={(e) => setReviewComment(e.target.value)}
    rows="4"
    className="w-full border border-gray-300 rounded-lg p-3 mb-4 outline-none focus:ring-2 focus:ring-gray-400"
  />

  {/* Submit */}
  <button type="submit"
    className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
  >
    Submit Review
  </button>

    </div>
</form>
   </div>
   

      </div>

    </div>

  </div>
);
};

export default ProductDetails;