import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import NotesList from "../components/NotesList";
import PropTypes from "prop-types";
import { getArchivedNotes } from "../utils/local-data";
import { useSearchParams } from "react-router-dom";

function PageArchiveWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get("keyword") || "");

  const handleKeywordChange = (newKeyword) => {
    setKeyword(newKeyword);
    setSearchParams({ keyword: newKeyword });
  };

  return (
    <PageArchive defaultKeyword={keyword} keywordChange={handleKeywordChange} />
  );
}

function PageArchive({ defaultKeyword, keywordChange }) {
  const [keyword, setKeyword] = useState(defaultKeyword || "");
  const notes = getArchivedNotes();

  const handleKeywordChange = (newKeyword) => {
    setKeyword(newKeyword);
    keywordChange(newKeyword);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const archivedNotes = filteredNotes.filter((note) => note.archived === true);

  return (
    <section className="archives-page">
      <h2>Catatan Arsip </h2>
      <SearchBar keyword={keyword} keywordChange={handleKeywordChange} />
      <NotesList notes={archivedNotes} />
    </section>
  );
}

PageArchive.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default PageArchiveWrapper;
