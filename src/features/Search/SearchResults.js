import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import ImageContainer from "../../components/ImagesContainer"
import "./searchResults.css"
import { Link } from "react-router-dom"
import { hideSearchResults } from './searchSlice'

function SearchResults() {
    const searchResults = useSelector(state => state.Search)
    const data = searchResults.data
    const dispatch = useDispatch()
    return (
        <div className="SearchContainer">

            {   (data) ?

                data.map((result) => {
                    return (
                        <div key={result.mal_id}>
                            <Link to="/anime" style={{ textDecoration: "none" }} onClick={() => dispatch(hideSearchResults())}>
                                <ImageContainer alt={result.title} imageUrl={result.image_url} title={result.title} />
                            </Link>

                        </div>
                    )
                }) : null
            }
        </div>
    )
}

export default SearchResults
