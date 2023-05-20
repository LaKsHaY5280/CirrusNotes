import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {

  const host = "http://localhost:5000";

  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Get all note
  const getNotes = async (title, description, tag) => {
    const response = await fetch(`${host}/api/v1/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2MzZjZjJjMjI4N2ZlNDE5NTA2OTRlIn0sImlhdCI6MTY4NDI0MDEzOH0.bu-hADVKkuaWrRwTQi-88X4Ngx7-eOLIXdlgX8dSzNw",
      },
    });
    let json = await response.json();
    console.log("Adding a new note" + json);
    setNotes(json);
  };

  // Add a note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/v1/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2MzZjZjJjMjI4N2ZlNDE5NTA2OTRlIn0sImlhdCI6MTY4NDI0MDEzOH0.bu-hADVKkuaWrRwTQi-88X4Ngx7-eOLIXdlgX8dSzNw",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    console.log("Adding a new note");
    const note = {
      _id: "61322f119553781a8ca8d0e08",
      user: "6131dc5e3e4037cd4734a0664",
      title: title,
      description: description,
      tag: tag,
      date: "2021-09-03T14:20:09.668Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //Edit a note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/v1/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2MzZjZjJjMjI4N2ZlNDE5NTA2OTRlIn0sImlhdCI6MTY4NDI0MDEzOH0.bu-hADVKkuaWrRwTQi-88X4Ngx7-eOLIXdlgX8dSzNw",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  // Delete a note
  const deleteNote = (id) => {
    console.log("Delete" + id);
    const updatednote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(updatednote);
  };

  return (
    <noteContext.Provider
      value={{ notes, addNote, editNote, deleteNote, getNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
