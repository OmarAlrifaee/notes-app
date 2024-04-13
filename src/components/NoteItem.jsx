import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
  return (
    <li>
      <Link to={`/edit-note/${note.id}`}>
        <h3>
          {note.title.length > 40
            ? `${note.title.slice(0, 40)}...`
            : note.title}
        </h3>
        <p>
          {note.date.day}/{note.date.month}/{note.date.year}
        </p>
      </Link>
    </li>
  );
};

export default NoteItem;
