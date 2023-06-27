import React from "react";
import { Oval } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="flex justify-center items-center gap-2 h-screen">
      <Oval
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={5}
        strokeWidthSecondary={1}
        color="blue"
        secondaryColor="white"
      />
    </div>
  );
};

export default Loader;
