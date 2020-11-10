import React from 'react'
import "./styles/leftSidebar.css"
import SearchResults from "../features/Search/SearchResults"
import { useSelector } from "react-redux"
function LeftSidebar() {
    const showSearchResults = useSelector(state => state.Search.showSearchResults)
    console.log(showSearchResults)
    return (
        <div className="app__leftSide">
            { showSearchResults ?
                <SearchResults />
                :
                null
            }
        </div>
    )
}

export default LeftSidebar
