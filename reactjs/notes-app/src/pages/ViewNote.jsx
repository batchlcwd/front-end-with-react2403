import React from "react";
import { useParams } from "react-router-dom";
import { useNotes } from "../context/notes-context";
import { noteStatus } from "../helper/helper";
const ViewNote = () => {
  const { noteId, noteTitle } = useParams();
  console.log("note id ", noteId);
  console.log("note title", noteTitle);
  const { notes, setNotes } = useNotes();
  const note = notes.find((note) => note.id === parseInt(noteId));
  console.log("note", note);

  return (
    <div className="flex justify-center my-10 w-full ">
      <div className="border p-10 rounded shadow flex flex-col gap-3">
        <h1 className="font-semibold text-4xl">{note.title}</h1>
        <p>{note.content}</p>
        <p>Date: {note.date}</p>
        <div className="flex justify-between">
          <p>Status : <span className="font-bold">{noteStatus[note.statusId]}</span></p>
          <p>Note Id : {note.id}</p>
        </div>
        <div className="flex justify-center gap-3">
          <button className="px-3 py-1 bg-yellow-700 text-white rounded hover:bg-yellow-800">
            Update
          </button>
          <button className="px-3 py-1 bg-red-700 text-white rounded hover:bg-red-800">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewNote;
