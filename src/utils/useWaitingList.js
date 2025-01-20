import { useState } from "react";
import { getRandomCar } from "./mockfile";
export const useWaitingList = (initialList) => {
  const [waitingList, setWaitingList] = useState(initialList);

  const addUserToList = (name, hasInviteCode) => {
    const newPosition = hasInviteCode
      ? waitingList.filter((user) => user.hasInviteCode).length + 1
      : waitingList.length + 1;

    const newUser = {
      name,
      hasInviteCode,
      position: newPosition,
      car: getRandomCar(),
    };

    setWaitingList([...waitingList, newUser]);
  };

  return [waitingList, addUserToList];
};
