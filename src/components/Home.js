import React from "react";
import Notes from "./Notes";
import Addnote from "./Addnote";

export default function Home() {
  return (
    <div className="container my-5">
      <div style={{ marginTop: "70px", textAlign: "left" }}>
        <h1>Enter your notes here :- </h1>
      </div>
      <Addnote toggleAlert={toggleAlert} />
      <div style={{ marginTop: "50px", textAlign: "left" }}>
        <h1>Your notes are here :- </h1>
        <Notes toggleAlert={toggleAlert} />
      </div>
    </div>
  );
}
