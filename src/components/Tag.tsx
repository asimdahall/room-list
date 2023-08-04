import React from "react";

type Props = {
  text: string;
};

const Tag = (props: Props) => {
  return (
    <div className=" bg-red-100 text-red-800 text-xs px-2.5 py-0.5 rounded dark:bg-red-700 dark:text-gray-300 w-fit uppercase font-semibold">
      {props.text}
    </div>
  );
};

export default Tag;
