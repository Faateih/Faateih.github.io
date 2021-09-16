import React from 'react'

function Description(props) {
    return (
        <div className='description'>
            <h1 className='description__serv'>{props.description}</h1>
        </div>
    )
}

export default Description;
