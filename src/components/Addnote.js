import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const Addnote = () => {
  const notescontext = useContext(noteContext);
  const { addNote } = notescontext;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const notesubmition = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="container my-3  d-inline " style={{ textAlign: "left" }}>
        <div className="mb-3 ">
          <label htmlFor="yitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="The Title"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="3"
            onChange={onChange}
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-dark"
            style={{ textAlign: "left" }}
            onClick={notesubmition}
          >
            Add note
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addnote;
