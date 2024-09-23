import "./App.css";
import AddNotes from "./components/AddNotes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="p-5">
      <Toaster />
      <AddNotes />
    </div>
  );
}

export default App;
