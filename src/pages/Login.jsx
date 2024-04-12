import React, { useEffect } from "react";
import bg from "../assets/bg.png";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import logo1 from "../assets/logo1.png";
const Login = () => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    document.documentElement.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "";
      document.documentElement.style.overflowY = "";
    };
  }, []);

  return (
    <div className="flex flex-row h-screen relative">
      <div className="flex-1 absolute -left-[786px] -top-[370px] w-[1502px] h-[1502px] bg-[#083F46] rounded-full text-white flex items-center justify-center overflow-hidden md:w-screen md:h-screen xl:w-[1502px] xl:h-[1402px] 2xl:w-[1802px] 2xl:h-[1802px]">
        <div
          className="relative z-10 w-full max-w-md px-4"
          style={{ left: "20%", position: "relative" }}
        >
          <div
            className=""
            style={{
              width: "283px",
              height: "157px",
              top: "140px",
              left: "122px",
            }}
          >
            <span className="font-bold text-6xl text-white font-futura">
              Hi there,
            </span>
            <br />
            <br />
            <span className="font-normal text-4xl text-white font-futura">
              Welcome to our
              <br />
              contacts portal
            </span>
          </div>
          <br />
          <br />
          <br />
          <InputField
            label="E-mail"
            name="email"
            type="email"
            placeholder="Enter your email"
          />
          <br />
          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
      </div>
      <div
        className="flex-1 bg-[url] text-black flex items-center justify-center bg-opacity-25"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div style={{ position: "relative", left: "25%" }}>
          <img src={logo1} alt="Logo" height={450} width={350} />
        </div>
      </div>
    </div>
  );
};

export default Login;
