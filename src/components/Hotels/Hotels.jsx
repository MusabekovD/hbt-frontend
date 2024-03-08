import SearchField from "../SearchField";
import BookingCard from "./BookingCard";
import { Children, useEffect, useState } from "react";
import Loading from "./Loading";
import { UserContext } from "../../context/GlobalContextProvider";

const Hotels = () => {
  const { filteredSearchData, loading } = UserContext()

  console.log(filteredSearchData)
  return (
    <div className="w-4/5 mx-auto">
      <div className="text-center p-10">
        <h1 className="text-3xl">Hotels</h1>
      </div>

      <SearchField />
      { filteredSearchData.length === 0 && (
        <p className="flex justify-center w-full items-center text-2xl font-bold text-indigo-700">Not found :( </p>
      )}
      {loading ? <Loading /> : (
        <div className="flex  flex-wrap items-center justify-center gap-[50px]">
          {filteredSearchData?.map((hotel) => (
            <BookingCard hotel={hotel} />
          ))}
        </div>
      )
      }

    </div>
  );
};

export default Hotels;
