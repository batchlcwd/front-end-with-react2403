import React from "react";
import useForm from "../hooks/useForm";

const Registration = () => {
  const [values, handleChange] = useForm({
    email: "",
    name: "",
  });

  function handleSubmit(event){
    event.preventDefault();
    console.log(values)
  }

  return (
    <div>
      <h1 className="text-3xl">Registration</h1>
      <form onSubmit={handleSubmit} className="py-2 flex flex-col gap-3 mt-5 w-2/3 " action="">
        <div>
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            value={values.email}
            onChange={handleChange}
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-green-700 px-3 py-1 rounded hover:bg-green-600">
            Submit
          </button>
        </div>
        {JSON.stringify(values)}
      </form>
    </div>
  );
};

export default Registration;
