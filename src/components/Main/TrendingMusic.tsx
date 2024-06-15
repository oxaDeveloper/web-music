import Image from "next/image";
import React from "react";
// Icons
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

const TrendingMusic = ({
  number,
  img,
  music,
  author,
  time,
}: {
  number: number;
  img: string;
  music: string;
  author: string;
  time: string;
}) => {
  return (
    <div className="flex cursor-pointer items-center justify-between rounded-lg px-5 py-2 hover:bg-black hover:bg-opacity-30">
      <div className="flex w-[20rem] items-center gap-4">
        <p className="text-lg">{number < 10 ? `0${number}` : number}</p>

        <Image src={img} alt="" width={40} height={40} className="rounded-lg" />

        <div className="grid items-center">
          <h1 className="text-base font-semibold leading-4">{music}</h1>
          <h2 className="text-sm font-thin">
            <span>by</span> {author}
          </h2>
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold">{time}</p>
      </div>

      <div className="flex items-center gap-3">
        <FavoriteBorderOutlinedIcon sx={{ cursor: "pointer", fontSize: 25 }} />
        <MoreHorizOutlinedIcon sx={{ cursor: "pointer", fontSize: 25 }} />
      </div>
    </div>
  );
};

export default TrendingMusic;
