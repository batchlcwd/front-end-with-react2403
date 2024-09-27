import React from "react";
import { useNotes } from "../context/notes-context";

const NoteHeading = () => {
  const { notes, setNotes } = useNotes();
  return (
    <div className="border-b my-5 p-3 text-center">
      <h1 className="text-3xl font-bold">Here is list of notes </h1>
      <p>View all notes </p>
      <p className="font-bold">Number of notes : {notes.length} </p>
    </div>
  );
};

export default NoteHeading;
