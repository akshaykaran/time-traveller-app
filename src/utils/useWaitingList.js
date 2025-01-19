import { useState } from "react";

export const useWaitingList = (initialList) => {
  const [waitingList, setWaitingList] = useState(initialList);

  const addUserToList = (newUser) => {
    const hasInviteCode = newUser.hasInviteCode;
    const newPosition = hasInviteCode
      ? waitingList.filter((u) => u.hasInviteCode).length + 1
      : waitingList.length + 1;

    const updatedList = [...waitingList, { ...newUser, position: newPosition }];
    setWaitingList(updatedList);
  };

  return [waitingList, addUserToList];
};
