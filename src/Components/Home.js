import React from "react";
import { useState } from "react";
import cars from "../assets/images/waiting_times1.png";
import useValidation from "../utils/useValidation";
import { validInviteCodes, waitingListData } from "../utils/mockfile";
import { useNavigate } from "react-router";
import { useWaitingList } from "../utils/useWaitingList";
import { getRandomCar } from "../utils/mockfile";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [inviteCode, setInviteCode] = useState("abc123");
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  const validCodes = validInviteCodes;
  const navigate = useNavigate();

  const [waitingList, addUserToList] = useWaitingList(waitingListData);

  const code = useValidation(inviteCode, validCodes);

  const handleClick = () => {
    setVisible(true);
    if (!userName.trim()) {
      setError("User Name is required!");
      return;
    }
    setError("");
    addUserToList(userName, code);

    const updatedList = [
      ...waitingList,
      {
        name: userName,
        hasInviteCode: code,
        position: code
          ? waitingList.filter((user) => user.hasInviteCode).length + 1
          : waitingList.length + 1,
        car: getRandomCar(),
      },
    ];

    navigate("/waiting-list", { state: { waitingList: updatedList } });
  };

  return (
    <div className="relative w-full h-full bg-customBlue flex lg:px-14 sm:px-10 overflow-hidden">
      <div className="lg:w-1/3 md:w-2/5 sm:w-2/6 flex justify-center flex-wrap">
        <div className="w-56 h-[78vh] bg-customWhite object-cover"></div>
        <img
          className="w-[30%] h-[56%] absolute top-64 left-30"
          src={cars}
          alt="carsImage"
        />
      </div>

      <div className="p-20">
        <div className="flex justify-center mb-10">
          <h1 className="text-customWhite font-bold font-montserrat text-4xl align-middle">
            TIME TRAVELLER
          </h1>
        </div>
        <div className="flex justify-center mb-10">
          <h4 className="text-customWhite font-montserrat text-md align-middle">
            Hurry Up! The line is big...Enter User Name and Invite Code (if any)
            to check your travelling time.
          </h4>
        </div>

        <label htmlFor="user" className="font-montserrat text-customWhite">
          USER NAME*
        </label>
        <input
          type="text"
          required
          placeholder="Enter your User Name"
          className="w-full p-2 mb-6 border-customPink border-2 bg-transparent rounded text-white"
          onChange={(e) => setUserName(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <label htmlFor="user" className="font-montserrat text-customWhite ">
          INVITE CODE
        </label>
        <input
          type="text"
          placeholder="Enter the Invite Code"
          className="w-full p-2 mb-6 border-customPink border-2 bg-transparent rounded text-white"
          onChange={(e) => setInviteCode(e.target.value)}
        />
        <div className="flex justify-center items-center">
          <button
            className="lg:w-44 md:w-44 h-10 px-4 font-bold flex justify-center items-center bg-customPink text-customBlack rounded-lg lg:text-lg md:text-sm sm:text-xs"
            onClick={handleClick}
          >
            SUBMIT
          </button>
        </div>
        {visible && (
          <div className="mt-8">
            <h1 className="text-lg font-montserrat text-customWhite">
              Hello {userName} Let's Check your Invite Code "{inviteCode}"
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
