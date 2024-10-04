import React from "react";
import useForm from "../hooks/useForm";

const Login = () => {
  const [formValues, handleInputChanges] = useForm({
    email: "",
  });
  return (
    <div>
      <h1 className="text-3xl">Login here</h1>
      <form className="py-2 flex flex-col gap-3 mt-5 w-2/3 " action="">
        <div>
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            value={formValues.email}
            onChange={handleInputChanges}
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-red-700 px-3 py-1 rounded hover:bg-red-600">
            Submit
          </button>
        </div>
        {JSON.stringify(formValues)}
      </form>
    </div>
  );
};

export default Login;
