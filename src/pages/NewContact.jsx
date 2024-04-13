import React, { useState } from "react";
import logo2 from "../assets/logo2.png";
import logout from "../assets/logout.png";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import { Radio } from "@material-tailwind/react";
const NewContact = () => {
  const [selectedGender, setSelectedGender] = useState("");

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };
  return (
    <div>
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
                    />
                  </div>
                  <div>
                    <InputField
                      label="e-mail"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
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
                    />
                  </div>
                  <div className="flex flex-row gap-20">
                    <div class="font-normal text-xl text-white font-futura pt-4">
                      Gender
                    </div>

                    <div className="flex items-center me-4">
                      <input
                        id="inline-radio"
                        type="radio"
                        value=""
                        name="inline-radio-group"
                        className="w-4 h-4 text-blue-600 bg-transparent border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="inline-radio"
                        className="ms-2 font-futura text-xl font-medium text-gray-900 dark:text-gray-300"
                      >
                        male
                      </label>
                    </div>
                    <div className="flex items-center me-4">
                      <input
                        id="inline-2-radio"
                        type="radio"
                        value=""
                        name="inline-radio-group"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="inline-2-radio"
                        className="ms-2 font-futura text-xl font-medium text-gray-900 dark:text-gray-300"
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
                    label="add your first contact"
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
                  <a href="#">logout</a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContact;
