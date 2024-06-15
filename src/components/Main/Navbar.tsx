import React from "react";
// Icons
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-semibold">Home</h1>

      <div className="flex items-center gap-4">
        <NotificationsActiveOutlinedIcon
          sx={{ cursor: "pointer", fontSize: 25 }}
        />

        <div className="flex items-center rounded-lg border border-gray-500 px-2 py-1">
          <SearchOutlinedIcon sx={{ fontSize: 25 }} />

          <input
            type="text"
            placeholder="Search"
            className="w-[15rem] bg-inherit px-2 outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
