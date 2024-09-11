import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import {
  useGetCategoryQuery,
  useDeleteCategoryMutation,
} from "../context/api/category-api";

const Card = ({ open, setOpen, setUpdateCategory }) => {
  const { data, error, isLoading } = useGetCategoryQuery();
  const [deleteCategory] = useDeleteCategoryMutation();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleDelete = (id) => {
    deleteCategory(id)
      .unwrap()
      .then(() => {
        console.log("Category deleted");
      })
      .catch((err) => console.error("Failed to delete category:", err));
  };

  const handleEdit = (user) => {
    console.log("Edit clicked for ID:", user.id);
    setUpdateCategory(user);
    setOpen(true);
  };

  return (
    <>
      {data?.map((user) => (
        <div
          key={user.id}
          className="w-64 bg-white shadow-lg rounded-lg overflow-hidden my-4 relative"
        >
          <div className="absolute top-2 right-2 flex gap-2">
            <button
              onClick={() => handleEdit(user)}
              className="text-blue-500 hover:text-blue-700"
            >
              <FaEdit />
            </button>
            <button
              onClick={() => handleDelete(user.id)}
              className="text-red-500 hover:text-red-700"
            >
              <FaTrash />
            </button>
          </div>
          <img
            src="https://via.placeholder.com/150"
            alt="User Avatar"
            className="w-full h-32 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-900">
              {user.fname} {user.lname}
            </h2>
            <p className="text-gray-700 mt-2">Job: {user.job}</p>
            <p className="text-gray-700 mt-2">Gender: {user.gender}</p>
            <p className="text-gray-700 mt-4">Bio: {user.bio}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
