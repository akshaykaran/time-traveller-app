import React from "react";

const UserCard = (props) => {
  const { userData } = props;
  if (!userData || !userData.car) {
    return (
      <div className="flex justify-center h-full">
        <div className="w-5/6 p-4">
          <h1 className="text-white font-montserrat text-lg">
            User Data Not Found
          </h1>
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center w-full mb-4">
      <div className="w-5/6 p-4">
        <div className=" h-24 border-2 border-customWhite rounded-lg flex justify-evenly items-center">
          <div className=" w-28 h-26 p-4">
            <img src={userData.car} alt="radom-car" />
          </div>
          <div>
            <h1 className="text-white font-montserrat text-lg">
              {userData.name} ({userData.position})
            </h1>
            <h1 className="text-white font-montserrat text-lg">
              Invite Code Used: {userData.hasInviteCode ? "Yes" : "No"}
            </h1>
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
