import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import { useSearchParams } from "react-router-dom";


const Home = () => {


  const[searchParams] =useSearchParams();
  const search = searchParams.get("search") || ""

  const[loading,setLoading] = useState(false);
  const[post,setPost] = useState([]);
  
  const filteredProducts =  post.filter((product) =>
  product.title.toLowerCase().includes(search.toLowerCase())
  );

  const API_URL = "https://fakestoreapi.com/products";

  async function fetchProductData() {
    setLoading(true);

    try{
      const res = await fetch(API_URL);
      const data = await res.json();
      setPost(data);

    }
     

    catch{
      console.log("Error!!!!!")
      setPost([]);
    }
    setLoading(false);
  }


  useEffect(() =>{
    fetchProductData();
  },[])

  return (
    <div>
      {
        loading? <Spinner/>  :
        post.length>0? 
        (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto gap-6 min-h-[80vh]">
          {
            filteredProducts.map( (post) => (
              <Product key = {post.id} post={post} />
            ))
          }
          </div>) : 
            <div className="flex justify-center items-center ">
              <p>No data found</p>
            </div>
      }
    </div>
  )
}

export default Home
