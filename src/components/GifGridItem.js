import React from 'react'

export const GifGridItem = ( {id, title, url} ) => {
    return (
        <div>
            <img className="card animate__fadeInDownBig"src={url} alt={ title } />
            <p>{ title }</p>
        </div>
    )
}
