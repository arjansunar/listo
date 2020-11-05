import React from 'react'
import { useSelector } from "react-redux"
import ImageContainer from "../../components/ImagesContainer"
import "./searchResults.css"
function SearchResults() {
    const searchResults = useSelector(state => state.Search)
    const data = searchResults.data
    console.log(searchResults)
    return (
        <div className="SearchContainer">

            {   (data) ?

                searchResults.data.map(result => {
                    return (
                        <>
                            <ImageContainer key={result.mal_id} imageUrl={result.image_url} title={result.title} />
                        </>
                    )
                }) : null
            }
        </div>
    )
}

export default SearchResults
