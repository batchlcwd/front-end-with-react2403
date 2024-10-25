import { Button } from "flowbite-react";
import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseCount,
  decreaseCount,
  resetCount,
  setCount,
} from "../redux/actions/counterAction";
import { addNotification } from "../redux/actions/notifyAction";
const About = () => {
  const counterRef = useRef(null);
  const notifyRef = useRef(null);

  const dispach = useDispatch();
  const count = useSelector((state) => {
    console.log(state);
    return state.counter.count;
  });

  const notifications = useSelector((state) => state.notify.notifications);

  return (
    <div>
      <Helmet>
        <title>About | Mindup</title>
      </Helmet>
      <div>
        <h1 className="text-center text-5xl p-5">Welcome to about page</h1>
        <h1 className="text-center text-5xl p-5">Count : {count}</h1>
        <div className="flex justify-center gap-3">
          <Button
            color="blue"
            onClick={() => {
              dispach(increaseCount());
            }}
          >
            Increase
          </Button>
          <Button
            onClick={() => {
              dispach(decreaseCount());
            }}
            color="cyan"
          >
            Decrease
          </Button>
          <Button
            onClick={() => {
              dispach(resetCount());
            }}
            color="dark"
          >
            Reset
          </Button>
        </div>
        <div className="flex justify-center gap-3 mt-6 ">
          <input
            ref={counterRef}
            type="text"
            className="rounded dark:bg-gray-700"
            placeholder="Enter count value"
          />
          <Button
            onClick={() => {
              console.log(counterRef.current.value);
              dispach(setCount(counterRef.current.value));
            }}
            color="failure"
          >
            Set
          </Button>
        </div>
        <div className="flex justify-center gap-3 mt-6 ">
          <input
            ref={notifyRef}
            type="text"
            className="rounded dark:bg-gray-700"
            placeholder="Enter new Notification"
          />
          <Button
            onClick={() => {
              console.log(notifyRef.current.value);
              dispach(addNotification(notifyRef.current.value));
              notifyRef.current.value = "";
              notifyRef.current.focus();
            }}
            color="green"
          >
            Add
          </Button>
        </div>
      </div>

      <div className="mt-5">
        <h1 className="text-center text-5xl">
          {" "}
          Notifications : {notifications.length}
        </h1>

        {notifications.map((notification, index) => {
          return (
            <h1 className="text-center text-3xl font-bold" key={index}>
              {notification}
            </h1>
          );
        })}
      </div>
    </div>
  );
};

export default About;
