import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {

  const host = "http://localhost:5000";

  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Get all note
<<<<<<< HEAD
  const getNotes = async () => {
=======
  const getNotes = async (title, description, tag) => {
>>>>>>> 420bb89f9d337f6fef7586f3a0725aa7b5f88a36
    const response = await fetch(`${host}/api/v1/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2MzZjZjJjMjI4N2ZlNDE5NTA2OTRlIn0sImlhdCI6MTY4NDI0MDEzOH0.bu-hADVKkuaWrRwTQi-88X4Ngx7-eOLIXdlgX8dSzNw",
      },
    });
    let json = await response.json();
<<<<<<< HEAD
    console.log("Getting a new note" + json);
=======
    console.log("Adding a new note" + json);
>>>>>>> 420bb89f9d337f6fef7586f3a0725aa7b5f88a36
    setNotes(json);
  };

  // Add a note
  const addNote = async (title, description, tag) => {
<<<<<<< HEAD
    // API Call
=======
>>>>>>> 420bb89f9d337f6fef7586f3a0725aa7b5f88a36
    const response = await fetch(`${host}/api/v1/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2MzZjZjJjMjI4N2ZlNDE5NTA2OTRlIn0sImlhdCI6MTY4NDI0MDEzOH0.bu-hADVKkuaWrRwTQi-88X4Ngx7-eOLIXdlgX8dSzNw",
      },
      body: JSON.stringify({ title, description, tag }),
    });
<<<<<<< HEAD

    const json = await response.json();
    console.log("Adding a new note" + json);

    // Create a new note object from the response
    const note = {
      _id: json._id,
      user: json.user,
      title: json.title,
      description: json.description,
      tag: json.tag,
      date: json.date,
      __v: json.__v,
=======
    console.log("Adding a new note");
    const note = {
      _id: "61322f119553781a8ca8d0e08",
      user: "6131dc5e3e4037cd4734a0664",
      title: title,
      description: description,
      tag: tag,
      date: "2021-09-03T14:20:09.668Z",
      __v: 0,
>>>>>>> 420bb89f9d337f6fef7586f3a0725aa7b5f88a36
    };
    setNotes(notes.concat(note));
  };

<<<<<<< HEAD
    // Update the notes state by adding the new note to the existing notes array
    setNotes([...notes, note]);
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
    const json = response.json();
    console.log(json);
  };

  // Delete a note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/v1/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2MzZjZjJjMjI4N2ZlNDE5NTA2OTRlIn0sImlhdCI6MTY4NDI0MDEzOH0.bu-hADVKkuaWrRwTQi-88X4Ngx7-eOLIXdlgX8dSzNw",
      },
    });
    const json = response.json();
    console.log(json);
    // Update the notes state by filtering out the deleted note
    const updatedNotes = notes.filter((note) => note._id !== id);
    setNotes(updatedNotes);
=======
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
>>>>>>> 420bb89f9d337f6fef7586f3a0725aa7b5f88a36
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
