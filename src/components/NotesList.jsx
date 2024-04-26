import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

const EmptyNotesList = () => (
  <section className="notes-list-empty">
    <p className="notes-list__empty">Tidak Ada Catatan</p>
  </section>
);

const NotesList = ({ notes }) => {
  if (!notes.length) {
    return <EmptyNotesList />;
  }

  return (
    <section className="notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id} id={note.id} {...note} />
      ))}
    </section>
  );
};

NotesList.propTypes = {
  notes: PropTypes.array,
};

export default NotesList;
