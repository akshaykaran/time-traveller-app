import React, { useState } from "react";
import cars from "../assets/images/waiting_times1.png";
import { validInviteCodes, getRandomCar } from "../utils/mockfile";
import { useNavigate } from "react-router";
import useValidation from "../utils/useValidation";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const hasInviteCode = useValidation(inviteCode, validInviteCodes);

  const handleClick = () => {
    if (!userName.trim()) {
      setError("User Name is required!");
      return;
    }
    setError("");

    const currentList = JSON.parse(localStorage.getItem("waitingList")) || [];

    const newUser = {
      name: userName,
      hasInviteCode,
      position: null,
      car: getRandomCar(),
    };

    const inviteCodeUsers = currentList.filter((user) => user.hasInviteCode);
    const noInviteCodeUsers = currentList.filter((user) => !user.hasInviteCode);

    if (hasInviteCode) {
      inviteCodeUsers.push(newUser);
    } else {
      noInviteCodeUsers.push(newUser);
    }

    const updatedList = [...inviteCodeUsers, ...noInviteCodeUsers];

    updatedList.forEach((user, index) => {
      user.position = index + 1;
    });

    localStorage.setItem("waitingList", JSON.stringify(updatedList));

    navigate("/waiting-list");
  };

  return (
    <div className="relative w-full lg:h-full md:h-full xl:h-full bg-customBlue flex lg:px-14 sm:px-10 overflow-hodden">
      <div className="lg:w-1/3 md:w-2/5 sm:w-2/6 flex justify-center flex-wrap">
        <div className="lg:w-56 sm:w-52 h-[78vh] bg-customWhite object-cover"></div>
        <img
          className="lg:w-96 md:w-80 sm:w-72 xs:w-60 lg:h-96 md:h-80 sm:h-72 xs:h-60 absolute lg:top-48 md:top-60 sm:top-72 left-30"
          src={cars}
          alt="carsImage"
        />
      </div>

      <div className="p-20 lg:w-2/3 md:w-3/5 sm:w-4/6">
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

        <form action="/waiting-list">
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
          <label htmlFor="user" className="font-montserrat text-customWhite">
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
        </form>
      </div>
    </div>
  );
};

export default Home;
