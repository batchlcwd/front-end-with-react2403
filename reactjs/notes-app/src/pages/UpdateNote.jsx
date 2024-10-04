import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNotes } from "../context/notes-context";

const UpdateNote = () => {
  const { notes, setNotes } = useNotes();
  const { noteId } = useParams();
  const [form, setForm] = useState({
    id: "",
    title: "",
  });
  return (
    <div>
      <h1 className="text-4xl text-center">Update Note {noteId}</h1>
      {/* <input type="text" value={form.id} /> */}
      {/* assingment */}
      {/* create form here */}
      {/* values: two way data binding: initial put */}
      {/* button ko submit kara ke array object mein update kar dena hai. */}
    </div>
  );
};

export default UpdateNote;
