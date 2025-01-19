import React from "react";
import UserCard from "./UserCard";

function WaitingList() {
  return (
    <div className="w-full h-[78vh] bg-customBlue flex lg:px-14 sm:px-10 overflow-hidden border-4 border-red-500 ">
      <div className="w-3/6 mt-10">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-montserrat font-bold text-white align-middle mb-12">
            USERS WITH INVITE CODE
          </h1>
        </div>
        <div className="flex justify-center h-full">
          <div className="w-5/6 h-3/4 border-2 border-customPink rounded-xl">
            <UserCard />
          </div>
        </div>
      </div>

      <div className="w-3/6 mt-10 ">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-montserrat font-bold text-white align-middle mb-12">
            USERS WITHOUT INVITE CODE
          </h1>
        </div>
        <div className="flex justify-center h-full">
          <div className="w-5/6 h-3/4 border-2 border-customPink rounded-xl">
            <UserCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WaitingList;
