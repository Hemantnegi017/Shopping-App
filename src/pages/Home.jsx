import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";


const Home = () => {

  const[loading,setLoading] = useState(false);
  const[post,setPost] = useState([]);
  
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
            post.map( (post) => (
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
