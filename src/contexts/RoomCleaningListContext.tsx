import React, { ReactChild, ReactChildren } from "react";
import { IRoom } from "../interfaces/IRoom";

type ContextProps = {
  roomsToClean: IRoom[] | [];
  addRoomToClean: (room: IRoom) => void;
  deleteRoomFromCleaningList: (room_number: IRoom["room_number"]) => void;
};

const RoomCleaningListContext = React.createContext<ContextProps | {}>({});

const RoomCleaningListContextProvider: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const [roomsToClean, setRoomsToClean] = React.useState<Array<IRoom>>([]);

  const addRoomToClean = (room: IRoom) => {
    const isRoomAlreadyAdded = roomsToClean.some(
      (cRoom) => cRoom.room_number === room.room_number
    );
    if (isRoomAlreadyAdded) return;
    setRoomsToClean([...roomsToClean, room]);
  };

  const deleteRoomFromCleaningList = (room_number: IRoom["room_number"]) => {
    const isAdded = roomsToClean.some(
      (cRoom) => cRoom.room_number === room_number
    );
    if (!isAdded) return;
    setRoomsToClean(
      roomsToClean.filter((room) => room.room_number !== room_number)
    );
  };
  return (
    <RoomCleaningListContext.Provider
      value={{
        roomsToClean,
        addRoomToClean,
        deleteRoomFromCleaningList,
      }}
    >
      {children}
    </RoomCleaningListContext.Provider>
  );
};

export default RoomCleaningListContextProvider;
