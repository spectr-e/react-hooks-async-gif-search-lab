import React, { useState } from "react"

function GifSearch({ fetchData }) {
  const [searchTerm, setSearchTerm] = useState("")

  function handleInputChange(event) {
    setSearchTerm(() => event.target.value)
  }
  function handleFormSubmit(event) {
    event.preventDefault()
    fetchData(searchTerm)
  }

  return (
    <div>
      <h2>Gif Search</h2>
      <form onSubmit={handleFormSubmit}>
        <label for="search">Enter Search Term</label>
        <br></br>
        <input type="text" name="search" onChange={handleInputChange} />
        <br></br>
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default GifSearch
