import React from 'react'

const Search = (props) => {
  const handleChange = props.handleChange
  const inputValue = props.inputValue

  return (
    <form className="form-group" style={{marginTop: '20px'}}>
      <input
        onChange={handleChange}
        value={inputValue}
        className="form-control"
        placeholder="Search Potions"
      />
      <label htmlFor="search">Search</label>
    </form>
  )
}

export default Search
