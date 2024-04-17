import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo2 from "../assets/logo2.png";
import logout from "../assets/logout.png";
import PrimaryButton from "../components/PrimaryButton";
import edit from "../assets/edit.png";
import deleteicon from "../assets/delete.png";
import toggle from "../assets/toggle.png";
import userimg from "../assets/user.png";
import userimg1 from "../assets/userf.png";
import line from "../assets/line.png";
import axios from "axios";
import Cookies from "js-cookie";

const ViewContact = () => {
  const [users, setUsers] = useState([]);
  const [editModeMap, setEditModeMap] = useState({});
  const [editedDataMap, setEditedDataMap] = useState({});
  const [success, setSuccess] = useState(false);
  const [deletemodal, setdeletemodal] = useState(false);
  const navigate = useNavigate();
  const [deleteName, setdeleteName] = useState("");
  const [deleteId, setdeleteId] = useState("");
  const [successDelete, setSuccessDelete] = useState(false);




  const handleContact = () => {
    navigate("/contacts/new");
  };
  const handleLogout = () => {
    navigate("/login");
  };
  const handleSucsess = () => {
    setSuccess(false);
    window.location.reload();
    setSuccessDelete(false);
  };
  const handleDelete = (userId, name) => {
    setdeletemodal(true);
    setdeleteName(name);
    setdeleteId(userId);
  };
  const handleDeleteContact = async () => {
    const jwtToken = Cookies.get("jwtToken"); 

    try {
      const response = await axios.delete(
        `http://localhost:5001/api/contacts/${deleteId}`,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`, 
          },
        }
      );

      if (response.status === 200) {
        console.log("Contact deleted successfully:", response.data);
        setSuccessDelete(true);
        setdeletemodal(false);
      } else {
        console.error("Failed to delete contact:", response.data);
      }
    } catch (error) {
      console.error("Error deleting contact:", error.message);
    }
  };
  const handleCancel = () => {
    setdeletemodal(false);
  };
  const handleEdit = (userId, name, gender, email, phone) => {
    setEditModeMap((prevEditModeMap) => ({
      ...prevEditModeMap,
      [userId]: true,
    }));
    setEditedDataMap({
      ...editedDataMap,
      [userId]: { name, gender, email, phone },
    });
  };
  const toggleGender = (userId) => {
    const currentGender = editedDataMap[userId].gender;
    const newGender = currentGender === "male" ? "female" : "male";

    setEditedDataMap({
      ...editedDataMap,
      [userId]: {
        ...editedDataMap[userId],
        gender: newGender,
      },
    });
  };

  const handleSave = async (userId) => {
    const editedData = editedDataMap[userId];

    try {
      const jwtToken = Cookies.get("jwtToken");
      const headers = {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "application/json",
      };

      const payload = {
        name: editedData.name,
        phone: editedData.phone,
        email: editedData.email,
        gender: editedData.gender,
      };

      const response = await axios.put(
        `http://localhost:5001/api/contacts/${userId}`,
        payload,
        {
          headers: headers,
        }
      );

      if (response.ok) {
        console.log("Contact updated successfully!");
        setSuccess(true);
      } else {
        console.error("Error:", response.statusText);
        setSuccess(true);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }

    setEditModeMap((prevEditModeMap) => ({
      ...prevEditModeMap,
      [userId]: false,
    }));
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const jwtToken = Cookies.get("jwtToken");
        const headers = {
          Authorization: `Bearer ${jwtToken}`,
        };

        const response = await axios.get(
          "http://localhost:5001/api/contacts/getall",
          {
            headers: headers,
          }
        );

        if (response.data && response.data.length > 0) {
          const initialEditModeMap = {};
          const initialEditedDataMap = {};

          response.data.forEach((user) => {
            initialEditModeMap[user._id] = false;
            initialEditedDataMap[user._id] = {
              name: user.name,
              gender: user.gender,
              email: user.email,
              phone: user.phone,
            };
          });
          
          setEditModeMap(initialEditModeMap);
          setEditedDataMap(initialEditedDataMap);
          setUsers(response.data);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
        navigate("/login");
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <div className="bg-custom-bg min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
        <div
          className={`flex-1 bg-cover bg-center ${
            success || successDelete || deletemodal ? "filter blur-sm" : ""
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
              <main className="px-20  flex-grow flex flex-col items-center gap-10 justify-left pt-6">
                <div className="flex flex-row  text-left text-white gap-96 ">
                  <div>
                    <h1 className="font-bold text-5xl text-white font-futura ">
                      New Contact
                    </h1>
                  </div>

                  <div>
                    <PrimaryButton
                      label="add new contact"
                      eventname={handleContact}
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
                          <th
                            scope="col"
                            className="px-6 py-3 text-lg font-bold"
                          >
                            Full name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-lg font-bold"
                          >
                            Gender
                          </th>
                          <th
                            scope="col"
                            className="px-6 py- 3 text-lg font-bold"
                          >
                            E-mail
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-lg font-bold"
                          >
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
                        {users.map((user) => (
                          <tr className="bg-white border-b-0 dark:bg-white-800 dark:border-gray-700">
                            <td className="px-6 py-4 text-right pr-0">
                              <a
                                href="#"
                                className="font-medium text-blue-600 dark:text-blue-500 "
                              >
                                <img
                                  src={user.gender === 'male' ? userimg : userimg1}
                                  alt="Logo"
                                  height={40}
                                  width={40}
                                />
                              </a>
                            </td>
                            <td className="px-6 py-4 text-base font-semibold text-teal-dark whitespace-nowrap dark:text-teal-dark">
                              {editModeMap[user._id] ? (
                                <div className="relative">
                                  <input
                                    type="text"
                                    value={editedDataMap[user._id].name}
                                    className="w-36 px-2 py-1 focus:outline-none bg-teal-dark bg-opacity-10"
                                    onChange={(e) =>
                                      setEditedDataMap({
                                        ...editedDataMap,
                                        [user._id]: {
                                          ...editedDataMap[user._id],
                                          name: e.target.value,
                                        },
                                      })
                                    }
                                  />
                                  <a
                                    href="#"
                                    className="absolute right-0 top-0 "
                                  >
                                    <img src={line} height={20} width={2} />
                                  </a>
                                </div>
                              ) : (
                                user.name
                              )}
                            </td>
                            <td className="px-6 py-4 text-teal-dark text-base font-semibold">
                              {editModeMap[user._id] ? (
                                <div className="relative">
                                  <input
                                    type="text"
                                    value={editedDataMap[user._id].gender}
                                    className="w-24 px-2 py-1 focus:outline-none bg-teal-dark bg-opacity-10"
                                    onChange={(e) =>
                                      setEditedDataMap({
                                        ...editedDataMap,
                                        [user._id]: {
                                          ...editedDataMap[user._id],
                                          gender: e.target.value,
                                        },
                                      })
                                    }
                                  />
                                  <a
                                    href="#"
                                    onClick={() => toggleGender(user._id)}
                                    className="absolute right-0 top-0 mt-2 mr-2"
                                  >
                                    <img
                                      src={toggle}
                                      alt="Toggle Gender"
                                      height={20}
                                      width={20}
                                    />
                                  </a>
                                </div>
                              ) : (
                                user.gender
                              )}
                            </td>
                            <td className="px-6 py-4 text-teal-dark text-base font-semibold">
                              {editModeMap[user._id] ? (
                                <div className="relative">
                                <input
                                  type="text"
                                  value={editedDataMap[user._id].email}
                                  className="w-60 px-2 py-1 focus:outline-none bg-teal-dark bg-opacity-10"
                                  onChange={(e) =>
                                    setEditedDataMap({
                                      ...editedDataMap,
                                      [user._id]: {
                                        ...editedDataMap[user._id],
                                        email: e.target.value,
                                      },
                                    })
                                  }
                                />
                                                                  <a
                                    href="#"
                                    className="absolute right-0 top-0 "
                                  >
                                    <img src={line} height={20} width={2} />
                                  </a>
                                </div>
                              ) : (
                                user.email
                              )}
                            </td>
                            <td className="px-6 py-4 text-teal-dark text-base font-semibold">
                              {editModeMap[user._id] ? (
                                <div className="relative">
                                <input
                                  type="text"
                                  value={editedDataMap[user._id].phone}
                                  className="w-32 px-2 py-1 focus:outline-none bg-teal-dark bg-opacity-10"
                                  onChange={(e) =>
                                    setEditedDataMap({
                                      ...editedDataMap,
                                      [user._id]: {
                                        ...editedDataMap[user._id],
                                        phone: e.target.value,
                                      },
                                    })
                                  }
                                />
                                                                  <a
                                    href="#"
                                    className="absolute right-0 top-0 "
                                  >
                                    <img src={line} height={20} width={2} />
                                  </a>
                                </div>
                              ) : (
                                user.phone
                              )}
                            </td>
                            <td className="px-6 py-4 text-right pr-0	">
                              {!editModeMap[user._id] ? (
                                <a
                                  href="#"
                                  className="font-medium text-blue-600 dark:text-blue-500"
                                  onClick={() =>
                                    handleEdit(
                                      user._id,
                                      user.name,
                                      user.gender,
                                      user.email,
                                      user.phone
                                    )
                                  }
                                >
                                  <img
                                    src={edit}
                                    alt="Edit"
                                    height={20}
                                    width={20}
                                  />
                                </a>
                              ) : (
                                <button
                                  className="bg-teal-dark hover:bg-teal-700 font-futura text-white text-base font-bold rounded-full h-9 w-16"
                                  onClick={() => handleSave(user._id)}
                                >
                                  Save
                                </button>
                              )}
                            </td>

                            <td className="px-6 py-4 text-right pl-2.5">
                              <div>
                                {!editModeMap[user._id] && (
                                  <a
                                    href="#"
                                    className="font-medium text-blue-600 dark:text-blue-500 "
                                    onClick={() =>
                                      handleDelete(user._id, user.name)
                                    }
                                  >
                                    <img
                                      src={deleteicon}
                                      alt="Logo"
                                      height={25}
                                      width={25}
                                    />
                                  </a>
                                )}
                              </div>
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
                    <a href="#" onClick={handleLogout}>
                      logout
                    </a>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
          <div className="bg-white p-8 rounded-lg text-center w-1/2 h-1/3 space-y-10">
            <p className="text-teal-dark text-3xl font-futura  mb-4">
              {" "}
              Your contact has been saved successfully!
            </p>

            <button
              onClick={handleSucsess}
              className="bg-teal-dark hover:bg-teal-700 font-futura text-white text-xl font-bold py-2 px-4 rounded-full h-12 w-48"
            >
              ok
            </button>
          </div>
        </div>
      )}
      {deletemodal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
          <div className="bg-white p-8 rounded-lg text-center w-1/2 h-1/3 space-y-10">
            <p className="text-teal-dark text-2xl font-futura  mb-4">
              Do you want to delete the contact “{deleteName}”?
            </p>
            <div className="flex flex-row gap-20 pl-14">
              <button
                onClick={handleDeleteContact}
                className="bg-teal-dark hover:bg-teal-700 font-futura text-white text-xl font-bold py-2 px-4 rounded-full h-12 w-48"
              >
                Yes
              </button>
              <button
                onClick={handleCancel}
                className="bg-white border-2 border-teal-dark hover:bg-teal-700 font-futura text-teal-dark text-xl font-bold  py-2 px-4 rounded-full h-12 w-48"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {successDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
          <div className="bg-white p-8 rounded-lg text-center w-1/2 h-1/3 space-y-10">
            <p className="text-teal-dark text-3xl font-futura  mb-4">
              {" "}
              Your contact has been deleted successfully!
            </p>

            <button
              onClick={handleSucsess}
              className="bg-teal-dark hover:bg-teal-700 font-futura text-white text-xl font-bold py-2 px-4 rounded-full h-12 w-48"
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewContact;
