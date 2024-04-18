import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/bg.png";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import logo1 from "../assets/logo1.png";
import axios from "axios";
import Cookies from "js-cookie";
import {jwtDecode } from "jwt-decode";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();

  const handleEmailChange = (newValue) => {
    setEmail(newValue);
  };

  const handlePasswordChange = (newValue) => {
    setPassword(newValue);
  };

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    document.documentElement.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "";
      document.documentElement.style.overflowY = "";
    };
  }, []);

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://contacts-portal-app-backend.onrender.com/api/users/login",
        {
          email: email,
          password: password,
        }
      );

      const jwtToken = response.data.accessToken;

      Cookies.set("jwtToken", jwtToken);

      const decoded = jwtDecode(jwtToken);
      const jsonUser = JSON.stringify(decoded, null, 2);
      const userObject = JSON.parse(jsonUser);
      if( userObject.user.contacts == 0){
        navigate("/welcome");
      }else{
        navigate("/contacts/view");
      }

    } catch (error) {
      console.error("Login failed:", error);

      if (error.response && error.response.status === 500) {
        if (error.response.data.message === "Email or password is not valid") {
          setLoginError("Invalid email or password. Please try again.");
        } else {
          setLoginError("Login failed. Please try again later.");
        }
      } else {
        setLoginError("Login failed. Please try again later.");
      }
    }
  };

  return (
    <div className="flex flex-row h-screen relative">
      <div className="flex-1 absolute -left-[786px] -top-[75vh] md:-top-[75vh] xl:-top-[60vh] lg:-top-[75vh] 2xl:-top-[75vh] w-[1502px] h-[1502px] bg-[#083F46] rounded-full text-white flex items-center justify-center overflow-hidden md:w-screen md:h-screen xl:w-[1502px] xl:h-[1402px] 2xl:w-[1802px] 2xl:h-[1802px]">
        <div
          className="relative z-10 w-full max-w-md px-4"
          style={{ left: "23%", position: "relative" }}
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
            label="Email"
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <br />
          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />

          {loginError && (
            <p className="text-xs text-center text-red-600 bg-pink-100 border border-red-600 rounded-md py-2 mx-auto max-w-xs">
              {loginError}
            </p>
          )}
          <br />
          <div
            className="flex flex-row items-center gap-5 mt-4"
            style={{ width: "500px" }}
          >
            <div>
              <PrimaryButton
                label="Login"
                eventname={handleLogin}
                textcolor="#ffffff"
                type="submit"
              />
            </div>
            <div className="pt-3 pt-3 font-futura text-xl font-normal">or</div>
            <div className="pt-3 font-futura text-2xl font-medium underline">
              <a href="#" onClick={handleRegisterClick}>
                Click here to Register
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex-1 bg-[url] text-black flex items-center justify-center bg-opacity-25"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div style={{ position: "relative", left: "30%" }}>
          <img src={logo1} alt="Logo" height={450} width={350} />
        </div>
      </div>
    </div>
  );
};

export default Login;
