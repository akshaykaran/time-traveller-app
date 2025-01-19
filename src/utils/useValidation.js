import { useEffect, useState } from "react";

const useValidation = (inviteCode, validInviteCodes) => {
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    setIsValid(validInviteCodes.includes(inviteCode));
  }, [inviteCode, validInviteCodes]);

  return isValid;
};

export default useValidation;
