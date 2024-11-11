import { Button } from "flowbite-react";
import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  resetCounter,
} from "../redux/slice/counterSlice";
// import { addNotification } from "../redux/actions/notifyAction";
import { addNotification, getTodoById } from "../redux/slice/notifySlice";
// import {
//   increaseCount,
//   decreaseCount,
//   resetCount,
//   setCount,
// } from "../redux/actions/counterAction";
// import { addNotification } from "../redux/actions/notifyAction";
const About = () => {
  const counterRef = useRef(null);
  const notifyRef = useRef(null);

  const dispach = useDispatch();
  const count = useSelector((state) => {
    console.log(state);
    return state.counter.count;
  });

  const { notifications, loading, error } = useSelector(
    (state) => state.notify
  );

  useEffect(() => {
    dispach(getTodoById(1));
    console.log("getting todo");
  }, [dispach]);

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
              dispach(increment());
            }}
          >
            Increase
          </Button>
          <Button
            onClick={() => {
              dispach(decrement());
            }}
            color="cyan"
          >
            Decrease
          </Button>
          <Button
            onClick={() => {
              dispach(resetCounter());
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
              dispach(incrementByAmount(counterRef.current.value));
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
              dispach(
                addNotification({
                  title: notifyRef.current.value,
                  id: "" + Math.random() * 1000,
                  userId: "user",
                  completed: true,
                })
              );
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
        {error}
        <h1 className="text-center text-5xl">
          {" "}
          Notifications : {notifications.length}
        </h1>

        {loading && <h1 className="text-4xl text-center">Loading notifications</h1>}

        {notifications.map((notification, index) => {
          return (
            <h1 className="text-center text-3xl font-bold" key={index}>
              {notification.title}
            </h1>
          );
        })}
      </div>
    </div>
  );
};

export default About;
