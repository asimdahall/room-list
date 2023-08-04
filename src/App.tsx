import "./index.css";
import Navbar from "./components/Navbar";
import Explore from "./pages/Explore";
import RoomCleaningListContextProvider from "./contexts/RoomCleaningListContext";

function App() {
  return (
    <RoomCleaningListContextProvider>
      <div className="bg-gray-900 min-h-screen w-screen flex flex-col place-items-center">
        <Navbar />
        <Explore />
      </div>
    </RoomCleaningListContextProvider>
  );
}

export default App;
