import hotelRooms from "../data/rooms.json";
import RoomListGrid from "../components/RoomListGrid";
import Helmet from "react-helmet";
import Header from "../components/Header";
import React from "react";

const Explore = () => {
  return (
    <React.Fragment>
      <Header text="Explore" />
      <RoomListGrid data={hotelRooms} />
    </React.Fragment>
  );
};

export default Explore;
