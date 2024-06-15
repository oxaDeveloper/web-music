import Image from "next/image";
import React from "react";
// Icons
import MoreHorizOutlined from "@mui/icons-material/MoreHorizOutlined";

const Artist = ({
  img,
  author,
  followers,
}: {
  img: string;
  author: string;
  followers: string;
}) => {
  return (
    <div className="flex cursor-pointer items-center justify-between rounded-lg px-5 py-2 hover:bg-black hover:bg-opacity-30">
      <div className="flex w-[20rem] items-center gap-4">
        <Image src={img} alt="" width={40} height={40} className="rounded-lg" />

        <div className="grid items-center">
          <h1 className="text-base font-semibold leading-4">{author}</h1>
          <h2 className="text-sm font-thin">{followers} followers</h2>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <MoreHorizOutlined sx={{ cursor: "pointer", fontSize: 25 }} />
      </div>
    </div>
  );
};

export default Artist;
