import React, { useEffect } from "react";
import bg from "../assets/bg.jpeg";

const NewContact = () => {
  return (
    <div className="bg-custom-bg min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <div
        className="rounded-full bg-[#083F46]"
        style={{
          clipPath: "ellipse(50% 50% at 50% 50%)",
          height: "526px",
          width: "1028px",
          position: "absolute",
          top: -4,
          right: -180,
          transform: "rotate(35.63deg)",
          overflow: "hidden",
        }}
      >
        {/* Content inside the ellipse */}
      </div>
      <div
        className="rounded-full bg-[#083F46]"
        style={{
          clipPath: "ellipse(50% 50% at 50% 50%)",
          height: "526px",
          width: "1028px",
          position: "absolute",
          bottom: -4,
          left: -180,
          transform: "rotate(35.63deg)",
          overflow: "hidden",
        }}
      >

      </div>

      <div
        className="bg-[#083F46] absolute top-0 left-0"
        style={{
          height: "66vh", 
          width: "70vw", 
        }}
      ></div>

  
      <div
        className="bg-[#083F46] absolute bottom-0 right-0"
        style={{
          height: "66vh", 
          width: "70vw", 
        }}
      ></div>
    </div>
  );
};








export default NewContact;
