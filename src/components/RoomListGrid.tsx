import { FC } from "react";
import useCleaningList from "../hooks/useCleaningList";
import { IRoom } from "../interfaces/IRoom";
import Card from "./Card";
import NotFound from "./NotFound";
import { useLocalStorage } from "usehooks-ts";

interface IProps {
  data: IRoom[];
}

const RoomListGrid: FC<IProps> = ({ data = [] }) => {
  const { addRoomToClean, checkIfAdded, deleteRoomFromCleaningList } =
    useCleaningList();

    const [isDarkTheme, setDarkTheme] = useLocalStorage("darkTheme", true);


  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-12">
      {data.map((room) => {
        return (
          <Card
            {...room}
            key={room.room_number}
            isAdded={checkIfAdded(room.room_number)}
            handleAddToCleaningList={() => addRoomToClean(room)}
            handleRemoveFromCleaningList={() =>
              deleteRoomFromCleaningList(room.room_number)
            }
          />
        );
      })}
    </div>
  );
};

export default RoomListGrid;
