import { useContext } from 'react'
import { SearchContext } from "../context/SearchContext"

function SearchBar() {
    const {term, handleSearch} = useContext(SearchContext)

    return(
        <form >
            <input ref={term} type="text" placeholder="Search here"/>
            <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>
            <button onClick={(e) => term.current.value=""}>Clear</button>
        </form>
    )
}

export default SearchBar