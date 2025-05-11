import { useStateProvider } from "../context/StateContext";
import { reducerCases } from "../context/constants";
import {
  HOST,
  IMAGES_URL,
  SET_USER_IMAGE,
  SET_USER_INFO,
} from "../utils/constants";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Profile() {
  const router = useRouter();
  const [{ userInfo }, dispatch] = useStateProvider();
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageHover, setImageHover] = useState(false);
  const [image, setImage] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState({
    userName: "",
    fullName: "",
    description: "",
    phoneNumber: "",
    cnic: "",
    location: "",
  });

  useEffect(() => {
    const handleData = { ...data };
    if (userInfo) {
      if (userInfo?.username) handleData.userName = userInfo?.username;
      if (userInfo?.description) handleData.description = userInfo?.description;
      if (userInfo?.fullName) handleData.fullName = userInfo?.fullName;
      if (userInfo?.phoneNumber) handleData.phoneNumber = userInfo?.phoneNumber;
      if (userInfo?.cnic) handleData.cnic = userInfo?.cnic;
      if (userInfo?.location) handleData.location = userInfo?.location;

      if (userInfo?.imageName) {
        const fileName = image;
        fetch(userInfo.imageName).then(async (response) => {
          const contentType = response.headers.get("content-type");
          const blob = await response.blob();
          const files = new File([blob], fileName, { contentType });
          setImage(files);
        });
      }

      setData(handleData);
      setIsLoaded(true);
    }
  }, [userInfo]);

  const handleFile = (e) => {
    let file = e.target.files;
    const fileType = file[0]["type"];
    const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
    if (validImageTypes.includes(fileType)) {
      setImage(file[0]);
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const setProfile = async () => {
    try {
      const response = await axios.post(
        SET_USER_INFO,
        { ...data },
        { withCredentials: true }
      );
      if (response.data.userNameError) {
        setErrorMessage("Enter a Unique Username");
      } else {
        let imageName = "";
        if (image) {
          const formData = new FormData();
          formData.append("images", image);
          const {
            data: { img },
          } = await axios.post(SET_USER_IMAGE, formData, {
            withCredentials: true,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          imageName = img;
        }

        dispatch({
          type: reducerCases.SET_USER,
          userInfo: {
            ...userInfo,
            ...data,
            image: imageName.length ? HOST + "/" + imageName : false,
          },
        });

        router.push("/");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const inputClassName =
    "block p-4 w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500";
  const labelClassName =
    "mb-2 text-lg font-medium text-gray-900 dark:text-white";
  const headerClassName = "text-center mb-8 text-gray-700";

  return (
    <>
      {isLoaded && (
        <div className="flex flex-col items-center justify-start min-h-[80vh] gap-6">
          <h1 className={headerClassName + " text-4xl font-bold"}>
            Welcome to TaskKar
          </h1>
          <h2 className={headerClassName + " text-xl"}>
            Complete your profile to unlock the full potential of TaskKar
          </h2>
          {errorMessage && (
            <div>
              <span className="text-red-600 font-bold">{errorMessage}</span>
            </div>
          )}
          <div className="flex flex-col items-center w-full gap-5">
            <div
              className="flex flex-col items-center cursor-pointer"
              onMouseEnter={() => setImageHover(true)}
              onMouseLeave={() => setImageHover(false)}
            >
              <label className={labelClassName} htmlFor="">
                Select a Profile Picture
              </label>
              <div className="bg-purple-500 h-36 w-36 flex items-center justify-center rounded-full relative">
                {image ? (
                  <Image
                    src={URL.createObjectURL(image)}
                    alt="profile"
                    fill
                    className="rounded-full"
                  />
                ) : (
                  <span className="text-6xl text-white">
                    {userInfo.email[0].toUpperCase()}
                  </span>
                )}
                <div
                  className={`absolute bg-slate-400 h-full w-full rounded-full flex items-center justify-center transition-all duration-100 ${
                    imageHover ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <input
                    type="file"
                    onChange={handleFile}
                    className="opacity-0"
                    name="profileImage"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-4 w-[500px]">
              <div>
                <label className={labelClassName} htmlFor="userName">
                  Username
                </label>
                <input
                  className={inputClassName}
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="Enter your username"
                  value={data.userName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className={labelClassName} htmlFor="fullName">
                  Full Name
                </label>
                <input
                  className={inputClassName}
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Enter your full name"
                  value={data.fullName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex gap-4 w-[500px]">
              <div>
                <label className={labelClassName} htmlFor="phoneNumber">
                  Phone Number
                </label>
                <input
                  className={inputClassName}
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="+92XXXXXXXXXX"
                  value={data.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className={labelClassName} htmlFor="cnic">
                  CNIC
                </label>
                <input
                  className={inputClassName}
                  type="text"
                  name="cnic"
                  id="cnic"
                  placeholder="Enter your 13-digit CNIC"
                  value={data.cnic}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col w-[500px]">
              <label className={labelClassName} htmlFor="location">
                Location
              </label>
              <input
                className={inputClassName}
                type="text"
                name="location"
                id="location"
                placeholder="Enter your location"
                value={data.location}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-[500px]">
              <label className={labelClassName} htmlFor="description">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                value={data.description}
                onChange={handleChange}
                className={inputClassName}
                placeholder="Write a brief description about yourself"
              ></textarea>
            </div>
            <button
              className="border text-lg font-semibold px-5 py-3 border-[#1DBF73] bg-[#1DBF73] text-white rounded-md"
              type="button"
              onClick={setProfile}
            >
              Save Profile
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
