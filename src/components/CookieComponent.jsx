import React, { useState } from "react";
import { useCookies } from "react-cookie";

const CookieComponent = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["userName"]);
  const [name, setName] = useState("");

  const handleSaveCookie = () => {
    setCookie("userName", name, { path: "/", maxAge: 3600 }); // Cookie berlaku selama 1 jam
    setName("");
  };

  const handleRemoveCookie = () => {
    removeCookie("userName");
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h1 className="text-2xl font-semibold text-center mb-4">React Cookie</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Enter Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleSaveCookie}
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
          >
            Save Cookie
          </button>
          <button
            onClick={handleRemoveCookie}
            className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600"
          >
            Remove Cookie
          </button>
        </div>
        {cookies.userName && (
          <div className="mt-4 text-center">
            <p className="text-gray-700">
              Saved Name: <span className="font-bold">{cookies.userName}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieComponent;
