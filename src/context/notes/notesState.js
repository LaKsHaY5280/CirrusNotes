import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {

    const notesInitial = [
      {
        _id: "6464ede7af968dda56d34ae7",
        user: "64636cf2c2287fe41950694e",
        title: "this is my title",
        description: "this is my description",
        tag: "my tagu",
        date: "2023-05-17T15:08:23.596Z",
        __v: 0,
      },
      {
        _id: "646872fd7654d54ab51f9f7e",
        user: "64636cf2c2287fe41950694e",
        title: "this is my title",
        description: "this is my description",
        tag: "my tagu",
        date: "2023-05-20T07:13:01.039Z",
        __v: 0,
      },
      {
        _id: "646872fd7654d54ab51f9f80",
        user: "64636cf2c2287fe41950694e",
        title: "this is my title",
        description: "this is my description",
        tag: "my tagu",
        date: "2023-05-20T07:13:01.666Z",
        __v: 0,
      },
      {
        _id: "646872fe7654d54ab51f9f82",
        user: "64636cf2c2287fe41950694e",
        title: "this is my title",
        description: "this is my description",
        tag: "my tagu",
        date: "2023-05-20T07:13:02.234Z",
        __v: 0,
      },
      {
        _id: "646872ff7654d54ab51f9f84",
        user: "64636cf2c2287fe41950694e",
        title: "this is my title",
        description: "this is my description",
        tag: "my tagu",
        date: "2023-05-20T07:13:03.034Z",
        __v: 0,
      },
      {
        _id: "646872ff7654d54ab51f9f86",
        user: "64636cf2c2287fe41950694e",
        title: "this is my title",
        description: "this is my description",
        tag: "my tagu",
        date: "2023-05-20T07:13:03.904Z",
        __v: 0,
      },
    ];
    const [notes, setNotes] = useState(notesInitial);

    // Add a note
    const addNote = (title, description, tag) => {
      // TODO: API Call
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
    const editNote = () => {};

    // Delete a note
    const deleteNote = () => {};

    return (
      <noteContext.Provider value={{ notes, addNote, editNote, deleteNote }}>
        {props.children}
      </noteContext.Provider>
    );
};

export default NoteState;
