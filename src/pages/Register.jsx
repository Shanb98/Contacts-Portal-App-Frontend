import React, { useEffect } from "react";
import bg from "../assets/bg.png";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import logo1 from "../assets/logo1.png";

const Register = () => {
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
          style={{ left: "23%", position: "relative" }}
        >
          <div
            className=""
            style={{
              width: "383px",
              height: "107px",
              top: "140px",
              left: "122px",
            }}
          >
            <span className="font-bold text-5xl text-white font-futura">
              Register Now!
            </span>
          </div>

          <InputField
            label="e-mail"
            name="email"
            type="email"
            placeholder="Enter your email"
          />
          <br />
          <InputField
            label="create password"
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <br />
          <InputField
            label="confirm password"
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <br />
          <div
            className="flex flex-col items-left gap-5 mt-1"
            style={{ width: "500px" }}
          >
            <div>
              <PrimaryButton
                label="register"
                textcolor="#ffffff"
                type="submit"
              />
            </div>

            <div className="pt-3 font-futura text-2xl font-medium underline">
              <a href="#">{`<`} Back to login</a>
            </div>
          </div>
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

export default Register;
