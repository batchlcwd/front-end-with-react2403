import { createContext, useContext, useState } from "react";

// 1.create context
// Context: A way to pass data through the component tree without having to pass props manually at every level.
const NoteContext = createContext();

//2. Provider - normal component that provides the value to consumer .

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([
    {
      title: "This is first dummy app",
      content: "This is example of context api",
      statusId: 1,
      date: "today",
    },
  ]);

  // koun sa data hame provider karna hai.
  return (
    <NoteContext.Provider
      value={{
        notes,
        setNotes,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
//3. call karke app user kar poage context ke through data
export const useNotes = () => {
  return useContext(NoteContext);
};
