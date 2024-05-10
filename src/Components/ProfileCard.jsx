import React from "react";

const ProfileCard = ({ name, image, job, about }) => {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg mx-auto w-60 border-solid border-2 border-b-indigo-500 select-none">
      <img
        src={image}
        alt="profile-image"
        className="rounded-full w-32 h-32 mx-auto mt-4 border-blue-500"
      />
      <div className="text-center px-6 py-4">
        <h2 className="font-bold text-xl text-gray-800">{name}</h2>
        <a className="text-sm text-gray-600">{job}</a>
        <p className="text-gray-700 mt-2 mb-5">{about}</p>
        <a
          className="m-10 bg-indigo-500 text-white cursor-pointer font-semibold  px-3 py-2 rounded-lg"
          href="https://www.linkedin.com/in/guru09/" target="_blank"
        >
          contact
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
