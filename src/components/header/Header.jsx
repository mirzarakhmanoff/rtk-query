import React, { useState } from "react";
import Form from "../form/Form";
import Card from "../card/Card";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-gray-800 p-2 shadow-md ">
      <div className="container mx-auto flex p-2 items-center justify-between">
        <div className="text-white text-xl font-bold">Admin Panel</div>

        <div className="hidden md:flex space-x-4">
          <a className="text-gray-300 hover:text-white">Dashboard</a>
          <a className="text-gray-300 hover:text-white">Users</a>
          <a className="text-gray-300 hover:text-white">Settings</a>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setOpen((p) => !p)}
            className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Add Users
          </button>

          <div className="md:hidden flex items-center">
            <button className="text-gray-300 focus:outline-none">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden mt-2">
        <a className="block text-gray-300 hover:text-white py-1">Dashboard</a>
        <a className="block text-gray-300 hover:text-white py-1">Users</a>
        <a className="block text-gray-300 hover:text-white py-1">Settings</a>
      </div>
      <div className="flex items-start gap-5 justify-start ">
        <Form open={open} setOpen={setOpen} />
        <div className="flex gap-4 flex-wrap">
          <Card />
        </div>
      </div>
    </nav>
  );
};

export default Header;
