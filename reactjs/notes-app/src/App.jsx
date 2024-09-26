import "./App.css";
import AddNotes from "./components/AddNotes";
import { Toaster } from "react-hot-toast";
import ViewNotes from "./components/ViewNotes";
import { NoteProvider } from "./context/notes-context";

function App() {
  return (
    <div className="p-5">
      <Toaster />
      <NoteProvider>
        <ViewNotes />
        <AddNotes />
      </NoteProvider>
    </div>
  );
}

export default App;
