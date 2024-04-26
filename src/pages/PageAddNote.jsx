import React from "react";
import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";

const PageAddNote = () => {
  const navigate = useNavigate();

  const handleAddNotes = (notes) => {
    addNote(notes);
    navigate("/");
  };

  return <NoteInput addNote={handleAddNotes} />;
};

export default PageAddNote;
