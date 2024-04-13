import React, { useEffect } from "react";
import logo2 from "../assets/logo2.png";
import logout from "../assets/logout.png";
import PrimaryButton from "../components/PrimaryButton";

const Welcome = () => {
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
            <header className="pl-20 py-4 pt-6">
              <img
                className="pt-8"
                src={logo2}
                alt="Logo"
                height={90}
                width={140}
              />
            </header>
            <br />
            <main className="px-20  flex-grow flex items-center justify-left">
              <div className="text-left text-white">
                <h1 className="font-bold text-6xl text-white font-futura">
                  Welcome,
                </h1>
                <br />
                <p className="font-normal text-4xl text-white font-futura">
                  This is where your contacts will live. Click the button below
                  to add a new contact.
                </p>
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
              <div class="flex flex-row gap-4 pr-10 pb-4">
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

export default Welcome;
