import { Route, Routes } from "react-router";
import Notes from "./pages/Notes";
import EditNote from "./pages/EditNote";
import CreateNote from "./pages/CreateNote";
import { useEffect, useState } from "react";

function App() {
  // making the main state for the notes data

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  // when ever the data update the useEffect will save the data in localstorage and the initdata will be the localstorage data or an []
  // save the data in localstorag
  useEffect(() => localStorage.setItem("notes", JSON.stringify(data)), [data]);
  return (
    <Routes>
      <Route
        path="/"
        element={<Notes data={data} />}
      />
      <Route
        path="/create-note"
        element={
          <CreateNote
            setData={setData}
            data={data}
          />
        }
      />
      <Route
        path="/edit-note/:id"
        element={
          <EditNote
            data={data}
            setData={setData}
          />
        }
      />
    </Routes>
  );
}
export default App;
