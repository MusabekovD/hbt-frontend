import React, { useEffect, useState } from "react";
import BathroomCard from "./BathroomCard";

const Bathroom = () => {
  const [baths, setBaths] = useState([]);

  useEffect(() => {
    fetch("https://hbt-backend.onrender.com/api/bathrooms?populate=*")
      .then((res) => res.json())
      .then((data) => setBaths(data.data));
  }, []); 
  
  return (
    <div>
      <div className="text-center p-10">
        <h1 className="text-3xl">Bathrooms</h1>
      </div>
      <div className="flex  flex-wrap items-center justify-center gap-[50px]">
        {baths.map((bath) => (
          <BathroomCard bath={bath} />
        ))}
      </div>
    </div>
  ); 
};

export default Bathroom;
// shadow-lg bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl
