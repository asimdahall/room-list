import { useContext } from "react";
import { RoomCleaningContextProps, RoomCleaningListContext } from "../contexts/RoomCleaningListContext";

const useCleaningList = () => {
  const values = useContext(RoomCleaningListContext);
  if (!values)
    throw new Error(
      "Please make sure the component you are using is wrapped with correct provider!"
    );
  return values as RoomCleaningContextProps;
};

export default useCleaningList;
