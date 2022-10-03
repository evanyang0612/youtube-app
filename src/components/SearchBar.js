import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
    // TODO : Make sure we call callback from parent component
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Search for a video</label>
          <input
            type="text"
            value={term}
            onChange={onInputChange}
            // onChange={e=>this.setState({term:e.target.value})}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
