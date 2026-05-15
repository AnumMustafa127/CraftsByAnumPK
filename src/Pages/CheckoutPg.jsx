import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
function Checkout() {
  const location = useLocation()
  const data = location.state;
  console.log(data)

  return (

    <div className="min-h-screen text-[#D4DE95] bg-[#2d3416] flex items-center justify-center">

      <div className="border border-white pr-10 pt-2 pb-2 pl-10 rounded-xl w-[400px] flex flex-col gap-2">

        <h1 className="text-3xl font-bold text-center">
          Checkout
        </h1>

        {data && (
          <div className="flex flex-col gap-2">
            <img src={data.url} alt="" />
            <h2 className="font-bold text-xl ">{data.title}</h2>
            <p className="font-bold text-2xl ">Price: {data.price.new}</p>
            

            <Link to={'/PaymentPg'}>
            <button className="border-white border w-full p-2 rounded-md bg-white text-black  hover:scale-105 transition-all duration-300 font-semibold hover:bg-green-300">Pay Now</button>
            </Link>
          </div>
        )}
      </div>
    </div>

  );
}

export default Checkout;