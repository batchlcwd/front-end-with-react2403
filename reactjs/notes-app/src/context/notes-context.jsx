import { createContext, useContext, useState } from "react";

// 1.create context
// Context: A way to pass data through the component tree without having to pass props manually at every level.
const NoteContext = createContext();

//2. Provider - normal component that provides the value to consumer .

export const NoteProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "This is first dummy app",
      content: "This is example of context api",
      statusId: 1,
      date: "today",
    },
    {
      id: 2,
      title: "Have to learn java",
      content: "Java is very beautiful language.",
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
        isAuthenticated,
        setIsAuthenticated,
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
