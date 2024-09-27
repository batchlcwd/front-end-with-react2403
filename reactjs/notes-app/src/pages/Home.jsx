import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useNotes } from "../context/notes-context";

const Home = () => {
  const { isAuthenticated, setIsAuthenticated } = useNotes();

  const navigate = useNavigate();
  // const location=useLocation()
  // console.log(location);

  function handleAddNoteClick() {
    //kya code .. add note page pe
    // is url pe
    navigate("/add-note");
  }
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-3 text-center mt-16">
        <h1 className="font-semibold text-3xl">Welcome to note app</h1>
        <p>This is a simple note taking app.</p>
        <p>You can add, edit and delete notes.</p>
        <p>You can also search for notes by title or content.</p>
        <button
          onClick={handleAddNoteClick}
          className="bg-green-700 rounded hover:bg-green-800 px-3 py-2 "
        >
          Start Taking notes
        </button>
        <button
          onClick={() => {
            setIsAuthenticated(!isAuthenticated);
            navigate("/data/2525");
          }}
          className={`bg-${
            isAuthenticated ? "yellow" : "red"
          }-700 rounded hover:bg-yellow-800 px-3 py-2`}
        >
          {isAuthenticated ? "Logout" : "login"}
        </button>
      </div>
    </div>
  );
};

export default Home;
