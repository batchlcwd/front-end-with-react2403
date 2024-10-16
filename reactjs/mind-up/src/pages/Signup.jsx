import React from "react";
import { useForm } from "react-hook-form";
import { createUser } from "../services/auth.service";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (object) => {
    console.log(object);

    //call backend to create user

    try {
      //actual call to backend
      const userData = await createUser(object);
      console.log(userData);
      toast.success("User is created !!");
      navigate("/login");
    } catch (error) {
      //print the error / show error message
      console.log(error);
      toast.error(error.response?.data?.message);
    } finally {
      // loader off...
    }
  };

  return (
    <div className="mt-5 lg:mt-20 dark:bg-gray-900 dark:text-white text-gray-900 flex items-center justify-center ">
      <div className="w-full max-w-md p-8 space-y-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>

        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
          Create an account to access our e-learning platform and unlock
          exciting content.
        </p>

        <form
          className="flex flex-col gap-3"
          action=""
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">
              Name
            </label>
            <input
              {...register("name", {
                required: "Name is required !",
                minLength: {
                  value: 5,
                  message: "Name must be at least 5 characters long !",
                },
              })}
              type="text"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter your name"
            />
            {errors.name && (
              <span className="text-red-400 py-2 block px-2">
                {errors.name.message}
              </span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is Required !",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Email must be valid !",
                },
              })}
              type="email"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter your email"
            />
            {errors.email && (
              <span className="text-red-400 py-2 block px-2">
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">
              Phone Number
            </label>
            <input
              {...register("phoneNumber", {
                required: "Phone number is Required !",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be valid !",
                },
              })}
              type="text"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter your phone number"
            />
            {errors.phoneNumber && (
              <span className="text-red-400 py-2 block px-2">
                {errors.phoneNumber.message}
              </span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is Required !",
                minLength: {
                  value: 5,
                  message: "Password must be at least 5 characters long",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  message:
                    "Password must contain at least one uppercase letter,one lowercase letter,one number and one special character !",
                },
              })}
              type="password"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter your password"
            />
            {errors.password && (
              <span className="text-red-400 py-2 block px-2">
                {errors.password.message}
              </span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">
              About
            </label>
            <textarea
              {...register("about", {
                required: "Write something about yourself !",
                minLength: {
                  value: 5,
                  message: "Write atleast 5 characters !",
                },
              })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Tell us something about yourself"
              rows="3"
            ></textarea>
            {errors.about && (
              <span className="text-red-400 py-2 block px-2">
                {errors.about.message}
              </span>
            )}
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Sign Up
            </button>
            <button
              type="reset"
              className="w-full py-2 bg-gray-400 dark:bg-gray-600 text-white rounded-lg hover:bg-gray-500 dark:hover:bg-gray-700"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
