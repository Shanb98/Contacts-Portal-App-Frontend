import React, { useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo2 from "../assets/logo2.png";
import logout from "../assets/logout.png";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import Cookies from 'js-cookie';
import {jwtDecode } from "jwt-decode";

const NewContacts = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState(""); 
  const [Success, setSuccess] = useState(false);
  const [word, setWord] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    const jwtToken = Cookies.get('jwtToken') ;

    const decoded = jwtDecode(jwtToken);
    const jsonUser = JSON.stringify(decoded, null, 2);
    console.log(jsonUser);
    const userObject = JSON.parse(jsonUser);
    if( userObject.user.contacts == 0){
      setWord("add your first contact")
    }else{
      setWord("add your contact")
    }

  }, []);
  const handleEmailChange = (newValue) => {
    setEmail(newValue);
  };
  const handleFullnameChange = (newValue) => {
    setFullname(newValue);
  };
  const handlePhoneChange = (newValue) => {
    setPhone(newValue);
  };

  const handleGenderChange = (event) => {
    // Update the selected gender state when a radio button is clicked
    setGender(event.target.value);
  };

  const handleLoginNow = () => {
    navigate("/login"); // Navigate to the login page
  };

  const handleAddContacts = () => {
    setSuccess(false);
  };
  const handleViewContacts = () => {
    navigate("/contacts/view"); // Navigate to the login page
  };
  const handleCreate = async () => {
    console.log("Email:", email);
    console.log("Name:", fullname);
    console.log("Phone:", phone);
    console.log("Gender:", gender);
    try {
    // Extract the JWT token from local storage
    const jwtToken = Cookies.get('jwtToken');

    // Construct the headers object with the bearer token
    const headers = {
      'Authorization': `Bearer ${jwtToken}`,
      'Content-Type': 'application/json'
    };

    const payload = {
      name: fullname,
      phone: phone,
      email: email,
      gender: gender,
    };
    const response = await fetch('http://localhost:5001/api/contacts/create', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)
    });
      // Handle response status
      if (response.ok) {
        console.log('contact created successfully!');
        setSuccess(true);
      } else {
        console.error('Error:', response.statusText);
        navigate("/login");
      }
    } catch (error) { 
      console.error('Error:', error.message); 
    }
  };

  return (
    <div>
      <div className="bg-custom-bg min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <div
        className={`flex-1 bg-cover bg-center ${
          Success ? "filter blur-sm" : ""
        }`}
      >
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
        ></div>

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

        <div className="relative top-0 w-screen pl-28">
          <div className=" min-h-screen flex flex-col justify-between">
            <header className="pl-20 py-4 pt-4">
              <img
                className="pt-2"
                src={logo2}
                alt="Logo"
                height={90}
                width={140}
              />
            </header>
            <main className="px-20  flex-grow flex items-center justify-left pt-6">
              <div className="text-left text-white ">
                <h1 className="font-bold text-5xl text-white font-futura ">
                  New Contact
                </h1>
                <br />
                <br />
                <div className="flex flex-row gap-4">
                  <div>
                    <InputField
                      label="full name"
                      name="fullname"
                      type="fullname"
                      placeholder="Enter your full name"
                      value={fullname}
            onChange={handleFullnameChange}
                    />
                  </div>
                  <div>
                    <InputField
                      label="e-mail"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
            onChange={handleEmailChange}
                    />
                  </div>
                </div>
                <br />

                <div className="flex flex-row gap-16">
                  <div>
                    <InputField
                      label="phone number"
                      name="phone"
                      type="phone"
                      placeholder="Enter your phone"
                      value={phone}
            onChange={handlePhoneChange}
                    />
                  </div>
                  <div className="flex flex-row gap-20">
                    <div class="font-normal text-xl text-white font-futura pt-5">
                      Gender
                    </div>

                    <div className="flex items-center me-4">
                      <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={handleGenderChange}
                        className="w-4 h-4 text-blue-600 bg-transparent border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="inline-radio"
                        className="ms-2 font-futura text-xl font-medium text-white-900 dark:text-white-300"
                      >
                        male
                      </label>
                    </div>
                    <div className="flex items-center me-4">
                      <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={handleGenderChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="inline-2-radio"
                        className="ms-2 font-futura text-xl font-medium text-white-900 dark:text-white-300"
                      >
                        female
                      </label>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <div>
                  <PrimaryButton
                    label={word}
                    eventname={handleCreate}
                    textcolor="#ffffff"
                    type="submit"
                  />
                </div>
              </div>
            </main>
            <footer className="px-8 py-4 flex justify-end">
              <div className="flex flex-row gap-4 pr-10 pb-4">
                <div>
                  <img
                    className="pt-8"
                    src={logout}
                    alt="Logo"
                    height={45}
                    width={45}
                  />
                </div>
                <div className="pt-9 text-white font-futura text-2xl font-medium underline">
                  <a href="#" onClick={handleLoginNow}>logout</a>
                </div>
              </div>
            </footer>
          </div>
        </div>
        </div>
      </div>
      {Success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
          <div className="bg-white p-8 rounded-lg text-center w-1/2 h-1/3 space-y-10">
            <p className="text-teal-dark text-2xl font-futura font-bold mb-4"> Your contact has been saved successfully!</p>
            <div className="flex flex-row gap-20 pl-14">
            <button
              onClick={handleAddContacts}
              className="bg-teal-dark hover:bg-teal-700 font-futura text-white text-xl font-bold py-2 px-4 rounded-full h-12 w-48"
            >
              Add Contacts
            </button>
            <button
              onClick={handleViewContacts}
              className="bg-teal-dark hover:bg-teal-700 font-futura text-white text-xl font-bold py-2 px-4 rounded-full h-12 w-48"
            >
              View Contacts
            </button>
            </div>

          </div>
        </div>
        
      )}
    </div>
  );
};

export default NewContacts;
