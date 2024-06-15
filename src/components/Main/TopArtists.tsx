import Link from "next/link";
import React from "react";
import Artist from "./Artist";

const TopArtists = () => {
  return (
    <div className="grid gap-2">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Top Artist</h1>
        <Link href="#" className="text-blue-400">
          See all
        </Link>
      </div>

      <div className="grid gap-2">
        <Artist
          img="https://static9.tgstat.ru/channels/_0/9c/9c9be28fd89c17b3729b39eb2a34b0e4.jpg"
          author="Shoxruxbek Ergashov"
          followers="109357"
        />
        <Artist
          img="https://images.genius.com/12853f16ae278e602825d36934ca28d0.1000x1000x1.jpg"
          author="Massa"
          followers="203910"
        />
        <Artist
          img="https://yt3.googleusercontent.com/6ZaQ4_4LnQdFdB0CKPf-7GOC__JQrQo5awp1EHE9DjVCIAHKEYzyEGHcQM0eiC9r6qDzjvHm9A=s900-c-k-c0x00ffffff-no-rj"
          author="Jahongir Otajonov"
          followers="524651"
        />
      </div>
    </div>
  );
};

export default TopArtists;
