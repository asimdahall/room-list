import React from "react";
import hotelRooms from "../data/rooms.json";
import Card from "../components/Card";


const Explore = () => {
  return (
    <div className="p-8 grid md:grid-cols-4 sm:grid-cols-2 gap-6 container">
      {hotelRooms.map((room) => {
        return <Card {...room} key={room.room_number} />;
      })}
    </div>
  );
};

export default Explore;
