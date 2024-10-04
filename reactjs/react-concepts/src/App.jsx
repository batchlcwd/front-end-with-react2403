import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Registration from "./components/Registration";
import Login from "./components/Login";
import GetData from "./components/GetData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="p-10">
        <h1 className="text-center font-bold text-5xl">
          Randome Roke Generator
        </h1>
        <div className="flex justify-center mt-10 space-x-4">
          {/* <div className="w-full ">
            <Registration />
          </div> */}
          <div className=" ">
            {/* <Login /> */}
            <GetData />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
