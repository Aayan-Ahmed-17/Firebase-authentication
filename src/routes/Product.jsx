import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../configs/firebaseConfig";
import Navbar from "../components/Navbar";

const Product = () => {
  const [product, setProduct] = useState(null);
  const navigate = useNavigate()

  function productDetailPage(item){
    navigate(`${item.id}`)
  }

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();

        console.log(data.products);
        setProduct(data.products);
      } catch {
        console.error("error");
      }
    }
    getData();
  }, []);

  return (
    <>
    <Navbar showSignoutButton={true}/>
    <div className="px-6 py-4 bg-gray-400">
      {product && (
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 sm:gap-6 md:gap-10  mx-auto gap-2">
          {product.map((e, i) => {
            return (
              <Card
                key={i}
                title={e.title}
                image={e.thumbnail}
                desc={e.description.slice(0, 50) + "..."}
                price={e.price}
                func={() => productDetailPage(e)}
                buttonText={"Show More"}
                />
            );
          })}
        </div>
      )}
    </div>
      </>
  );
};

export function SignoutFuncBtn(){
  const logoutUser = () => {
    signOut(auth).then(() => {
      navigate('/login')
    }).catch((error) => {
      // An error happened.
    });
  }

  return(
    <button onClick={logoutUser}>Signout</button>
  )
}

export default Product;
