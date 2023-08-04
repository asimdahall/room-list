import React from "react";
import AddToCleaningListButton from "./buttons/AddToCleaningListButton";
import Tag from "./Tag";
import { IRoom } from "../interfaces/IRoom";

interface CardProps extends IRoom {}

const Card: React.FC<CardProps> = ({
  image,
  category,
  room_number,
  description,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg relative">
      <div className="h-52 w-full relative">
        <img className="w-full h-full object-cover" src={image} alt="Card" />
        <div className="absolute top-2 right-2">
          <Tag text={category} />
        </div>
        <div className="absolute bottom-2 right-2">
          <AddToCleaningListButton />
        </div>
      </div>

      <div className="p-4 flex flex-col">
        <h3 className="text-white text-xl font-semibold mb-2">
          Room number: {room_number}
        </h3>
        <p className="text-gray-400 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
