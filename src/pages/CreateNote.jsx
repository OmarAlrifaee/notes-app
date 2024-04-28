import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import EmptyInputPopup from "../components/EmptyInputPopup";
import "../styles/pages-style/create-note.scss";
const CreateNote = ({ setData, data }) => {
  const [value, setValue] = useState({ title: "", details: "" }),
    navigate = useNavigate(),
    [popup, setPopup] = useState(false);
  // functions
  const hundleSave = () => {
    if (value.title && value.details) {
      // hide the popup
      setPopup(false);
      const nowDate = new Date();
      const newNote = {
        title: value.title,
        details: value.details,
        id: new Date().getTime(),
        date: {
          day: nowDate.getDate(),
          month: nowDate.getMonth() + 1,
          year: nowDate.getFullYear(),
        },
      };
      // set the new data
      setData([...data, newNote]);
      // navigate to the home page
      navigate("/", { replace: true });
    } else setPopup(true);
  };
  return (
    <section id="create-note-page">
      {popup && <EmptyInputPopup />}
      <header>
        <Link to={"/"}>
          <IoIosArrowBack />
        </Link>
        <button onClick={hundleSave}>Save</button>
      </header>
      <form>
        <input
          type="text"
          placeholder="Title"
          autoFocus
          value={value.title}
          onChange={(e) => setValue({ ...value, title: e.target.value })}
        />
        <textarea
          placeholder="Note Details..."
          value={value.details}
          onChange={(e) => setValue({ ...value, details: e.target.value })}
        ></textarea>
      </form>
    </section>
  );
};

export default CreateNote;
