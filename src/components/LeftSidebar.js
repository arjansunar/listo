import React from 'react'
import "./styles/leftSidebar.css"
import SearchResults from "../features/Search/SearchResults"
function LeftSidebar() {
    return (
        <div className="app__leftSide">
            <SearchResults />
        </div>
    )
}

export default LeftSidebar
