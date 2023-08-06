import React from "react";
import { IRoom } from "../interfaces/IRoom";
import { toast } from "react-toast";
import { useLocalStorage } from "usehooks-ts";

export type RoomCleaningContextProps = {
  roomsToClean: IRoom[] | [];
  addRoomToClean: (room: IRoom) => void;
  deleteRoomFromCleaningList: (room_number: IRoom["room_number"]) => void;
  checkIfAdded: (room_number: IRoom["room_number"]) => boolean;

  count: number;
};

const CLEANING_LIST_KEY = "cleaningList";

export const RoomCleaningListContext = React.createContext<
  RoomCleaningContextProps | {}
>({});

const RoomCleaningListContextProvider: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const [roomsToClean, setRoomsToClean] = useLocalStorage<Array<IRoom>>(
    CLEANING_LIST_KEY,
    []
  );

  const addRoomToClean = (room: IRoom) => {
    const isRoomAlreadyAdded = roomsToClean.some(
      (cRoom) => cRoom.room_number === room.room_number
    );
    if (isRoomAlreadyAdded) return;
    toast.success("Room added to the cleaning list!", {
      backgroundColor: "#16A349",
    });
    setRoomsToClean([...roomsToClean, room]);
  };

  const deleteRoomFromCleaningList = (room_number: IRoom["room_number"]) => {
    const isAdded = roomsToClean.some(
      (cRoom) => cRoom.room_number === room_number
    );
    if (!isAdded) return;
    const hasConfirmed = confirm(
      `Are you sure you want to delete room number ${room_number} from the list?`
    );
    if (!hasConfirmed) return;
    setRoomsToClean(
      roomsToClean.filter((room) => room.room_number !== room_number)
    );
    toast.error("Room removed from the cleaning list!");
  };

  const count = React.useMemo(() => roomsToClean.length, [roomsToClean]);

  const checkIfAdded = React.useCallback(
    (room_number: IRoom["room_number"]) => {
      return roomsToClean.some((cRoom) => cRoom.room_number === room_number);
    },
    [roomsToClean]
  );

  return (
    <RoomCleaningListContext.Provider
      value={{
        roomsToClean,
        addRoomToClean,
        deleteRoomFromCleaningList,
        count,
        checkIfAdded,
      }}
    >
      {children}
    </RoomCleaningListContext.Provider>
  );
};

export default RoomCleaningListContextProvider;
