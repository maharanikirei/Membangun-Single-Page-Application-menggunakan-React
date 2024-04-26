import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import NotesList from "../components/NotesList";
import { getActiveNotes } from "../utils/local-data";
import { useSearchParams } from "react-router-dom";
import ActionPageHome from "../components/ActionPageHome";
import PropTypes from "prop-types";

function PageHomeWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get("keyword") || "");

  const handleKeywordChange = (newKeyword) => {
    setKeyword(newKeyword);
    setSearchParams({ keyword: newKeyword });
  };

  return (
    <PageHome defaultKeyword={keyword} keywordChange={handleKeywordChange} />
  );
}

function PageHome({ defaultKeyword, keywordChange }) {
  const [notes] = useState(getActiveNotes());
  const [keyword, setKeyword] = useState(defaultKeyword);

  const handleKeywordChange = (newKeyword) => {
    setKeyword(newKeyword);
    keywordChange(newKeyword);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const activeNotes = filteredNotes.filter((note) => !note.archived);

  return (
    <>
      <section className="PageHome">
        <h2>Catatan Aktif</h2>
        <SearchBar keyword={keyword} keywordChange={handleKeywordChange} />
        <NotesList notes={activeNotes} />
        <ActionPageHome />
      </section>
    </>
  );
}

PageHome.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default PageHomeWrapper;
