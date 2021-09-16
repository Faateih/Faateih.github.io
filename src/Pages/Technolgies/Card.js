import React from 'react'

function Card(props) {
    return (
        <div className='cards'>
            <div className='cards__header'>
            <img src={props.image} alt='language icon' className='cards__image'/>
            </div>
                <h1 className='cards__heading'>{props.heading}</h1>
                <h3 className='cards__niches'>{props.nichesdet}</h3>
                <div className='cards__btn'>
                <button className='cards__btn--1'>{props.btn}</button>
                <button className='cards__btn--2'>{props.btn2}</button>
                <button className='cards__btn--3'>{props.btn3}</button>
                </div>
        </div>
    )
}

export default Card;
