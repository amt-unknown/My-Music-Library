import {useState} from 'react'

function SearchBar(props) {
    let [searchTerm, setSearchTerm] = useState('')

    return(
        <form>
            <input type="text" placeholder="Search here" />
            <input type="submit"/>
        </form>
    )
}

export default SearchBar