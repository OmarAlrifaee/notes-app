import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import EmptyInputPopup from "../components/EmptyInputPopup";
const EditNote = ({ data, setData }) => {
  const [value, setValue] = useState({ title: "", details: "" }), // to control the inputs
    [popup, setPopup] = useState(false),
    { id } = useParams(), // get the current url id
    navigate = useNavigate();

  useEffect(() => {
    // get the current note by using the find method to find the note that its id ==  params id
    const currentNote = data.find((note) => note.id == id);
    setValue({ title: currentNote.title, details: currentNote.details });
  }, [data, id]);

  // functions
  const hundleSave = () => {
    if (value.title && value.details) {
      // hide the popup
      setPopup(false);
      const newData = [...data];
      // update the new note in notes array
      newData.forEach((ele) => {
        if (ele.id == id) {
          ele.title = value.title;
          ele.details = value.details;
        }
      });
      // set the new data array
      setData(newData);
      // navigate to the home page after save
      navigate("/", { replace: true });
    } else setPopup(true);
  };
  const hundleDelete = () => {
    // to let the user confirm before delete the note
    const confirming = window.confirm(
      "are you sure you want to delete the note"
    );
    if (confirming) {
      const newData = [...data];
      // newData.filter((note) => note.id != id);
      newData.forEach((note, index) => {
        if (note.id == id) newData.splice(index, 1);
      });
      // set the new data array
      setData(newData);
      // navigate to the home page after delete
      navigate("/", { replace: true });
    }
  };
  return (
    <section id="edit-note-page">
      {popup && <EmptyInputPopup />}
      <header>
        <Link to={"/"}>
          <IoIosArrowBack />
        </Link>
        <button
          className="save-btn"
          onClick={hundleSave}
        >
          Save
        </button>
        <button
          className="delete-btn"
          onClick={hundleDelete}
        >
          <MdDelete />
        </button>
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

export default EditNote;
