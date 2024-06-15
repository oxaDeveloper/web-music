import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="h-[15rem] w-[40rem]">
      <Image
        src="https://i.ytimg.com/vi/clLgQ1i9-A4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBFHB37wm8ZSmf0ejLC33bKBTPq9g"
        alt=""
        width={1080}
        height={1080}
        className="h-full w-full rounded-2xl object-cover"
      />
    </div>
  );
};

export default Banner;
