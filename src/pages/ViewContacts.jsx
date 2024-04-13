import React, { useState } from "react";
import logo2 from "../assets/logo2.png";
import logout from "../assets/logout.png";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import edit from "../assets/edit.png";
import deleteicon from "../assets/delete.png";
import userimg from "../assets/user.png";

const ViewContact = () => {
  const users = [
    {
      name: "Shan Basnayake",
      gender: "Male",
      email: "shanbasnayake@gmail.com",
      phone: "0765456432",
    },
    {
      name: "Jane Doe",
      gender: "Female",
      email: "janedoe@example.com",
      phone: "1234567890",
    },
    {
      name: "John Smith",
      gender: "Male",
      email: "johnsmith@example.com",
      phone: "0987654321",
    },
  ];
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
            <main className="px-20  flex-grow flex flex-col items-center gap-10 justify-left pt-6">
              <div className="flex flex-row  text-left text-white gap-96 ">
                <div>
                  <h1 className="font-bold text-5xl text-white font-futura ">
                    New Contact
                  </h1>
                </div>

                <div>
                  <PrimaryButton
                    label="add your first contact"
                    textcolor="#ffffff"
                    type="submit"
                  />
                </div>
              </div>
              <div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700   bg-gray-50 dark:bg-white-700 dark:text-teal-dark">
                      <tr>
                        <th scope="col" className="px-6 py-3 ">
                          <span className="sr-only">Edit</span>
                        </th>
                        <th scope="col" className="px-6 py-3 text-lg font-bold">
                          Full name
                        </th>
                        <th scope="col" className="px-6 py-3 text-lg font-bold">
                          Gender
                        </th>
                        <th
                          scope="col"
                          className="px-6 py- 3 text-lg font-bold"
                        >
                          E-mail
                        </th>
                        <th scope="col" className="px-6 py-3 text-lg font-bold">
                          Phone number
                        </th>
                        <th scope="col" className="px-6 py-3 ">
                          <span className="sr-only">Edit</span>
                        </th>
                        <th scope="col" className="px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user, index) => (
                        <tr className="bg-white border-b-0 dark:bg-white-800 dark:border-gray-700">
                          <td className="px-6 py-4 text-right pr-0">
                            <a
                              href="#"
                              className="font-medium text-blue-600 dark:text-blue-500 "
                            >
                              <img
                                src={userimg}
                                alt="Logo"
                                height={40}
                                width={40}
                              />
                            </a>
                          </td>
                          <td className="px-6 py-4 text-base font-semibold text-teal-dark whitespace-nowrap dark:text-teal-dark">
                            {user.name}
                          </td>
                          <td className="px-6 py-4 text-teal-dark text-base font-semibold">
                            {user.gender}
                          </td>
                          <td className="px-6 py-4 text-teal-dark text-base font-semibold">
                            {user.email}
                          </td>
                          <td className="px-6 py-4 text-teal-dark text-base font-semibold">
                            {user.phone}
                          </td>
                          <td className="px-6 py-4 text-right pr-0	">
                            <a
                              href="#"
                              className="font-medium text-blue-600 dark:text-blue-500 "
                            >
                              <img
                                src={edit}
                                alt="Logo"
                                height={20}
                                width={20}
                              />
                            </a>
                          </td>
                          <td className="px-6 py-4 text-right pl-2.5">
                            <a
                              href="#"
                              className="font-medium text-blue-600 dark:text-blue-500 "
                            >
                              <img
                                src={deleteicon}
                                alt="Logo"
                                height={25}
                                width={25}
                              />
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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

export default ViewContact;
