import React from "react";
import { timeAgo } from "../helpers/TimeHelper";
import { Button } from "flowbite-react";
import { useAuth } from "../context/AuthContext";

const UserProfileCard = ({ user1 }) => {
  const { isLogin, user } = useAuth();

  return (
    <div
      className="max-w-sm  overflow-hidden shadow-lg p-6 
    bg-gray-200 rounded  dark:bg-gray-800 dark:text-white
    "
    >
      <div className="flex items-center space-x-4">
        {/* User Image Placeholder */}
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-500">
            {user1.name.charAt(0)}
          </span>
        </div>
        <div>
          {/* User Name and Role */}
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            {user1.name}
          </h2>
          <p className="text-gray-500 dark:text-gray-100">
            {user1.roles.map((role) => (
              <span key={role.roleId}>{role.roleName}</span>
            ))}
          </p>
        </div>
      </div>

      {/* User Information */}
      <div className="mt-4 space-y-2">
        <p className="text-sm text-gray-600 dark:text-gray-200">
          <strong>ID:</strong> {user.userId}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-200">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-200">
          <strong>Phone:</strong> {user.phoneNumber}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-200">
          <strong>Active:</strong> {user.active ? "Yes" : "No"}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-200">
          <strong>Joined:</strong> {timeAgo(new Date(user.createAt))}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-200">
          <strong>About:</strong> {user.about}
        </p>
      </div>
      {/* important */}
      {isLogin() && user1.id == user.id ? (
        <div className="flex mt-3 justify-center">
          <Button>Update Profile</Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default UserProfileCard;
