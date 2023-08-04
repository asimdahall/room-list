import React from "react";
import { Tooltip } from "react-tooltip";
import CleaningBroom from "../../icons/cleaningBroom";

const AddToCleaningListButton = () => {
  return (
    <React.Fragment>
      <button
        className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none"
        data-tip="Add to cleaning list"
        data-tooltip-id="button-tooltip"
      >
        <CleaningBroom />
      </button>
      <Tooltip
        id="button-tooltip"
        place="bottom"
        content="Needs Cleaning!"
      />
    </React.Fragment>
  );
};

export default AddToCleaningListButton;
