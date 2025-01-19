import React from "react";
import car1 from "../assets/images/car1.png";

const UserCard = () => {
  return (
    <div className="flex justify-center h-full overflow-y-scroll">
      <div className="w-5/6 p-4">
        <div className=" h-2/6 border-2 border-customWhite rounded-lg flex justify-evenly items-center">
          <div className=" w-28 h-26 p-4">
            <img src={car1} alt="radom-car" />
          </div>
          <div>
            <h1 className="text-white font-montserrat text-lg">User Name</h1>
            <h1 className="text-white font-montserrat text-lg">Invite Code</h1>
          </div>
          <div>
            <h1 className="text-white font-montserrat text-lg">Waiting Time</h1>
            <h1 className="text-white font-montserrat text-lg">Time</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
