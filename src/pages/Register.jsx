import React, { useEffect ,useState} from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/bg.png";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import logo1 from "../assets/logo1.png";
import axios from "axios";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setrePassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (newValue) => {
    setEmail(newValue);
  };

  const handlePasswordChange = (newValue) => {
    setPassword(newValue);
  };
  const handlerePasswordChange = (newValue) => {
    setrePassword(newValue);
  };
  const handleRegister = async () => {
    console.log("Email:", email);
    console.log("Password:", password);
    if(password === repassword){
      try {
        const response = await axios.post(
          "http://localhost:5001/api/users/register",
          {
            email: email,
            password: password,
          }
        );
        setRegisterSuccess(true);
      } catch (error) {
        console.error("Register failed:", error);
  
        if (error.response && error.response.status === 500) {
          if (error.response.data.message === "User already registered") {
            setLoginError("User already registered");
          } else {
            setLoginError("Register failed. Please try again later.");
          }
        } else {
          setLoginError("Register failed. Please try again later.");
        }
      }
    }else{
      setLoginError("Passwords are not Matching");
    }


  };
  const handleLoginNow = () => {
    navigate("/login"); // Navigate to the login page
  };

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
          <div
        className={`flex-1 bg-cover bg-center ${
          registerSuccess ? "filter blur-sm" : ""
        }`}
        style={{ backgroundImage: `url(${bg})` }}
      >
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
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <br />
          <InputField
            label="create password"
            name="password"
            type="password"
            placeholder="Create password"
            value={password}
            onChange={handlePasswordChange}
          />
          <br />
          <InputField
            label="confirm password"
            name="repassword"
            type="password"
            placeholder="Confirm password"
            value={repassword}
            onChange={handlerePasswordChange}
          />
                    {loginError && (
            <p className="text-xs text-center text-red-600 bg-pink-100 border border-red-600 rounded-md py-2 mx-auto max-w-xs">
              {loginError}
            </p>
          )}
          <br />
          <div
            className="flex flex-col items-left gap-5 mt-1"
            style={{ width: "500px" }}
          >
            <div>
              <PrimaryButton
                label="register"
                eventname={handleRegister}
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
        <div style={{ position: "relative", left: "25%" ,top: "30vh" }}>
          <img src={logo1} alt="Logo" height={450} width={350} />
        </div>
      </div>

      </div>
      {registerSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
          <div className="bg-white p-8 rounded-lg text-center w-1/2 h-1/3 space-y-10">
            <p className="text-teal-dark text-3xl font-futura font-bold mb-4"> User Register Successfully!</p>
            <button
              onClick={handleLoginNow}
              className="bg-teal-dark hover:bg-teal-700 font-futura text-white text-xl font-bold py-2 px-4 rounded-full h-12 w-48"
            >
              Login Now
            </button>
          </div>
        </div>
        
      )}
    </div>
  );
};

export default Register;
