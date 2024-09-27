import React from "react";
import { useNotes } from "../context/notes-context";
import NoteHeading from "../components/NoteHeading";
import NoteList from "../components/NoteList";

const ViewNotes = () => {
  const { notes, setNotes } = useNotes();
  return (
    <div>
      <NoteHeading />
      {notes.map((note, index) => (
        <NoteList key={index} note={note} />
      ))}
    </div>
  );
};

export default ViewNotes;
