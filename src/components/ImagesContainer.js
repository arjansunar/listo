import React from 'react'
import "./styles/imageContainer.css"
function ImagesContainer({ imageUrl, title }) {
    return (
        <div className="ImgWrapper">
            <img className="ImageContainer" src={imageUrl} />
            <p className="ImageTitle">{title}</p>
        </div>
    )
}

export default ImagesContainer
