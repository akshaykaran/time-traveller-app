import React from "react";
import UserCard from "./UserCard";
import { waitingListData } from "../utils/mockfile";

function WaitingList() {
  // Filter users with and without invite codes
  const usersWithInviteCode = waitingListData.filter(
    (user) => user.hasInviteCode
  );
  const usersWithoutInviteCode = waitingListData.filter(
    (user) => !user.hasInviteCode
  );

  return (
    <div className="w-full h-[78vh] bg-customBlue flex lg:px-14 sm:px-10 overflow-hidden border-4 border-red-500">
      <div className="w-3/6 mt-10">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-montserrat font-bold text-white align-middle mb-12">
            USERS WITH INVITE CODE
          </h1>
        </div>
        <div className="flex justify-center h-full">
          <div className="w-5/6 h-3/4 border-2 border-customPink rounded-xl overflow-y-auto">
            {usersWithInviteCode.length > 0 ? (
              usersWithInviteCode.map((userData, index) => (
                <UserCard userData={userData} key={index} />
              ))
            ) : (
              <p className="text-white font-montserrat text-center mt-4">
                No users with invite codes.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Users without Invite Code Section */}
      <div className="w-3/6 mt-10">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-montserrat font-bold text-white align-middle mb-12">
            USERS WITHOUT INVITE CODE
          </h1>
        </div>
        <div className="flex justify-center h-full">
          <div className="w-5/6 h-3/4 border-2 border-customPink rounded-xl overflow-y-auto">
            {usersWithoutInviteCode.length > 0 ? (
              usersWithoutInviteCode.map((userData, index) => (
                <UserCard userData={userData} key={index} />
              ))
            ) : (
              <p className="text-white font-montserrat text-center mt-4">
                No users without invite codes.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WaitingList;
