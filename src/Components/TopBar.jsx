import React from "react";

const TopBar = () => {
  return (
    <div className="h-[8%] w-[100%] py-2 px-10 flex items-center bg-[#191919]">
      <div className="flex flex-row justify-between items-center w-[100%]">
        <h1 className="text-3xl font-bold">MOVIES</h1>
        <div className="flex w-[30%] gap-7">
          <h1 className="font-bold">Coming Soon</h1>
          <h1 className="font-bold">Latest</h1>
          <h1 className="font-bold">Trending</h1>
        </div>

        <div className="flex items-center w-[40%] justify-center">
          <div className="flex rounded-md shadow-md bg-[#000000] w-full">
            <input
              type="text"
              className="w-[100%] h-10 bg-[#0d1829] flex bg-transparent pl-2 text-[#cccccc] outline-0"
              placeholder="Search....."
            />
          </div>
        </div>

        <div className="text-3xl flex items-center">
          <i className="ri-account-circle-fill"></i>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
