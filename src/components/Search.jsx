import React from 'react'

const Search = ({ searchTerm, setSearchTerm , onSearch, handleKeyDown }) => {
  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="search" />

        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className='text-white border-fuchsia-700 border-2 px-2' onClick={() => onSearch()}>Search</button>
      </div>
    </div>
  )
}
export default Search