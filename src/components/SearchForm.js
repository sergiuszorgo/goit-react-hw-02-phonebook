import React from "react";
import propTypes from "prop-types";

const SearchForm = ({ filter, inputForm }) => {
  return (
    <label htmlFor="">
      Find contact by name{" "}
      <input type="text" name="filter" value={filter} onChange={inputForm} />
    </label>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  filter: propTypes.string.isRequired,
  inputForm: propTypes.func.isRequired,
};
