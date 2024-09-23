const User = ({ name, id }) => {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        padding: "10px",
        marginBottom: "5px",
        width: "300px",
      }}
    >
      <p>{name}</p>
      <p>{id}</p>
      <button>Show Profile</button>
    </div>
  );
};

export default User;
