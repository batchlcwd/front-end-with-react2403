import { useState } from "react";
import User from "./User";

const ShowUsers = () => {
  ///how component manage own state

  // const users=[
  //     {id:1,name:'Ali'},
  //     {id:2,name:'Sara'},
  //     {id:3,name:'Mohammad'}
  // ]

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([
    { id: 1, name: "Ayush" },
    { id: 2, name: "Sahil" },
    { id: 3, name: "Shuvradeep" },
  ]);

  function handleClear() {
    setUsers([]);
  }

  function addUser() {
    setUsers([...users, { id: 4, name: "Ayush Sharma" }]);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Show Users</h1>
      <h1>{loading ? "Loading..." : "User loaded"}</h1>
      <div>
        {users.map((user) => {
          return <User key={user.id} name={user.name} id={user.id} />;
        })}
      </div>
      {users.length == 0 ? (
        <h1>No users in list </h1>
      ) : (
        <h1>Total Users {users.length}</h1>
      )}

      <button onClick={handleClear}>Clear</button>
      <button onClick={addUser}>Add</button>
    </div>
  );
};

export default ShowUsers;
