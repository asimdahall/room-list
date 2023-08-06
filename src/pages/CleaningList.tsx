import RoomListGrid from "../components/RoomListGrid";
import useCleaningList from "../hooks/useCleaningList";
import Header from "../components/Header";
import NotFound from "../components/NotFound";

const CleaningList = () => {
  const { roomsToClean } = useCleaningList();
  return (
    <div className="flex flex-1 flex-col flex-center">
      <Header text="Cleaning List" />
      {roomsToClean.length ? (
        <RoomListGrid data={roomsToClean} />
      ) : (
        <NotFound text="Add the rooms to the cleaning list!" />
      )}
    </div>
  );
};

export default CleaningList;
