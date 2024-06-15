import Image from "next/image";
import React from "react";

const Favourite = ({
  img,
  music,
  desc,
}: {
  img: string;
  music: string;
  desc: string;
}) => {
  return (
    <div className="grid w-[11rem] cursor-pointer items-center justify-center gap-4 rounded-xl p-4 hover:bg-black hover:bg-opacity-30">
      <div className="flex w-full items-center justify-center">
        <Image
          src={img}
          alt=""
          width={150}
          height={150}
          className="rounded-2xl"
        />
      </div>

      <div>
        <h1 className="text-base font-semibold">{music}</h1>
        <p className="text-sm font-thin">{desc}</p>
      </div>
    </div>
  );
};

export default Favourite;
