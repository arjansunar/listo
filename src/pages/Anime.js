import React from 'react'
import ImagesContainer from '../components/ImagesContainer';
import { useSelector } from "react-redux"

function Anime({ match }) {
    const { mal_id } = match.params;
    const searchResults = useSelector(state => state.Search.data)
    const [animeDetails] = searchResults.filter(anime => anime.mal_id === parseInt(mal_id))
    console.log(animeDetails)
    console.log(typeof mal_id, "type")
    return (
        <div>
            single anime info of {animeDetails.title}
            <ImagesContainer title={animeDetails.title} imageUrl={animeDetails.image_url} />
        </div>
    )
}

export default Anime
