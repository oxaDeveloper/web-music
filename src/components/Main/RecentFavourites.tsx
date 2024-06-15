import Link from "next/link";
import React from "react";
import Favourite from "./Favourite";

const RecentFavourites = () => {
  return (
    <div className="grid gap-2">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Recent Favourites</h1>
        <Link href="#" className="text-blue-400">
          See all
        </Link>
      </div>

      <div className="no-scrollbar flex h-[13rem] flex-wrap justify-center gap-x-5 gap-y-2 overflow-scroll">
        <Favourite
          img="https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/c8/f5/1a/c8f51ada-d21f-0758-34d1-d7d919efdcd9/198026290786.jpg/1200x1200bf-60.jpg"
          music="Welcome to Dubai"
          desc="MASSA Feat. ASL WAYNE - Kechki Payt"
        />
        <Favourite
          img="https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/6a/b8/fd/6ab8fd23-73e1-3b41-3cd1-01eee0b1e49f/cover.jpg/800x800cc.jpg"
          music="Mahi"
          desc="Mahi - Ehsan Daryadel: Song Lyrics"
        />
        <Favourite
          img="https://www.benommusic.com/uploads/albums/40dfacdd8c6f2e808163020ec73ac741.jpg"
          music="Adashdimmi?"
          desc="Benom guruhi - Adashdimmi, Parcha"
        />
        <Favourite
          img="https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/af/5c/a5/af5ca5ff-1572-e293-7563-d36b9a1a39af/cover.jpg/486x486bb.png"
          music="Sevib qoldim"
          desc="VIA Marokand - Sevib qoldim"
        />
      </div>
    </div>
  );
};

export default RecentFavourites;
