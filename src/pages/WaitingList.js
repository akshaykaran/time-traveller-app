import { useNavigate } from "react-router";

const WaitingList = () => {
  const navigate = useNavigate();
  const waitingList = JSON.parse(localStorage.getItem("waitingList")) || [];

  const handleBack = () => {
    navigate("/");
  };

  const handleClear = () => {
    localStorage.clear();
    window.location.href = "/waiting-list";
  };

  return (
    <div className="w-full h-[78vh] bg-customBlue flex flex-col items-center overflow-hidden">
      <h1 className="text-2xl font-montserrat font-bold text-white mb-6">
        Waiting List
      </h1>
      <div className="w-5/6 h-3/4 border-4 border-customPink rounded-xl overflow-y-auto bg-transparant">
        {waitingList.length > 0 ? (
          <ul>
            {waitingList.map((user, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b border-customPink py-4 px-6"
              >
                <div className="flex items-center">
                  <img
                    src={user.car}
                    alt="car"
                    className="w-22 h-[72px] mr-4"
                  />
                  <div>
                    <p className="text-xl font-bold font-montserrat text-customWhite">
                      {user.name}
                    </p>
                    <p className="text-sm text-gray-400">
                      Invite Code Used: {user.hasInviteCode ? "Yes" : "No"}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-xl font-bold font-montserrat text-customWhite">
                    Position: {index + 1}
                  </p>
                  <p className="text-sm text-gray-400">
                    Wait Time: {index + 1} day(s)
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center font-montserrat mt-4 text-customWhite">
            No users in the waiting list.
          </p>
        )}
      </div>
      <div className="w-full mt-5 flex justify-around px-20">
        <button
          className="lg:w-44 md:w-44 h-10 px-4 font-bold flex justify-center items-center bg-customPink text-customBlack rounded-lg lg:text-lg md:text-sm sm:text-xs"
          onClick={handleClear}
        >
          CLEAR DATA
        </button>
        <button
          className="lg:w-44 md:w-44 h-10 px-4 font-bold flex justify-center items-center bg-customPink text-customBlack rounded-lg lg:text-lg md:text-sm sm:text-xs"
          onClick={handleBack}
        >
          BACK
        </button>
      </div>
    </div>
  );
};

export default WaitingList;
