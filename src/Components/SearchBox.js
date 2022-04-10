import React from 'react'

function SearchBox({ onSearchChange }) {

    return (
        <div className="pa2">
            <input className="pa4 ba bg-lightest-blue mb4" type="search" placeholder="search robots" onChange={onSearchChange} />
        </div>
    )
}

export default SearchBox