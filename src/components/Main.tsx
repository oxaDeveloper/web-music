import React from "react";
import Navbar from "./Main/Navbar";
import Banner from "./Main/Banner";
import Trending from "./Main/Trending";
import RecentFavourites from "./Main/RecentFavourites";
import TopArtists from "./Main/TopArtists";

const Main = () => {
  return (
    <div className="flex flex-col gap-6 p-8">
      <Navbar />

      <div className="flex gap-[85px]">
        <div className="flex flex-col gap-10">
          <Banner />
          <Trending />
        </div>

        <div className="flex flex-col gap-10">
          <TopArtists />
          <RecentFavourites />
        </div>
      </div>
    </div>
  );
};

export default Main;
