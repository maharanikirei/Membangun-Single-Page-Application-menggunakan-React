import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ keyword, keywordChange }) => {
  const handleKeywordChange = (e) => {
    keywordChange(e.target.value);
  };

  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder="Search by title of your note"
        value={keyword}
        onChange={handleKeywordChange}
      />
    </section>
  );
};

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
