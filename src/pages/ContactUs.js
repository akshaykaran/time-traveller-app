import React from "react";
import notfound from "../assets/images/notfound.PNG";

function ContactUs() {
  return (
    <div className="relative w-full h-[78vh] bg-customBlue flex justify-center items-center lg:px-14 sm:px-10 overflow-hidden p-20 ">
      <div className="w-80">
        <h1 className="text-8xl text-customWhite font-montserrat font-bold">
          404
        </h1>
        <h3 className="text-customWhite font-montserrat">
          Page Not Found! Maybe under construction...
        </h3>
      </div>
      <div className="w-60 h-60">
        <img src={notfound} alt="" />
      </div>
    </div>
  );
}

export default ContactUs;
