import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";

export default function About() {
  const naam = useContext(noteContext);

  useEffect(() => {
    naam.update();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="my-5">
      <h1>hello</h1>
      <h2>{naam.state.name}</h2>
      <h3>{naam.state.age}</h3>
    </div>
  );
}
