import React, { useState, useEffect } from "react";
import NoteDetail from "../components/NoteDetail";
import PropTypes from "prop-types";
import {
  deleteNote,
  archiveNote,
  unarchiveNote,
  getNote,
} from "../utils/local-data";
import { useParams, useNavigate } from "react-router-dom";
import NotFound404Page from "./NotFound404Page";

function PageDetailNotesWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  return <PageDetailNotes navigate={navigate} id={id} />;
}

function PageDetailNotes({ id, navigate }) {
  const [notes, setNotes] = useState(getNote(id));

  useEffect(() => {
    setNotes(getNote(id));
  }, [id]);

  const onDeleteNotesHandler = (id) => {
    deleteNote(id);
    navigate("/");
  };

  const onArchiveNotesHandler = (id) => {
    archiveNote(id);
    navigate("/");
  };

  const onUnarchiveNotesHandler = (id) => {
    unarchiveNote(id);
    navigate("/archives");
  };

  if (notes === "") {
    return <p>Catatan tidak ditemukan</p>;
  }

  if (notes === null) {
    return <NotFound404Page />;
  }

  return (
    <>
      <NoteDetail
        onDelete={onDeleteNotesHandler}
        onArchive={onArchiveNotesHandler}
        onUnarchive={onUnarchiveNotesHandler}
        {...notes}
      />
    </>
  );
}

PageDetailNotes.propTypes = {
  id: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default PageDetailNotesWrapper;
