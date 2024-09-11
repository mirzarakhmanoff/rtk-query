import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/user-slice";
import {
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
} from "../context/api/category-api";

const Form = ({ open, setOpen, setUpdateCategory, updateCategory }) => {
  const [createUser] = useCreateCategoryMutation();
  const [updateCategoryMutation] = useUpdateCategoryMutation();

  const handleCreateBlog = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    createUser(data)
      .unwrap()
      .then(() => {
        e.target.reset();
        setOpen(false);
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    updateCategoryMutation({ id: updateCategory.id, body: data })
      .unwrap()
      .then(() => {
        setOpen(false);
      });
  };

  return (
    <div className="flex min-h-screen bg-gray-100 w-[700px]">
      <div
        className={`${
          open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        } transform transition-all duration-500 ease-in-out justify-center items-start w-ful bg-white p-6 rounded-lg shadow-md m-4`}
      >
        <form
          onSubmit={updateCategory ? handleUpdate : handleCreateBlog}
          className="w-[600px]"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">
            Personal Information
          </h2>

          <div className="mb-4">
            <label
              htmlFor="fname"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Name
            </label>
            <input
              defaultValue={updateCategory?.fname}
              type="text"
              name="fname"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="lname"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Surname
            </label>
            <input
              defaultValue={updateCategory?.lname}
              type="text"
              name="lname"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="job"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Job
            </label>
            <input
              defaultValue={updateCategory?.job}
              type="text"
              name="job"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Gender
            </label>
            <select
              defaultValue={updateCategory?.gender}
              name="gender"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="hayvon">Hayvon</option>
            </select>
          </div>

          <div className="mb-6">
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Bio
            </label>
            <textarea
              defaultValue={updateCategory?.bio}
              name="bio"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
          <button
            onClick={() => setOpen(false)}
            type="button"
            className="w-full bg-gray-500 text-white mt-4 py-2 rounded-md hover:bg-red-200 transition-colors"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
