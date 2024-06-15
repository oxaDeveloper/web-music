import Link from "next/link";
import React from "react";
import TrendingMusic from "./TrendingMusic";

const Trending = () => {
  return (
    <div className="grid gap-2">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Trending right now</h1>
        <Link href="#" className="text-blue-400">
          See all
        </Link>
      </div>

      <div className="grid gap-2">
        <TrendingMusic
          number={1}
          img="https://static9.tgstat.ru/channels/_0/9c/9c9be28fd89c17b3729b39eb2a34b0e4.jpg"
          music="Men jimgina qolaverdim"
          author="Shoxruxbek Ergashov"
          time="03:23"
        />
        <TrendingMusic
          number={2}
          img="https://images.genius.com/12853f16ae278e602825d36934ca28d0.1000x1000x1.jpg"
          music="Borimi berdim"
          author="Massa"
          time="03:01"
        />
        <TrendingMusic
          number={3}
          img="https://yt3.googleusercontent.com/6ZaQ4_4LnQdFdB0CKPf-7GOC__JQrQo5awp1EHE9DjVCIAHKEYzyEGHcQM0eiC9r6qDzjvHm9A=s900-c-k-c0x00ffffff-no-rj"
          music="Dunyodan uzoq"
          author="Jahongir Otajonov"
          time="04:07"
        />
      </div>
    </div>
  );
};

export default Trending;
