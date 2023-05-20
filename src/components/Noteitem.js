import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const { note, updateNote } = props;

  const notescontext = useContext(noteContext);
  const { deleteNote } = notescontext;

  return (
    <div className="col-md-6 ">
      <div className="card border-success mb-3 ">
        <div className="card-body ">
          <div className="card-header bg-transparent border-success ">
            <h3 className="d-inline">{note.title}</h3>
            <div className="d-inline" style={{ float: "right" }}>
              <i
                className="fa-solid fa-pen-to-square fa-lg "
                onClick={() => {
                  updateNote(note);
                }}
              ></i>
              <i
                className="fa-solid fa-trash fa-lg  mx-3"
                onClick={() => {
                  deleteNote(note._id);
                }}
              ></i>
            </div>
          </div>
          <p className="card-text my-2">
            {note.description}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            debitis repudiandae. Odit tenetur similique ipsam rerum officia
            vitae dolores sequi pariatur voluptatibus laboriosam modi libero
            facere blanditiis repudiandae accusamus cupiditate, necessitatibus
            exercitationem error sed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
