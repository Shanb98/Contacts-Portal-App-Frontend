import React, { useEffect } from "react";
import bg from "../assets/bg.png";


const Login = () => {

  useEffect(() => {

    document.body.style.overflowY = 'hidden';
    document.documentElement.style.overflowY = 'hidden';


    return () => {
      document.body.style.overflowY = '';
      document.documentElement.style.overflowY = '';
    };
  }, []);

  return (
    <div className="flex flex-row h-screen relative">
      <div className="flex-1 absolute -left-[716px] -top-[367px]  w-[1502px] h-[1502px] bg-[#083F46] rounded-full  text-white flex items-center justify-center overflow-hidden md:w-screen md:h-screen xl:w-[1502px] xl:h-[1502px] 2xl:w-[1802px] 2xl:h-[1802px]">
        <div className="relative z-10">01</div>
      </div>
      <div className="flex-1 bg-[url] text-balck flex items-center justify-center bg-opacity-25" style={{backgroundImage: `url(${bg})`, }}>
      <div className="relative z-10">01</div>
      </div>
    </div>
  );
};

export default Login;
