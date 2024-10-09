import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "flowbite-react";
import CustomNavbar from "./components/CustomNavbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <CustomNavbar />
        <div className="py-20 px-2 md:px-16 flex flex-col gap-2">
          <h1 className="text-5xl text-center font-extrabold ">
            Welcome to Mind it up
          </h1>
          <h2 className="text-center text-red-500 dark:text-blue-500">
            Elevate Your Learning, One Step at a Time
          </h2>
          <p className="text-center">
            MindUp is an innovative e-learning platform designed to elevate your
            knowledge and skills in a personalized, interactive way. With a
            user-friendly interface and a diverse range of courses, MindUp
            empowers learners to explore subjects at their own pace while
            staying engaged through dynamic content and practical exercises.
            Whether you're looking to upskill for a new career, dive into
            personal growth, or simply learn something new, MindUp offers a
            supportive, results-driven environment where your mind can rise to
            new heights. Join us and take control of your learning journey, one
            click at a time.
          </p>
          <div className="flex justify-center">
            <Button color="blue" size="lg" className="m-2">
              Start Learning
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
