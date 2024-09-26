import React from "react";
import { useNotes } from "../context/notes-context";
import NoteHeading from "./NoteHeading";

const ViewNotes = () => {
  const { notes, setNotes } = useNotes();
  return (
    <div>
      <NoteHeading />
      {notes.map((note, index) => (
        <div
          key={index}
          className="p-5 my-3 border rounded  shadow bg-gray-700"
        >
          <h1>{note.title}</h1>
          <p>{note.content}</p>
          <p>status : {note.statusId}</p>
          <p>date: {note.date}</p>
        </div>
      ))}
    </div>
  );
};

export default ViewNotes;
