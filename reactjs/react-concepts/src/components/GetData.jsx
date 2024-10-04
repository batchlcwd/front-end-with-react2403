import React from "react";
import useFetchData from "../hooks/useFetchData";

const GetData = () => {
  const [data, loading, error, setUrl] = useFetchData(
    `https://official-joke-api.appspot.com/random_joke?date=${new Date().getTime()}`
  );

  return (
    <div>
      <h1 className="text-3xl">Getting Random Joke</h1>
      <div className="flex flex-col gap-2">
        <p>This is where we get the data from the API.</p>

        <div className="bg-gray-700 rounded p-10">
          <h1>{loading && "Loading..."}</h1>
          <p>{error && "Error"}</p>
          <p>
            {data && !loading && (
              <div>
                <h1 className="text-2xl">{data.type}</h1>
                <h1>{data.setup}</h1>
                <h1>{data.punchline}</h1>
              </div>
            )}
          </p>
        </div>

        <button
          onClick={() => {
            setUrl(
              `https://official-joke-api.appspot.com/random_joke?date=${new Date().getTime()}`
            );
          }}
          className="bg-blue-700 hover:bg-blue-500 px-3 py-2 rounded-sm"
        >
          Get new joke!
        </button>
      </div>
    </div>
  );
};

export default GetData;
