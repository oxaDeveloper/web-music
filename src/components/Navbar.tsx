import Image from "next/image";
import React from "react";
// Icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import TopicOutlinedIcon from "@mui/icons-material/TopicOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Navbar = () => {
  return (
    <div className="flex flex-col items-center gap-[5.5rem]">
      <div className="rounded-full bg-[#847ab6] p-[2px]">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Music_logo.png"
          alt=""
          width={30}
          height={30}
        />
      </div>

      <div className="flex flex-col gap-12">
        <div className="flex flex-col items-center gap-6">
          <HomeOutlinedIcon sx={{ cursor: "pointer", fontSize: 25 }} />
          <LibraryMusicOutlinedIcon sx={{ cursor: "pointer", fontSize: 20 }} />
          <FolderOutlinedIcon sx={{ cursor: "pointer", fontSize: 20 }} />
          <PermIdentityOutlinedIcon sx={{ cursor: "pointer", fontSize: 25 }} />
        </div>

        <div className="flex flex-col items-center gap-6">
          <FavoriteBorderOutlinedIcon
            sx={{ cursor: "pointer", fontSize: 25 }}
          />
          <AutoAwesomeOutlinedIcon sx={{ cursor: "pointer", fontSize: 25 }} />
          <TopicOutlinedIcon sx={{ cursor: "pointer", fontSize: 25 }} />
        </div>
      </div>

      <div>
        <SettingsOutlinedIcon sx={{ cursor: "pointer", fontSize: 25 }} />
      </div>
    </div>
  );
};

export default Navbar;
