import React from 'react'
import "./styles/imageContainer.css"
function ImagesContainer({ imageUrl, title }) {
    return (
        <div className="ImgWrapper" >
            <img alt={title} className="ImageContainer" src={imageUrl} />
            <p className="ImageTitle">{title}</p>
        </div>
    )
}

export default ImagesContainer
