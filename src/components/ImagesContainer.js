import React from 'react'
import "./styles/imageContainer.css"
function ImagesContainer({ alt, imageUrl, title }) {
    return (
        <div className="ImgWrapper" >
            <img alt={alt} className="ImageContainer" src={imageUrl} />
            <p className="ImageTitle">{title}</p>
        </div>
    )
}

export default ImagesContainer
