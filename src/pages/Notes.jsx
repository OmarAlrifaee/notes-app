import { IoMdSearch, IoIosAddCircle } from "react-icons/io";
import { FaCircleXmark } from "react-icons/fa6";

import { useState } from "react";
import { Link } from "react-router-dom";
import NoteItem from "../components/NoteItem";
import "../styles/pages-style/Notes.scss";
const Notes = ({ data }) => {
  const [searching, setSearching] = useState(false),
    [searchValue, setSearchValue] = useState("");
  return (
    <section id="notes-page">
      <header>
        <h2>Notes app</h2>
        <div className="inputs-container">
          {searching && (
            <input
              type="search"
              autoFocus
              placeholder="Search On Notes"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          )}
          <button
            onClick={() => setSearching((prevValue) => !prevValue)}
            style={{ color: searching ? "red" : "black" }}
          >
            {searching ? <FaCircleXmark /> : <IoMdSearch />}
          </button>
        </div>
      </header>
      <main className="notes-container">
        <ul className="notes-list">
          {data
            .filter(({ title }) => title.includes(searchValue))
            .map((note) => (
              <NoteItem note={note} key={note.id} />
            ))}
        </ul>
      </main>
      <Link to={"/create-note"} className="add-notes-link">
        <IoIosAddCircle />
      </Link>
    </section>
  );
};

export default Notes;
