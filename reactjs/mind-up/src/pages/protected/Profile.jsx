import React from "react";
import UserProfileCard from "../../components/UserProflieCard";
import { useAuth } from "../../context/AuthContext";
import { Helmet } from "react-helmet";
const Profile = () => {
  const { user } = useAuth();
  return (
    <div>
      <Helmet>
        <title> {user.name} | Profile </title>
      </Helmet>
      <div className="flex justify-center mt-16">
        <UserProfileCard user1={user} />
      </div>
    </div>
  );
};

export default Profile;
